# Correspondance des clés de `metadata.js` avec l'interface

Ce document indique où chaque clé des objets de `data/metadata.js` est affichée ou utilisée dans l'interface utilisateur.

## Structure d'un objet de metadata.js

```javascript
window.CompIde = window.CompIde || {};
CompIde.metadata = [
{
  "id": "base_hello_world",
  "level": 1,
  "chapter": "1. Bases du langage",
  "category": "Structure globale",
  "name": "Point d'entrée et Hello World",
  "description": "Anatomie d'un programme minimal...",
  "related_concepts": ["base_variables_01", "func_syntax_01"]
}
];
```

---

## Carte de l'interface

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ Barre d'outils (toolbar)                                                        │
│ COMP_IDE //  [Recherche: ___________]  A+ A-  [Mode]                            │
├─────────────┬──────────────────────────────────────────────────────────────────┤
│             │                                                                    │
│  SIDEBAR    │  ▸ [concept-title] : "Point d'entrée et Hello World"         ← name
│  (sidebar)  │     [concept-category] : "Structure globale"                 ← category
│             │                                                                    │
│  📂 1. Bases│  ┌──────────────┬──────────────┬──────────────┐                    │
│  du langage │  │ C++ (Réf.)   │ [C# / Python]│ [Python / C#]│                    │
│  ← chapter  │  ├──────────────┼──────────────┼──────────────┤                    │
│             │  │              │              │              │                    │
│  📄 Point   │  │   code       │   code       │   code       │                    │
│  d'entrée   │  │   code       │   code       │   code       │                    │
│  et Hello   │  │              │              │              │                    │
│  World      │  ├──────────────┼──────────────┼──────────────┤                    │
│  ← name     │  │ Description  │ Description  │ Description  │ ← description     │
│             │  │ du concept   │ du concept   │ du concept   │                    │
│             │  ├──────────────┼──────────────┼──────────────┤                    │
│             │  │ ℹ️ Remarques │ ℹ️ Remarques │ ℹ️ Remarques │                    │
│             │  │ C++          │ C#           │ Python       │                    │
│             │  ├──────────────┼──────────────┼──────────────┤                    │
│             │  │ ✅ Bonnes   │ ✅ Bonnes    │ ✅ Bonnes    │                    │
│             │  │ pratiques    │ pratiques    │ pratiques    │                    │
│             │  ├──────────────┼──────────────┼──────────────┤                    │
│             │  │ ⚠️ Pièges   │ ⚠️ Pièges    │ ⚠️ Pièges    │                    │
│             │  ├──────────────┼──────────────┼──────────────┤                    │
│             │  │ 🔗 Concepts  │ 🔗 Concepts  │ 🔗 Concepts  │ ← related_concepts│
│             │  │ liés         │ liés         │ liés         │                    │
│             │  └──────────────┴──────────────┴──────────────┘                    │
│             │                                                                    │
└─────────────┴────────────────────────────────────────────────────────────────────┘
```

---

## Détail par clé

### `id`

| Utilisation | Fichier JS | Ligne(s) |
|-------------|-----------|----------|
| Stocké dans `CompIde.currentConceptId` pour suivre le concept actif | `app.js` | `currentConceptId`, `selectConcept(id)` |
| Clé de jointure avec les données des langages (`cppData[concept.id]`) | `app.js` | `loadData()` (fusion) |
| Recherche du concept dans `CompIde.data` : `CompIde.data.find(c => c.id === ...)` | `compare.js`, `app.js` | `update()`, `selectConcept()` |
| Création des liens concepts liés : `onclick="CompIde.App.selectConcept('${concept.id}')"` | `compare.js` | `fillDocumentation()` |
| Comparaison au concept courant dans le sidebar : `concept.id === CompIde.currentConceptId` | `search.js` | `renderTree()` |

**Affichage** : non visible directement dans l'interface (clé interne).

---

### `level`

| Utilisation | Fichier JS | Ligne(s) |
|-------------|-----------|----------|
| Présent dans la donnée mais **non utilisé directement** dans l'interface actuelle | - | - |

**Affichage** : aucune zone de l'interface n'affiche cette valeur pour le moment. Elle est disponible pour un futur affichage de niveau de difficulté (ex: "Niveau 3/8").

---

### `chapter`

| Utilisation | Fichier JS | Ligne(s) |
|-------------|-----------|----------|
| **Groupement des concepts** dans l'arbre de la sidebar | `search.js` | `renderTree()` : `chapters[concept.chapter]` |

**Affichage** : dans l'**arbre des concepts** (sidebar gauche), chaque chapitre forme un groupe visuel :

```
📂 1. Bases du langage
    📄 Point d'entrée et Hello World
    📄 Déclaration et Initialisation
📂 2. Types et opérateurs
    📄 Types Primitifs et Taille Mémoire
    ...
```

Le chapitre est affiché comme titre de section via `📂 {chapter}`.

---

### `category`

| Utilisation | Fichier JS | Ligne(s) |
|-------------|-----------|----------|
| **Affiché dans un badge** au-dessus de la grille de code | `compare.js` | `update()` : `getElementById('concept-category').innerText = concept.category` |

**Affichage** : dans la **zone centrale** (`<span id="concept-category">`), à côté du titre du concept :

```
Point d'entrée et Hello World  [Structure globale]
                               ↑ category
```

Le badge est stylisé avec `background: var(--bg-badge)`, `padding: 2px 6px`, `border-radius: 3px`.

---

### `name`

| Utilisation | Fichier JS | Ligne(s) |
|-------------|-----------|----------|
| **Titre principal** de la zone centrale | `compare.js` | `update()` : `getElementById('concept-title').innerText = concept.name` |
| **Affichage dans l'arbre** (sidebar gauche) | `search.js` | `renderTree()` : `itemLi.innerText = 📄 ${concept.name}` |
| **Filtrage par recherche** | `search.js` | `renderTree(q)` : `concept.name.toLowerCase().includes(q)` |
| **Liens concepts liés** (texte du lien) | `compare.js` | `fillDocumentation()` : `targetConcept.name` |

**Affichage** :
- En haut de la grille de code (titre `<h2 id="concept-title">`)
- Dans la sidebar gauche (chaque élément de l'arbre)
- Dans les liens "Concepts liés" sous chaque documentation

---

### `description`

| Utilisation | Fichier JS | Ligne(s) |
|-------------|-----------|----------|
| **Affiché en haut** de chaque panneau de documentation | `compare.js` | `fillDocumentation()` : `${concept.description}` |
| **Filtrage par recherche** | `search.js` | `renderTree(q)` : `concept.description.toLowerCase().includes(q)` |

**Affichage** : dans les **3 panneaux `.lang-doc`** (sous chaque colonne de code), en premier élément du contenu HTML généré.

```
┌──────────────────────┐
│ Description du       │
│ concept :            │  ← description
│ Anatomie d'un        │
│ programme minimal... │
├──────────────────────┤
│ ℹ️ Remarques C++ :   │
│ ...                  │
└──────────────────────┘
```

---

### `related_concepts`

| Utilisation | Fichier JS | Ligne(s) |
|-------------|-----------|----------|
| **Génération des liens** vers les concepts liés | `compare.js` | `fillDocumentation()` : boucle `forEach()` sur le tableau |

**Affichage** : en **bas de chaque panneau `.lang-doc`**, après les alert-box, sous la forme :

```
┌──────────────────────┐
│ ⚠️ Pièges fréquents :│
│ ...                  │
├──────────────────────┤
│ 🔗 Concepts liés :   │
│ 👉 Déclaration et    │  ← related_concepts
│    Initialisation    │     (lien cliquable)
│ 👉 Signatures et     │
│    Paramètres        │
└──────────────────────┘
```

Chaque lien est un `<a>` cliquable qui appelle `CompIde.App.selectConcept('base_variables_01')`.

---

## Résumé visuel (schéma simplifié)

```
┌─────────────────────────────────────────────────────┐
│  SIDEBAR (gauche)                                   │
│                                                     │
│  📂 1. Bases du langage                             │
│      ├── 📄 Point d'entrée...          ← name        │
│      └── 📄 Déclaration...             ← name        │
│  📂 2. Types et opérateurs            ← chapter     │
│      └── 📄 Types Primitifs...        ← name        │
│                                                     │
├─────────────────────────────────────────────────────┤
│  ZONE CENTRALE (haut de la grille)                  │
│                                                     │
│  Point d'entrée...  [Structure globale]             │
│   ↑ name             ↑ category                     │
│                                                     │
├─────────────────────────────────────────────────────┤
│  ZONE CENTRALE (panneaux .lang-doc × 3)             │
│                                                     │
│  Description du concept...             ← description │
│                                                     │
│  ℹ️ Remarques C++ : ...                             │
│  ✅ Bonnes pratiques : ...                          │
│  ⚠️ Pièges fréquents : ...                         │
│                                                     │
│  🔗 Concepts liés :                  ← related      │
│      👉 Déclaration et Init.          _concepts     │
│      👉 Signatures et Paramètres                   │
└─────────────────────────────────────────────────────┘

Clés non affichées : id, level