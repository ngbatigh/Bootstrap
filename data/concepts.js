// data/concepts.js
window.CompIde = window.CompIde || {};

CompIde.data = [
  {
    "id": "base_hello_world",
    "chapter": "1. Bases du langage",
    "category": "Structure globale",
    "name": "Point d'entrée et Hello World",
    "description": "Anatomie d'un programme minimal. Analyse de la fonction principale (main), de l'inclusion des bibliothèques standards et de l'affichage sur la sortie standard.",
    "mermaid_diagram": "flowchart LR\nA[Inclusion Header] --> B[Fonction principale main] --> C[Flux de sortie stdout] --> D[Code de retour 0]",
    "related_concepts": ["base_variables_01", "func_syntax_01"],
    "languages": {
      "cpp": {
        "minimal": "int main() {\n    std::cout << \"Hello World!\";\n}",
        "complete": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello World!\" << std::endl;\n    return 0;\n}",
        "best_practices": "Préférer '\\n' à 'std::endl' dans les boucles intensives pour éviter de forcer un flush du buffer système inutilement.",
        "pitfalls": "Oublier le point-virgule terminal ou omettre l'inclusion de <iostream>.",
        "notes": "Depuis C++11, si 'return 0;' est omis dans la fonction main, le compilateur l'injecte implicitement."
      },
      "csharp": {
        "minimal": "Console.WriteLine(\"Hello World!\");",
        "complete": "using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(\"Hello World!\");\n    }\n}",
        "best_practices": "Utiliser les instructions de niveau supérieur (Top-level statements) introduites en C# 9 pour les petits utilitaires.",
        "pitfalls": "Attention à la casse : 'Main' prend une majuscule, contrairement au C++.",
        "notes": "En C# moderne, les déclarations globales permettent d'épurer le fichier de la classe Program de base."
      },
      "python": {
        "minimal": "print(\"Hello World!\")",
        "complete": "def main():\n    print(\"Hello World!\")\n\nif __name__ == \"__main__\":\n    main()",
        "best_practices": "Toujours utiliser le guard 'if __name__ == \"__main__\"' pour permettre la réutilisabilité du script comme module.",
        "pitfalls": "Mélanger les tabulations et les espaces pour l'indentation de la fonction main.",
        "notes": "Python est interprété (ou compilé à la volée), le point d'entrée formel n'est pas structurellement obligatoire mais fortement recommandé."
      }
    }
  },
  {
    "id": "base_variables_01",
    "chapter": "1. Bases du langage",
    "category": "Variables",
    "name": "Déclaration et Initialisation",
    "description": "Comparaison entre les langages à typage statique (C++, C#) et dynamique (Python) concernant la réservation de mémoire pour une variable.",
    "mermaid_diagram": "flowchart TD\nA[Nom Variable] --> B{Type déterminé à ?}\nB -- Compilation --> C[Typage Statique: C++, C#]\nB -- Exécution --> D[Typage Dynamique: Python]",
    "related_concepts": ["base_hello_world", "types_primitives_01"],
    "languages": {
      "cpp": {
        "minimal": "int score = 100;\nauto ratio = 4.5;",
        "complete": "#include <iostream>\n\nint main() {\n    int score = 100;\n    auto ratio = 4.5; // Déduction de type à la compilation\n    std::cout << score << \" \" << ratio;\n    return 0;\n}",
        "best_practices": "Toujours initialiser vos variables à la déclaration pour éviter un comportement indéfini (valeur résiduelle en mémoire).",
        "pitfalls": "Confondre l'initialisation par copie (int x = 5) et l'initialisation uniforme (int x{5}) introduite en C++11.",
        "notes": "Le mot-clé 'auto' ne signifie pas que le type change en cours de route. Le type est figé à la compilation."
      },
      "csharp": {
        "minimal": "int score = 100;\nvar ratio = 4.5;",
        "complete": "using System;\n\nclass Program {\n    static void Main() {\n        int score = 100;\n        var ratio = 4.5; // Déduction de type équivalente au auto C++\n        Console.WriteLine($\"{score} {ratio}\");\n    }\n}",
        "best_practices": "Utiliser 'var' uniquement lorsque le type sous-jacent est évident à la lecture du code (ex: new List<int>()).",
        "pitfalls": "Tenter d'utiliser 'var' pour une variable membre de classe sans lui assigner de valeur immédiate.",
        "notes": "Tout comme en C++, le mot-clé 'var' préserve un typage fort et statique."
      },
      "python": {
        "minimal": "score = 100\nratio = 4.5",
        "complete": "def main():\n    score: int = 100  # Type hinting (indicatif seulement)\n    ratio = 4.5\n    print(f\"{score} {ratio}\")\n\nif __name__ == \"__main__\":\n    main()",
        "best_practices": "Utiliser les annotations de type (Type Hinting) pour aider les IDE et les outils de vérification statique comme mypy.",
        "pitfalls": "Réassigner une variable à un type complètement différent en pensant qu'elle conserve des propriétés de l'ancien type.",
        "notes": "Python est à typage dynamique mais fort : vous ne pouvez pas additionner une chaîne et un entier sans transtypage explicite."
      }
    }
  },
  {
    "id": "types_primitives_01",
    "chapter": "2. Types et opérateurs",
    "category": "Types",
    "name": "Types Primitifs et Taille Mémoire",
    "description": "Analyse de la représentation machine des types entiers, flottants et booléens. Le langage pivot (C++) se distingue par des tailles de types qui dépendent de l'architecture cible.",
    "mermaid_diagram": "flowchart TD\nA[Types Primitifs] --> B[Entiers: int, long]\nA --> C[Flottants: float, double]\nA --> D[Booléens: bool]",
    "related_concepts": ["base_variables_01"],
    "languages": {
      "cpp": {
        "minimal": "uint32_t exact_int = 42;\ndouble pi = 3.14159;",
        "complete": "#include <iostream>\n#include <cstdint> // Requis pour les types à taille fixe\n\nint main() {\n    std::cout << \"Taille int standard : \" << sizeof(int) << \" octets\\n\";\n    uint64_t grosEntier = 10000000000ULL;\n    std::cout << \"Taille fixe 64 bits : \" << sizeof(grosEntier) << \" octets\\n\";\n    return 0;\n}",
        "best_practices": "Pour du code portable (systèmes embarqués/jeux vidéo), privilégier les types à taille explicite de <cstdint> comme int32_t ou uint64_t au lieu des types natifs int/long.",
        "pitfalls": "Présumer qu'un 'long' fait toujours 8 octets. Sur Windows 64-bits (LLP64), il fait 4 octets, tandis que sur Linux 64-bits (LP64), il fait 8 octets.",
        "notes": "L'opérateur sizeof() est évalué entièrement au moment de la compilation."
      },
      "csharp": {
        "minimal": "uint exactInt = 42;\ndouble pi = 3.14159;",
        "complete": "using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine($\"int C# fait toujours : {sizeof(int)} octets\");\n        long grosEntier = 10000000000L; // long est TOUJOURS 64 bits en C#\n        Console.WriteLine($\"long C# fait : {sizeof(long)} octets\");\n    }\n}",
        "best_practices": "Utiliser les alias CTS (int, long, short) plutôt que les structures de l'espace System (Int32, Int64, Int16) pour une syntaxe plus propre.",
        "pitfalls": "Le mot-clé sizeof ne fonctionne par défaut que dans un contexte marqué 'unsafe' pour les structures personnalisées, mais fonctionne sur les primitifs.",
        "notes": "Contrairement au C++, la spécification CLI du C# garantit la taille exacte des types primitifs peu importe l'OS cible."
      },
      "python": {
        "minimal": "valeur = 42\npi = 3.14159",
        "complete": "import sys\n\ndef main():\n    gros_entier = 10**50 # Pas de débordement d'entier en Python\n    print(f\"Valeur : {gros_entier}\")\n    print(f\"Empreinte mémoire int de base : {sys.getsizeof(0)} octets\")\n\nif __name__ == \"__main__\":\n    main()",
        "best_practices": "Ne pas s'inquiéter de la taille limite des entiers, Python bascule automatiquement sur des entiers de précision arbitraire.",
        "pitfalls": "Penser qu'un int en Python est aussi léger qu'en C++. En raison de sa nature d'objet, un simple '0' pèse plus de 24 octets en mémoire.",
        "notes": "Le type float de Python correspond techniquement à un 'double' (64 bits) du langage C/C++."
      }
    } 
  },
  {
    "id": "types_references_02",
    "chapter": "2. Types et opérateurs",
    "category": "Gestion Mémoire",
    "name": "Pointeurs, Références et Sémantique",
    "description": "Étude du passage par valeur, par référence ou par adresse. C++ offre un contrôle total (Stack vs Heap), C# sépare strictement Value Types (struct) et Reference Types (class), tandis que Python traite tout comme une référence d'objet (pass-by-assignment).",
    "related_concepts": ["base_variables_01", "types_primitives_01"],
    "languages": {
      "cpp": {
        "minimal": "int val = 42;\nint* ptr = &val;  // Pointe sur l'adresse\nint& ref = val;  // Alias direct",
        "complete": "#include <iostream>\n\nvoid modifier(int* p, int& r) {\n    *p += 10; // Modification par pointeur (déréférencement)\n    r += 10;  // Modification par référence (directe)\n}\n\nint main() {\n    int x = 10;\n    modifier(&x, x);\n    std::cout << \"x final : \" << x << \"\\n\"; // Affiche 30\n    return 0;\n}",
        "best_practices": "Préférer les références (const T&) pour le passage de gros objets afin d'éviter les copies inutiles, et réserver les pointeurs pour le polymorphisme ou les cas où la valeur peut être nulle (nullptr).",
        "pitfalls": "Créer un pointeur suspendu (dangling pointer) en retournant l'adresse d'une variable locale à une fonction qui va être détruite à la sortie.",
        "notes": "Une référence C++ ne peut pas être nulle et ne peut pas être réassignée à un autre objet après son initialisation, contrairement à un pointeur."
      },
      "csharp": {
        "minimal": "void Modif(ref int x) { x += 10; }\n// Objets (class) passés par référence nativement",
        "complete": "using System;\n\nclass Personne { public string Nom { get; set; } }\n\nclass Program {\n    static void ModifierValeur(ref int v) { v += 10; }\n    static void ModifierObjet(Personne p) { p.Nom = \"Modifier\"; }\n\n    static void Main() {\n        int n = 10;\n        ModifierValeur(ref n); // Requis explicite 'ref'\n        \n        Personne pers = new Personne { Nom = \"Initial\" };\n        ModifierObjet(pers); // Passé par référence de pointeur d'objet\n        Console.WriteLine($\"{n} - {pers.Nom}\"); // 20 - Modifier\n    }\n}",
        "best_practices": "Utiliser le mot-clé 'in' pour passer des structures (struct) par référence en lecture seule afin d'optimiser les performances sans risquer de modification.",
        "pitfalls": "Confondre une structure (Value Type, copié par valeur) et une classe (Reference Type, partagé par référence) lors d'une assignation.",
        "notes": "C# possède un pointeur managé en interne. Le mot-clé 'ref' simule fidèlement le comportement de la référence C++."
      },
      "python": {
        "minimal": "def modif(liste):\n    liste.append(42) # Modifie l'objet original",
        "complete": "def modifier_mutables(liste_ref, entier_val):\n    liste_ref.append(99) # Objet mutable -> modifié en place\n    entier_val += 10     # Objet immuable -> réassignation locale\n\nif __name__ == \"__main__\":\n    MaListe = [1, 2]\n    MonInt = 10\n    modifier_mutables(MaListe, MonInt)\n    print(f\"{MaListe} - {MonInt}\") # [1, 2, 99] - 10 (L'entier n'a pas bougé)",
        "best_practices": "Ne jamais utiliser d'objets mutables (comme une liste vide `[]`) comme valeur par défaut d'un argument de fonction.",
        "pitfalls": "Penser qu'écrire `a = b` effectue une copie d'une liste. En Python, cela crée seulement une deuxième référence pointant vers le même objet en mémoire.",
        "notes": "En Python, l'évaluation est appelée 'Pass-by-object-reference'. Tout dépend si l'objet passé est mutable (dict, list) ou immuable (int, string, tuple)."
      }
    }
  },
  {
    "id": "types_casting_02",
    "chapter": "2. Types et opérateurs",
    "category": "Opérateurs",
    "name": "Transtypage et Conversions (Casting)",
    "description": "Comparaison des mécanismes de conversion de types. Analyse de la sécurité des casts (statiques vs dynamiques) pour éviter les pertes de données ou les crashs à l'exécution.",
    "mermaid_diagram": "",
    "related_concepts": ["types_primitives_01"],
    "languages": {
      "cpp": {
        "minimal": "double pi = 3.14;\nint i = static_cast<int>(pi);",
        "complete": "#include <iostream>\n\nclass Parent { public: virtual ~Parent() {} };\nclass Enfant : public Parent {};\n\nint main() {\n    double d = 9.81;\n    int entier = static_cast<int>(d); // Cast explicite et sûr à la compilation\n\n    Parent* p = new Enfant();\n    Enfant* e = dynamic_cast<Enfant*>(p); // Cast sécurisé avec RTTI pour objets polymorphes\n    if(e) std::cout << \"Cast réussi!\\n\";\n    \n    delete p;\n    return 0;\n}",
        "best_practices": "Bannir définitivement le cast à la C style `(int)valeur` au profit de `static_cast`, `reinterpret_cast` ou `dynamic_cast` qui affichent clairement l'intention et sont vérifiés par le compilateur.",
        "pitfalls": "Utiliser un `static_cast` pour descendre une hiérarchie de classes (downcasting) sans être certain du type réel de l'objet, préférez `dynamic_cast`.",
        "notes": "`dynamic_cast` renvoie `nullptr` si le cast de pointeur échoue, ou lève une exception si c'est un cast de référence."
      },
      "csharp": {
        "minimal": "double pi = 3.14;\nint i = (int)pi;\nEnfant e = p as Enfant; // Sûr, renvoie null si échec",
        "complete": "using System;\n\nclass Parent {}\nclass Enfant : Parent {}\n\nclass Program {\n    static void Main() {\n        double d = 9.81;\n        int entier = (int)d; // Cast explicite standard\n\n        Parent p = new Enfant();\n        \n        // Approche moderne et ultra-sûre avec le Pattern Matching\n        if (p is Enfant e) {\n            Console.WriteLine(\"Cast réussi automatiquement!\");\n        }\n    }\n}",
        "best_practices": "Privilégier l'opérateur `is` avec pattern matching ou le mot-clé `as` plutôt qu'un cast brutal entre parenthèses, pour s'épargner des exceptions `InvalidCastException`.",
        "pitfalls": "Tenter un cast direct `(int)` sur une chaîne de caractères. Pour cela, il faut obligatoirement utiliser `int.Parse()` ou `int.TryParse()`.",
        "notes": "L'opérateur `as` ne fonctionne qu'avec les types de référence ou les types nullable."
      },
      "python": {
        "minimal": "pi = 3.14\ni = int(pi) # Conversion via constructeur",
        "complete": "def tester_cast():\n    chaine = \"123\"\n    entier = int(chaine) # Conversion de str à int\n    \n    try:\n        erreur = int(\"texte\")\n    except ValueError as e:\n        print(f\"Échec de conversion : {e}\")\n\nif __name__ == \"__main__\":\n    tester_cast()",
        "best_practices": "Toujours encapsuler vos conversions de chaînes utilisateur (input) dans un bloc `try/except ValueError` car Python n'a pas d'équivalent natif silencieux à un `TryParse`.",
        "pitfalls": "Penser que `bool(\"False\")` renvoie `False`. En Python, toute chaîne non vide est évaluée à `True`.",
        "notes": "En Python, il n'y a pas de 'cast' au sens système ou binaire. Appeler `int()` ou `str()` revient à instancier un nouvel objet de cette classe à partir des données fournies."
      }
    }
  },
  {
    "id": "ctrl_conditional_01",
    "chapter": "3. Structures de contrôle",
    "category": "Conditionnelles",
    "name": "Du Switch au Pattern Matching",
    "description": "Évolution des embranchements multiples. Du switch-case traditionnel basé sur des entiers (C++) vers les expressions de filtrage de motifs puissantes de C# et le structural pattern matching (match-case) introduit en Python 3.10.",
    "related_concepts": ["base_variables_01"],
    "languages": {
      "cpp": {
        "minimal": "switch(val) {\n    case 1: std::cout << \"Un\"; break;\n    default: std::cout << \"Autre\";\n}",
        "complete": "#include <iostream>\n\nenum class Statut { EnCours, Succes, Echec };\n\nint main() {\n    Statut s = Statut::Succes;\n    \n    // Switch classique. Obligation de gérer le 'break' pour éviter le fallthrough\n    switch (s) {\n        case Statut::EnCours:\n            std::cout << \"Opération en cours...\\n\";\n            break;\n        case Statut::Succes:\n            std::cout << \"Terminé avec succès !\\n\";\n            break;\n        case Statut::Echec:\n            std::cout << \"Erreur détectée.\\n\";\n            break;\n    }\n    return 0;\n}",
        "best_practices": "Toujours utiliser des 'enum class' (scoped enums) avec switch. Si vous ne mettez pas de clause 'default', la plupart des compilateurs modernes lèveront un warning s'il manque une valeur de l'énumération.",
        "pitfalls": "Oublier le mot-clé 'break', ce qui provoque l'exécution en cascade (fallthrough) du code des 'case' suivants.",
        "notes": "Le switch C++ est très performant car il est souvent optimisé par le compilateur sous forme de table de sauts (jump table) en mémoire, mais il ne fonctionne que sur des types intégraux ou des enums."
      },
      "csharp": {
        "minimal": "string res = val switch { 1 => \"Un\", _ => \"Autre\" };",
        "complete": "using System;\n\nclass Program {\n    static void Main() {\n        object commande = (Statut: \"Expedie\", Poids: 12.5);\n\n        // Expression switch moderne avec Pattern Matching (C# 8+)\n        string message = commande switch {\n            (\"EnCours\", _)          => \"La commande est en route.\",\n            (\"Expedie\", double p) when p > 10 => \"Colis lourd expédié !\",\n            (\"Expedie\", _)          => \"Colis standard expédié.\",\n            _                        => \"Statut inconnu.\"\n        };\n\n        Console.WriteLine(message);\n    }\n}",
        "best_practices": "Préférer les expressions switch (`variable switch { ... }`) aux instructions switch classiques. Elles sont plus concises, éliminent le besoin de `break` et retournent directement une valeur.",
        "pitfalls": "L'ordre des motifs (patterns) est crucial. Mettre un motif général avant un motif spécifique (comme utiliser `when`) désactivera le motif spécifique et le compilateur lèvera une erreur.",
        "notes": "Le pattern matching de C# est l'un des plus robustes du marché, capable de filtrer sur les types, les propriétés d'objets, ou de déconstruire des tuples."
      },
      "python": {
        "minimal": "match val:\n    case 1: print(\"Un\")\n    case _: print(\"Autre\")",
        "complete": "def analyser_action(commande):\n    # Structural Pattern Matching (Python 3.10+)\n    match commande:\n        case {\"statut\": \"EnCours\"}:\n            return \"Traitement actif.\"\n        case {\"statut\": \"Expedie\", \"details\": {\"prioritaire\": True}}:\n            return \"Livraison express en cours.\"\n        case [x, y]:\n            return f\"Coordonnées de livraison reçues : {x}, {y}\"\n        case _:\n            return \"Format de commande non reconnu.\"\n\nif __name__ == \"__main__\":\n    print(analyser_action({\"statut\": \"Expedie\", \"details\": {\"prioritaire\": True}}))",
        "best_practices": "Utiliser le joker `_` pour capturer tous les cas restants (équivalent du default), sinon si aucun motif ne correspond, aucune action n'est entreprise.",
        "pitfalls": "Confondre le `match-case` avec une série de `if/elif` basiques. `match` inspecte la *structure* profonde de vos données (dictionnaires, listes, objets), pas seulement les valeurs.",
        "notes": "Contrairement au C++, il n'y a aucun risque de 'fallthrough' en Python. Dès qu'un cas matche, l'exécution du bloc s'arrête."
      }
    }
  },
  {
    "id": "ctrl_loops_01",
    "chapter": "3. Structures de contrôle",
    "category": "Boucles",
    "name": "Boucles et Itérateurs",
    "description": "Analyse des structures itératives. Confrontation entre la boucle for classique (indexée numériquement) et les mécanismes modernes de parcours de collections par itérateurs.",
    "languages": {
      "cpp": {
        "minimal": "for(int i=0; i<5; ++i) {}\nfor(auto x : collection) {}",
        "complete": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> liste = {10, 20, 30};\n\n    // 1. Range-based for loop (C++11+) - Copie ou référence\n    for (const auto& elem : liste) {\n        std::cout << elem << \" \";\n    }\n\n    // 2. Boucle classique par index\n    for (size_t i = 0; i < liste.size(); ++i) {\n        liste[i] *= 2; // Modification possible\n    }\n    return 0;\n}",
        "best_practices": "Dans une boucle basée sur l'intervalle (range-for), utilisez toujours `const auto&` pour éviter des copies d'objets lourds, sauf si vous manipulez des types primitifs légers (`int`, `char`).",
        "pitfalls": "Tenter de modifier la taille d'un `std::vector` (via `push_back`) à l'intérieur d'une boucle range-for. Cela invalide les itérateurs internes et provoque un crash ou un comportement indéfini.",
        "notes": "La boucle range-for est un sucre syntaxique qui appelle en réalité les méthodes membres `.begin()` et `.end()` de la collection."
      },
      "csharp": {
        "minimal": "for(int i=0; i<5; i++) {}\nforeach(var x in liste) {}",
        "complete": "using System;\n\nclass Program {\n    static void Main() {\n        var liste = new System.Collections.Generic.List<int> { 10, 20, 30 };\n\n        // foreach utilise l'interface IEnumerable\n        foreach (int elem in liste) {\n            Console.WriteLine(elem);\n            // elem *= 2; // INTERDIT : La variable d'itération est en lecture seule\n        }\n\n        // Boucle classique pour modification\n        for (int i = 0; i < liste.Count; i++) {\n            liste[i] *= 2;\n        }\n    }\n}",
        "best_practices": "Utiliser `foreach` par défaut pour sa sécurité et sa lisibilité. Ne basculer sur un `for` indexé que si vous avez impérativement besoin de l'index ou de modifier la collection en place.",
        "pitfalls": "Essayer de supprimer ou d'ajouter un élément dans une liste pendant un `foreach`. Cela lèvera instantanément une exception `InvalidOperationException`.",
        "notes": "Sous le capot, `foreach` génère un bloc `try/finally` pour appeler la méthode `Dispose()` sur l'itérateur afin de libérer proprement les ressources."
      },
      "python": {
        "minimal": "for i in range(5):\nfor x in liste:",
        "complete": "def iterer_elements():\n    fruits = [\"pomme\", \"banane\", \"orange\"]\n\n    # Itération sémantique avec récupération de l'index via enumerate()\n    for index, fruit in enumerate(fruits):\n        print(f\"Index {index} : {fruit}\")\n\n    # Compréhension de liste (Idiome puissant Python)\n    fruits_majuscule = [f.upper() for f in fruits]\n    print(fruits_majuscule)\n\nif __name__ == \"__main__\":\n    iterer_elements()",
        "best_practices": "Bannir l'utilisation de `for i in range(len(liste))` pour lire une collection. Utilisez plutôt l'itération directe `for item in liste`, ou `enumerate()` si l'index est requis.",
        "pitfalls": "Modifier les clés d'un dictionnaire tout en itérant dessus. Python lèvera une erreur `RuntimeError: dictionary changed size during iteration`.",
        "notes": "En Python, la boucle `for` fonctionne exclusivement comme un 'foreach'. Le mot-clé `range()` ne crée pas une liste en mémoire, mais un générateur léger (itérable) qui produit les nombres à la volée."
      }
    }
  },
  {
    "id": "func_syntax_01",
    "chapter": "4. Fonctions et Modularité",
    "category": "Signatures",
    "name": "Signatures et Paramètres",
    "description": "Analyse de la déclaration des fonctions. Confrontation entre le besoin de prototypage rigoureux (C++), les paramètres nommés et optionnels de C#, et la flexibilité extrême de Python (arguments positionnels, nommés, variadiques *args et **kwargs).",
    "related_concepts": ["base_hello_world", "types_references_02"],
    "languages": {
      "cpp": {
        "minimal": "void saluer(std::string nom = \"Invité\");\n// Nécessite souvent un fichier d'en-tête (.h)",
        "complete": "#include <iostream>\n#include <string>\n\n// Argument par défaut défini dans le prototype\nvoid afficherMessage(const std::string& msg, int priorite = 1) {\n    std::cout << \"[\" << priorite << \"] \" << msg << \"\\n\";\n}\n\nint main() {\n    afficherMessage(\"Calcul en cours\"); // Utilise la priorité par défaut (1)\n    afficherMessage(\"Alerte système\", 5);\n    // afficherMessage(priorite=3, msg=\"Erreur\"); // INTERDIT : Pas d'arguments nommés avant C++20 (désigné initializers exclus)\n    return 0;\n}",
        "best_practices": "Déclarer les valeurs par défaut uniquement dans le fichier d'en-tête (.h) et pas dans le fichier source (.cpp) pour éviter les erreurs de redéfinition du compilateur.",
        "pitfalls": "Placer un argument par défaut avant un argument obligatoire. En C++, tous les paramètres avec valeur par défaut doivent impérativement être positionnés à la toute fin de la signature.",
        "notes": "C++ gère la surcharge de fonctions (Overloading) : vous pouvez définir plusieurs fonctions portant le même nom si leurs types de paramètres diffèrent."
      },
      "csharp": {
        "minimal": "void Saluer(string nom = \"Invité\") {};\nSaluer(nom: \"Alice\"); // Argument nommé",
        "complete": "using System;\n\nclass Program {\n    static void ConfigurerConnexion(string hote, int port = 80, bool strict = false) {\n        Console.WriteLine($\"Connexion à {hote}:{port} (Strict: {strict})\");\n    }\n\n    static void Main() {\n        // Utilisation des arguments nommés pour ignorer le paramètre intermédiaire 'port'\n        ConfigurerConnexion(\"127.0.0.1\", strict: true);\n    }\n}",
        "best_practices": "Exploiter les arguments nommés lors de l'appel de fonctions prenant de nombreux paramètres optionnels (ou des booléens successifs) afin de clarifier immédiatement l'intention du code.",
        "pitfalls": "Omettre de mettre à jour la valeur par défaut dans une bibliothèque partagée externe : ces valeurs sont résolues à la compilation chez le client appelant (risque de désynchronisation de constante).",
        "notes": "Comme le C++, C# prend pleinement en charge la surcharge de méthodes, résolue de manière statique lors de la compilation."
      },
      "python": {
        "minimal": "def saluer(nom=\"Invité\"):\ndef dynamique(*args, **kwargs):",
        "complete": "def creer_profil(pseudo, *badges, statut=\"Actif\", **metadonnees):\n    print(f\"User: {pseudo} ({statut})\")\n    print(f\"Badges: {badges}\") # Tuple\n    print(f\"Meta: {metadonnees}\") # Dictionnaire\n\nif __name__ == \"__main__\":\n    # Appel flexible mélangeant positionnel, variadique et arguments nommés\n    creer_profil(\"Neo\", \"Admin\", \"Beta\", statut=\"Premium\", langue=\"fr\", theme=\"dark\")",
        "best_practices": "Utiliser l'opérateur `/` et `*` dans la signature (Python 3.8+) pour forcer certains arguments à être exclusivement positionnels ou exclusivement nommés.",
        "pitfalls": "Réutiliser un paramètre par défaut mutable comme `def ajouter(val, liste=[])`. La liste est instanciée une seule fois à la définition de la fonction, et accumulera les données entre chaque appel indépendant.",
        "notes": "Python ne supporte pas la surcharge de fonctions native par signature. Définir deux fonctions avec le même nom écrasera simplement la première."
      }
    }
  },
  {
    "id": "func_lambdas_02",
    "chapter": "4. Fonctions et Modularité",
    "category": "Programmation Fonctionnelle",
    "name": "Fonctions Anonymes et Lambdas",
    "description": "L'usage des fonctions comme des citoyens de première classe. Exploration des expressions lambdas, des règles de capture d'état (closures) et de leur intégration dans les algorithmes de filtrage.",
    "related_concepts": ["func_syntax_01"],
    "languages": {
      "cpp": {
        "minimal": "auto f = [](int x) { return x * 2; };\n// [capture](params) -> return_type { corps };",
        "complete": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    int multiplicateur = 3;\n    std::vector<int> nombres = {1, 2, 3};\n\n    // Capture explicite de 'multiplicateur' par valeur [multiplicateur] ou par référence [&]\n    std::for_each(nombres.begin(), nombres.end(), [multiplicateur](int& n) {\n        n *= multiplicateur;\n    });\n\n    std::cout << nombres[0]; // Affiche 3\n    return 0;\n}",
        "best_practices": "Éviter la capture globale par référence `[&]` dans les environnements asynchrones ou multithread pour ne pas créer d'accès concurrents invalides vers des variables locales détruites.",
        "pitfalls": "Tenter de modifier une variable capturée par valeur dans une lambda sans ajouter le mot-clé explicite `mutable` après la liste de paramètres.",
        "notes": "Une lambda C++ génère en arrière-plan un foncteur unique (une classe anonyme dotée de l'opérateur parenthèse surchargé `operator()`)."
      },
      "csharp": {
        "minimal": "Func<int, int> f = x => x * 2;\n// Utilisation fréquente avec LINQ",
        "complete": "using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        int seuil = 15;\n        var scores = new List<int> { 10, 22, 14, 30 };\n\n        // Expression lambda capturant automatiquement 'seuil' (closure managée)\n        var resultat = scores.Where(s => s > seuil).ToList();\n\n        Console.WriteLine(string.Join(\", \", resultat)); // 22, 30\n    }\n}",
        "best_practices": "Utiliser le mot-clé `static` devant une lambda (C# 9+) si celle-ci n'a pas besoin de capturer l'état local, évitant ainsi des allocations mémoire invisibles et inutiles sur le tas.",
        "pitfalls": "Capturer la variable d'itération d'une boucle (variable modifiée en continu). La lambda évaluera la valeur finale de la variable au moment de son *exécution*, pas de sa capture.",
        "notes": "Les lambdas C# se transforment soit en délégués anonymes (du code exécutable), soit en arbres d'expressions (Expression Trees) analysables pour générer du SQL (Entity Framework)."
      },
      "python": {
        "minimal": "f = lambda x: x * 2\n# Restreint à une expression unique",
        "complete": "def filtrer_scores():\n    seuil = 15\n    scores = [10, 22, 14, 30]\n\n    // Lambda anonyme combinée avec la fonction native filter()\n    resultat = list(filter(lambda s: s > seuil, scores))\n    print(resultat) # [22, 30]\n\nif __name__ == \"__main__\":\n    filtrer_scores()",
        "best_practices": "Ne pas assigner une expression lambda à une variable (`f = lambda x: ...`). Si vous avez besoin de nommer la fonction, utilisez l'instruction standard `def f(x):` plus lisible et traçable lors d'un debug.",
        "pitfalls": "Tenter d'inclure des structures complexes (comme des boucles ou des assignations complexes) dans une lambda. En Python, le corps d'une lambda est strictement limité à une unique expression retournée.",
        "notes": "Les closures en Python évaluent les variables externes par liaison tardive (late binding). La variable est recherchée dans la portée parente lors de l'appel effectif."
      }
    }
  },
  {
    "id": "err_exceptions_01",
    "chapter": "5. Gestion des erreurs",
    "category": "Exceptions",
    "name": "Levée et Capture d'Exceptions",
    "description": "Mécanisme de propagation des erreurs. Analyse du coût de déroulement de la pile (stack unwinding) en C++, des exceptions surveillées/non surveillées et de la structure de capture multi-blocs.",
    "related_concepts": ["base_hello_world"],
    "languages": {
      "cpp": {
        "minimal": "try {\n    throw std::runtime_error(\"Erreur\");\n} catch(const std::exception& e) {}",
        "complete": "#include <iostream>\n#include <stdexcept>\n\nvoid verifierAge(int age) {\n    if (age < 18) {\n        throw std::invalid_argument(\"Accès refusé : Mineur.\");\n    }\n}\n\nint main() {\n    try {\n        verifierAge(15);\n    } catch (const std::invalid_argument& e) {\n        std::cerr << \"Erreur d'argument : \" << e.what() << \"\\n\";\n    } catch (const std::exception& e) {\n        std::cerr << \"Erreur générale : \" << e.what() << \"\\n\";\n    }\n    return 0;\n}",
        "best_practices": "Toujours attraper les exceptions par référence constante (`const std::exception& e`) pour éviter le phénomène de découpage d'objet (slicing) et optimiser les performances.",
        "pitfalls": "Lancer des types primitifs bruts comme `throw 404;`. Privilégiez toujours des classes dérivées de `std::exception` pour préserver la cohérence applicative.",
        "notes": "Si une exception n'est pas capturée, la fonction globale `std::terminate` est appelée, coupant court à l'exécution du programme."
      },
      "csharp": {
        "minimal": "try {\n    throw new ArgumentException(\"Erreur\");\n} catch(Exception e) {} finally {}",
        "complete": "using System;\n\nclass Program {\n    static void Main() {\n        try {\n            string texte = null;\n            Console.WriteLine(texte.Length); // Lève une NullReferenceException\n        } catch (NullReferenceException e) {\n            Console.WriteLine($\"Référence nulle : {e.Message}\");\n        } catch (Exception e) when (e.Message.Contains(\"critique\")) {\n            // Filtre d'exception (Exception Filter) via le mot-clé 'when'\n            Console.WriteLine(\"Erreur critique interceptée.\");\n        } finally {\n            Console.WriteLine(\"Nettoyage toujours exécuté.\");\n        }\n    }\n}",
        "best_practices": "Utiliser le mot-clé simple `throw;` (sans spécifier l'objet exception) dans un bloc catch pour re-propager l'erreur tout en préservant l'intégralité de la trace de la pile (StackTrace).",
        "pitfalls": "Intercepter l'exception de base `Exception` de manière globale sans traiter l'erreur, masquant ainsi des bugs profonds de l'application (comme une corruption de mémoire).",
        "notes": "Contrairement à Java, C# ne possède pas d'exceptions vérifiées (Checked Exceptions) à la compilation ; toutes les exceptions sont résolues à l'exécution."
      },
      "python": {
        "minimal": "try:\n    raise ValueError(\"Erreur\")\nexcept Exception as e:\nfinally:",
        "complete": "def diviser(a, b):\n    try:\n        res = a / b\n    except ZeroDivisionError as e:\n        print(f\"Division par zéro annulée : {e}\")\n    except TypeError:\n        print(\"Types incompatibles passés en paramètres.\")\n    else:\n        print(f\"Succès ! Le résultat est {res}\") # Exécuté uniquement si aucune exception\n    finally:\n        print(\"Bloc de clôture systématique.\")\n\nif __name__ == \"__main__\":\n    diviser(10, 0)",
        "best_practices": "Exploiter intelligemment le bloc optionnel `else:` pour y placer le code qui ne doit s'exécuter que si le bloc `try` n'a rencontré absolument aucune erreur.",
        "pitfalls": "Écrire un bloc `except:` nu (sans spécifier de classe d'exception). Cela interceptera également les signaux système comme `SystemExit` ou `KeyboardInterrupt` (Ctrl+C).",
        "notes": "En Python, la philosophie générale est 'EAFP' (Easier to Ask for Forgiveness than Permission) : on tente l'opération dans un bloc try plutôt que de multiplier les vérifications en amont."
      }
    }
  },
  {
    "id": "err_raii_02",
    "chapter": "5. Gestion des erreurs",
    "category": "Gestion Mémoire",
    "name": "Libération des Ressources (RAII, Using, With)",
    "description": "Comparaison de la gestion déterministe et non déterministe des ressources (fichiers, sockets, locks). Le concept de RAII en C++ garantit la libération dès la sortie de portée, face aux structures sémantiques managées de C# et Python.",
    "related_concepts": ["types_references_02", "err_exceptions_01"],
    "languages": {
      "cpp": {
        "minimal": "std::ofstream fichier(\"test.txt\");\n// Fermeture automatique à la sortie du bloc (RAII)",
        "complete": "#include <iostream>\n#include <fstream>\n#include <mutex>\n\nvoid traiterFichier() {\n    std::mutex monMutex;\n    \n    // RAII pur : le verrouillage se fait à l'instanciation\n    std::lock_guard<std::mutex> verrou(monMutex);\n    \n    std::ofstream fichier(\"journal.txt\");\n    fichier << \"Écriture sécurisée.\\n\";\n    \n    // À la sortie de la fonction, 'fichier' et 'verrou' sont détruits\n    // dans l'ordre inverse de leur création. Libération 100% garantie, même si un crash survient.\n}",
        "best_practices": "Lier systématiquement la durée de vie de toute ressource système à un objet stocké sur la pile (Stack). Ne jamais appeler `delete` manuellement, privilégier les pointeurs intelligents (`std::unique_ptr`).",
        "pitfalls": "Allouer une ressource brute avec `new` et lever une exception juste après : le destructeur de la classe ne sera jamais appelé et la ressource fuira en mémoire.",
        "notes": "Le RAII (Resource Acquisition Is Initialization) élimine le besoin d'une structure 'finally' dédiée en C++."
      },
      "csharp": {
        "minimal": "using var fichier = new StreamWriter(\"t.txt\");\n// Libéré à la fin de la méthode (C# 8+)",
        "complete": "using System;\nusing System.IO;\n\nclass Program {\n    static void Main() {\n        // Structure classique garantissant le Dispose() en fin de bloc\n        using (StreamWriter writer = new StreamWriter(\"log.txt\")) {\n            writer.WriteLine(\"Fichier managé ouvert.\");\n        } // Fermeture automatique du flux ici\n        \n        // Syntaxe moderne de niveau instruction (C# 8+)\n        using var secondWriter = new StreamWriter(\"log2.txt\");\n        secondWriter.WriteLine(\"Syntaxe épurée.\");\n    } // 'secondWriter' est libéré proprement ici\n}",
        "best_practices": "Implémenter systématiquement l'interface `IDisposable` sur vos classes personnalisées si celles-ci détiennent ou manipulent des ressources non managées.",
        "pitfalls": "Oublier l'instruction `using` sur un objet lourd. L'objet attendra le passage aléatoire du Garbage Collector (GC) pour être nettoyé, bloquant inutilement la ressource.",
        "notes": "Le bloc `using` est un sucre syntaxique converti à la compilation en un bloc `try/finally` appelant la méthode `.Dispose()`."
      },
      "python": {
        "minimal": "with open(\"test.txt\", \"w\") as f:\n    f.write(\"Hello\") # Fermé en sortie de bloc",
        "complete": "class GestionnaireRessource:\n    def __enter__(self):\n        print(\"Connexion établie.\")\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print(\"Connexion fermée proprement.\")\n        return False # Laisse propager l'exception s'il y en a une\n\nif __name__ == \"__main__\":\n    # Déclaration du Context Manager avec l'instruction 'with'\n    with GestionnaireRessource() as res:\n        print(\"Exécution d'une requête...\")",
        "best_practices": "Toujours manipuler les fichiers natifs via l'instruction `with open(...)` pour s'assurer qu'aucun descripteur de fichier ne reste suspendu en cas de bug.",
        "pitfalls": "Oublier de retourner `False` (ou omettre le return) dans la méthode spéciale `__exit__` si vous désirez que les exceptions levées dans le bloc `with` se propagent normalement.",
        "notes": "L'instruction `with` repose sur le protocole des gestionnaires de contexte (Context Managers) matérialisé par les méthodes magiques `__enter__` et `__exit__`."
      }
    }
  },
  {
    "id": "poo_encapsulation_01",
    "chapter": "6. Programmation Orientée Objet",
    "category": "Classes",
    "name": "Classes et Encapsulation",
    "description": "Fondations de la POO. Étude des niveaux d'accessibilité (public, private, protected), de l'initialisation des états (constructeurs) et de l'implémentation des propriétés (Accesseurs/Mutateurs).",
    "related_concepts": ["types_references_02"],
    "languages": {
      "cpp": {
        "minimal": "class Compte {\nprivate:\n    double solde;\npublic:\n    Compte(double s) : solde(s) {}\n};",
        "complete": "#include <iostream>\n#include <string>\n\nclass Utilisateur {\nprivate: // Strictement accessible au sein de la classe\n    std::string nom;\n    int age;\n\npublic:\n    // Constructeur avec liste d'initialisation (plus performant)\n    Utilisateur(std::string n, int a) : nom(n), age(a) {}\n\n    // Getter/Setter traditionnels\n    std::string getNom() const { return nom; }\n    void setAge(int a) {\n        if (a >= 0) age = a;\n    }\n};\n\nint main() {\n    Utilisateur u(\"Alice\", 28);\n    u.setAge(29);\n    std::cout << u.getNom() << \" a \" << 29 << \" ans.\\n\";\n    return 0;\n}",
        "best_practices": "Utiliser systématiquement la liste d'initialisation dans les constructeurs (ex: `: nom(n)`) plutôt que des affectations dans le corps du constructeur pour éviter une double initialisation inutile.",
        "pitfalls": "Oublier le point-virgule `;` obligatoire à la fermeture de la déclaration d'une classe en C++. C'est une erreur de syntaxe fréquente qui génère des messages d'erreur très cryptiques.",
        "notes": "En C++, la seule différence entre une `class` et une `struct` est l'accès par défaut : les membres d'une `class` sont `private` par défaut, tandis que ceux d'une `struct` sont `public`."
      },
      "csharp": {
        "minimal": "public class Compte {\n    public double Solde { get; private set; }\n    public Compte(double s) => Solde = s;\n}",
        "complete": "using System;\n\npublic class CompteBancaire {\n    // Propriété auto-implémentée avec accesseur public et mutateur privé\n    public string Titulaire { get; }\n    \n    private double _solde; \n    public double Solde {\n        get => _solde;\n        set {\n            if (value >= 0) _solde = value;\n        }\n    }\n\n    public CompteBancaire(string titulaire, double soldeInitial) {\n        Titulaire = titulaire;\n        Solde = soldeInitial;\n    }\n}\n\nclass Program {\n    static void Main() {\n        var compte = new CompteBancaire(\"Bob\", 1500.0);\n        compte.Solde += 500; // Utilise le get et le set de manière transparente\n        Console.WriteLine($\"{compte.Titulaire} possède {compte.Solde}€\");\n    }\n}",
        "best_practices": "Préférer l'utilisation des propriétés auto-implémentées (`{ get; set; }`) plutôt que d'exposer des champs publics directs, afin de préserver la possibilité d'ajouter des règles de validation plus tard sans casser l'API.",
        "pitfalls": "Créer une boucle infinie dans un setter personnalisé en réassignant la propriété elle-même (`get => Solde; set => Solde = value;`) au lieu de cibler le champ privé de soutien (`_solde`).",
        "notes": "C# intègre la notion de propriétés nativement dans son langage (Properties), générant automatiquement des méthodes de récupération et de modification lors de la compilation en IL."
      },
      "python": {
        "minimal": "class Compte:\n    def __init__(self, solde):\n        self._solde = solde",
        "complete": "class Employe:\n    def __init__(self, nom, salaire):\n        self.nom = nom\n        self.__salaire = salaire # Nom tronqué (Name Mangling) pour simuler le privé\n\n    @property # Décorateur pour transformer la méthode en Getter\n    def salaire(self):\n        return self.__salaire\n\n    @salaire.setter # Décorateur pour le Setter\n    def salaire(self, valeur):\n        if valeur > 0:\n            self.__salaire = valeur\n\nif __name__ == \"__main__\":\n    emp = Employe(\"Charles\", 3000)\n    emp.salaire = 3500 # Appel transparent du setter\n    print(f\"{emp.nom} gagne {emp.salaire}€\")",
        "best_practices": "Suivre la convention Python : un seul underscore `_champ` indique aux autres développeurs qu'un attribut est interne (privé par convention), l'usage du double underscore `__champ` doit rester réservé pour éviter les collisions de noms lors de l'héritage.",
        "pitfalls": "Tenter d'accéder directement à un attribut en double underscore de l'extérieur via `emp.__salaire`. Python lève une `AttributeError` car il renomme dynamiquement la variable en `_Employe__salaire`.",
        "notes": "En Python, l'encapsulation stricte n'existe pas au niveau du runtime. Le langage repose sur la philosophie de la responsabilité du développeur ('We are all consenting adults here')."
      }
    }
  },
  {
    "id": "poo_polymorphism_02",
    "chapter": "6. Programmation Orientée Objet",
    "category": "Polymorphisme",
    "name": "Héritage, Polymorphisme et Contrats",
    "description": "Liaison dynamique et abstractions. Confrontation entre l'héritage multiple et le polymorphisme du C++, le modèle strict à héritage unique et interfaces de C#, et le Duck Typing flexible de Python.",
    "related_concepts": ["poo_encapsulation_01"],
    "languages": {
      "cpp": {
        "minimal": "class Animal {\n    virtual void crier() = 0; // Purement virtuelle (Interface)\n};",
        "complete": "#include <iostream>\n#include <vector>\n\nclass Animal {\npublic:\n    // Le mot-clé virtual active la table des fonctions virtuelles (vtable)\n    virtual void crier() const {\n        std::cout << \"* Bruit inconnu *\\n\";\n    }\n    virtual ~Animal() = default; // Destructeur virtuel CRUCIAL en héritage\n};\n\nclass Chien : public Animal {\npublic:\n    void crier() const override { // 'override' sécurise la redéfinition\n        std::cout << \"Wouf !\\n\";\n    }\n};\n\nint main() {\n    std::vector<Animal*> animaux = { new Animal(), new Chien() };\n    for (auto* a : animaux) {\n        a->crier(); // Résolution dynamique au runtime (Polymorphisme)\n        delete a;\n    }\n    return 0;\n}",
        "best_practices": "Ajouter systématiquement le mot-clé `override` lors de la redéfinition d'une méthode virtuelle dans une classe fille. Cela permet au compilateur de lever une erreur si la signature dans la classe mère change.",
        "pitfalls": "Oublier de rendre le destructeur de la classe de base `virtual`. Lors de la suppression d'un pointeur de type `Animal*` pointant vers un `Chien`, seul le destructeur de base sera appelé, provoquant des fuites de mémoire.",
        "notes": "C++ supporte l'héritage multiple direct (`class Chien : public Animal, public Domestique`). Pour créer des interfaces pures, on utilise des classes ne contenant que des fonctions virtuelles pures (`virtual void methode() = 0;`)."
      },
      "csharp": {
        "minimal": "interface IVolant { void Voler(); }\nclass Oiseau : IVolant { public void Voler() {} }",
        "complete": "using System;\nusing System.Collections.Generic;\n\npublic interface IDeplacable {\n    void Deplacer(); // Contrat d'interface\n}\n\npublic abstract class Vehicule : IDeplacable {\n    // Obligation de marquer virtual pour autoriser la redéfinition\n    public virtual void Klaxonner() => Console.WriteLine(\"Tut Tut !\");\n    public abstract void Deplacer(); // Méthode abstraite\n}\n\npublic class Voiture : Vehicule {\n    public override void Deplacer() => Console.WriteLine(\"La voiture roule sur la route.\");\n    public override void Klaxonner() => Console.WriteLine(\"Pouët Pouët !\");\n}\n\nclass Program {\n    static void Main() {\n        List<IDeplacable> elements = new List<IDeplacable> { new Voiture() };\n        foreach (var e in elements) {\n            e.Deplacer();\n        }\n    }\n}",
        "best_practices": "Nommer les interfaces en commençant obligatoirement par la lettre majuscule `I` (ex: `IDisposable`, `ICloneable`) conformément aux conventions strictes de l'écosystème .NET.",
        "pitfalls": "Oublier le mot-clé explicite `override` en redéfinissant une méthode virtuelle. Sans lui, C# considèrera que vous masquez volontairement la méthode parente et lèvera un warning (nécessite le mot-clé `new` pour être intentionnel).",
        "notes": "C# interdit l'héritage multiple de classes pour éviter le 'problème du diamant', mais autorise l'implémentation d'un nombre illimité d'interfaces."
      },
      "python": {
        "minimal": "class Canard:\n    def cancaner(self):\n        print(\"Quack\")",
        "complete": "class Canard:\n    def deplacer(self):\n        return \"Le canard nage sur l'eau.\"\n\nclass RobotVoiture:\n    def deplacer(self):\n        return \"Le robot roule sur le bitume.\"\n\ndef faire_avancer(entite):\n    # Duck Typing : On se fiche de la classe, seule la méthode compte !\n    print(entite.deplacer())\n\nif __name__ == \"__main__\":\n    elements = [Canard(), RobotVoiture()]\n    for elem in elements:\n        faire_avancer(elem)",
        "best_practices": "Pour imposer un contrat de manière formelle dans de grandes architectures Python, utiliser le module natif `abc` (Abstract Base Classes) avec le décorateur `@abstractmethod`.",
        "pitfalls": "Assumer aveuglément qu'un objet possède une méthode dans un environnement dynamique. Pensez à utiliser `getattr(obj, 'methode', None)` ou à intercepter une `AttributeError` en cas de doute.",
        "notes": "Le polymorphisme en Python repose intrinsèquement sur le 'Duck Typing' ('Si ça ressemble à un canard, que ça nage comme un canard et que ça cancane comme un canard, alors c'est un canard'). Python supporte également l'héritage multiple complet via un algorithme de résolution d'ordre appelé MRO (Method Resolution Order)."
      }
    }
  },
  {
    "id": "gen_generics_01",
    "chapter": "7. Généricité et Concurrence",
    "category": "Généricité",
    "name": "Programmation Générique",
    "description": "Comparaison des mécanismes d'abstraction de types. Les templates C++ (génération de code par métaprogrammation), les Generics de C# (préservés dans le IL et contraints par des interfaces) et le typage dynamique intrinsèque de Python.",
    "related_concepts": ["poo_polymorphism_02"],
    "languages": {
      "cpp": {
        "minimal": "template <typename T>\nT maximum(T a, T b) { return (a > b) ? a : b; }",
        "complete": "#include <iostream>\n\n// Définition d'un Template (Fonctionne avec tout type surchargeant l'opérateur <)\ntemplate <typename T>\nclass Boite {\nprivate:\n    T contenu;\npublic:\n    Boite(T c) : contenu(c) {}\n    T getContenu() const { return contenu; }\n};\n\nint main() {\n    Boite<int> boiteInt(123);\n    Boite<std::string> boiteStr(\"Hello C++\");\n    \n    std::cout << boiteInt.getContenu() << \" et \" << boiteStr.getContenu() << \"\\n\";\n    return 0;\n}",
        "best_practices": "Déclarer et implémenter l'intégralité de vos classes et fonctions templates dans les fichiers d'en-tête (.h ou .hpp). Le compilateur a besoin de voir la définition complète pour instancier le code pour chaque type demandé.",
        "pitfalls": "Générer une explosion de la taille du binaire (code bloat). Le compilateur duplique physiquement le code machine pour chaque type unique utilisé (`Boite<int>`, `Boite<double>`, etc.).",
        "notes": "Les templates C++ sont évalués à la compilation et permettent la métaprogrammation (calculs complexes effectués par le compilateur)."
      },
      "csharp": {
        "minimal": "public T Maximum<T>(T a, T b) where T : IComparable<T> {\n    return a.CompareTo(b) > 0 ? a : b;\n}",
        "complete": "using System;\n\n// Classe Générique avec contrainte de type (Constraint)\npublic class Entrepot<T> where T : class {\n    private T _stock;\n\n    public void Stocker(T element) {\n        _stock = element;\n        Console.WriteLine($\"Élément de type {typeof(T).Name} stocké.\");\n    }\n}\n\nclass Program {\n    static void Main() {\n        var entrepot = new Entrepot<string>(); // Valide car string est une classe\n        entrepot.Stocker(\"Conteneur A\");\n        // var erreur = new Entrepot<int>(); // INTERDIT : int est une struct, la contrainte 'where T : class' échoue.\n    }\n}",
        "best_practices": "Toujours appliquer des contraintes précises (`where T : struct`, `where T : new()`, etc.) sur vos types génériques pour exposer explicitement leurs capacités et éviter les casts d'objets lourds au runtime.",
        "pitfalls": "Tenter d'utiliser des opérateurs mathématiques comme `+` ou `-` directement sur un type générique `T` sans passer par les interfaces numériques modernes (introduites en C# 11 avec `INumber<T>`).",
        "notes": "Contrairement au C++, les Generics de C# ne dupliquent pas le code. Ils sont intégrés dans le moteur d'exécution (CLR) qui génère le code machine à la volée de manière ultra-optimisée."
      },
      "python": {
        "minimal": "def maximum(a, b):\n    return a if a > b else b # Générique par nature",
        "complete": "from typing import TypeVar, Generic\n\nT = TypeVar('T') # Déclaration d'une variable de type pour l'analyse statique\n\nclass PileGenerique(Generic[T]):\n    def __init__(self):\n        self._elements: list[T] = []\n\n    def empiler(self, element: T) -> None:\n        self._elements.append(element)\n\n    def depiler(self) -> T:\n        return self._elements.pop()\n\nif __name__ == \"__main__\":\n    # Les indications de type aident votre IDE (comme VS Code) à vous auto-compléter\n    ma_pile: PileGenerique[int] = PileGenerique()\n    ma_pile.empiler(42)\n    print(ma_pile.depiler())",
        "best_practices": "Utiliser le module natif `typing` pour annoter vos structures génériques. Bien que Python ignore ces types à l'exécution, cela permet à des outils comme `mypy` d'intercepter les bugs avant de lancer le script.",
        "pitfalls": "Penser que spécifier `ma_pile: PileGenerique[int]` va bloquer l'ajout d'une chaîne de caractères à l'exécution. Python reste dynamiquement typé, le script s'exécutera sans planter même si vous enfreignez la règle.",
        "notes": "En Python, la généricité est gratuite et omniprésente grâce au Duck Typing : toute fonction est implicitement générique tant que l'objet fourni supporte l'opération demandée."
      }
    }
  },
  {
    "id": "conc_async_02",
    "chapter": "7. Généricité et Concurrence",
    "category": "Concurrence",
    "name": "Asynchronisme (Async / Await)",
    "description": "Analyse des modèles de programmation asynchrone non-bloquante. Étude du modèle coopératif asynchrone de C# et Python face au modèle de threads et de promesses du C++ standard.",
    "related_concepts": ["func_lambdas_02"],
    "languages": {
      "cpp": {
        "minimal": "std::future<int> f = std::async([](){ return 42; });\nint res = f.get(); // Bloquant jusqu'à la fin",
        "complete": "#include <iostream>\n#include <future>\n\nint appelerServeur() {\n    // Simule une tâche lourde en tâche de fond\n    std::this_thread::sleep_for(std::chrono::milliseconds(500));\n    return 200;\n}\n\nint main() {\n    std::cout << \"Lancement de la requête...\\n\";\n    \n    // Exécution asynchrone via un thread du pool global\n    std::future<int> resultatFuture = std::async(std::launch::async, appelerServeur);\n    \n    std::cout << \"Le thread principal continue son travail...\\n\";\n    \n    // Récupération de la valeur (attend la fin de la tâche si nécessaire)\n    int codeStatut = resultatFuture.get();\n    std::cout << \"Réponse reçue : \" << codeStatut << \"\\n\";\n    return 0; \n}",
        "best_practices": "Toujours spécifier le flag `std::launch::async` lors de l'appel à `std::async`. Sans lui, le runtime peut décider de différer l'exécution de la tâche de manière synchrone jusqu'à l'appel de `.get()`.",
        "pitfalls": "Détruire l'objet `std::future` renvoyé par `std::async` sans stocker sa valeur. Son destructeur est bloquant par spécification, ce qui rendra votre code synchrone par accident.",
        "notes": "Depuis C++20, le langage intègre les coroutines natives (`co_await`, `co_return`), mais elles nécessitent l'écriture d'une tuyauterie bas-niveau complexe ou l'usage d'une bibliothèque tierce."
      },
      "csharp": {
        "minimal": "async Task<int> RecupererIdAsync() {\n    await Task.Delay(500);\n    return 42;\n}",
        "complete": "using System;\nusing System.Net.Http;\nusing System.Threading.Tasks;\n\nclass Program {\n    static async Task Main() {\n        Console.WriteLine(\"Téléchargement du site...\");\n        \n        using HttpClient client = new HttpClient();\n        // Libère le thread actuel pendant l'attente de la réponse réseau\n        string page = await client.GetStringAsync(\"https://example.com\");\n        \n        Console.WriteLine($\"Téléchargement fini. Longueur : {page.Length} caractères.\");\n    }\n}",
        "best_practices": "Suivre la règle d'or 'Async all the way' (Asynchrone de bout en bout). Éviter absolument de bloquer un thread asynchrone avec `.Result` ou `.Wait()`, car cela crée des risques majeurs de Deadlock (blocage mortel).",
        "pitfalls": "Déclarer une méthode asynchrone avec `async void` au lieu de `async Task`. Les méthodes `async void` empêchent l'appelant de capturer proprement les exceptions de la tâche et rompent le flux d'exécution.",
        "notes": "C# est le pionnier de la syntaxe `async/await`. Lors de la compilation, le code est transformé en une puissante machine à états gérée par la CLR."
      },
      "python": {
        "minimal": "async def tache():\n    await asyncio.sleep(0.5)\n    return 42",
        "complete": "import asyncio\n\nasync def simuler_telechargement(id_fichier):\n    print(f\"Début fichier {id_fichier}\")\n    await asyncio.sleep(1) # Pause non-bloquante pour la boucle d'événements\n    print(f\"Fin fichier {id_fichier}\")\n    return f\"Contenu {id_fichier}\"\n\nasync def main():\n    # Lancement de tâches concurrentes sur une seule boucle d'événements (Event Loop)\n    resultats = await asyncio.gather(\n        simuler_telechargement(1),\n        simuler_telechargement(2)\n    )\n    print(resultats)\n\nif __name__ == \"__main__\":\n    asyncio.run(main())",
        "best_practices": "Utiliser `asyncio.gather()` pour lancer vos coroutines en parallèle plutôt que de les faire attendre l'une après l'autre avec des `await` successifs, ce qui annulerait le gain de performance.",
        "pitfalls": "Mettre une fonction bloquante synchrone standard (comme `time.sleep(5)` ou une requête réseau synchrone) dans une fonction `async`. Cela gèle l'intégralité de la boucle d'événements (Event Loop), bloquant toutes les autres tâches.",
        "notes": "L'asynchronisme en Python s'exécute sur un seul et unique Thread à l'aide d'une boucle d'événements coordonnée. C'est idéal pour les opérations I/O (réseau, fichiers), mais inutile pour le calcul CPU pur en raison du GIL."
      }
    }
  },
  {
    "id": "struct_maps_01",
    "chapter": "8. Structures avancées",
    "category": "Collections",
    "name": "Tables Clés-Valeurs (Maps & Dicts)",
    "description": "Comparaison des dictionnaires et dictionnaires ordonnés. Analyse de la complexité algorithmique d'accès (O(1) pour le hachage vs O(log n) pour les arbres de recherche) et gestion de la mémoire.",
    "related_concepts": ["ctrl_loops_01"],
    "languages": {
      "cpp": {
        "minimal": "std::map<std::string, int> m1; // Ordonné (Arbre rouge-noir)\nstd::unordered_map<std::string, int> m2; // Hachage",
        "complete": "#include <iostream>\n#include <unordered_map>\n#include <string>\n\nint main() {\n    // O(1) en moyenne pour l'insertion et la recherche\n    std::unordered_map<std::string, double> prix = {\n        {\"Café\", 1.50},\n        {\"Thé\", 1.80}\n    };\n\n    prix[\"Croissant\"] = 1.20; // Insertion simple\n\n    // Recherche sécurisée pour éviter de créer une clé par accident\n    auto it = prix.find(\"Café\");\n    if (it != prix.end()) {\n        std::cout << \"Le prix du Café est : \" << it->second << \"€\\n\";\n    }\n    return 0;\n}",
        "best_practices": "Préférer `std::unordered_map` par défaut pour d'excellentes performances en temps constant. Ne basculer vers `std::map` que si vous avez un besoin impératif que vos clés soient triées en permanence.",
        "pitfalls": "Utiliser l'opérateur crochet `prix[\"Inconnu\"]` uniquement pour vérifier si une clé existe. Si la clé n'existe pas, C++ va automatiquement l'insérer avec sa valeur par défaut (0.0 pour un double), polluant votre map.",
        "notes": "`std::map` maintient l'ordre grâce à une structure d'arbre bicolore (Red-Black Tree), ce qui induit un surcoût mémoire et des accès en $O(\log n)$."
      },
      "csharp": {
        "minimal": "var dict = new Dictionary<string, int>();\n// Basé sur une table de hachage",
        "complete": "using System;\nusing System.Collections.Generic;\n\nclass Program {\n    static void Main() {\n        var capitales = new Dictionary<string, string> {\n            { \"France\", \"Paris\" },\n            { \"Italie\", \"Rome\" }\n        };\n\n        // Recherche ultra-sécurisée et performante (Évite de lever une KeyNotFoundException)\n        if (capitales.TryGetValue(\"France\", out string ville)) {\n            Console.WriteLine($\"La capitale est {ville}\");\n        }\n    }\n}",
        "best_practices": "Toujours privilégier `TryGetValue` plutôt que de faire une double vérification inefficace avec `ContainsKey` suivi de l'opérateur crochet `dict[cle]`.",
        "pitfalls": "Passer un objet personnalisé (une `class`) comme clé d'un dictionnaire sans avoir surchargé correctement les méthodes `GetHashCode()` et `Equals()`. Le dictionnaire se basera sinon sur l'adresse mémoire, empêchant de retrouver vos données.",
        "notes": "Depuis .NET Core, l'ordre d'insertion des éléments n'est pas garanti dans un `Dictionary`. Si l'ordre importe, il faut utiliser un `OrderedDictionary` ou un `SortedDictionary`."
      },
      "python": {
        "minimal": "mon_dict = {\"nom\": \"Alice\"}\n# Les dictionnaires conservent l'ordre d'insertion",
        "complete": "def manipuler_dict():\n    scores = {\"Alice\": 95, \"Bob\": 88}\n    \n    # Insertion ou mise à jour\n    scores[\"Charlie\"] = 92\n    \n    # Recherche sécurisée avec valeur de secours par défaut\n    score_indefini = scores.get(\"Denis\", 0)\n    print(f\"Score de Denis : {score_indefini}\")\n    \n    # Itération propre sur les clés et valeurs\n    for nom, valeur in scores.items():\n        print(f\"{nom} a obtenu {valeur}\")\n\nif __name__ == \"__main__\":\n    manipuler_dict()",
        "best_practices": "Utiliser la méthode `.get('cle', valeur_defaut)` pour extraire sereinement une donnée d'un dictionnaire sans risquer de faire planter l'application avec une exception `KeyError`.",
        "pitfalls": "Créer de fausses clés dynamiques en cours d'itération sur le dictionnaire. Comme vu dans les structures de boucles, cela génère instantanément un crash système de modification de taille.",
        "notes": "Depuis Python 3.7, l'implémentation interne des dictionnaires (`dict`) garantit la conservation de l'ordre d'insertion tout en optimisant la mémoire d'environ 20% à 25%."
      }
    }
  },
  {
    "id": "struct_strings_02",
    "chapter": "8. Structures avancées",
    "category": "Algorithmes",
    "name": "Manipulation et Formatage de Chaînes",
    "description": "Analyse de la sémantique des strings. Analyse de l'impact sur le tas (Heap) de la concaténation de chaînes immuables (C#, Python) face à la mutabilité native en C++, et étude des mécanismes d'assemblage optimisés.",
    "related_concepts": ["base_hello_world"],
    "languages": {
      "cpp": {
        "minimal": "std::string s = \"Hello\";\ns += \" World\"; // Mutable en place !",
        "complete": "#include <iostream>\n#include <string>\n#include <sstream>\n\nint main() {\n    // Les chaînes standard sont mutables en C++\n    std::string phrase = \"Texte\";\n    phrase[0] = 't'; // Modification directe en mémoire sans réallocation\n\n    // Utilisation d'un flux pour concaténer de façon optimisée en boucle\n    std::stringstream ss;\n    for(int i = 0; i < 3; ++i) {\n        ss << \"Item \" << i << \" \";\n    }\n    \n    std::string resultat = ss.str();\n    std::cout << resultat << \"\\n\";\n    return 0;\n}",
        "best_practices": "Passer systématiquement vos chaînes de caractères volumineuses par référence constante (`const std::string&`) dans vos signatures de fonctions pour s'épargner une copie octet par octet inutile.",
        "pitfalls": "Concaténer des littéraux de chaîne bruts avec l'opérateur `+` comme `\"A\" + \"B\"`. En C++, ce sont des tableaux de caractères `const char*` bruts (style C), l'addition de pointeurs y est interdite et provoquera une erreur de compilation.",
        "notes": "Depuis C++17, le type léger `std::string_view` permet de manipuler des portions ou des sous-chaînes sans allouer ni copier la moindre donnée en mémoire."
      },
      "csharp": {
        "minimal": "string s = $\"Hello {nom}\"; // Interpolation\n// Immuable : toute modification crée un nouvel objet",
        "complete": "using System;\nusing System.Text;\n\nclass Program {\n    static void Main() {\n        string nom = \"Alice\";\n        int age = 28;\n        \n        // Interpolation moderne, lisible et performante\n        string message = $\"Bonjour {nom}, vous avez {age} ans.\";\n\n        // Utilisation obligatoire de StringBuilder pour les boucles massives\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < 1000; i++) {\n            sb.Append(i).Append(\" \");\n        }\n        string chaineLongue = sb.ToString();\n    }\n}",
        "best_practices": "Bannir les concaténations avec l'opérateur `+` à l'intérieur d'une boucle (`for`/`foreach`). Utilisez impérativement la classe `StringBuilder` pour ne pas fragmenter la mémoire et surcharger le Garbage Collector.",
        "pitfalls": "Penser qu'appeler `texte.ToUpper()` modifie la chaîne `texte`. Les strings étant immuables, la méthode génère et retourne une *nouvelle* chaîne sans toucher à l'originale (`texte = texte.ToUpper()`).",
        "notes": "L'interpolation de chaînes (préfixée par `$`) est convertie lors de la compilation en appels optimisés vers `string.Format` ou des structures de création de chaînes."
      },
      "python": {
        "minimal": "s = f\"Hello {nom}\" # F-String\n# Immuable comme en C#",
        "complete": "def formater_chaines():\n    nom = \"Alice\"\n    # F-string (Lisible, puissante et la plus rapide en Python)\n    message = f\"Nom : {nom.upper()}\"\n\n    # Découpage et assemblage optimisé de listes de chaînes\n    mots = [\"Python\", \"est\", \"génial\"]\n    phrase = \" \".join(mots) # Recommandé pour la concaténation\n    print(phrase)\n\nif __name__ == \"__main__\":\n    formater_chaines()",
        "best_practices": "Utiliser l'idiome `' '.join(liste_de_chaines)` pour fusionner des collections de mots. C'est l'équivalent ultra-rapide et optimisé du `StringBuilder` de C# en Python.",
        "pitfalls": "Utiliser l'opérateur `+=` pour accumuler du texte dans une boucle. Comme en C#, cela détruit et réalloue une chaîne de caractères à chaque itération, effondrant dramatiquement la vitesse d'exécution.",
        "notes": "Les chaînes Python sont des instances d'objets immuables. Deux chaînes identiques courtes partagent souvent le même espace mémoire via un mécanisme interne appelé l'interne de chaînes (String Interning)."
      }
    }
  },
  
];