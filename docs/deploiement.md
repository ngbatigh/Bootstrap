# Plan de Déploiement - COMP_IDE // (Architecture PHP)

Ce document détaille les étapes nécessaires pour mettre en ligne l'application depuis la branche `unified-base-json`, qui s'appuie sur une architecture hybride : **Frontend Vanilla JS** + **Backend PHP minimal** (`api.php`).

## 1. Prérequis et Architecture

L'application repose sur le fichier `api.php` pour fusionner et servir les fichiers JSON (afin d'éviter les problèmes de CORS associés à la lecture locale). 

**Conséquence directe :** Un hébergement 100% statique (ex: GitHub Pages) ne fonctionnera pas. **Un hébergement web supportant PHP (version 7.4 ou supérieure) est obligatoire.**

---

## 2. Option Recommandée : Hébergement Mutualisé (ex: o2switch, Hostinger, OVH)

C'est la méthode la plus simple et la plus économique pour ce type d'architecture.

### Étapes de déploiement

1. **Préparation des fichiers (Build Manuel)**
   Sélectionnez uniquement les fichiers et dossiers nécessaires pour la production. Vous n'avez pas besoin d'envoyer tout le dépôt :
   - `index.html`
   - `api.php`
   - `styles.css`
   - Dossiers : `js/`, `libs/`, `data/`
   - (Optionnel) : `.htaccess`
   *(Ignorez les dossiers `docs/`, `scriptsOld/`, `dataOld/` et `README.md`)*

2. **Optimisation du script `api.php` (Optionnel mais recommandé)**
   Dans `api.php`, désactivez les en-têtes qui empêchent la mise en cache (utiles uniquement en développement) :
   ```php
   // Remplacez ces lignes :
   // header('Cache-Control: no-cache, must-revalidate');
   // header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
   
   // Par :
   header('Cache-Control: public, max-age=3600');
   ```

3. **Sécurité et Performance (`.htaccess`)**
   Créez un fichier `.htaccess` à la racine pour sécuriser les données et accélérer le site via GZIP :
   ```apache
   Options -Indexes
   <IfModule mod_rewrite.c>
       RewriteEngine On
       # Force HTTPS
       RewriteCond %{HTTPS} off
       RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
       # Empêche l'accès brut aux JSON
       RewriteRule ^data/.*\.json$ - [F,L]
   </IfModule>
   <IfModule mod_deflate.c>
       AddOutputFilterByType DEFLATE application/json text/html text/css application/javascript
   </IfModule>
   ```

4. **Transfert FTP / SFTP**
   Utilisez un client comme FileZilla pour envoyer vos fichiers dans le répertoire racine de votre serveur (souvent nommé `public_html` ou `www`).

---

## 3. Critères de Validation post-déploiement

Une fois les fichiers uploadés sur votre hébergeur :

- [ ] Visitez votre site en `https://`. Le certificat SSL doit être actif.
- [ ] Dans la console développeur (F12) > onglet **Network** (Réseau), vérifiez que la requête vers `api.php` retourne un statut `200 OK` contenant le JSON complet.
- [ ] L'arbre des concepts à gauche s'affiche correctement.
- [ ] Le changement de langage met à jour le code (PrismJS) et les bulles de documentation de manière fluide.
