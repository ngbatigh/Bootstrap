window.CompIde = window.CompIde || {};

CompIde.metadata = [
  {
    "id": "base_hello_world",
    "level": 1,
    "chapter": "1. Syntaxe de base",
    "category": "Initialisation",
    "name": "Point d'entrée et Hello World",
    "description": "Comparaison de la structure minimale d'un programme et du point d'entrée requis pour l'exécution.",
    "related_concepts": []
  },
  {
    "id": "base_variables_02",
    "level": 1,
    "chapter": "1. Syntaxe de base",
    "category": "Variables",
    "name": "Déclaration et Initialisation",
    "description": "Étude du système de typage (statique vs dynamique), de la portée des variables et de l'inférence de type.",
    "related_concepts": ["base_hello_world"]
  },
  {
    "id": "ctrl_conditions_01",
    "level": 2,
    "chapter": "2. Structures de contrôle",
    "category": "Conditions",
    "name": "Expressions Conditionnelles",
    "description": "Comparaison des blocs conditionnels, des expressions ternaires et de l'évaluation court-circuit (Short-Circuit Evaluation).",
    "related_concepts": []
  },
  {
    "id": "ctrl_loops_02",
    "level": 2,
    "chapter": "2. Structures de contrôle",
    "category": "Boucles",
    "name": "Itérations et Collections",
    "description": "Analyse des boucles itératives (for/foreach) et du comportement face à la modification d'une collection en cours d'itération.",
    "related_concepts": ["ctrl_conditions_01"]
  },
  {
    "id": "func_basics_01",
    "level": 3,
    "chapter": "3. Fonctions et Modularité",
    "category": "Fonctions",
    "name": "Déclaration et Passage de Paramètres",
    "description": "Étude de la signature des fonctions, des paramètres par défaut, nommés, et du nombre variable d'arguments.",
    "related_concepts": []
  },
  {
    "id": "func_lambdas_02",
    "level": 3,
    "chapter": "3. Fonctions et Modularité",
    "category": "Lambda",
    "name": "Fonctions Anonymes et Fermetures",
    "description": "Analyse des expressions lambdas et du mécanisme de capture des variables environnantes (Closures).",
    "related_concepts": ["func_basics_01"]
  },
  {
    "id": "mem_management_01",
    "level": 4,
    "chapter": "4. Gestion Mémoire et Pointeurs",
    "category": "Mémoire",
    "name": "Allocation Pile vs Tas",
    "description": "Comparaison de la gestion manuelle de la mémoire, du Garbage Collector (ramasse-miettes) et du compteur de références.",
    "related_concepts": []
  },
  {
    "id": "mem_references_02",
    "level": 4,
    "chapter": "4. Gestion Mémoire et Pointeurs",
    "category": "Pointeurs",
    "name": "Pointeurs et Références",
    "description": "Analyse profonde du passage par valeur, par adresse (pointeurs) et par référence selon la philosophie de chaque langage.",
    "related_concepts": ["mem_management_01"]
  },
  {
    "id": "poo_classes_01",
    "level": 5,
    "chapter": "5. Programmation Orientée Objet",
    "category": "Classes",
    "name": "Classes et Encapsulation",
    "description": "Étude de la structure des classes, des constructeurs, et des niveaux de visibilité (public, private, protected).",
    "related_concepts": []
  },
  {
    "id": "poo_polymorphism_02",
    "level": 5,
    "chapter": "5. Programmation Orientée Objet",
    "category": "Polymorphisme",
    "name": "Héritage et Polymorphisme",
    "description": "Comparaison de l'héritage multiple, des interfaces de contrats et de la résolution dynamique des méthodes au runtime.",
    "related_concepts": ["poo_classes_01"]
  },
  {
    "id": "err_exceptions_01",
    "level": 6,
    "chapter": "6. Gestion des Erreurs",
    "category": "Exceptions",
    "name": "Le bloc Try-Catch-Finally",
    "description": "Analyse du coût d'une exception, de la capture sélective et de la garantie de libération des ressources système.",
    "related_concepts": []
  },
  {
    "id": "gen_generics_01",
    "level": 7,
    "chapter": "7. Généricité et Concurrence",
    "category": "Généricité",
    "name": "Programmation Générique",
    "description": "Comparaison des mécanismes d'abstraction de types. Les templates C++, les Generics de C# et le typage dynamique intrinsèque de Python.",
    "related_concepts": ["poo_polymorphism_02"]
  },
  {
    "id": "conc_async_02",
    "level": 7,
    "chapter": "7. Généricité et Concurrence",
    "category": "Concurrence",
    "name": "Asynchronisme (Async / Await)",
    "description": "Analyse des modèles de programmation asynchrone non-bloquante face au modèle de threads et de promesses.",
    "related_concepts": ["func_lambdas_02"]
  },
  {
    "id": "struct_maps_01",
    "level": 8,
    "chapter": "8. Structures avancées",
    "category": "Collections",
    "name": "Tables Clés-Valeurs (Maps & Dicts)",
    "description": "Comparaison des dictionnaires et dictionnaires ordonnés. Analyse de la complexité algorithmique d'accès (O(1) vs O(log n)).",
    "related_concepts": ["ctrl_loops_02"]
  },
  {
    "id": "struct_strings_02",
    "level": 8,
    "chapter": "8. Structures avancées",
    "category": "Algorithmes",
    "name": "Manipulation et Formatage de Chaînes",
    "description": "Analyse de la sémantique des strings. Impact de l'immuabilité (C#, Python) vs mutabilité native (C++).",
    "related_concepts": ["base_hello_world"]
  }
];