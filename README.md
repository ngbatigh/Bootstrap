# COMP_IDE // - Comparateur Pédagogique de Langages

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

COMP_IDE // est un comparateur interactif de code pour l'apprentissage des langages C++, C# et Python. L'application présente côte à côte des implémentations d'un même concept pour faciliter la compréhension des différences syntaxiques et sémantiques.

![Demo](https://img.shields.io/badge/Statut-Fonctionnel-success)

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

## 📦 Structure du projet

```
Bootstrap/
├── index.html              # SPA - interface unique
├── styles.css              # Styles et variables thème
├── data/
│   ├── concepts.js         # 6 concepts complets (source de vérité)
│   ├── metadata.json       # Métadonnées arbre
│   ├── cpp.json           # Exemples C++
│   ├── csharp.json        # Exemples C#
│   └── python.json        # Exemples Python
├── js/
│   ├── app.js             # Initialisation et chargement
│   ├── compare.js         # Rendu comparatif
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
| 8   | Signatures et Paramètres            | Fonctions                   |
| 9   | Fonctions Anonymes et Lambdas       | Programmation Fonctionnelle |
| 10  | Levée et Capture d'Exceptions       | Exceptions                  |
| 11  | Libération des Ressources           | Gestion Mémoire             |
| 12  | Classes et Encapsulation            | POO                         |
| 13  | Héritage, Polymorphisme             | POO                         |
| 14  | Programmation Générique             | Généricité                  |
| 15  | Asynchronisme                       | Concurrence                 |
| 16  | Tables Clés-Valeurs                 | Collections                 |
| 17  | Manipulation de Chaînes             | Algorithmes                 |

---

## 🎮 Utilisation

### Lancement rapide

```bash
# Ouvrir simplement le fichier index.html dans un navigateur
# Ou servir le dossier via un serveur HTTP local
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

**Option 1** : Dans `data/concepts.js` (source principale)

```javascript
{
  "id": "mon_concept",
  "level": 1,
  "chapter": "1. Syntaxe de base",
  "category": "Ma Catégorie",
  "name": "Mon Nouveau Concept",
  "description": "Description du concept.",
  "mermaid_diagram": "flowchart LR...",
  "related_concepts": [],
  "languages": {
    "cpp": {
      "minimal": "code minimal...",
      "complete": "code complet...",
      "best_practices": "...",
      "pitfalls": "...",
      "notes": "..."
    },
    "csharp": { ... },
    "python": { ... }
  }
}
```

**Option 2** : Dans les fichiers JSON dispersés

1. Ajouter l'entrée dans `data/cpp.json`, `data/csharp.json`, `data/python.json`
2. Ajouter la métadonnée dans `data/metadata.json`
3. S'assurer que les IDs correspondent

### Ajouter un langage

1. Ajouter une colonne dans `index.html` (modèle colonne 2)
2. Étendre `CompIde.Compare.fillCode()` dans `js/compare.js`
3. Enrichir `CompIde.UI.updateDocumentation()` dans `js/ui.js`
4. Ajouter données JSON pour le nouveau langage
5. Inclure la grammaire PrismJS si nécessaire

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

### Automatisés (à venir)

```bash
# Tests unitaires JavaScript
npm test

# Tests E2E avec Playwright
npm run test:e2e
```

---

## 🏗️ Architecture logicielle

### Pattern Module (Vanilla JS)

```javascript
window.CompIde = window.CompIde || {};

CompIde.App = {
  /* ... */
};
CompIde.Compare = {
  /* ... */
};
CompIde.Search = {
  /* ... */
};
CompIde.UI = {
  /* ... */
};
```

### Flux de données

```
concepts.js (+ JSONs)
  → fetch() parallèle
  → Fusion dans CompIde.data
  → renderTree() / fillCode()
  → DOM
```

### Initialisation

```javascript
DOMContentLoaded
  → CompIde.App.init()
    → UI.init()
    → Search listener
    → loadData()
    → selectConcept()
```

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
Dernière mise à jour : Juillet 2026

---

## 🙏 Remerciements

- **PrismJS** pour la coloration syntaxique
- Communauté éducative pour les retours pédagogiques
