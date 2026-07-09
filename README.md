# COMP_IDE // - Comparateur Pédagogique de Langages

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

COMP_IDE // est un comparateur interactif de code pour l'apprentissage des langages de programmation. L'application présente côte à côte des implémentations d'un même concept (C++ en référence fixe + 2 langages au choix) avec une documentation dédiée par langage.

![Demo](https://img.shields.io/badge/Statut-Fonctionnel-success)

---

## 🎯 Objectif pédagogique

Permettre aux étudiants et développeurs de :

- Comprendre comment un même concept algorithmique s'exprime dans différents langages
- Identifier les bonnes pratiques spécifiques à chaque écosystème
- Éviter les pièges courants grâce aux avertissements intégrés
- Passer progressivement d'un langage à un autre

---

## 🚀 Fonctionnalités

### Interface IDE moderne

- **3 colonnes de code et documentation** : C++ (référence fixe) + 2 langages au choix
- **Arbre des concepts** : Navigation par chapitre et catégorie
- **Recherche temps réel** : Filtrage instantané par nom ou description
- **Mode sombre/clair** : Bascule avec thèmes synchronisés (dont PrismJS)
- **Zoom de code** : Ajustement de la taille de police (10px à 24px)
- **Scope minimal/complet** : Version courte ou code complet avec contexte

### Documentation par langage

Chaque colonne affiche sa propre documentation :

- 📝 **Description** du concept
- 💡 **Remarques** spécifiques au langage
- ✅ **Bonnes pratiques**
- ⚠️ **Pièges fréquents** à éviter
- 🔗 **Concepts liés** pour navigation croisée

### Langages supportés

| Langage | Données JSON |
|---------|-------------|
| C | `data/c.json` |
| C++ (référence) | `data/cpp.json` |
| C# | `data/csharp.json` |
| Java | `data/java.json` |
| JavaScript | `data/javascript.json` |
| PHP | `data/php.json` |
| Python | `data/python.json` |
| TypeScript | `data/typescript.json` |
| VB.NET | `data/vb.json` |
| VBA | `data/vba.json` |

### Coloration syntaxique

- PrismJS 1.30.0 avec thèmes multiples
- Support natif de C, C++, C#, Python, JavaScript, TypeScript, Java, PHP, VB
- Bascule automatique selon le mode sombre/clair

---

## 📦 Structure du projet

```
Bootstrap/
├── index.html              # SPA - interface unique
├── api.php                 # API backend (fusionne les JSON à la volée)
├── styles.css              # Styles et variables thème
├── data/                   # Source de vérité (fichiers JSON)
│   ├── metadata.json       # Métadonnées pour l'arbre des concepts
│   ├── cpp.json            # Exemples C++
│   ├── csharp.json         # Exemples C#
│   └── ...                 # (10 langages au total)
├── dataOld/                # (Archive) Anciens fichiers de données statiques JS
├── scriptsOld/             # (Archive) Anciens scripts de migration JS vers JSON
├── docs/
│   ├── architecture.md     # Documentation technique
│   ├── app-loaddata.md     # Explication de loadData()
│   ├── sidebar-loading.md  # Chargement du sidebar
│   ├── code-loading.md     # Chargement des codes
│   └── doc-lang-loading.md # Chargement des documentations
├── js/
│   ├── app.js             # Initialisation et chargement
│   ├── compare.js         # Rendu comparatif (code + doc par langage)
│   ├── search.js          # Filtre et arbre
│   └── ui.js              # Thème, zoom, scope
└── libs/prism/            # PrismJS (thèmes + langages)
```

---

## 🛠️ Stack technique

### Frontend (Vanilla)

- **HTML5** sémantique (header, aside, main)
- **CSS3** avec variables natives (`:root`, `body.light-mode`)
- **JavaScript ES6+** (async/await, arrow functions, template literals)
- **Architecture SPA** sans framework ni bundler

### Bibliothèques

- **PrismJS 1.30.0** - Coloration syntaxique
  - Thèmes : prism (dark), prism-dark, prism-funky, prism-okaidia
  - Langages : C, C++, C#, Python, JavaScript, TypeScript, Java, PHP, VB

---

## 📚 Concepts couverts

| #   | Concept                             | Catégorie                   |
| --- | ----------------------------------- | --------------------------- |
| 1   | Point d'entrée et Hello World       | Structure globale           |
| 2   | Déclaration et Initialisation       | Variables                   |
| 3   | Types Primitifs et Taille Mémoire   | Types                       |
| 4   | Pointeurs, Références et Sémantique | Gestion Mémoire             |
| 5   | Transtypage et Conversions          | Opérateurs                  |
| 6   | Du Switch au Pattern Matching       | Conditionnelles             |
| 7   | Boucles et Itérateurs               | Boucles                     |
| 8   | Signatures et Paramètres            | Signatures                  |
| 9   | Fonctions Anonymes et Lambdas       | Programmation Fonctionnelle |
| 10  | Levée et Capture d'Exceptions       | Exceptions                  |
| 11  | Libération des Ressources           | Gestion Mémoire             |
| 12  | Classes et Encapsulation            | Classes                     |
| 13  | Héritage, Polymorphisme             | Polymorphisme               |
| 14  | Programmation Générique             | Généricité                  |
| 15  | Asynchronisme (Async / Await)       | Concurrence                 |
| 16  | Tables Clés-Valeurs (Maps & Dicts)  | Collections                 |
| 17  | Manipulation et Formatage de Chaînes | Algorithmes                |

---

## 🎮 Utilisation

### Lancement avec PHP (Requis)

Depuis le passage à une architecture API, **un serveur PHP est requis** pour lire et fusionner les fichiers JSON :

```bash
# Avec le serveur interne de PHP 
php -S localhost:8000
# Puis ouvrir http://localhost:8000/index.html
```

*(L'application peut également être hébergée sur XAMPP, WAMP, Laragon ou un serveur web standard avec PHP).*

### Avec VS Code

- Installer l'extension "Live Server"
- Clic droit sur `index.html` → "Open with Live Server"

---

## 🧭 Navigation

1. **Sélectionner un concept** dans l'arbre gauche
2. **Choisir les langages** à comparer via les menus déroulants
3. **Consulter la documentation** sous chaque colonne (notes, bonnes pratiques, pièges)
4. **Copier le code** avec le bouton "Copier" sous chaque colonne
5. **Filtrer** via la barre de recherche en haut
6. **Ajuster le zoom** avec A+ / A-
7. **Changer le scope** (Minimal / Complet) selon le besoin
8. **Basculer le thème** avec le bouton 🌓 Mode

---

## 🔧 Extension du projet

### Ajouter un nouveau concept

1. Ajouter l'entrée dans `data/metadata.json`
2. Ajouter les données dans les fichiers JSON des langages (ex: `data/cpp.json`)
3. L'API `api.php` fera la fusion automatiquement !

### Ajouter un langage

1. Ajouter l'option dans les `<select>` de `index.html`
2. Créer le fichier `.json` dans `data/` (ex: `data/nouveau.json`)
3. Ajouter la clé dans le tableau `$languages` de `api.php`
4. Ajouter le label du langage dans `getLangLabel()` de `js/compare.js`
5. Ajouter la grammaire PrismJS si nécessaire

---

## 🧪 Tests

### Manuel

- [ ] Ouvrir `index.html` dans Chrome/Firefox/Edge
- [ ] Vérifier chargement des 3 colonnes de code + documentation
- [ ] Tester la recherche (ex: "pointeur", "boucle")
- [ ] Basculer thème sombre/clair
- [ ] Modifier zoom A+ / A-
- [ ] Cliquer sur "Copier" pour chaque colonne
- [ ] Vérifier documentation par langage (notes, pratiques, pièges)
- [ ] Tester lien "concepts liés"
- [ ] Changer langages via menus déroulants
- [ ] Basculer scope Minimal/Complet

---

## 🏗️ Architecture logicielle

### Pattern Module (Vanilla JS)

```javascript
window.CompIde = window.CompIde || {};

CompIde.App = { /* ... */ };
CompIde.Compare = { /* ... */ };
CompIde.Search = { /* ... */ };
CompIde.UI = { /* ... */ };
```

### Flux de données (Architecture Serveur/Client)

```
Fichiers JSON purs (metadata.json + cpp.json + ...)
  → Fusion à la volée côté serveur (api.php)
  → JS asynchrone : fetch('api.php')
  → CompIde.data est peuplé
  → renderTree() / fillCode() / fillDocumentation()
  → DOM
```

### Initialisation

```javascript
DOMContentLoaded
  → CompIde.App.init()
    → UI.init()
    → Search listener
    → await loadData() (Appel API fetch)
    → selectConcept()
```

### Historique de Migration
L'application a connu 3 phases de développement :
1. **100% Statique Asynchrone (Échec CORS)** : Tentative de lire des `.json` avec `fetch()` en local (bloqué par les navigateurs).
2. **100% Statique Synchrone (Hack JS)** : Utilisation de variables globales dans des fichiers `.js` (voir dossier `dataOld/`).
3. **API Serveur (Actuel)** : Migration propre des données en JSON pur et ajout d'un endpoint `api.php` pour résoudre l'accès fichier sécurisé.

---

## 🤝 Contribution

### Workflow

1. Fork du repository
2. Créer une branche `feature/ma-fonctionnalite`
3. Commit avec message conventionnel
4. Push et Pull Request

### Convention de commits

```
feat: ajouter concept sur les templates
fix: corriger chargement Prism en mode clair
docs: mettre à jour README
refactor: extraire logique de zoom
```

---

## 📄 Licence

MIT License - Voir fichier `LICENSE` pour détails.

---

## 👤 Auteur

**Projet académique** - CompareLang Bootstrap  
Dernière mise à jour : Juillet 2026

---

## 🙏 Remerciements

- **PrismJS** pour la coloration syntaxique
- Communauté éducative pour les retours pédagogiques