# Documentation Technique - COMP_IDE // Comparateur de Langages Pédagogique

## Vue d'ensemble

COMP_IDE // est une application web monopage (SPA) légère comparative de langages de programmation. Elle permet d'étudier concept par concept les différences entre C++ (langage pivot de référence) et une sélection de langages (C, C#, Python, Java, JavaScript, PHP, TypeScript, VB.NET, VBA) à travers une interface IDE moderne.

## Architecture générale

```
Bootstrap/
├── index.html              # Point d'entrée HTML unique
├── api.php                 # API backend lisant et fusionnant les JSON
├── styles.css              # Styles CSS avec thèmes sombre/clair
├── data/
│   ├── metadata.json       # Métadonnées des concepts pour l'arbre
│   ├── cpp.json            # Exemples C++ (référence)
│   ├── c.json              # Exemples C
│   ├── csharp.json         # Exemples C#
│   ├── java.json           # Exemples Java
│   ├── javascript.json     # Exemples JavaScript
│   ├── php.json            # Exemples PHP
│   ├── python.json         # Exemples Python
│   ├── typescript.json     # Exemples TypeScript
│   ├── vb.json             # Exemples VB.NET
│   └── vba.json            # Exemples VBA
├── dataOld/                # (Archive) Anciens fichiers de données JS 
├── docs/
│   ├── architecture.md     # Ce fichier
│   ├── app-loaddata.md     # Explication de App.loadData()
│   ├── sidebar-loading.md  # Chargement du sidebar
│   ├── code-loading.md     # Chargement des codes
│   └── doc-lang-loading.md # Chargement des documentations par langage
├── js/
│   ├── app.js             # Orchestrateur principal
│   ├── compare.js         # Moteur de comparaison (code + doc par langage)
│   ├── search.js          # Moteur de recherche/filtrage
│   └── ui.js              # Gestion interface utilisateur
└── libs/
    ├── prism/             # Coloration syntaxique PrismJS
    └── libs.js            # (vide)
```

## Structure des données

### La réponse de `api.php` (`CompIde.data`)

Le fichier `api.php` construit à la volée le dataset maître sous forme de tableau d'objets. Chaque concept possède :

- `id` : Identifiant unique
- `level` : Niveau de difficulté (1-8)
- `chapter` : Chapitre pédagogique
- `category` : Catégorie thématique
- `name` : Nom affiché
- `description` : Description textuelle
- `related_concepts` : Tableau d'IDs de concepts liés
- `languages` : Objet contenant les exemples par langage (cpp, csharp, python...)

### Fichiers JSON par langage (`cpp.json`, `csharp.json`, `python.json`, ...)

Base de données locale. Chaque fichier est un objet JSON pur indexé par `id` de concept. Chaque entrée contient :

- `minimal` : Version courte du code
- `complete` : Version complète du code
- `best_practices` : Conseils
- `pitfalls` : Erreurs courantes
- `notes` : Remarques contextuelles

### metadata.json

Métadonnées légères pour l'Arbre des concepts. Fichier JSON pur contenant : id, chapter, category, name, description, related_concepts.

## Modules JavaScript

### App (js/app.js)

**Rôle** : Orchestrateur principal

**Responsabilités** :

- Chargement asynchrone des données via `fetch('api.php')`.
- Initialisation séquentielle : UI → Recherche → Attente Données → Sélection concept.
- Gestion du concept actif via `currentConceptId`.

**Flux d'initialisation** :

```javascript
DOMContentLoaded → CompIde.App.init()
  → CompIde.UI.init()
  → Setup Search Listener
  → await this.loadData() (fetch api.php)
  → selectConcept(premier_id)
```

### Compare (js/compare.js)

**Rôle** : Moteur de rendu comparatif

**Responsabilités** :

- `update()` : Rendu principal (titres, catégories, 3 colonnes de code, documentation par langage)
- `fillCode()` : Injection du code dans les blocs `<pre><code>` selon le scope (minimal/complet)
- `fillDocumentation()` : Rendu de la documentation (description + alert-box notes/bonnes pratiques/pièges + concepts liés) pour chaque langage sélectionné
- `copy()` : Copie du code dans le presse-papier avec feedback visuel

**Dépendances** : Utilise `CompIde.UI.codeScope` pour déterminer quelle version afficher.

**Nouveautés** :
- La documentation n'est plus dans un panneau droit unique : elle est affichée **sous chaque colonne** de code, **propre au langage de la colonne**.
- Méthode utilitaire `getLangLabel()` pour les libellés (C++, C#, Python...).

### Search (js/search.js)

**Rôle** : Filtrage et arbre des concepts

**Responsabilités** :

- `renderTree()` : Regénération dynamique de l'arbre par chapitre
- Filtrage temps réel sur nom/description via input utilisateur
- Mise en évidence du concept actif

**Algorithme** :

1. Filtrer `CompIde.data` selon requête `toLowerCase()`
2. Grouper par chapitre (`chapters[chapter].push(concept)`)
3. Construire DOM dynamiquement

### UI (js/ui.js)

**Rôle** : Gestion de l'interface utilisateur

**Responsabilités** :

- Gestion thème sombre/clair via toggle `light-mode` sur `<body>`
- Bascule dynamique des feuilles Prism (`prism-theme-light` / `prism-theme-dark`)
- Zoom de police code (10-24px) avec `applyZoom()`
- Gestion scope minimal/complet avec highlight visuel

## Stack technique

### Frontend

- HTML5 sémantique (header, aside, main)
- CSS natif avec variables CSS custom (`:root` et `body.light-mode`)
- JavaScript vanilla ES6 (async/await, arrow functions, template literals)
- Pas de framework ni de bundler

### Libs externes

- **PrismJS 1.30.0** : Coloration syntaxique
  - Thèmes inclus : prism (dark), prism-dark, prism-funky, prism-okaidia
  - Langages supportés : markup, clike, javascript, c, csharp, cpp, python, typescript, visual-basic, java, php

## Modèle de données unifié (`CompIde.data`)

Construit dynamiquement par `api.php` et renvoyé au client :

```javascript
CompIde.data = [{
  id: "base_hello_world",
  level: 1,
  chapter: "1. Bases du langage",
  category: "Structure globale",
  name: "Point d'entrée et Hello World",
  description: "...",
  related_concepts: ["base_variables_01", "func_syntax_01"],
  languages: {
    cpp: { minimal: "...", complete: "...", best_practices: "...", pitfalls: "...", notes: "..." },
    csharp: { minimal: "...", ... },
    python: { minimal: "...", ... },
    c: { minimal: "...", ... },
    java: { minimal: "...", ... },
    javascript: { minimal: "...", ... },
    php: { minimal: "...", ... },
    typescript: { minimal: "...", ... },
    vb: { minimal: "...", ... },
    vba: { minimal: "...", ... }
  }
}]
```

## Changements récents

- **Suppression du panneau doc-panel (sidebar droite)** : la documentation est maintenant intégrée sous chaque colonne de code.
- **Renommage de code-cpp → code-lang-1** : pour uniformiser les identifiants.
- **Ajout de 10 langages** : C, C++, C#, Python, Java, JavaScript, PHP, TypeScript, VB.NET, VBA.
- **Documentation par langage** : chaque colonne affiche les notes, bonnes pratiques et pièges spécifiques au langage affiché.

## Points d'extension

### Ajout d'un concept

1. Ajouter l'entrée dans `data/metadata.json`
2. Ajouter les clés dans les fichiers JSON des langages (`data/cpp.json`, etc.)
3. Respecter la structure `languages[langKey].minimal` / `.complete`

### Ajout d'un langage

1. Créer le fichier `data/nouveau.json` (structure indexée par id de concept)
2. L'ajouter dans le tableau `$languages` au début de `api.php`
3. Ajouter une option `<option value="nouveau">Nouveau</option>` dans les menus déroulants de `index.html`
4. Ajouter la grammaire Prism si nécessaire
5. Ajouter le label dans `getLangLabel()` dans `js/compare.js`

## Performance et optimisations

- Délégation de la fusion des données (calcul lourd) au serveur backend (PHP).
- Une seule requête HTTP `fetch` pour récupérer l'entièreté de la base de données préparée.
- Coloration Prism déclenchée uniquement lors des changements
- DOM minimalement manipulé (innerHTML ciblé)

## Conventions de code

- Préfixe `CompIde` pour l'espace de nom global
- Modules via objets littéraux (Pattern Module)
- Noms de fichiers en camelCase minuscule
- Variables CSS : `--var-name` avec préfixe `--bg-`, `--text-`, `--accent-`

## Accessibilité

- Structure HTML5 sémantique
- Labels sur inputs
- Contrastes conformes WCAG (thèmes testés)
- Navigation clavier possible (tabindex sur éléments interactifs)