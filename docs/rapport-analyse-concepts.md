# Rapport d'analyse — Consolidation de `dataNew/concepts.js`

**Date** : 2026-07-08
**Répertoire analysé** : `dataNew/`
**Objet** : Utiliser les données des fichiers de langage (`c.js`, `cpp.js`, `java.js`, `javascript.js`, `php.js`, `python.js`, `typescript.js`, `vb.js`, `vba.js`, `csharp.js`) pour compléter `concepts.js` afin qu'il contienne tous les concepts avec les données de chaque langage disponible.

---

## 1. Inventaire des fichiers source

| Fichier | Objet exposé | Concepts clés |
|---------|-------------|---------------|
| `dataNew/c.js` | `CompIde.cData` | 14 concepts (schéma léger) |
| `dataNew/cpp.js` | `CompIde.cppData` | 15 concepts (schéma riche) |
| `dataNew/csharp.js` | `CompIde.csharpData` | 15 concepts (schéma riche) |
| `dataNew/java.js` | `CompIde.javaData` | 14 concepts (schéma léger) |
| `dataNew/javascript.js` | `CompIde.javascriptData` | 14 concepts (schéma léger) |
| `dataNew/php.js` | `CompIde.phpData` | 14 concepts (schéma léger) |
| `dataNew/python.js` | `CompIde.pythonData` | 15 concepts (schéma riche) |
| `dataNew/typescript.js` | `CompIde.typescriptData` | 14 concepts (schéma léger) |
| `dataNew/vb.js` | `CompIde.vbData` | 14 concepts (schéma léger) |
| `dataNew/vba.js` | `CompIde.vbaData` | 14 concepts (schéma léger) |
| `dataNew/metadata.js` | `CompIde.metadata` | 14 concepts (schéma léger) |
| `dataNew/concepts.js` | `CompIde.data` | 17 concepts (schéma riche) — fichier à compléter |

---

## 2. Structure des données

Chaque fichier de langage suit cette structure :
```js
CompIde.<lang>Data = {
  "<concept_id>": {
    "minimal": "...",
    "complete": "...",
    "best_practices": "...",
    "pitfalls": "...",
    "notes": "..."
  },
  ...
}
```

`metadata.js` fournit pour chaque concept :
```js
{
  "id", "level", "chapter", "category", "name", "description", "related_concepts"
}
```

`concepts.js` (cible) attend une entrée par concept :
```js
{
  "id", "level", "chapter", "category", "name", "description",
  "related_concepts",
  "languages": {
    "<langKey>": { "minimal", "complete", "best_practices", "pitfalls", "notes" },
    ...
  }
}
```

---

## 3. Découverte centrale : deux schémas d'identifiants

L'analyse révèle que les fichiers de langage n'utilisent **pas le même système d'IDs de concepts**.

### Schéma « riche » (cpp, csharp, python + concepts.js actuel)
```
base_hello_world
base_variables_01
types_primitives_01
types_references_02
types_casting_02
ctrl_conditional_01
ctrl_loops_01
func_syntax_01
func_lambdas_02
err_exceptions_01
err_raii_02
poo_encapsulation_01
poo_polymorphism_02
gen_generics_01
conc_async_02
struct_maps_01
struct_strings_02
```

### Schéma « léger » (c, java, javascript, php, typescript, vb, vba + metadata.js)
```
base_hello_world
base_variables_02
ctrl_conditions_03
ctrl_boucles_04
func_declaration_05
func_arguments_06
data_structures_07
data_structures_08
oop_classes_09
oop_methods_10
errors_try_catch_11
errors_throw_12
async_await_13
file_io_14
```

**Seul `base_hello_world` est commun aux deux schémas.**

### Union totale
Nombre de concepts uniques après fusion : **~30** (17 du schéma riche + 14 du schéma léger − 1 commun = 30).

---

## 4. Couverture par langage (par concept)

| Concept ID | Langues disposant de données |
|------------|------------------------------|
| `base_hello_world` | c, cpp, csharp, java, javascript, php, python, typescript, vb, vba (10/10) |
| `base_variables_01` | cpp, csharp, python (schéma riche) |
| `base_variables_02` | c, cpp, csharp, java, javascript, php, python, typescript, vb, vba (10/10) |
| `types_primitives_01` | cpp, csharp, python |
| `types_references_02` | cpp, csharp, python |
| `types_casting_02` | cpp, csharp, python |
| `ctrl_conditional_01` | cpp, csharp, python |
| `ctrl_conditions_03` | c, java, javascript, php, typescript, vb, vba |
| `ctrl_loops_01` | cpp, csharp, python |
| `ctrl_boucles_04` | c, java, javascript, php, typescript, vb, vba |
| `func_syntax_01` | cpp, csharp, python |
| `func_basics_01` | cpp, csharp, python |
| `func_declaration_05` | c, java, javascript, php, typescript, vb, vba |
| `func_arguments_06` | c, java, javascript, php, typescript, vb, vba |
| `func_lambdas_02` | cpp, csharp, python |
| `err_exceptions_01` | cpp, csharp, python |
| `errors_try_catch_11` | c, java, javascript, php, typescript, vb, vba |
| `err_raii_02` | cpp, csharp, python |
| `errors_throw_12` | c, java, javascript, php, typescript, vb, vba |
| `poo_encapsulation_01` | cpp, csharp, python |
| `poo_classes_01` | cpp, csharp, python |
| `poo_polymorphism_02` | cpp, csharp, python |
| `oop_classes_09` | c, java, javascript, php, typescript, vb, vba |
| `oop_methods_10` | c, java, javascript, php, typescript, vb, vba |
| `gen_generics_01` | cpp, csharp, python |
| `data_structures_07` | c, java, javascript, php, typescript, vb, vba |
| `data_structures_08` | c, java, javascript, php, typescript, vb, vba |
| `mem_management_01` | cpp, csharp, python |
| `mem_references_02` | cpp, csharp, python |
| `conc_async_02` | cpp, csharp, python |
| `async_await_13` | c, java, javascript, php, typescript, vb, vba |
| `struct_maps_01` | cpp, csharp, python |
| `struct_strings_02` | cpp, csharp, python |
| `file_io_14` | c, java, javascript, php, typescript, vb, vba |

> Remarque : les concepts du schéma « riche » n'ont de données que pour cpp/csharp/python ; les concepts du schéma « léger » n'ont de données que pour les 7 autres langues. Cela reflète un historique de rédaction en deux vagues, et **non** un manque de données.

---

## 5. Plan de consolidation proposé

Réécrire `dataNew/concepts.js` pour contenir **tous les concepts uniques (~30)** :

1. Pour chaque ID unique, renseigner les champs métadonnées (`level`, `chapter`, `category`, `name`, `description`, `related_concepts`) :
   - depuis `metadata.js` si l'ID y figure ;
   - sinon dériver depuis le contenu existant de `concepts.js` (schéma riche).
2. Construire l'objet `languages` en agrégeant, pour chaque ID, **uniquement** les langues qui possèdent réellement une entrée (voir tableau §4). Aucune langue ne doit être injectée avec des données vides/dupliquées.
3. Conserver la compatibilité avec `js/compare.js` (`CompIde.data`, clés `languages[langKey].minimal/.complete/.best_practices/.pitfalls/.notes`).
4. Ne **pas** fusionner arbitrairement `base_variables_01` et `base_variables_02` (concepts distincts dans les deux schémas).

### Notes d'environnement
- `python` et `node` ne sont **pas** disponibles sur la machine → la génération se fera par écriture directe du fichier (`write_to_file`), sans script d'exécution.

---

## 6. Autres tâches réalisées dans cette session

- **Suppression de la clé `"level"`** : la clé `"level": N` a été retirée des 17 concepts de `dataNew/concepts.js` (elle n'existait pas dans `data/concepts.js`).
- **Vérification `doc-lang-1/2/3`** : `index.html` + `js/compare.js` affichent déjà correctement la documentation du langage 1 (cpp référence), langage 2 (`select-lang-2`) et langage 3 (`select-lang-3`). Aucune modification requise.