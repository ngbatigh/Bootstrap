# Explication de `App.loadData()` et de l'initialisation des données

Source : `js/app.js` (objet `CompIde.App`)

## Signature et nature

```javascript
loadData() { ... }
```

C'est une **méthode synchrone** de l'objet `CompIde.App`. Elle est appelée par `App.init()`.

Contrairement aux versions précédentes, elle n'effectue **aucune requête réseau (`fetch`)**. Son seul rôle est désormais de vérifier que les données ont bien été chargées en mémoire.

## Étape 1 — Chargement préalable via `<script>`

Avant même que `app.js` ne s'exécute, le fichier `index.html` charge statiquement tous les fichiers de données via des balises `<script>` :

```html
<!-- 1. La donnée brute en premier -->
<script src="data/c.js"></script>
<script src="data/cpp.js"></script>
<script src="data/csharp.js"></script>
<script src="data/java.js"></script>
<script src="data/javascript.js"></script>
<script src="data/typescript.js"></script>
<script src="data/python.js"></script>
<script src="data/php.js"></script>
<script src="data/vb.js"></script>
<script src="data/vba.js"></script>

<script src="data/metadata.js"></script>
<script src="data/concepts.js"></script>
```

Le fichier **`data/concepts.js`** contient la structure unifiée finale (nommée `CompIde.data`), qui regroupe tous les concepts et toutes les implémentations pour les 10 langages supportés.

## Étape 2 — Vérification dans `loadData()`

La fonction s'assure simplement que cet objet global existe bien :

```javascript
loadData() {
    if (!CompIde.data || CompIde.data.length === 0) {
        console.error("Aucune donnée conceptuelle chargée.");
    }
}
```

## Résultat final (`CompIde.data`)

L'application consomme directement cette structure statique, qui ressemble à ceci :

```javascript
[
  {
    id: "base_hello_world",
    name: "Point d'entrée...",
    description: "...",
    related_concepts: [...],
    languages: {
      cpp:    { minimal: "...", complete: "...", best_practices: "...", pitfalls: "...", notes: "..." },
      csharp: { minimal: "...", ... },
      python: { minimal: "...", ... },
      c:      { minimal: "...", ... },
      java:   { minimal: "...", ... },
      // ... et ainsi de suite pour les 10 langages
    }
  },
  // ... tous les concepts fusionnés (~30 concepts)
]
```

C'est cette structure unifiée que consomment ensuite `Search.renderTree()`, `Compare.fillCode()` et `Compare.fillDocumentation()`.

## Résumé du flux

```
Fichiers .js dans <head>
  │
  ├─ Chargement séquentiel par le navigateur
  └─ CompIde.data = [...] (Défini dans concepts.js)

DOMContentLoaded
  │
  └─ App.init()
       ├─ UI.init()
       ├─ loadData() -> Vérifie l'existence de CompIde.data
       └─ selectConcept() -> Démarre l'application
```

C'est l'approche "zéro dépendance / 100% hors-ligne" : l'application peut fonctionner directement depuis le système de fichiers (`file://`) sans se soucier des politiques CORS qui bloquent généralement les `fetch` locaux.