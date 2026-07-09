// data/metadata.js
window.CompIde = window.CompIde || {};

CompIde.metadata = [
  {
    "id": "base_hello_world",
    "level": 1,
    "chapter": "1. Syntaxe de base",
    "category": "Initialisation",
    "name": "Point d'entrée et Hello World",
    "description": "Structure minimale d'un programme et point d'entrée requis pour l'exécution.",
    "related_concepts": []
  },
  {
    "id": "base_variables_02",
    "level": 1,
    "chapter": "1. Syntaxe de base",
    "category": "Variables",
    "name": "Déclaration et Initialisation",
    "description": "Système de typage, portée des variables et inférence de type.",
    "related_concepts": ["base_hello_world"]
  },
  {
    "id": "ctrl_conditions_01",
    "level": 2,
    "chapter": "2. Structures de contrôle",
    "category": "Conditions",
    "name": "Expressions Conditionnelles",
    "description": "Blocs conditionnels, expressions ternaires et évaluation court-circuit.",
    "related_concepts": []
  },
  {
    "id": "ctrl_loops_02",
    "level": 2,
    "chapter": "2. Structures de contrôle",
    "category": "Boucles",
    "name": "Itérations et Collections",
    "description": "Boucles itératives et comportement face à la modification d'une collection.",
    "related_concepts": ["ctrl_conditions_01"]
  },
  {
    "id": "func_basics_01",
    "level": 3,
    "chapter": "3. Fonctions et Modularité",
    "category": "Fonctions",
    "name": "Déclaration et Passage de Paramètres",
    "description": "Signature des fonctions, paramètres par défaut, nommés et variadiques.",
    "related_concepts": []
  },
  {
    "id": "func_lambdas_02",
    "level": 3,
    "chapter": "3. Fonctions et Modularité",
    "category": "Lambda",
    "name": "Fonctions Anonymes et Fermetures",
    "description": "Expressions lambdas et mécanisme de capture des variables environnantes (Closures).",
    "related_concepts": ["func_basics_01"]
  },
  {
    "id": "mem_management_01",
    "level": 4,
    "chapter": "4. Gestion Mémoire",
    "category": "Mémoire",
    "name": "Allocation Pile vs Tas",
    "description": "Gestion de la mémoire, Garbage Collector, pointeurs intelligents et RAII.",
    "related_concepts": []
  },
  {
    "id": "mem_references_02",
    "level": 4,
    "chapter": "4. Gestion Mémoire",
    "category": "Pointeurs",
    "name": "Pointeurs et Références",
    "description": "Passage par valeur, par adresse (pointeurs) et par référence.",
    "related_concepts": ["mem_management_01"]
  },
  {
    "id": "poo_classes_01",
    "level": 5,
    "chapter": "5. Programmation Orientée Objet",
    "category": "Classes",
    "name": "Classes et Encapsulation",
    "description": "Structure des classes, constructeurs et niveaux de visibilité.",
    "related_concepts": []
  },
  {
    "id": "poo_polymorphism_02",
    "level": 5,
    "chapter": "5. Programmation Orientée Objet",
    "category": "Polymorphisme",
    "name": "Héritage et Polymorphisme",
    "description": "Héritage, interfaces, classes abstraites et résolution dynamique.",
    "related_concepts": ["poo_classes_01"]
  },
  {
    "id": "err_exceptions_01",
    "level": 6,
    "chapter": "6. Gestion des Erreurs",
    "category": "Exceptions",
    "name": "Le bloc Try-Catch-Finally",
    "description": "Propagation et capture des exceptions, libération des ressources.",
    "related_concepts": []
  },
  {
    "id": "gen_generics_01",
    "level": 7,
    "chapter": "7. Généricité et Concurrence",
    "category": "Généricité",
    "name": "Programmation Générique",
    "description": "Templates C++, Generics C# et typage dynamique.",
    "related_concepts": ["poo_polymorphism_02"]
  },
  {
    "id": "conc_async_02",
    "level": 7,
    "chapter": "7. Généricité et Concurrence",
    "category": "Concurrence",
    "name": "Asynchronisme (Async / Await)",
    "description": "Programmation asynchrone non-bloquante, threads et promesses.",
    "related_concepts": ["func_lambdas_02"]
  },
  {
    "id": "struct_maps_01",
    "level": 8,
    "chapter": "8. Structures avancées",
    "category": "Collections",
    "name": "Tables Clés-Valeurs (Maps & Dicts)",
    "description": "Dictionnaires, tables de hachage et complexité d'accès.",
    "related_concepts": ["ctrl_loops_02"]
  },
  {
    "id": "struct_strings_02",
    "level": 8,
    "chapter": "8. Structures avancées",
    "category": "Algorithmes",
    "name": "Manipulation et Formatage de Chaînes",
    "description": "Sémantique des chaînes, immuabilité vs mutabilité et concaténation.",
    "related_concepts": ["base_hello_world"]
  }
];