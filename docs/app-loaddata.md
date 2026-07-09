# Explication de `App.loadData()` et de l'initialisation des données

Source : `js/app.js` (objet `CompIde.App`)

## Signature et nature

```javascript
async loadData() { ... }
```

C'est une **méthode asynchrone** de l'objet `CompIde.App`. Elle est appelée par `App.init()`.

Elle effectue une requête réseau asynchrone vers l'API du serveur Node.js (`/api/data`) pour récupérer la structure de données complètes et unifiées, et l'assigner à `CompIde.data`.

## Étape 1 — Requête Fetch

L'application n'inclut plus de balises `<script>` statiques pour les données. La méthode contacte directement le backend :

```javascript
const response = await fetch('/api/data');
```

## Étape 2 — Traitement et Assignation

Si la réponse est valide, les données sont extraites et assignées à la variable globale de l'application :

```javascript
CompIde.data = await response.json();
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
Lancement du serveur : `node server.js`

DOMContentLoaded
  │
  └─ App.init()
       ├─ UI.init()
       ├─ await loadData() -> Requête vers l'API Node.js
       └─ selectConcept() -> Démarre l'application une fois les données reçues
```

C'est l'approche Full-Stack (Client/Serveur). L'application JavaScript s'appuie sur le serveur pour effectuer la lourde tâche de lecture et de consolidation des fichiers JSON purs, réduisant la taille du code côté client et favorisant une séparation claire des responsabilités.
