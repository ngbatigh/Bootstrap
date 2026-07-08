# Correspondance des clés des fichiers JSON de langage (cpp.json, csharp.json, etc.) avec l'interface

Ce document indique où chaque clé des fichiers JSON de langage (comme `data/cpp.json`, `data/csharp.json`, etc.) est affichée ou utilisée dans l'interface utilisateur.

> Ces fichiers sont tous structurés de la même manière. Ce document utilise `cpp.json` comme exemple, mais s'applique à tous : `c.json`, `cpp.json`, `csharp.json`, `java.json`, `javascript.json`, `php.json`, `python.json`, `typescript.json`, `vb.json`, `vba.json`.

## Structure d'une entrée dans cpp.json

```json
{
  "base_hello_world": {
    "minimal": "int main() {\n    std::cout << \"Hello World!\";\n}",
    "complete": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello World!\\n\";\n    return 0;\n}",
    "best_practices": "Toujours retourner 0 pour indiquer une exécution réussie au système d'exploitation.",
    "pitfalls": "Oublier l'espace de noms std:: ou la directive using namespace std; provoquera une erreur de compilation.",
    "notes": "C++ utilise un compilateur natif. Le point d'entrée doit impérativement s'appeler main."
  }
}
```

---

## Carte de l'interface

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                  │
│  ┌──────────────────────┬──────────────────────┬──────────────────────┐          │
│  │ C++ (Référence)      │ [C# / Python]        │ [Python / C#]        │          │
│  │ column-header        │ column-header        │ column-header        │          │
│  ├──────────────────────┼──────────────────────┼──────────────────────┤          │
│  │                      │                      │                      │          │
│  │  CODE (minimal)      │  CODE (minimal)      │  CODE (minimal)      │          │
│  │  ou (complete)       │  ou (complete)       │  ou (complete)       │          │
│  │  ← minimal/complete  │  ← minimal/complete  │  ← minimal/complete  │          │
│  │                      │                      │                      │          │
│  ├──────────────────────┼──────────────────────┼──────────────────────┤          │
│  │ .lang-doc            │ .lang-doc            │ .lang-doc            │          │
│  │                      │                      │                      │          │
│  │ Description          │ Description          │ Description          │          │
│  │                      │                      │                      │          │
│  │ ℹ️ Remarques C++ :   │ ℹ️ Remarques C# :    │ ℹ️ Remarques Python :│          │
│  │    ← notes           │    ← notes           │    ← notes           │          │
│  │                      │                      │                      │          │
│  │ ✅ Bonnes pratiques  │ ✅ Bonnes pratiques  │ ✅ Bonnes pratiques  │          │
│  │    ← best_practices  │    ← best_practices  │    ← best_practices  │          │
│  │                      │                      │                      │          │
│  │ ⚠️ Pièges fréquents  │ ⚠️ Pièges fréquents  │ ⚠️ Pièges fréquents  │          │
│  │    ← pitfalls        │    ← pitfalls        │    ← pitfalls        │          │
│  │                      │                      │                      │          │
│  │ 🔗 Concepts liés     │ 🔗 Concepts liés     │ 🔗 Concepts liés     │          │
│  └──────────────────────┴──────────────────────┴──────────────────────┘          │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## Détail par clé

### `minimal`

| Utilisation | Fichier JS | Ligne(s) |
|-------------|-----------|----------|
| **Code source affiché** dans le bloc `<pre id="code-lang-X">` quand le scope est "Minimal" | `compare.js` | `fillCode()` : `concept.languages[langKey].minimal` |

**Affichage** : dans le bloc `<pre class="code-block">` de chaque colonne, lorsque le bouton **Minimal** est actif.

```
┌──────────────────────┐
│ C++ (Référence)      │
├──────────────────────┤
│ int main() {         │  ← minimal
│     std::cout <<     │
│     "Hello World!";  │
│ }                    │
└──────────────────────┘
```

---

### `complete`

| Utilisation | Fichier JS | Ligne(s) |
|-------------|-----------|----------|
| **Code source affiché** dans le bloc `<pre id="code-lang-X">` quand le scope est "Complet" | `compare.js` | `fillCode()` : `concept.languages[langKey].complete` |

**Affichage** : dans le bloc `<pre class="code-block">` de chaque colonne, lorsque le bouton **Complet** est actif.

```
┌──────────────────────────┐
│ C++ (Référence)          │
├──────────────────────────┤
│ #include <iostream>      │
│                          │  ← complete
│ int main() {             │
│     std::cout <<         │
│     "Hello World!\n";    │
│     return 0;            │
│ }                        │
└──────────────────────────┘
```

Les boutons Minimal/Complet se trouvent en **haut de la zone centrale**, au-dessus de la grille :

```
[Point d'entrée et Hello World]  [Minimal | Complet]
                                    ↑ cliquez pour basculer
```

La sélection est gérée par `CompIde.UI.codeScope` dans `js/ui.js`.

---

### `notes`

| Utilisation | Fichier JS | Ligne(s) |
|-------------|-----------|----------|
| **Boîte d'information** "Remarques" dans chaque panneau de documentation | `compare.js` | `fillDocumentation()` : `langData.notes → <div class="alert-box alert-note">` |

**Affichage** : dans les **3 panneaux `.lang-doc`**, sous la description du concept, dans une boîte de couleur bleue avec bordure gauche :

```
┌──────────────────────────────┐
│ ℹ️ Remarques C++ :           │
│                              │  ← notes
│ C++ utilise un compilateur   │
│ natif. Le point d'entrée     │
│ doit impérativement          │
│ s'appeler main.              │
└──────────────────────────────┘
```

Le libellé "C++" est remplacé dynamiquement par le nom du langage via `getLangLabel(langKey)` (ex: "C#", "Python").

---

### `best_practices`

| Utilisation | Fichier JS | Ligne(s) |
|-------------|-----------|----------|
| **Boîte "Bonnes pratiques"** dans chaque panneau de documentation | `compare.js` | `fillDocumentation()` : `langData.best_practices → <div class="alert-box alert-practice">` |

**Affichage** : dans les **3 panneaux `.lang-doc`**, après les remarques, dans une boîte de couleur verte avec bordure gauche :

```
┌──────────────────────────────────┐
│ ✅ Bonnes pratiques C++ :        │
│                                  │  ← best_practices
│ Toujours retourner 0 pour        │
│ indiquer une exécution réussie   │
│ au système d'exploitation.       │
└──────────────────────────────────┘
```

---

### `pitfalls`

| Utilisation | Fichier JS | Ligne(s) |
|-------------|-----------|----------|
| **Boîte "Pièges fréquents"** dans chaque panneau de documentation | `compare.js` | `fillDocumentation()` : `langData.pitfalls → <div class="alert-box alert-pitfall">` |

**Affichage** : dans les **3 panneaux `.lang-doc`**, après les bonnes pratiques, dans une boîte de couleur rouge avec bordure gauche :

```
┌──────────────────────────────────────┐
│ ⚠️ Pièges fréquents C++ :            │
│                                      │  ← pitfalls
│ Oublier l'espace de noms std:: ou    │
│ la directive using namespace std;    │
│ provoquera une erreur de compilation.│
└──────────────────────────────────────┘
```

---

## Ordre d'apparition dans chaque panneau `.lang-doc`

```
1. Description du concept     ← de metadata.json
2. ℹ️ Remarques (notes)       ← du fichier JSON de langage
3. ✅ Bonnes pratiques         ← best_practices
4. ⚠️ Pièges fréquents        ← pitfalls
5. 🔗 Concepts liés           ← de metadata.json
```

Les sections 2, 3, 4 ne sont affichées que si la clé correspondante existe et n'est pas vide dans le fichier JSON du langage.

## Résumé

```
┌────────────────────────────────────────┐
│  BLOC CODE (scope minimal)             │
│  ┌────────────────────────────────┐    │
│  │ int main() { ... }            │ ← minimal
│  └────────────────────────────────┘    │
│                                        │
│  BLOC CODE (scope complet)             │
│  ┌────────────────────────────────┐    │
│  │ #include <iostream>            │ ← complete
│  │ int main() { ... }            │    │
│  └────────────────────────────────┘    │
│                                        │
├────────────────────────────────────────┤
│  PANEL DOC (.lang-doc)                 │
│                                        │
│  ℹ️ Remarques ...         ← notes      │
│  ✅ Bonnes pratiques ... ← best_practices│
│  ⚠️ Pièges fréquents ...  ← pitfalls   │
└────────────────────────────────────────┘
```

**Nota** : Les fichiers `data/cpp.json`, `data/csharp.json`, `data/python.json` et tous les autres fichiers JSON de langage (`data/c.json`, `data/java.json`, etc.) partagent exactement la même structure de clés (`minimal`, `complete`, `best_practices`, `pitfalls`, `notes`) et le même mécanisme d'affichage via `Compare.fillCode()` et `Compare.fillDocumentation()` dans `js/compare.js`.