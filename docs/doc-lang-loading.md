# Chargement des Doc-Lang (Documentation par Langage)

Ce document décrit comment les panneaux de documentation `.lang-doc` (un par colonne de code) sont chargés et affichés dans COMP_IDE //.

## 1. Structure HTML statique

Dans `index.html`, chaque colonne `.code-column` possède, sous le bloc `<pre>` de code, un conteneur de documentation vide :

```html
<!-- Colonne 1 : C++ (Référence) -->
<div class="code-column">
    ...
    <pre id="code-lang-1" class="code-block"></pre>
    <div id="doc-lang-1" class="lang-doc"></div>
</div>

<!-- Colonne 2 : Langage Alternatif 1 -->
<div class="code-column">
    ...
    <pre id="code-lang-2" class="code-block"></pre>
    <div id="doc-lang-2" class="lang-doc"></div>
</div>

<!-- Colonne 3 : Langage Alternatif 2 -->
<div class="code-column">
    ...
    <pre id="code-lang-3" class="code-block"></pre>
    <div id="doc-lang-3" class="lang-doc"></div>
</div>
```

Les identifiants cibles sont `doc-lang-1`, `doc-lang-2`, `doc-lang-3`.

Ce conteneur remplace l'ancien `doc-panel` (sidebar droite unique) : la documentation n'est plus globale mais **propre à chaque langage affiché**.

## 2. Source des données

Les données proviennent de `CompIde.data`, le tableau unifié produit par `App.loadData()` dans `js/app.js`.

Chaque concept possède une propriété `languages` structurée ainsi :

```javascript
languages: {
    cpp:    { minimal: "...", complete: "...", best_practices: "...", pitfalls: "...", notes: "..." },
    csharp: { minimal: "...", complete: "...", best_practices: "...", pitfalls: "...", notes: "..." },
    python: { minimal: "...", complete: "...", best_practices: "...", pitfalls: "...", notes: "..." }
}
```

Les champs utilisés pour la documentation sont :
- `notes` → boîte **Remarques**
- `best_practices` → boîte **Bonnes pratiques**
- `pitfalls` → boîte **Pièges fréquents**

La description du concept (`concept.description`) est également affichée en tête de chaque panneau.

## 3. Flux de rendu

Le rendu est piloté par `CompIde.Compare.update()` dans `js/compare.js` :

```
App.selectConcept(id)
  └─ CompIde.Compare.update()
       ├─ Récupère concept actif
       ├─ Récupère lang2 = select-lang-2.value, lang3 = select-lang-3.value
       ├─ fillCode('code-lang-1', 'cpp',    concept)   // code
       ├─ fillCode('code-lang-2', lang2,    concept)
       ├─ fillCode('code-lang-3', lang3,    concept)
       ├─ fillDocumentation('doc-lang-1', 'cpp',  concept)   // 📚 DOC
       ├─ fillDocumentation('doc-lang-2', lang2, concept)
       └─ fillDocumentation('doc-lang-3', lang3, concept)
```

## 4. La fonction `fillDocumentation`

`fillDocumentation(elementId, langKey, concept)` génère le HTML de la documentation pour un langage donné et l'injecte dans le conteneur `.lang-doc` correspondant.

### Étapes

1. **Cible** : `container = document.getElementById(elementId)` (ex : `doc-lang-1`).
2. **Description du concept** : ajoutée en tête (répétée dans chaque panneau).
3. **Alert-boxes spécifiques au langage** : si `concept.languages[langKey]` existe, on ajoute (dans l'ordre) :
   - `notes` → `<div class="alert-box alert-note">`
   - `best_practices` → `<div class="alert-box alert-practice">`
   - `pitfalls` → `<div class="alert-box alert-pitfall">`
4. **Concepts liés** : si `concept.related_concepts` n'est pas vide, on liste des liens cliquables qui rappellent `CompIde.App.selectConcept(id)`.

### Extrait clé

```javascript
fillDocumentation(elementId, langKey, concept) {
    const container = document.getElementById(elementId);
    if (!container) return;

    let html = '';

    html += `<div style="font-size: 13px; line-height: 1.5; color: var(--text-main); margin-bottom: 15px;">
                ${concept.description}
             </div>`;

    if (concept.languages && concept.languages[langKey]) {
        const langData = concept.languages[langKey];
        if (langData.notes) {
            html += `<div class="alert-box alert-note">
                        <strong>ℹ️ Remarques ${this.getLangLabel(langKey)} :</strong><br>${langData.notes}
                     </div>`;
        }
        if (langData.best_practices) {
            html += `<div class="alert-box alert-practice">
                        <strong>✅ Bonnes pratiques :</strong><br>${langData.best_practices}
                     </div>`;
        }
        if (langData.pitfalls) {
            html += `<div class="alert-box alert-pitfall">
                        <strong>⚠️ Pièges fréquents :</strong><br>${langData.pitfalls}
                     </div>`;
        }
    }

    if (concept.related_concepts && concept.related_concepts.length > 0) {
        html += `<div style="margin-top: 20px; border-top: 1px solid var(--panel-border); padding-top: 12px;">
                    <strong style="font-size: 12px; color: var(--text-muted);">🔗 Concepts liés :</strong>
                    <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 8px;">`;
        concept.related_concepts.forEach(relId => {
            const targetConcept = CompIde.data.find(c => c.id === relId);
            if (targetConcept) {
                html += `<a href="#" style="color: var(--accent-color); text-decoration: none; font-size: 12px;"
                            onclick="CompIde.App.selectConcept('${targetConcept.id}'); return false;">👉 ${targetConcept.name}</a>`;
            }
        });
        html += `    </div></div>`;
    }

    container.innerHTML = html;
}
```

## 5. Libellés des langues (`getLangLabel`)

La méthode utilitaire `getLangLabel(langKey)` retourne le nom affichable :

```javascript
getLangLabel(langKey) {
    const labels = { cpp: 'C++', csharp: 'C#', python: 'Python' };
    return labels[langKey] || langKey;
}
```

Utilisée pour afficher « Remarques C++ : » plutôt que « Remarques cpp : ».

## 6. Liaison avec les colonnes de code

| Conteneur doc | Colonne | Langage affiché |
|--------------|---------|-----------------|
| `doc-lang-1` | 1 (fixe) | Toujours `cpp` |
| `doc-lang-2` | 2 (select) | `select-lang-2.value` (csharp/python) |
| `doc-lang-3` | 3 (select) | `select-lang-3.value` (python/csharp) |

Changer le `<select>` d'une colonne relance `Compare.update()`, qui rejoue `fillDocumentation` pour toutes les colonnes → la doc suit le langage choisi.

## 7. Styles associés (`styles.css`)

| Sélecteur | Effet |
|-----------|-------|
| `.lang-doc` | `flex: 0.75` (occupe 75% de la hauteur de la colonne), fond `--bg-sidebar`, bordure haute, défilement vertical |
| `.lang-doc .alert-box` | marge réduite, padding réduit pour compactage |
| `.alert-note` | fond `--bg-note`, bordure gauche `--border-note` |
| `.alert-practice` | fond `--bg-practice`, bordure gauche `--border-practice` |
| `.alert-pitfall` | fond `--bg-pitfall`, bordure gauche `--border-pitfall` |

## Résumé

Les panneaux `.lang-doc` ne sont pas statiques. Ils sont :

1. Chargés depuis `CompIde.data` (fusion JSON dans `App.loadData`)
2. Remplis par `Compare.fillDocumentation()` avec description + alert-box (notes, bonnes pratiques, pièges) propres au langage de la colonne
3. Re-rendus à chaque changement de concept ou de langage sélectionné
4. Mis en forme par les classes `.alert-box` et `.lang-doc` de `styles.css`