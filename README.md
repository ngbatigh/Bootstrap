# COMP_IDE // - Comparateur Pédagogique de Langages (Branche base-js)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

COMP_IDE // est un comparateur interactif de code pour l'apprentissage des langages C++, C# et Python. L'application présente côte à côte des implémentations d'un même concept pour faciliter la compréhension des différences syntaxiques et sémantiques.

![Demo](https://img.shields.io/badge/Statut-Fonctionnel-success)

**Branche actuelle** : `base-js` - Architecture avec données dispersées en fichiers `.js` globaux (sans fetch asynchrone)

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

## 📦 Structure du projet (Branche base-js)

```
Bootstrap/
├── index.html              # SPA - interface unique
├── styles.css              # Styles et variables thème
├── data/
│   ├── metadata.js         # 14 concepts - métadonnées globales
│   ├── cpp.js             # Exemples C++ (CompIde.cppData)
│   ├── csharp.js          # Exemples C# (CompIde.csharpData)
│   └── python.js          # Exemples Python (CompIde.pythonData)
├── js/
│   ├── app.js             # buildDatabase() + orchestration
│   ├── compare.js         # Rendu comparatif
│   ├── search.js          # Filtre et arbre
│   └── ui.js              # Thème, zoom, scope
└── libs/prism/            # PrismJS (thèmes + langages)
```

**Note** : Cette branche utilise des fichiers `.js` au lieu de `.json`. Les données sont chargées comme scripts globaux avant l'exécution de l'application.

---

## 🛠️ Stack technique

### Frontend (Vanilla)

- **HTML5** sémantique (header, aside, main)
- **CSS3** avec variables natives (`:root`, `body.light-mode`)
- **JavaScript ES6+** (arrow functions, template literals, destructuring)
- **Chargement synchrone** : Pas de fetch, les données sont disponibles via `<script>` tags

### Bibliothèques

- **PrismJS 1.30.0** - Coloration syntaxique
  - Thèmes : prism (dark), prism-dark, prism-funky, prism-okaidia
  - Langages : C, C++, C#, Python, JavaScript, TypeScript, Java, PHP, VB

---

## 📚 Concepts couverts (14 concepts)

| #   | Concept                              | Catégorie                   |
| --- | ------------------------------------ | --------------------------- |
| 1   | Point d'entrée et Hello World        | Structure globale           |
| 2   | Déclaration et Initialisation        | Variables                   |
| 3   | Types Primitifs et Taille Mémoire    | Types                       |
| 4   | Pointeurs, Références                | Gestion Mémoire / Pointeurs |
| 5   | Expressions Conditionnelles          | Conditions                  |
| 6   | Itérations et Collections            | Boucles                     |
| 7   | Déclaration et Passage de Paramètres | Fonctions                   |
| 8   | Fonctions Anonymes et Fermetures     | Lambda                      |
| 9   | Allocation Pile vs Tas               | Mémoire                     |
| 10  | Classes et Encapsulation             | POO                         |
| 11  | Héritage et Polymorphisme            | Polymorphisme               |
| 12  | Le bloc Try-Catch-Finally            | Exceptions                  |
| 13  | Programmation Générique              | Généricité                  |
| 14  | Asynchronisme (Async/Await)          | Concurrence                 |
| 15  | Tables Clés-Valeurs                  | Collections                 |
| 16  | Manipulation et Formatage            | Algorithmes                 |

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

**Étape 1** : Ajouter les métadonnées dans `data/metadata.js`

```javascript
{
  "id": "mon_concept",
  "level": 1,
  "chapter": "1. Syntaxe de base",
  "category": "Ma Catégorie",
  "name": "Mon Nouveau Concept",
  "description": "Description du concept.",
  "related_concepts": []
}
```

**Étape 2** : Ajouter les exemples de code dans chaque fichier de langage

Dans `data/cpp.js`, `data/csharp.js`, `data/python.js` :

```javascript
"mon_concept": {
  "minimal": "code minimal...",
  "complete": "code complet...",
  "best_practices": "...",
  "pitfalls": "...",
  "notes": "..."
}
```

### Ajouter un langage

1. Ajouter une colonne dans `index.html` (modèle colonne 2)
2. Créer un fichier `data/monlangage.js` exposant `CompIde.monlangageData`
3. Modifier `CompIde.App.buildDatabase()` dans `js/app.js`
4. Enrichir `CompIde.UI.updateDocumentation()` dans `js/ui.js`
5. Ajouter grammaire PrismJS si nécessaire

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

// Données globales (peuplées par les fichiers data/*.js)
CompIde.metadata = [
  /* ... */
];
CompIde.cppData = {
  /* ... */
};
CompIde.csharpData = {
  /* ... */
};
CompIde.pythonData = {
  /* ... */
};

// Modules applicatifs
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
Chargement <script> (synchrone)
  ↓
data/metadata.js → CompIde.metadata
data/cpp.js → CompIde.cppData
data/csharp.js → CompIde.csharpData
data/python.js → CompIde.pythonData
  ↓
CompIde.App.buildDatabase()
  ↓
CompIde.data (tableau unifié)
  ↓
renderTree() / fillCode()
  ↓
DOM
```

### Initialisation

```javascript
// Ordre de chargement dans index.html :
// 1. window.CompIde = {};
// 2. data/metadata.js, data/cpp.js, data/csharp.js, data/python.js
// 3. js/search.js, js/compare.js, js/ui.js
// 4. js/app.js

DOMContentLoaded
  → CompIde.App.init()
    → UI.init()
    → Search listener
    → buildDatabase()
    → selectConcept()
```

---

## ⚡ Différences avec la branche principale

| Aspect              | Branche principale (concepts.js) | Branche base-js (données dispersées) |
| ------------------- | -------------------------------- | ------------------------------------ |
| Chargement          | Asynchrone (fetch + Promise.all) | Synchrone (script tags)              |
| Fichiers de données | concepts.js + 3 JSONs            | 4 fichiers .js globaux               |
| Parsing             | JSON.parse()                     | Directement utilisable               |
| CORS                | Risqué en local                  | Aucun problème                       |
| Maintenance         | Source unique (concepts.js)      | Séparation par langage               |

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
Branche : base-js  
Dernière mise à jour : Juillet 2026

---

## 🙏 Remerciements

- **PrismJS** pour la coloration syntaxique
- Communauté éducative pour les retours pédagogiques
