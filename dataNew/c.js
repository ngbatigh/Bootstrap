// data/languages/c.js
window.CompIde = window.CompIde || {};

CompIde.cData = {
  "base_hello_world": {
    "minimal": "int main() {\n    printf(\"Hello World!\");\n    return 0;\n}",
    "complete": "#include <stdio.h>\n\nint main() {\n    printf(\"Hello World!\\n\");\n    return 0;\n}",
    "best_practices": "Inclure toujours stdio.h et retourner 0 en fin de main.",
    "pitfalls": "Oublier le retour à la ligne '\\n' lors du flush de sortie stdout.",
    "notes": "Langage compilé impératif procédural de bas niveau."
  },
  "base_variables_02": {
    "minimal": "int x = 42;\nfloat y = 3.14f;",
    "complete": "#include <stdio.h>\n\nint main() {\n    int age = 25;\n    const double PI = 3.14159;\n    printf(\"Age: %d - PI: %.2f\\n\", age, PI);\n    return 0;\n}",
    "best_practices": "Initialiser chaque variable dès sa déclaration.",
    "pitfalls": "Lire une variable non initialisée (valeur poubelle en mémoire).",
    "notes": "Pas de typage implicite automatique (pas de mot-clé 'auto')."
  },
  "ctrl_conditions_01": {
    "minimal": "if (score > 10) { gagne(); }",
    "complete": "#include <stdio.h>\n\nint main() {\n    int score = 75;\n    if (score >= 90) {\n        printf(\"Excellent\\n\");\n    } else if (score >= 50) {\n        printf(\"Validé\\n\");\n    } else {\n        printf(\"Échec\\n\");\n    }\n    return 0;\n}",
    "best_practices": "Garder la logique d'embranchement la plus simple possible.",
    "pitfalls": "En C, tout entier non-nul est évalué à vrai (true), 0 est faux (false).",
    "notes": "Pas de type booléen natif avant la norme C99 (<stdbool.h>)."
  },
  "ctrl_loops_02": {
    "minimal": "for(int i = 0; i < 10; i++) {}",
    "complete": "#include <stdio.h>\n\nint main() {\n    int arr[4] = {10, 20, 30, 40};\n    for (int i = 0; i < 4; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    return 0;\n}",
    "best_practices": "Déclarer l'index 'i' dans la boucle 'for' (C99+).",
    "pitfalls": "Déborder du tableau en lisant l'élément arr[4] (Undefined Behavior).",
    "notes": "Pas de boucle style 'foreach' native sur les tableaux."
  },
  "func_basics_01": {
    "minimal": "int ajouter(int a, int b) { return a + b; }",
    "complete": "#include <stdio.h>\n\nvoid afficher(const char* msg) {\n    printf(\"%s\\n\", msg);\n}\n\nint main() {\n    afficher(\"Alerte\");\n    return 0;\n}",
    "best_practices": "Mettre les prototypes de fonctions avant la fonction main().",
    "pitfalls": "Absence de paramètres par défaut ou d'arguments nommés.",
    "notes": "Tout passage de paramètre se fait strictement par valeur."
  },
  "func_lambdas_02": {
    "minimal": "// Pas de lambdas natives en C.",
    "complete": "#include <stdio.h>\n\nvoid executer(int (*func)(int), int v) {\n    printf(\"Résultat : %d\\n\", func(v));\n}\n\nint doubler(int x) { return x * 2; }\n\nint main() {\n    executer(doubler, 5); // Passage d'un pointeur de fonction\n    return 0;\n}",
    "best_practices": "Utiliser des pointeurs de fonction pour simuler des comportements dynamiques.",
    "pitfalls": "Tenter de capturer un contexte local comme dans une closure.",
    "notes": "Le C gère le comportement dynamique via les pointeurs de fonctions."
  },
  "mem_management_01": {
    "minimal": "int* p = malloc(sizeof(int));\nfree(p);",
    "complete": "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int* p = malloc(sizeof(int));\n    if (p == NULL) return 1;\n    *p = 42;\n    printf(\"%d\\n\", *p);\n    free(p); // Libération manuelle stricte\n    return 0;\n}",
    "best_practices": "Toujours vérifier si malloc() retourne NULL avant d'utiliser la mémoire.",
    "pitfalls": "Utiliser de la mémoire après l'avoir libérée (Use-After-Free).",
    "notes": "Gestion de la mémoire 100% manuelle."
  },
  "mem_references_02": {
    "minimal": "void inc(int* ptr) { (*ptr)++; }",
    "complete": "#include <stdio.h>\n\nvoid modifier(int* ptr) {\n    if (ptr != NULL) *ptr += 10;\n}\n\nint main() {\n    int x = 10;\n    modifier(&x);\n    printf(\"%d\\n\", x); // 20\n    return 0;\n}",
    "best_practices": "Passer des pointeurs 'const' pour la lecture seule.",
    "pitfalls": "Le C ne possède pas de 'références' (au sens C++ ou C#), uniquement des pointeurs.",
    "notes": "Pour modifier une variable dans une fonction, on passe son adresse mémoire (&)."
  },
  "poo_classes_01": {
    "minimal": "typedef struct {\n    int age;\n} Personne;",
    "complete": "#include <stdio.h>\n\ntypedef struct {\n    char nom[50];\n    int age;\n} Personne;\n\nint main() {\n    Personne p = {\"Alice\", 25};\n    printf(\"%s\\n\", p.nom);\n    return 0;\n}",
    "best_practices": "Utiliser typedef pour alléger l'écriture des structures.",
    "pitfalls": "Aucune encapsulation : tous les membres d'une struct sont publics.",
    "notes": "Le C n'a pas de classes ni de méthodes membres."
  },
  "poo_polymorphism_02": {
    "minimal": "// Struct avec pointeurs de fonctions pour simuler du polymorphisme.",
    "complete": "#include <stdio.h>\n\ntypedef struct {\n    void (*crier)(void);\n} Animal;\n\nvoid crierChien() { printf(\"Wouf!\\n\"); }\n\nint main() {\n    Animal chien = { crierChien };\n    chien.crier();\n    return 0;\n}",
    "best_practices": "Simuler des tables virtuelles via des tableaux de pointeurs de fonctions.",
    "pitfalls": "Problèmes fréquents de trancodage manuel de types (casts invalides).",
    "notes": "Pas d'héritage natif en C."
  },
  "err_exceptions_01": {
    "minimal": "if (err) { return -1; }",
    "complete": "#include <stdio.h>\n\nint diviser(int a, int b, int* res) {\n    if (b == 0) return -1; // Code d'erreur\n    *res = a / b;\n    return 0; // Succès\n}\n\nint main() {\n    int r;\n    if (diviser(10, 0, &r) != 0) {\n        printf(\"Erreur : division par zéro\\n\");\n    }\n    return 0;\n}",
    "best_practices": "Traiter les codes d'erreurs retournés par chaque fonction.",
    "pitfalls": "Ignorer le code de retour d'une fonction critique.",
    "notes": "Pas de mécanisme d'exceptions nativement (try/catch)."
  },
  "gen_generics_01": {
    "minimal": "#define MAX(a, b) ((a) > (b) ? (a) : (b))",
    "complete": "#include <stdio.h>\n\n#define IMPRIMER(val, fmt) printf(fmt \"\\n\", val)\n\nint main() {\n    IMPRIMER(42, \"%d\");\n    IMPRIMER(3.14, \"%.2f\");\n    return 0;\n}",
    "best_practices": "Entourer les arguments de macros avec des parenthèses.",
    "pitfalls": "Les macros du préprocesseur ne vérifient aucun type.",
    "notes": "Généricité limitée aux macros ou aux pointeurs `void*`."
  },
  "conc_async_02": {
    "minimal": "// Gestion multithread avec <pthread.h>",
    "complete": "#include <stdio.h>\n#include <pthread.h>\n\nvoid* calcul(void* arg) {\n    printf(\"Thread exécuté\\n\");\n    return NULL;\n}\n\nint main() {\n    pthread_t thread;\n    pthread_create(&thread, NULL, calcul, NULL);\n    pthread_join(thread, NULL);\n    return 0;\n}",
    "best_practices": "Penser à toujours 'joindre' les threads pour libérer leurs ressources.",
    "pitfalls": "Problèmes de concurrence d'accès à la mémoire (Race Conditions).",
    "notes": "Repose sur l'API POSIX pthreads."
  },
  "struct_maps_01": {
    "minimal": "// Implémentation manuelle de table de hachage requise.",
    "complete": "#include <stdio.h>\n\ntypedef struct {\n    char* cle;\n    int valeur;\n} Entree;\n\nint main() {\n    Entree dictionnaire[1] = {{\"Café\", 1}};\n    printf(\"%s: %d\\n\", dictionnaire[0].cle, dictionnaire[0].valeur);\n    return 0;\n}",
    "best_practices": "Utiliser une bibliothèque externe éprouvée pour les tables de hachage.",
    "pitfalls": "Gérer soi-même les collisions de hachage de manière naïve.",
    "notes": "Aucune structure de map/dictionnaire dans la bibliothèque standard C."
  },
  "struct_strings_02": {
    "minimal": "char str[] = \"Hello\";",
    "complete": "#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s[20] = \"C\";\n    strcat(s, \" Language\"); // Concaténation\n    printf(\"%s (Taille: %lu)\\n\", s, strlen(s));\n    return 0;\n}",
    "best_practices": "Utiliser strncpy/strncat pour éviter de dépasser la taille de mémoire allouée.",
    "pitfalls": "Oublier l'octet de fin de chaîne nul ('\\0').",
    "notes": "Les chaînes C sont de simples tableaux de caractères terminés par '\\0'."
  }
};