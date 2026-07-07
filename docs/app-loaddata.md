# Explication détaillée de `App.loadData()`

Source : `js/app.js` (objet `CompIde.App`)

## Signature et nature

```javascript
async loadData() { ... }
```

C'est une **méthode asynchrone** (`async`) de l'objet `CompIde.App`. Elle retourne une `Promise` (implicitement, grâce à `async`). Elle est appelée par `App.init()` avec un `await` :

```javascript
await this.loadData();
```

Le `await` bloque la suite de `init()` jusqu'à ce que toutes les données soient chargées et fusionnées.

## Étape 1 — Chargement parallèle des fichiers JSON

Actuellement, 4 fichiers sont chargés (C++ comme référence + 2 langages sélectionnables) :

```javascript
const [metaRes, cppRes, csharpRes, pythonRes] = await Promise.all([
    fetch('data/metadata.json'),
    fetch('data/cpp.json'),
    fetch('data/csharp.json'),
    fetch('data/python.json')
]);
```

- `fetch(...)` renvoie une `Promise` qui se résout en un objet `Response` (la réponse HTTP brute, pas encore les données).
- `Promise.all([...])` attend que **les 4 promesses se résolvent simultanément** (requêtes lancées en parallèle, pas séquentiellement → gain de performance).
- Le résultat est un tableau de 4 `Response`, déstructuré dans `metaRes, cppRes, csharpRes, pythonRes`.

> Important : à ce stade, ce ne sont que des réponses HTTP. Le corps JSON n'est pas encore parsé.

> Note : 10 fichiers JSON ont été créés dans `data/` (c.json, csharp.json, java.json, javascript.json, php.json, python.json, typescript.json, vb.json, vba.json, cpp.json, metadata.json). Le pipeline actuel n'en charge que 4. Pour utiliser les langages supplémentaires, il faudrait étendre `Promise.all` et `metadata.map()`.

## Étape 2 — Parsing du corps JSON

```javascript
const metadata   = await metaRes.json();
const cppData    = await cppRes.json();
const csharpData = await csharpRes.json();
const pythonData = await pythonRes.json();
```

Chaque `.json()` lit le corps de la réponse et le convertit en objet JS (Promise). On obtient :

| Variable | Contenu |
|----------|---------|
| `metadata` | Tableau d'objets `{ id, level, chapter, category, name, description, related_concepts }` |
| `cppData` | Objet `{ "base_hello_world": {minimal, complete, best_practices, pitfalls, notes}, ... }` indexé par `id` |
| `csharpData` | Idem pour C# |
| `pythonData` | Idem pour Python |

Notez la différence de structure : `metadata` est un **tableau**, tandis que `cppData/csharpData/pythonData` sont des **objets clés-valeurs** indexés par l'`id` du concept. Tous les fichiers JSON de langage (c.json, java.json, etc.) suivent la même structure que cpp.json.

## Étape 3 — Fusion en structure unifiée

```javascript
CompIde.data = metadata.map(concept => {
    return {
        ...concept,
        languages: {
            cpp:    cppData[concept.id]    || {},
            csharp: csharpData[concept.id] || {},
            python: pythonData[concept.id] || {}
        }
    };
});
```

- `metadata.map(...)` crée un **nouveau tableau** (`CompIde.data`) en transformant chaque concept de `metadata`.
- `...concept` : opérateur **spread** → on recopie toutes les propriétés du concept (id, name, description, etc.).
- `languages` : nouvelle propriété construite en **cherchant pour chaque concept son `id`** dans les 3 objets de langage. Ex : `cppData["base_hello_world"]` récupère l'entrée C++ de ce concept.
- `|| {}` : si un langage n'a pas de données pour cet `id`, on met un objet vide `{}` pour éviter les `undefined` (et ainsi ne pas planter `fillCode`/`fillDocumentation` plus tard).

**Résultat final** (`CompIde.data`) :

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
      python: { minimal: "...", ... }
    }
  },
  // ... 17 concepts au total
]
```

C'est cette structure unifiée que consomment ensuite `Search.renderTree()`, `Compare.fillCode()` et `Compare.fillDocumentation()`.

## Étape 4 — Gestion d'erreur

```javascript
catch (error) {
    console.error("Erreur critique lors du chargement des fichiers JSON :", error);
    CompIde.data = [];
}
```

Si l'une des requêtes `fetch` échoue (fichier manquant, serveur absent, CORS en `file://`…) ou si le JSON est invalide, le `catch` :
- Affiche l'erreur dans la console
- Met `CompIde.data = []` (tableau vide) pour que le reste du code ne plante pas

> Note : le code courant ne fait **pas** de repli sur `data/concepts.js` (qui contient pourtant un jeu de données complet en dur). En cas d'échec réseau, la grille restera vide. Si vous voulez une résilience hors-ligne totale, il faudrait ajouter un fallback vers `CompIde.data` pré-rempli dans `concepts.js`.

## Résumé du flux

```
loadData()
  │
  ├─ Promise.all([fetch ×4])          → 4 Response en parallèle
  ├─ .json() ×4                       → objets JS parsés
  ├─ metadata.map(concept => …)       → fusion par id
  └─ CompIde.data = [...]             → structure unifiée prête
```

C'est le **pivot de toute l'application** : sans cette fusion, ni l'arbre de concepts, ni les codes, ni les documentations ne peuvent s'afficher.