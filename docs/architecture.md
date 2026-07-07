# Documentation Technique - COMP_IDE // Comparateur de Langages Pédagogique (Branche base-js)

## Vue d'ensemble

COMP_IDE // est une application web monopage (SPA) légère comparative de langages de programmation. Elle permet d'étudier concept par concept les différences entre C++ (langage pivot), C# et Python à travers une interface IDE moderne.

## Architecture générale (Branche base-js)

```
Bootstrap/
├── index.html              # Point d'entrée HTML unique
├── styles.css              # Styles CSS avec thèmes sombre/clair
├── data/
│   ├── metadata.js         # Métadonnées des concepts (tableau global)
│   ├── cpp.js             # Données C++ (objet global CompIde.cppData)
│   ├── csharp.js          # Données C# (objet global CompIde.csharpData)
│   └── python.js          # Données Python (objet global CompIde.pythonData)
├── js/
│   ├── app.js             # Orchestrateur principal
│   ├── compare.js         # Moteur de comparaison
│   ├── search.js          # Moteur de recherche/filtrage
│   └── ui.js              # Gestion interface utilisateur
└── libs/
    ├── prism/             # Coloration syntaxique PrismJS
    └── libs.js            # (vide)
```

## Structure des données (Approche dispersée en fichiers .js)

### metadata.js

Contient le tableau `CompIde.metadata` listant tous les concepts avec leurs métadonnées :

- `id` : Identifiant unique
- `level` : Niveau de difficulté (1-8)
- `chapter` : Chapitre pédagogique
- `category` : Catégorie thématique
- `name` : Nom affiché
- `description` : Description textuelle
- `related_concepts` : Tableau d'IDs de concepts liés

### cpp.js, csharp.js, python.js

Chaque fichier expose un objet global dédié :

- `CompIde.cppData`
- `CompIde.csharpData`
- `CompIde.pythonData`

Structure d'une entrée :

```javascript
"concept_id": {
  "minimal": "Version courte...",
  "complete": "Version complète avec contexte...",
  "best_practices": "Conseils...",
  "pitfalls": "Erreurs courantes...",
  "notes": "Remarques contextuelles..."
}
```

## Modules JavaScript

### App (js/app.js)

**Rôle** : Orchestrateur principal (sans fetch asynchrone)

**Responsabilités** :

- `buildDatabase()` : Fusion synchrones des objets globaux en `CompIde.data`
- `init()` : Initialisation UI, listener recherche, construction BDD, sélection concept
- `selectConcept()` : Gestion du concept actif

**Flux d'initialisation** :

```javascript
// Les scripts data/*.js sont chargés avant js/app.js
// Ils peuplent window.CompIde.{metadata,cppData,csharpData,pythonData}

DOMContentLoaded → CompIde.App.init()
  → CompIde.UI.init()
  → Search listener
  → buildDatabase() // Fusion synchrone
  → selectConcept(premier)
```

**Construction de la base unifiée** :

```javascript
CompIde.data = CompIde.metadata.map((concept) => ({
  ...concept,
  languages: {
    cpp: CompIde.cppData[concept.id] || {},
    csharp: CompIde.csharpData[concept.id] || {},
    python: CompIde.pythonData[concept.id] || {},
  },
}));
```

### Compare (js/compare.js)

**Rôle** : Moteur de rendu comparatif

**Responsabilités** :

- `update()` : Rendu principal (titres, catégories, 3 colonnes de code, panneau doc)
- `fillCode()` : Injection du code dans les blocs `<pre><code>` selon le scope (minimal/complet)
- `copy()` : Copie du code dans le presse-papier avec feedback visuel

**Dépendances** : Lit `CompIde.UI.codeScope` pour choisir la version à afficher.

### Search (js/search.js)

**Rôle** : Filtrage et arbre des concepts

**Responsabilités** :

- `renderTree()` : Regénération dynamique de l'arbre par chapitre
- Filtrage temps réel sur nom/description via input utilisateur
- Mise en évidence du concept actif (gras + couleur accent)

### UI (js/ui.js)

**Rôle** : Gestion de l'interface utilisateur

**Responsabilités** :

- Gestion thème sombre/clair via toggle `light-mode` sur `<body>`
- Bascule dynamique des feuilles Prism (`prism-theme-light` / `prism-theme-dark`)
- Zoom de police code (10-24px) via `applyZoom()`
- Gestion scope minimal/complet avec highlight visuel
- `updateDocumentation()` : Rendu panneau droite avec alertes

## Stack technique

### Frontend (Vanilla)

- HTML5 sémantique (header, aside, main)
- CSS natif avec variables CSS custom (`:root` et `body.light-mode`)
- JavaScript ES6+ (arrow functions, template literals, destructuring)
- **Pas d'async/await** : Chargement synchrone des données via `<script>` tags

### Bibliothèques

- **PrismJS 1.30.0** : Coloration syntaxique
  - Thèmes inclus : prism (dark), prism-dark, prism-funky, prism-okaidia
  - Langages : C, C++, C#, Python, JavaScript, TypeScript, Java, PHP, VB

## Modèle de données unifié (post-fusion)

```javascript
CompIde.data = [{
  id: "base_hello_world",
  level: 1,
  chapter: "1. Syntaxe de base",
  category: "Initialisation",
  name: "Point d'entrée et Hello World",
  description: "...",
  related_concepts: [],
  languages: {
    cpp: { minimal: "...", complete: "...", best_practices: "...", pitfalls: "...", notes: "..." },
    csharp: { minimal: "...", ... },
    python: { minimal: "...", ... }
  }
}]
```

## Points d'extension

### Ajout d'un concept

1. Ajouter entrée dans `data/metadata.js` (obligatoire pour l'arbre)
2. Ajouter entrée correspondante dans `data/cpp.js`, `data/csharp.js`, `data/python.js`
3. Respecter la structure minimale avec clés `minimal` et `complete`

### Ajout d'un langage

1. Ajouter une colonne dans `index.html`
2. Ajouter un nouveau fichier `data/monlang.js` exposant `CompIde.monlangData`
3. Étendre `buildDatabase()` dans `js/app.js`
4. Ajouter grammaire Prism si nécessaire

## Avantages de cette approche

### Séparation des préoccupations

- Chaque langage a son fichier dédié
- Métadonnées séparées des exemples de code
- Pas de dépendance entre fichiers de données

### Chargement simplifié

- Pas de fetch asynchrone ni de Promise.all
- Les données sont disponibles globalement avant exécution du JS applicatif
- Pas de problème de CORS

### Maintenance facilitée

- Modification d'un langage sans toucher aux autres
- Ajout de concepts par simple copier-coller de blocs
- Pas de JSON à parser côté client

## Performance

- Zéro requête réseau supplémentaire (tout est dans le HTML initial)
- Construction de la BDD en O(n) simple map
- Mise en cache navigateur naturelle
- DOM minimalement manipulé

## Conventions

- Espace de nom global : `window.CompIde`
- Objets globaux : `CompIde.metadata`, `CompIde.cppData`, etc.
- Modules JS : Pattern Module littéral
- Fichiers data : extension `.js` au lieu de `.json`

## Accessibilité

- Structure HTML5 sémantique
- Labels sur inputs
- Contrastes conformes WCAG
- Navigation clavier possible
