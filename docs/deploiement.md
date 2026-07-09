# Plan de Déploiement - COMP_IDE //

Suite à la migration de l'application vers une architecture **Full-Stack JavaScript (Node.js)**, ce document détaille les étapes nécessaires pour mettre en ligne l'application.

## 1. Prérequis et Architecture

L'application repose sur le fichier `server.js` qui agit à la fois comme serveur de fichiers statiques (SPA) et comme API pour fusionner les fichiers JSON à la volée. 

**Conséquence directe :** Un hébergement 100% statique (ex: GitHub Pages, Netlify sans adaptateurs) ou un hébergement mutualisé PHP classique ne fonctionnera pas. **Un environnement Node.js est requis.**

### Ajustements déjà réalisés pour la production
1. **Création d'un `package.json`** : Standardise l'application pour les hébergeurs Cloud (permettant la détection automatique de l'environnement Node.js et l'exécution de `npm start`).
2. **Mise à jour de `server.js`** : Le port d'écoute est désormais dynamique via `const PORT = process.env.PORT || 3000;`. C'est une obligation en production, car les plateformes PaaS injectent leur propre port.

---

## 2. Option A : Déploiement sur un Cloud PaaS (Recommandé)

Cette méthode est la plus simple, la plus rapide, et inclut généralement un certificat SSL (HTTPS) automatisé. Des plateformes comme **Render.com**, **Railway.app** ou **Heroku** sont parfaites pour cela.

### Étapes (Exemple avec Render.com)

1. **Préparation** : Poussez votre code source (incluant `package.json` et `server.js`) sur un dépôt GitHub ou GitLab.
2. **Création du service** : Sur votre tableau de bord Render, créez un nouveau **Web Service**.
3. **Connexion au dépôt** : Liez votre dépôt GitHub/GitLab.
4. **Configuration du Build et de l'Exécution** :
   - L'hébergeur détectera nativement Node.js.
   - *Build Command* : Laissez vide ou mettez `npm install` (l'application n'a pas de dépendances externes, mais c'est une bonne pratique).
   - *Start Command* : `npm start` (qui exécutera `node server.js` grâce au `package.json`).
5. **Validation** : Cliquez sur "Deploy". La plateforme va allouer un port, lancer le serveur et exposer votre application via une URL sécurisée (HTTPS).

---

## 3. Option B : Déploiement sur un Serveur Privé Virtuel (VPS)

Si vous possédez un serveur dédié sous Linux (ex: DigitalOcean, OVH, Hetzner, AWS EC2), voici la procédure classique.

### Étapes

1. **Installation des prérequis** :
   Assurez-vous que `Node.js`, `Git` et `Nginx` (ou Apache) sont installés sur le serveur.
   ```bash
   sudo apt update
   sudo apt install nodejs npm git nginx
   ```

2. **Récupération du code** :
   Clonez votre projet dans le dossier web approprié (ex: `/var/www/comp-ide`).

3. **Lancement persistant avec PM2** :
   Pour éviter que le serveur Node.js ne s'arrête si le terminal est fermé, utilisez un gestionnaire de processus.
   ```bash
   sudo npm install -g pm2
   cd /var/www/comp-ide
   pm2 start server.js --name "comp-ide"
   pm2 startup
   pm2 save
   ```

4. **Configuration du Reverse Proxy (Nginx)** :
   Créez un bloc serveur Nginx (ex: `/etc/nginx/sites-available/comp-ide`) pour rediriger le trafic HTTP (port 80) vers le port local de Node.js (3000).
   ```nginx
   server {
       listen 80;
       server_name votre-domaine.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   Activez le site et redémarrez Nginx (`sudo systemctl restart nginx`).

5. **Sécurisation HTTPS (Certbot)** :
   Installez Let's Encrypt et générez votre certificat SSL :
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d votre-domaine.com
   ```

---

## 4. Critères de Validation post-déploiement

Une fois le déploiement terminé, effectuez ces vérifications de base :

- [ ] L'application se charge via une URL en `https://` (cadenas vert visible dans le navigateur).
- [ ] En ouvrant la console développeur (F12) > onglet **Network** (Réseau), l'appel à l'API `/api/data` renvoie un statut HTTP `200 OK`.
- [ ] L'arbre des concepts à gauche est bien peuplé (prouvant que Node.js parvient à lire et parser `metadata.json`).
- [ ] Le changement de langage dans les colonnes met bien à jour le code et la documentation.