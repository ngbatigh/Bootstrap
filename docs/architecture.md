# Documentation Technique - COMP_IDE // Comparateur de Langages Pédagogique (Branche base-json)

## Vue d'ensemble

COMP_IDE // est une application web monopage (SPA) légère comparative de langages de programmation. Elle permet d'étudier concept par concept les différences entre C++ (langage pivot), C# et Python à travers une interface IDE moderne.

## Architecture générale (Branche base-json)

```
Bootstrap/
├── index.html              # Point d'entrée HTML unique
├── styles.css              # Styles CSS avec thèmes sombre/clair
├── data/
│   ├── concepts.js         # Données complètes (source principale)
│   ├── metadata.json       # Métadonnées des concepts
│   ├── cpp.json           # Exemples C++
│   ├── csharp.json        # Exemples C#
│   └── python.json        # Exemples Python
├── js/
│   ├── app.js             # Orchestrateur principal (async/await + fetch)
│   ├── compare.js         # Moteur de comparaison
│   ├── search.js          # Moteur de recherche/filtrage
│   └── ui.js              # Gestion interface utilisateur
└── libs/
    ├── prism/             # Coloration syntaxique PrismJS
    └── libs.js            # (vide)
```

## Structure des données

### concepts.js

Contient le dataset maître sous forme de tableau d'objets. Chaque concept possède les champs : `id`, `level`, `chapter`, `category`, `name`, `description`, `mermaid_diagram`, `related_concepts`, `languages`.

### metadata.json + cpp.json, csharp.json, python.json

Version alternative "séparée" (JSON purs) des données. `metadata.json` contient les métadonnées pour l'arbre. Les fichiers `cpp.json`, `csharp.json`, `python.json` contiennent les exemples par concept.

## Module App (js/app.js)

### Rôle

Orchestrateur principal, chargement asynchrone des données JSON.

### Responsabilités

- `loadData()` : chargement parallèle via `Promise.all` + `fetch`
- Fusion dans `CompIde.data`
- `init()` : initialisation UI, recherche, chargement, sélection
- `selectConcept()` : changement de concept actif

### Flux d'initialisation

```javascript
DOMContentLoaded
  → CompIde.App.init()
    → UI.init()
    → Search listener
    → loadData() // fetch parallèle
    → selectConcept()
```

## Modules JS

### Compare

- `update()` : rendu titres, catégories, 3 colonnes, panneau doc
- `fillCode()` : injection du code selon scope minimal/complet
- `copy()` : copie presse-papier + feedback

### Search

- `renderTree()` : arbre par chapitre, filtrage temps réel

### UI

- Mode sombre/clair (toggle classe `light-mode`)
- Zoom police code
- Scope minimal/complet
- `updateDocumentation()` : panneau droite

## Stack

- HTML5, CSS3 (variables natives), JavaScript vanilla ES6+
- Pas de framework ni bundler
- PrismJS 1.30.0 (coloration syntaxique)

## Points d'extension

### Ajout concept

1. Ajouter clé dans `data/concepts.js` (source principale)
2. Ajouter métadonnée dans `data/metadata.json`
3. Ajouter exemples dans `data/cpp.json`, `data/csharp.json`, `data/python.json`

### Ajout langage

1. Ajouter colonne dans `index.html`
2. Ajouter données JSON
3. Étendre modules JS

## Performance

- Chargement parallèle des JSON
- Mise en cache navigateur
- DOM minimalement manipulé

## Conventions

- Espace de nom `CompIde`
- Pattern Module
- Fichiers data en `.js` (concepts) ou `.json`
