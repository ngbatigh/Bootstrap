# Archive : Ancienne base de données statique JavaScript

Ce dossier `dataOld` contient les fichiers originaux qui servaient de "base de données" pour la toute première version de COMP_IDE //.

## Contexte Pédagogique

À l'origine, l'application était conçue pour fonctionner de manière **100% statique et locale (hors ligne)**, sans nécessité d'un serveur web.

### Le Problème du CORS
Lorsqu'on ouvre un fichier HTML directement depuis son disque dur (`file:///C:/...`), les navigateurs web bloquent les requêtes `fetch()` ou `XMLHttpRequest` vers d'autres fichiers locaux (comme des `.json`) pour des raisons de sécurité (Politique Same-Origin / CORS).

### La Solution Statique Initiale
Pour contourner ce problème, les données n'étaient pas stockées dans du JSON pur, mais dans des fichiers **JavaScript** (ex: `cpp.js`). Chaque fichier assignait ses données à un objet global :
```javascript
window.CompIde.cppData = { ... };
```
Ces fichiers étaient tous inclus via des balises `<script>` dans le `<head>` de `index.html`. L'application lisait ces données de manière instantanée et **synchrone**.

## Pourquoi avoir changé d'architecture ?

Bien que fonctionnelle hors-ligne, cette approche posait des problèmes de maintenance :
1. **Fichiers JS au lieu de JSON** : Les données n'étaient pas formatées dans un standard d'échange de données (JSON).
2. **Couplage HTML/Data** : À chaque nouveau langage, il fallait ajouter une balise `<script>` dans `index.html`.

L'application a donc évolué vers une **Architecture Serveur-Client (API REST)** :
- Les données ont été migrées vers de vrais fichiers `.json` (dossier `data/`).
- Un serveur PHP a été introduit (`api.php`) pour lire et consolider ces JSON.
- L'application JavaScript (`js/app.js`) charge désormais ces données de manière asynchrone via `fetch('api.php')`.