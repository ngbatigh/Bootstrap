# Documentation Technique - COMP_IDE // Comparateur de Langages Pédagogique

## Vue d'ensemble

COMP_IDE // est une application web monopage (SPA) légère comparative de langages de programmation. Elle permet d'étudier concept par concept les différences entre C++ (langage pivot), C# et Python à travers une interface IDE moderne.

## Architecture générale

```
Bootstrap/
├── index.html              # Point d'entrée HTML unique
├── styles.css              # Styles CSS avec thèmes sombre/clair
├── data/
│   ├── concepts.js         # Données conceptuelles complètes (source principale)
│   ├── metadata.json       # Métadonnées des concepts pour l'arbre
│   ├── cpp.json           # Exemples C++
│   ├── csharp.json        # Exemples C#
│   └── python.json        # Exemples Python
├── js/
│   ├── app.js             # Orchestrateur principal
│   ├── compare.js         # Moteur de comparaison
│   ├── search.js          # Moteur de recherche/filtrage
│   └── ui.js              # Gestion interface utilisateur
└── libs/
    ├── prism/             # Coloration syntaxique PrismJS
    └── libs.js            # (vide)
```

## Structure des données

### concepts.js

Contient le dataset maître sous forme de tableau d'objets. Chaque concept possède :

- `id` : Identifiant unique
- `level` : Niveau de difficulté (1-7)
- `chapter` : Chapitre pédagogique
- `category` : Catégorie thématique
- `name` : Nom affiché
- `description` : Description textuelle
- `mermaid_diagram` : Diagramme Mermaid (optionnel)
- `related_concepts` : Tableau d'IDs de concepts liés
- `languages` : Objet contenant les exemples par langage

### Fichiers JSON (cpp.json, csharp.json, python.json)

Structure alternative pour séparation des préoccupations. Chaque entrée contient :

- `minimal` : Version courte
- `complete` : Version complète
- `best_practices` : Conseils
- `pitfalls` : Erreurs courantes
- `notes` : Remarques contextuelles

### metadata.json

Métadonnées légères pour Arbre des concepts. Contient id, level, chapter, category, name, description, related_concepts.

## Modules JavaScript

### App (js/app.js)

**Rôle** : Orchestrateur principal

**Responsabilités** :

- Chargement asynchrone des données JSON via `Promise.all`
- Fusion des données分散ées en structure unifiée `CompIde.data`
- Initialisation séquentielle : UI → Recherche → Chargement données → Sélection concept
- Gestion du concept actif via `currentConceptId`

**Flux d'initialisation** :

```javascript
DOMContentLoaded → CompIde.App.init()
  → CompIde.UI.init()
  → Chargement fetch() parallèle
  → Fusion données
  → selectConcept(premier)
```

### Compare (js/compare.js)

**Rôle** : Moteur de rendu comparatif

**Responsabilités** :

- `update()` : Rendu principal (titres, catégories, 3 colonnes de code, panneau doc)
- `fillCode()` : Injection du code dans les blocs `<pre><code>` selon le scope (minimal/complet)
- `copy()` : Copie du code dans le presse-papier avec feedback visuel

**Dépendances** : Utilise `CompIde.UI.codeScope` pour déterminer quelle version afficher.

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
- `updateDocumentation()` : Rendu panneau droite avec alertes (notes, bonnes pratiques, pièges)

## Stack technique

### Frontend

- HTML5 sémantique (header, aside, main)
- CSS natif avec variables CSS custom (`:root` et `body.light-mode`)
- JavaScript vanilla ES6 (async/await, arrow functions, template literals)
- Pas de framework ni de bundler

### Libs externes

- **PrismJS 1.30.0** : Coloration syntaxique
  - Thèmes inclus : prism (dark), prism-dark, prism-funky, prism-okaidia
  - Langages supportés : markup, clike, javascript, c, csharp, cpp, python, typescript, visual-basic

## Modèle de données unifié

Après fusion par `App.loadData()` :

```javascript
CompIde.data = [{
  id: "base_hello_world",
  level: 1,
  chapter: "1. Syntaxe de base",
  category: "Initialisation",
  name: "Point d'entrée et Hello World",
  description: "...",
  mermaid_diagram: "...",
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

1. Ajouter entrée dans `data/concepts.js` (recommandé) OU créer clé dans `data/cpp.json`, etc.
2. Si nouveau concept, ajouter métadonnées dans `data/metadata.json`
3. Respecter structure `languages.cpp/csharp/python.minimal` et `.complete`

### Ajout d'un langage

1. Ajouter colonne dans `index.html` (copier bloc colonne 2)
2. Modifier `CompIde.Compare.fillCode()` pour accepter nouvelle clé
3. Ajouter données JSON correspondantes
4. Ajouter grammaire Prism si nécessaire

## Performance et optimisations

- Chargement parallèle des JSON via `Promise.all`
- Mise en cache navigateur (fichiers statiques)
- Coloration Prism déclenchée uniquement lors des changements
- DOM minimalement manipulé (innerHTML ciblé)

## Conventions de code

- Préfixe `CompIde` pour l'espace de nom global
- Modules via objets littéraux (Pattern Module)
- noms de fichiers en camelCase minuscule
- Variables CSS : `--var-name` avec préfixe `--bg-`, `--text-`, `--accent-`

## Accessibilité

- Structure HTML5 sémantique
- Labels sur inputs
- Contrastes conformes WCAG (thèmes testés)
- Navigation clavier possible (tabindex sur éléments interactifs)
