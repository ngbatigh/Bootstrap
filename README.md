# COMP_IDE // - Comparateur Pédagogique de Langages (Branche base-json)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

COMP_IDE // est un comparateur interactif de code pour l'apprentissage des langages C++, C# et Python. L'application présente côte à côte des implémentations d'un même concept pour faciliter la compréhension des différences syntaxiques et sémantiques.

![Demo](https://img.shields.io/badge/Statut-Fonctionnel-success)

**Branche actuelle** : `base-json` - Architecture avec chargement asynchrone JSON via fetch

---

## 🎯 Objectif pédagogique

Permettre aux étudiants et développeurs de :

- Comprendre comment un même concept algorithmique s'exprime dans différents langages
- Identifier les bonnes pratiques spécifiques à chaque écosystème
- Éviter les pièges courants grâce aux avertissements intégrés
- Passer progressivement d'un langage à un autre (C++ → C# → Python)

---

## 🚀 Fonctionnalités

### Interface IDE moderne

- **3 colonnes de code** : C++ (référence fixe) + 2 langages au choix (C# / Python)
- **Arbre des concepts** : Navigation par chapitre et catégorie
- **Recherche temps réel** : Filtrage instantané par nom ou description
- **Mode sombre/clair** : Bascule avec thèmes synchronisés (dont PrismJS)
- **Zoom de code** : Ajustement de la taille de police (10px à 24px)
- **Scope minimal/complet** : Version courte ou code complet avec contexte

### Panneau de documentation

Pour chaque concept :

- 📝 **Description** du concept
- 💡 **Remarques** spécifiques au langage C++
- ✅ **Bonnes pratiques**
- ⚠️ **Pièges fréquents** à éviter
- 🔗 **Concepts liés** pour navigation croisée

### Coloration syntaxique

- PrismJS 1.30.0 avec thèmes multiples
- Support natif de C++, C#, Python
- Bascule automatique selon le mode sombre/clair

---

## 📦 Structure du projet (Branche base-json)

```
Bootstrap/
├── index.html              # SPA - interface unique
├── styles.css              # Styles et variables thème
├── data/
│   ├── concepts.js         # Données complètes (source principale)
│   ├── metadata.json       # Métadonnées JSON
│   ├── cpp.json           # Exemples C++ JSON
│   ├── csharp.json        # Exemples C# JSON
│   └── python.json        # Exemples Python JSON
├── js/
│   ├── app.js             # loadData() async + fetch
│   ├── compare.js         # Rendu comparatif
│   ├── search.js          # Filtre et arbre
│   └── ui.js              # Thème, zoom, scope
└── libs/prism/            # PrismJS (thèmes + langages)
```

**Note** : Cette branche utilise un mélange de `.js` (concepts.js) et `.json` (metadata, langages). Le chargement est asynchrone via `fetch()`.

---

## 🛠️ Stack technique

### Frontend (Vanilla)

- **HTML5** sémantique (header, aside, main)
- **CSS3** avec variables natives (`:root`, `body.light-mode`)
- **JavaScript ES6+** (async/await, arrow functions, template literals, destructuring)
- **Chargement asynchrone** : fetch + Promise.all pour JSON

### Bibliothèques

- **PrismJS 1.30.0** - Coloration syntaxique
  - Thèmes : prism (dark), prism-dark, prism-funky, prism-okaidia
  - Langages : C, C++, C#, Python, JavaScript, TypeScript, Java, PHP, VB

---

## 📚 Concepts couverts

Selon les données présentes dans `concepts.js` et les fichiers JSON (concepts variables selon la branche).

---

## 🎮 Utilisation

### Lancement rapide

```bash
# Ouvrir simplement le fichier index.html dans un navigateur
# Ou servir le dossier via un serveur HTTP local (éviter CORS)
```

### Avec Python (recommandé)

```bash
# Python 3
python -m http.server 8000
# Puis ouvrir http://localhost:8000
```

### Avec Node.js

```bash
npx serve .
# Puis ouvrir http://localhost:3000
```

### Avec VS Code

- Installer l'extension "Live Server"
- Clic droit sur `index.html` → "Open with Live Server"

---

## 🧭 Navigation

1. **Sélectionner un concept** dans l'arbre gauche
2. **Choisir les langages** à comparer via les menus déroulants
3. **Consulter la documentation** dans le panneau droit
4. **Copier le code** avec le bouton "Copier" sous chaque colonne
5. **Filtrer** via la barre de recherche en haut
6. **Ajuster le zoom** avec A+ / A-
7. **Changer le scope** (Minimal / Complet) selon le besoin
8. **Basculer le thème** avec le bouton 🌓 Mode

---

## 🔧 Extension du projet

### Ajouter un nouveau concept

**Étape 1** : Ajouter dans `data/concepts.js` (source principale)

**Étape 2** : Ajouter métadonnée dans `data/metadata.json`

**Étape 3** : Ajouter exemples dans `data/cpp.json`, `data/csharp.json`, `data/python.json`

Format JSON attendu :

```json
{
  "mon_concept_id": {
    "minimal": "code court...",
    "complete": "code complet...",
    "best_practices": "...",
    "pitfalls": "...",
    "notes": "..."
  }
}
```

### Ajouter un langage

1. Ajouter une colonne dans `index.html`
2. Créer fichier `data/monlang.json`
3. Modifier `loadData()` dans `js/app.js`
4. Enrichir `updateDocumentation()` dans `js/ui.js`
5. Ajouter grammaire PrismJS

---

## 🎓 Cas d'usage pédagogiques

- **Cours magistraux** : Projection pour démonstrations en direct
- **TravauxDirigés** : Exploration autonome par les étudiants
- **Révision** : Comparaison rapide de syntaxe avant entretien technique
- **Transition linguistique** : Pour un développeur C++ voulant apprendre C# ou Python
- **Auto-formation** : Consultation des bonnes pratiques et pièges

---

## 🧪 Tests

### Manuel

- [ ] Ouvrir `index.html` dans Chrome/Firefox/Edge
- [ ] Vérifier chargement des 3 colonnes de code
- [ ] Tester la recherche (ex: "pointeur", "boucle")
- [ ] Basculer thème sombre/clair
- [ ] Modifier zoom A+ / A-
- [ ] Cliquer sur "Copier" pour chaque colonne
- [ ] Vérifier panneau documentation (notes, pratiques, pièges)
- [ ] Tester lien "concepts liés"
- [ ] Changer langages via menus déroulants
- [ ] Basculer scope Minimal/Complet

### Note importante

Cette branche nécessite un serveur HTTP local (pas d'ouverture directe du fichier `file://`) pour éviter les erreurs CORS lors du fetch des JSON.

---

## 🏗️ Architecture logicielle

### Pattern Module (Vanilla JS)

```javascript
window.CompIde = window.CompIde || {};

CompIde.App = {
  loadData(), // fetch async
  init(),
  selectConcept()
};

CompIde.Compare = { /* ... */ };
CompIde.Search = { /* ... */ };
CompIde.UI = { /* ... */ };
```

### Flux de données

```
Concepts.js (global)
  ↓
App.init()
  ↓
loadData() : fetch parallèle Promise.all
  ↓
JSON.parse()
  ↓
CompIde.data (fusion)
  ↓
renderTree() / fillCode()
  ↓
DOM
```

### Initialisation

```javascript
// Ordre de chargement :
// 1. Concepts.js (globaux)
// 2. Modules UI, Search, Compare
// 3. App (dernier)

DOMContentLoaded
  → CompIde.App.init() (async)
    → UI.init()
    → Search listener
    → loadData() // fetch metadata.json, cpp.json, etc.
    → selectConcept()
```

---

## ⚡ Caractéristiques de cette branche

- **Chargement asynchrone** : fetch + Promise.all pour les 4 fichiers JSON
- **Parsing JSON** : JSON.parse natif
- **Séparation données** : concepts.js contient les données complètes, JSON pour extension
- **Architecture hybride** : mélange .js global + JSON fetch

---

## 🤝 Contribution

Les contributions sont les bienvenues !

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
Branche : base-json  
Dernière mise à jour : Juillet 2026

---

## 🙏 Remerciements

- **PrismJS** pour la coloration syntaxique
- Communauté éducative pour les retours pédagogiques
