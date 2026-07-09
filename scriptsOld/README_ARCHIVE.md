# Archive : Anciens scripts de Build et Migration

Ce dossier contient des utilitaires de développement qui ont servi de transition entre l'ancienne architecture statique et la nouvelle architecture Client/Serveur (API PHP).

## Contenu

1. **`migrate_js_to_json.js`** / **`migrate_js_to_json.py`** / **`build.html`** :
   Ces scripts ont été utilisés pour **convertir** la base de données originelle (fichiers `*.js` situés maintenant dans `dataOld/`) vers leur format propre actuel en `JSON`. Ils prenaient l'objet JavaScript global défini dans chaque fichier et l'exportaient en texte JSON standard dans le dossier `data/`.

2. **`build.js`** :
   Cet utilitaire Node.js fut conçu comme solution intermédiaire. Le but était de permettre aux développeurs d'utiliser des fichiers `.json` purs, tout en fusionnant (build) ces fichiers en un seul fichier `data/concepts.js` intégrable statiquement par `<script src="data/concepts.js">`.

## Pourquoi ces scripts sont-ils obsolètes ?

L'application a adopté une **véritable architecture serveur** en utilisant PHP :
- Le fichier `api.php` lit et fusionne dynamiquement les fichiers `.json` à chaque requête du navigateur.
- Plus aucune étape de "build" ou de "compilation de données" n'est requise de la part du développeur. Il modifie un fichier `.json`, il rafraîchit la page, et le PHP se charge de tout.

Ces scripts sont conservés ici uniquement pour démontrer l'évolution et l'historique de l'architecture du projet.