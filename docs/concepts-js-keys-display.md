# Correspondance des clés de `concepts.js` avec l'interface

Ce document indique où chaque clé des objets du fichier `data/concepts.js` est affichée ou utilisée dans l'interface utilisateur.

## Structure d'un objet dans concepts.js

```javascript
{
  "id": "base_hello_world",
  "level": 1,
  "chapter": "1. Bases du langage",
  "category": "Structure globale",
  "name": "Point d'entrée et Hello World",
  "description": "Anatomie d'un programme minimal...",
  "related_concepts": ["base_variables_01", "func_syntax_01"],
  "languages": {
    "cpp": {
      "minimal": "int main() {\n    std::cout << \"Hello World!\";\n}",
      "complete": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello World!\" << std::endl;\n    return 0;\n}",
      "best_practices": "...",
      "pitfalls": "...",
      "notes": "..."
    },
    "csharp": { ... },
    "python": { ... },
    "java": { ... }
    // ... (10 langages)
  }
}
```

---

## Carte de l'interface

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                  │
│  SIDEBAR (gauche)                ZONE CENTRALE                                   │
│  ┌──────────────────┐    ┌────────────────────────────────────────────────┐     │
│  │ 📂 1. Bases       │    │ Point d'entrée et Hello World  [Structure     │     │
│  │ du langage        │    │ globale]                                      │     │
│  │ ← chapter         │    │  ↑ name                    ↑ category         │     │
│  │                   │    │                                                │     │
│  │ 📄 Point          │    │ [Minimal | Complet]  ← scope de code          │     │
│  │ d'entrée et       │    │                                                │     │
│  │ Hello World       │    │ ┌──────────┬──────────┬──────────┐             │     │
│  │ ← name            │    │ │ C++      │ [C#]     │ [Python] │             │     │
│  │                   │    │ ├──────────┼──────────┼──────────┤             │     │
│  │ 📄 Déclaration    │    │ │ code     │ code     │ code     │             │     │
│  │ et Init.          │    │ │ minimal/ │ minimal/ │ minimal/ │             │     │
│  │ ← name            │    │ │ complete │ complete │ complete │             │     │
│  │                   │    │ │← languages│← lang.  │← lang.  │             │     │
│  │ 📂 2. Types       │    │ │ .cpp     │ .csharp  │ .[choix] │            │     │
│  │ ← chapter         │    │ ├──────────┼──────────┼──────────┤             │     │
│  │                   │    │ │ Desc.    │ Desc.    │ Desc.    │ ← description│   │
│  │ ...               │    │ │ ℹ️ ...   │ ℹ️ ...   │ ℹ️ ...   │ ← languages│   │
│  │                   │    │ │ ✅ ...   │ ✅ ...   │ ✅ ...   │ .[lang].   │     │
│  │                   │    │ │ ⚠️ ...   │ ⚠️ ...   │ ⚠️ ...   │ .notes/    │     │
│  │                   │    │ │          │          │          │ .best_     │     │
│  │                   │    │ │ 🔗 Conc. │ 🔗 Conc. │ 🔗 Conc. │ practices/│     │
│  │                   │    │ │ liés     │ liés     │ liés     │ .pitfalls  │     │
│  │                   │    │ │← related │← related │← related │            │     │
│  │                   │    │ │ concepts │ concepts │ concepts │            │     │
│  │                   │    │ └──────────┴──────────┴──────────┘            │     │
│  └──────────────────┘    └────────────────────────────────────────────────┘     │
│                                                                                  │
│  Clés non affichées directement : id, level                                      │
│  (id est utilisé en interne comme identifiant de jointure)                       │
│  (level est disponible pour un affichage futur du niveau de difficulté)          │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## Détail par clé

### `id`

| Utilisation | Fichier JS | Ligne(s) |
|-------------|-----------|----------|
| Stocké dans `CompIde.currentConceptId` pour suivre le concept actif | `app.js` | `currentConceptId`, `selectConcept(id)` |
| Recherche du concept dans `CompIde.data` : `CompIde.data.find(c => c.id === ...)` | `compare.js`, `app.js` | `update()`, `selectConcept()` |
| Création des liens concepts liés : `onclick="CompIde.App.selectConcept('${concept.id}')"` | `compare.js` | `fillDocumentation()` |
| Comparaison au concept courant dans le sidebar : `concept.id === CompIde.currentConceptId` | `search.js` | `renderTree()` |

**Affichage** : non visible directement dans l'interface (clé interne de jointure et de suivi).

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

---

### `name`

| Utilisation | Fichier JS | Ligne(s) |
|-------------|-----------|----------|
| **Titre principal** de la zone centrale | `compare.js` | `update()` : `getElementById('concept-title').innerText = concept.name` |
| **Affichage dans l'arbre** (sidebar gauche) | `search.js` | `renderTree()` : `itemLi.innerText = "📄 " + concept.name` |
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
┌─────────────────────────────────┐
│ Description du concept :        │  ← description
│                                 │
│ Anatomie d'un programme         │
│ minimal. Analyse de la          │
│ fonction principale (main)...   │
├─────────────────────────────────┤
│ ℹ️ Remarques C++ :             │
│ ...                             │
└─────────────────────────────────┘
```

---

### `related_concepts`

| Utilisation | Fichier JS | Ligne(s) |
|-------------|-----------|----------|
| **Génération des liens** vers les concepts liés | `compare.js` | `fillDocumentation()` : boucle `forEach()` sur le tableau |

**Affichage** : en **bas de chaque panneau `.lang-doc`**, après les alert-box, sous la forme :

```
┌───────────────────────────────────────┐
│ ⚠️ Pièges fréquents C++ :            │
│ ...                                   │
├───────────────────────────────────────┤
│ 🔗 Concepts liés :                    │  ← related_concepts
│                                       │
│ 👉 Déclaration et Initialisation      │  ← lien cliquable vers
│ 👉 Signatures et Paramètres           │     un autre concept
└───────────────────────────────────────┘
```

Chaque lien est un `<a>` qui appelle `CompIde.App.selectConcept('base_variables_01')`.

---

### `languages`

Cette clé est un **objet** contenant les données par langage. Voir le document dédié `docs/language-json-keys-display.md` pour le détail de ses sous-clés.

| Utilisation | Fichier JS | Ligne(s) |
|-------------|-----------|----------|
| **Définition globale** : défini dans `data/concepts.js` directement avec les 10 langages | - | - |
| **Rendu du code** : `concept.languages[langKey][scope]` | `compare.js` | `fillCode()` |
| **Rendu de la documentation** : `concept.languages[langKey].notes`, `.best_practices`, `.pitfalls` | `compare.js` | `fillDocumentation()` |

**Affichage** : toute la partie centrale de l'interface (les 3 colonnes de code + les 3 panneaux de documentation).

---

## Résumé visuel simplifié

```
┌────────────────────────────────────────────────────────────┐
│  SIDEBAR (gauche)                                          │
│                                                             │
│  📂 1. Bases du langage          ← chapter                 │
│      ├── 📄 Point d'entrée...    ← name                    │
│      └── 📄 Déclaration...       ← name                    │
│  📂 2. Types et opérateurs       ← chapter                 │
│      └── 📄 Types Primitifs...   ← name                    │
│                                                             │
├────────────────────────────────────────────────────────────┤
│  ZONE CENTRALE (haut de la grille)                          │
│                                                             │
│  Point d'entrée...  [Structure globale]                    │
│   ↑ name             ↑ category                            │
│                                                             │
├────────────────────────────────────────────────────────────┤
│  ZONE CENTRALE (panneaux .lang-doc × 3)                     │
│                                                             │
│  Description du concept...              ← description       │
│                                                             │
│  ℹ️ Remarques {Lang} : ...            ← languages.notes    │
│  ✅ Bonnes pratiques {Lang} : ...     ← languages.best_    │
│  ⚠️ Pièges fréquents {Lang} : ...    ← languages.pitfalls │
│                                                             │
│  🔗 Concepts liés :                   ← related_concepts   │
│      👉 Déclaration et Init.                                │
│      👉 Signatures et Paramètres                           │
└────────────────────────────────────────────────────────────┘

Clés non affichées : id, level

La clé languages.minimal/complete est affichée dans les blocs <pre> de code