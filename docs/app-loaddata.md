# Explication de `App.loadData()` et de l'initialisation des données

Source : `js/app.js` (objet `CompIde.App`)

## Signature et nature

```javascript
async loadData() { ... }
```

C'est une **méthode asynchrone** de l'objet `CompIde.App`. Elle est appelée par `App.init()` via `await`.

## Étape 1 — Appel API Fetch (PHP)

L'application effectue un appel réseau HTTP vers le script backend `api.php`. C'est ce script PHP qui se charge de lire les fichiers `*.json` locaux et de les fusionner pour envoyer un flux JSON consolidé prêt à l'emploi.

```javascript
const response = await fetch('api.php');
if (!response.ok) {
    throw new Error(`Erreur HTTP: ${response.status}`);
}
CompIde.data = await response.json();
```

## Étape 2 — L'objet `CompIde.data`

L'application consomme cette structure téléchargée, qui ressemble à ceci :

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
DOMContentLoaded
  │
  └─ App.init()
       ├─ UI.init()
       ├─ await loadData() -> fetch('api.php') (Appel API HTTP)
       └─ selectConcept() -> Démarre l'application (Dès réception des données)
```

Cette approche basée sur un serveur PHP résout définitivement les problématiques liées au CORS (qui surviennent lors d'un `fetch('data/xxx.json')` local), puisqu'un vrai serveur HTTP s'occupe de servir les données structurées.
