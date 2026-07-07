# Chargement des Codes des Langages

Ce document décrit comment les blocs de code des trois langages (C++, Langage 2, Langage 3) sont chargés et affichés dans COMP_IDE //.

## 1. Structure HTML statique

Dans `index.html`, la zone centrale contient une grille de 3 colonnes (`.comparison-area`). Chaque colonne possède un en-tête (avec le nom du langage ou un `<select>`) et un bloc `<pre>` vide destiné à recevoir le code :

```html
<!-- Colonne 1 : C++ (Référence) -->
<div class="code-column">
    <div class="column-header">
        <span>C++ (Référence)</span>
        <button class="copy-btn" onclick="CompIde.Compare.copy('code-lang-1', event)">Copier</button>
    </div>
    <pre id="code-lang-1" class="code-block"></pre>
    <div id="doc-lang-1" class="lang-doc"></div>
</div>

<!-- Colonne 2 : Langage Alternatif 1 -->
<div class="code-column">
    <div class="column-header">
        <select id="select-lang-2" onchange="CompIde.Compare.update()">
            <option value="csharp" selected>C#</option>
            <option value="python">Python</option>
        </select>
        <button class="copy-btn" onclick="CompIde.Compare.copy('code-lang-2', event)">Copier</button>
    </div>
    <pre id="code-lang-2" class="code-block"></pre>
    <div id="doc-lang-2" class="lang-doc"></div>
</div>

<!-- Colonne 3 : Langage Alternatif 2 -->
<div class="code-column">
    <div class="column-header">
        <select id="select-lang-3" onchange="CompIde.Compare.update()">
            <option value="python" selected>Python</option>
            <option value="csharp">C#</option>
        </select>
        <button class="copy-btn" onclick="CompIde.Compare.copy('code-lang-3', event)">Copier</button>
    </div>
    <pre id="code-lang-3" class="code-block"></pre>
    <div id="doc-lang-3" class="lang-doc"></div>
</div>
```

Les identifiants cibles sont donc `code-lang-1`, `code-lang-2`, `code-lang-3`.

- La colonne 1 est **fixe** : elle affiche toujours le C++ (référence).
- Les colonnes 2 et 3 sont **dynamiques** : l'utilisateur choisit le langage via les menus `<select>` (`select-lang-2`, `select-lang-3`).

## 2. Source des données

Les codes proviennent de `CompIde.data`, le tableau unifié produit par `App.loadData()` dans `js/app.js`.

Chaque concept possède une propriété `languages` structurée ainsi :

```javascript
languages: {
    cpp:    { minimal: "...", complete: "...", best_practices: "...", pitfalls: "...", notes: "..." },
    csharp: { minimal: "...", complete: "...", ... },
    python: { minimal: "...", complete: "...", ... }
}
```

Les valeurs `minimal` et `complete` sont les deux versions de code source affichées selon le scope choisi par l'utilisateur.

La fusion est opérée dans `App.loadData()` :

```javascript
CompIde.data = metadata.map(concept => ({
    ...concept,
    languages: {
        cpp:    cppData[concept.id]    || {},
        csharp: csharpData[concept.id] || {},
        python: pythonData[concept.id] || {}
    }
}));
```

> Remarque : `data/concepts.js` contient également un jeu de données complet (utilisé en remplacement si le fetch échoue), mais le pipeline de production utilise les fichiers JSON (`metadata.json`, `cpp.json`, `csharp.json`, `python.json`).

## 3. Flux de rendu

Le rendu des codes est piloté par `CompIde.Compare.update()` dans `js/compare.js` :

```
App.selectConcept(id)
  └─ CompIde.Compare.update()
       ├─ Récupère concept actif
       ├─ Récupère lang2 = select-lang-2.value, lang3 = select-lang-3.value
       ├─ fillCode('code-lang-1', 'cpp',    concept)
       ├─ fillCode('code-lang-2', lang2,    concept)
       ├─ fillCode('code-lang-3', lang3,    concept)
       ├─ Prism.highlightAllUnder(center-panel)   // coloration syntaxique
       └─ fillDocumentation(...)                   // doc par langage
```

## 4. La fonction `fillCode`

`fillCode(elementId, langKey, concept)` injecte le code source dans le `<pre>` correspondant.

### Étapes

1. **Cible** : `preEl = document.getElementById(elementId)` (ex : `code-lang-1`).
2. **Élément `<code>`** : s'il n'existe pas, il est créé et ajouté dans le `<pre>`.
3. **Classe Prism** : on réinitialise `codeEl.className` puis on ajoute `language-${langKey}` (ex : `language-cpp`) pour indiquer à Prism la grammaire à utiliser.
4. **Injection du texte** selon le scope courant :

```javascript
const scope = CompIde.UI.codeScope || 'minimal';
codeEl.textContent = concept.languages[langKey][scope]
                   || concept.languages[langKey].minimal
                   || "// Code non disponible";
```

Si le langage n'a pas de données : `// Pas d'équivalent documenté pour : ${langKey}`.

5. **Zoom** : `CompIde.UI.applyZoom()` applique la taille de police configurée.

### Extrait clé

```javascript
fillCode(elementId, langKey, concept) {
    const preEl = document.getElementById(elementId);
    if (!preEl) return;

    let codeEl = preEl.querySelector('code');
    if (!codeEl) {
        codeEl = document.createElement('code');
        preEl.appendChild(codeEl);
    }

    codeEl.className = '';
    codeEl.classList.add(`language-${langKey}`);

    if (concept.languages && concept.languages[langKey]) {
        const scope = CompIde.UI.codeScope || 'minimal';
        codeEl.textContent = concept.languages[langKey][scope]
                          || concept.languages[langKey].minimal
                          || "// Code non disponible";
    } else {
        codeEl.textContent = `// Pas d'équivalent documenté pour : ${langKey}`;
    }

    if (CompIde.UI && CompIde.UI.applyZoom) {
        CompIde.UI.applyZoom();
    }
}
```

## 5. Choix du scope (minimal / complet)

Le scope est contrôlé par `CompIde.UI.codeScope` (valeur par défaut `'minimal'`).

- Les boutons **Minimal** / **Complet** en haut de la grille appellent `setCodeScope('minimal'|'complete')` dans `js/ui.js`.
- `setCodeScope` met à jour `UI.codeScope` puis relance `CompIde.Compare.update()`, ce qui rejoue `fillCode` avec la bonne version.

## 6. Coloration syntaxique (Prism)

Après injection du texte, `update()` déclenche :

```javascript
if (window.Prism) {
    Prism.highlightAllUnder(document.getElementById('center-panel'));
}
```

Prism utilise les classes `language-xxx` posées par `fillCode` pour coloriser chaque bloc selon sa grammaire (cpp, csharp, python).

## 7. Bascule de langage par l'utilisateur

Les menus `<select>` des colonnes 2 et 3 possèdent `onchange="CompIde.Compare.update()"`. Changer de langage relance immédiatement le rendu complet (code + documentation) pour toutes les colonnes.

## 8. Copie dans le presse-papier

Chaque colonne a un bouton « Copier » qui appelle `CompIde.Compare.copy(elementId, event)`. La fonction lit le `textContent` du `<code>` et l'écrit via `navigator.clipboard.writeText()`, avec un retour visuel « Copié ! ».

## Résumé

Les codes des langages ne sont pas en dur dans le HTML. Ils sont :

1. Chargés depuis les fichiers JSON fusionnés dans `CompIde.data` (`App.loadData`)
2. Injectés dynamiquement dans les `<pre id="code-lang-X">` par `Compare.fillCode()`
3. Colorés par Prism selon la classe `language-xxx`
4. Alternés entre versions `minimal` / `complete` via `UI.codeScope`
5. Re-rendus à chaque changement de concept ou de langage sélectionné