# Chargement du Sidebar (Arbre des Concepts)

Ce document décrit précisément comment la barre latérale gauche (`<aside class="sidebar">`) est peuplée dans COMP_IDE //.

## 1. Structure HTML statique

Dans `index.html`, le sidebar est déclaré une seule fois avec un conteneur vide :

```html
<aside class="sidebar">
    <div id="concepts-tree"></div>
</aside>
```

Le contenu réel est injecté dynamiquement par JavaScript. Le conteneur cible est `#concepts-tree`.

## 2. Source des données

Le sidebar s'appuie sur `CompIde.data`, le tableau global défini dans `data/concepts.js`.

Contrairement aux versions précédentes, il n'y a plus de fusion asynchrone : toutes les données sont chargées de manière synchrone via les balises `<script>` de `index.html`.

## 3. Flux d'initialisation

```
DOMContentLoaded
  └─ CompIde.App.init()
       ├─ CompIde.UI.init()                     // boutons, zoom, thème
       ├─ searchBox.addEventListener('input')   // filtrage temps réel
       ├─ this.loadData()                       // vérifie que CompIde.data existe
       └─ this.selectConcept(premierId)
            └─ CompIde.Search.renderTree(filtre) // 🌳 PEUPLE LE SIDEBAR
```

`App.init()` se trouve dans `js/app.js` :

```javascript
init() {
    CompIde.UI.init();

    const searchBox = document.getElementById('search-box');
    if (searchBox) {
        searchBox.addEventListener('input', (e) => {
            CompIde.Search.renderTree(e.target.value);
        });
    }

    this.loadData();

    if (CompIde.data && CompIde.data.length > 0) {
        this.selectConcept(CompIde.data[0].id);
    } else {
        CompIde.Search.renderTree();
    }
}
```

## 4. Rendu de l'arbre (`Search.renderTree`)

La fonction `renderTree(searchQuery = '')` dans `js/search.js` est responsable de la génération du DOM du sidebar.

### Étapes

1. **Réinitialisation** : `treeContainer.innerHTML = ''` vide le conteneur `#concepts-tree`.
2. **Filtrage** : Chaque concept de `CompIde.data` est comparé (en minuscules) au `searchQuery`. Si le nom OU la description ne contient pas la requête, le concept est ignoré.
3. **Groupement par chapitre** : Les concepts filtrés sont regroupés dans un objet `chapters` indexé par `concept.chapter`.
4. **Construction du DOM** :
   - Pour chaque chapitre → un `<div>` avec un titre `📂 {chapter}`
   - Pour chaque concept du chapitre → un `<li class="concept-item">` affichant `📄 {concept.name}`
   - Le concept actif (`concept.id === CompIde.currentConceptId`) est mis en gras et coloré avec `var(--accent-color)`.
   - Chaque `<li>` reçoit un `onclick = () => CompIde.App.selectConcept(concept.id)`.
5. **État vide** : Si aucun concept ne correspond, affiche « Aucun résultat trouvé. »

### Extrait clé

```javascript
CompIde.Search = {
    renderTree(searchQuery = '') {
        const treeContainer = document.getElementById('concepts-tree');
        treeContainer.innerHTML = '';
        const chapters = {};
        const q = searchQuery.toLowerCase();

        CompIde.data.forEach(concept => {
            if (q && !concept.name.toLowerCase().includes(q)
                  && !concept.description.toLowerCase().includes(q)) {
                return;
            }
            if (!chapters[concept.chapter]) chapters[concept.chapter] = [];
            chapters[concept.chapter].push(concept);
        });

        for (const [chapter, concepts] of Object.entries(chapters)) {
            // ... création des <div>, <ul>, <li> ...
            itemLi.onclick = () => CompIde.App.selectConcept(concept.id);
        }
    }
};
```

## 5. Rafraîchissement du sidebar

Le sidebar est re-dessiné dans deux situations :

| Déclencheur | Code |
|-------------|------|
| Frappe dans la barre de recherche | `searchBox` → `input` event → `renderTree(value)` |
| Changement de concept sélectionné | `App.selectConcept()` → `Search.renderTree(filtreActuel)` |

Cela garantit que le surlignage du concept actif suit toujours la sélection de l'utilisateur, et que la recherche filtre l'arbre en temps réel.

## 6. Styles associés (`styles.css`)

| Sélecteur | Effet |
|-----------|-------|
| `.sidebar` | Largeur fixe 260px, fond `--bg-sidebar`, bordure droite, défilement vertical |
| `.tree-chapter` | Titre de chapitre en gras, couleur accent |
| `.tree-item` / `.concept-item` | Élément cliquable, padding, curseur pointer |
| `.tree-item.active` | Fond accent, texte blanc, gras (concept courant) |

## Résumé

Le sidebar n'a aucun contenu statique. Il est entièrement généré par `CompIde.Search.renderTree()` à partir de `CompIde.data` (défini statiquement dans `data/concepts.js`). L'interaction se fait via la recherche textuelle et le clic sur un concept, qui déclenchent tous deux un re-rendu de l'arbre.
