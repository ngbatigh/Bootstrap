window.CompIde = window.CompIde || {};

CompIde.cData = {
  "base_hello_world": {
    "minimal": "int main() {\n    printf(\"Hello World!\");\n}",
    "complete": "#include <stdio.h>\n\nint main() {\n    printf(\"Hello World!\\n\");\n    return 0;\n}",
    "best_practices": "Toujours inclure <stdio.h> pour printf et retourner 0 à la fin du main.",
    "pitfalls": "Oublier le saut de ligne \\n à la fin, ce qui peut bloquer l'affichage dans certains terminaux (problème de buffer).",
    "notes": "Le C est le grand ancêtre. Pas de chaînes de caractères natives (string), juste des tableaux de char."
  },
  "base_variables_02": {
    "minimal": "int x = 42;\nfloat y = 3.14;",
    "complete": "#include <stdio.h>\n\nint main() {\n    int age = 25;\n    const double PI = 3.14159;\n    char lettre = 'A';\n    \n    printf(\"Lettre: %c, Age: %d\\n\", lettre, age);\n    return 0;\n}",
    "best_practices": "Toujours initialiser vos variables à la déclaration, sinon elles contiennent des valeurs résiduelles aléatoires de la mémoire.",
    "pitfalls": "Utiliser un mauvais spécificateur de format dans printf (ex: %d pour un float), ce qui corrompt l'affichage.",
    "notes": "Typage statique, explicite et bas niveau. Pas d'inférence de type (auto) en C classique."
  },
  "ctrl_conditions_03": {
    "minimal": "if (x > 0) {\n    printf(\"Positif\");\n} else {\n    printf(\"Négatif ou nul\");\n}",
    "complete": "#include <stdio.h>\n\nint main() {\n    int score = 85;\n    \n    if (score >= 90) {\n        printf(\"Excellent\\n\");\n    } else if (score >= 70) {\n        printf(\"Bien\\n\");\n    } else {\n        printf(\"À améliorer\\n\");\n    }\n    \n    char code = 'B';\n    switch(code) {\n        case 'A': printf(\"Action A\\n\"); break;\n        case 'B': printf(\"Action B\\n\"); break;\n        default: printf(\"Inconnu\\n\");\n    }\n    return 0;\n}",
    "best_practices": "Mettre systématiquement des accolades `{ }` même s'il n'y a qu'une seule ligne d'instruction, pour éviter les bugs lors de modifications futures.",
    "pitfalls": "Oublier le 'break;' à la fin d'un 'case' dans un switch. Sans lui, le code continue de s'exécuter dans les cases suivants (effet de cascade destructeur).",
    "notes": "En C classique (avant C99), le type booléen natif n'existe pas. `0` équivaut à FAUX, et n'importe quelle valeur différente de `0` équivaut à VRAI."
  },
  "ctrl_boucles_04": {
    "minimal": "for (int i = 0; i < 5; i++) {\n    printf(\"%d \", i);\n}",
    "complete": "#include <stdio.h>\n\nint main() {\n    // Boucle For\n    for (int i = 1; i <= 3; i++) {\n        printf(\"Tour %d\\n\", i);\n    }\n    \n    // Boucle While\n    int compteur = 0;\n    while (compteur < 3) {\n        printf(\"Compteur: %d\\n\", compteur);\n        compteur++;\n    }\n    return 0;\n}",
    "best_practices": "Privilégier la boucle 'for' quand le nombre d'itérations est connu à l'avance, et 'while' quand la condition dépend d'un calcul dynamique.",
    "pitfalls": "Créer une boucle infinie en oubliant d'incrémenter la variable de contrôle (ex: oublier le compteur++ dans un while).",
    "notes": "L'instruction `int i = 0` à l'intérieur du `for` nécessite un compilateur compatible C99 ou supérieur. En C89, il fallait déclarer `int i;` tout en haut de la fonction."
  },
  "func_declaration_05": {
    "minimal": "void saluer() {\n    printf(\"Hello\");\n}",
    "complete": "#include <stdio.h>\n\n// 1. Prototype (Déclaration)\nint addition(int a, int b);\n\nint main() {\n    int resultat = addition(5, 7); // 3. Appel\n    printf(\"Résultat: %d\\n\", resultat);\n    return 0;\n}\n\n// 2. Définition\nint addition(int a, int b) {\n    return a + b;\n}",
    "best_practices": "Toujours déclarer les prototypes de vos fonctions en haut du fichier (ou dans un fichier .h) si elles sont définies après le `main()`, pour que le compilateur connaisse leur signature.",
    "pitfalls": "Tenter de retourner un tableau local depuis une fonction. Le tableau étant détruit à la fin de la fonction, vous récupérerez un pointeur vers une zone mémoire corrompue.",
    "notes": "Le C ne supporte pas la surcharge de fonctions (impossible d'avoir deux fonctions avec le même nom mais des paramètres différents)."
  },
  "func_arguments_06": {
    "minimal": "void modifier(int *x) {\n    *x = 10; // Passage par pointeur\n}",
    "complete": "#include <stdio.h>\n\n// Passage par valeur (copie)\nvoid incrementerValeur(int n) {\n    n++;\n}\n\n// Passage par adresse/pointeur (modification directe)\nvoid incrementerPointeur(int *n) {\n    (*n)++;\n}\n\nint main() {\n    int nombre = 5;\n    incrementerValeur(nombre);   // nombre reste 5\n    incrementerPointeur(&nombre); // nombre devient 6\n    return 0;\n}",
    "best_practices": "Utiliser le mot-clé `const` pour les paramètres de types complexes (comme les structures) passés par pointeur si la fonction ne doit pas les modifier (`const MaStructure *s`).",
    "pitfalls": "Oublier les parenthèses autour de l'étoile lors de la manipulation d'un pointeur (ex: `*n++` au lieu de `(*n)++`), ce qui incrémente l'adresse mémoire au lieu de la valeur.",
    "notes": "Le C fait *toujours* du passage par valeur. Pour modifier une variable externe, on passe la *valeur de son adresse* (un pointeur)."
  },
  "data_structures_07": {
    "minimal": "int notes[5] = {12, 14, 15, 9, 18};",
    "complete": "#include <stdio.h>\n\nint main() {\n    // Taille fixe obligatoire à la compilation\n    int grille[3] = {10, 20, 30};\n    \n    // Modification et accès\n    grille[1] = 25;\n    \n    // Calcul de la taille d'un tableau\n    int taille = sizeof(grille) / sizeof(grille[0]);\n    \n    for(int i = 0; i < taille; i++) {\n        printf(\"Index %d : %d\\n\", i, grille[i]);\n    }\n    return 0;\n}",
    "best_practices": "Toujours calculer ou stocker manuellement la taille d'un tableau. En C, un tableau passé à une fonction 'perd' sa taille et devient un simple pointeur (Array Decay).",
    "pitfalls": "Le dépassement de tampon (Buffer Overflow). Lire ou écrire à `grille[5]` alors que le tableau fait 3 éléments ne lèvera pas d'exception mais corrompra la mémoire ou fera crasher le programme (Segmentation Fault).",
    "notes": "Pas de listes dynamiques natives en C. Pour redimensionner, il faut gérer la mémoire manuellement avec `malloc()`, `realloc()` et `free()`."
  },
  "data_structures_08": {
    "minimal": "// Pas de dictionnaire natif. On utilise des structures.\nstruct Paire { char* cle; int valeur; };",
    "complete": "#include <stdio.h>\n#include <string.h>\n\ntypedef struct {\n    char cle[20];\n    int valeur;\n} Element;\n\nint main() {\n    // Simulation très rudimentaire d'une Map avec un tableau de structures\n    Element dico[2] = {\n        {\"score\", 150},\n        {\"vies\", 3}\n    };\n    \n    // Recherche séquentielle (O(n))\n    for(int i = 0; i < 2; i++) {\n        if(strcmp(dico[i].cle, \"vies\") == 0) {\n            printf(\"Nombre de vies : %d\\n\", dico[i].valeur);\n        }\n    }\n    return 0;\n}",
    "best_practices": "Pour de vrais projets nécessitant des dictionnaires, ne réinventez pas la roue : utilisez des bibliothèques externes éprouvées (comme glib) qui implémentent des tables de hachage robustes.",
    "pitfalls": "Comparer des clés textuelles avec `if (dico[i].cle == \"vies\")`. En C, cela compare les adresses des pointeurs, pas le texte. Utilisez toujours `strcmp()`.",
    "notes": "Le C n'intègre aucune structure de type clé-valeur dans sa bibliothèque standard (stdlib)."
  },
  "oop_classes_09": {
    "minimal": "typedef struct {\n    char nom[50];\n    int hp;\n} Personnage;",
    "complete": "#include <stdio.h>\n#include <string.h>\n\n// Le C n'a pas de classes, on simule l'état avec une structure (struct)\ntypedef struct {\n    char nom[30];\n    int niveau;\n    int pointsDeVie;\n} Joueur;\n\n// On simule une méthode en passant un pointeur de la structure en paramètre\nvoid afficherJoueur(const Joueur *j) {\n    printf(\"Joueur : %s (Niv %d) - HP: %d\\n\", j->nom, j->niveau, j->pointsDeVie);\n}",
    "best_practices": "Passer les structures complexes par pointeur constant (`const Joueur *`) pour éviter la copie lourde de données en mémoire tout en garantissant que la fonction ne modifiera pas l'objet.",
    "pitfalls": "Tenter d'utiliser des mots-clés comme `public` ou `private`. En C, tous les champs d'une structure sont publics par défaut et accessibles directement.",
    "notes": "Le C n'est pas un langage POO. Pour faire de la vraie encapsulation, il faut masquer la structure dans un fichier d'en-tête (Opaque Pointer)."
  },
  "oop_methods_10": {
    "minimal": "// Pas de constructeur. On utilise une fonction d'initialisation\nJoueur creerJoueur(char* nom);",
    "complete": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\ntypedef struct { char nom[30]; int hp; } Joueur;\n\n// Fonction faisant office de constructeur (Factory)\nJoueur* initialiserJoueur(const char* nomInitial) {\n    Joueur *nouveau = malloc(sizeof(Joueur));\n    if (nouveau != NULL) {\n        strncpy(nouveau->nom, nomInitial, sizeof(nouveau->nom) - 1);\n        nouveau->hp = 100;\n    }\n    return nouveau;\n}\n\nint main() {\n    // Instanciation sur le tas (Heap Allocation)\n    Joueur *j1 = initialiserJoueur(\"Thor\");\n    \n    printf(\"Créé : %s\\n\", j1->nom);\n    \n    // Obligation de libérer la mémoire (Destructeur manuel)\n    free(j1);\n    return 0;\n}",
    "best_practices": "Toujours vérifier si le pointeur retourné par `malloc()` n'est pas `NULL` avant de manipuler votre \"objet\", pour éviter un crash.",
    "pitfalls": "Oublier de libérer la mémoire avec `free()`. Contrairement aux langages dotés d'un ramasse-miettes (Garbage Collector), le C accumulera les fuites de mémoire (Memory Leaks).",
    "notes": "L'absence du mot-clé `new` force à choisir explicitement entre l'allocation sur la pile (Automatique : `Joueur j;`) ou sur le tas (Dynamique : `malloc`)."
  },
  "errors_try_catch_11": {
    "minimal": "// Pas de Try/Catch. On vérifie les valeurs de retour.\nif (ptr == NULL) { /* gestion */ }",
    "complete": "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    FILE *fichier = fopen(\"config.txt\", \"r\");\n    \n    // En C, la gestion d'erreur se fait par anticipation / examen des retours\n    if (fichier == NULL) {\n        perror(\"Erreur lors de l'ouverture du fichier\");\n        return EXIT_FAILURE;\n    }\n    \n    // Utilisation du fichier...\n    fclose(fichier);\n    return EXIT_SUCCESS;\n}",
    "best_practices": "Toujours tester le retour des fonctions système (comme `malloc` ou `fopen`) immédiatement après leur appel avant de manipuler les pointeurs.",
    "pitfalls": "Ignorer un code d'erreur renvoyé par une fonction. Contrairement aux exceptions, le programme continuera de s'exécuter à l'aveugle jusqu'au crash (Segmentation Fault).",
    "notes": "Le langage C standard ne possède aucun mécanisme natif de `try-catch`. Certains développeurs simulent ce comportement en utilisant les fonctions bas niveau `setjmp()` et `longjmp()`."
  },
  "errors_throw_12": {
    "minimal": "return -1; // Code d'erreur standard",
    "complete": "#include <stdio.h>\n#include <errno.h>\n\nint diviser(int a, int b, int *resultat) {\n    if (b == 0) {\n        return -1; // On retourne un code d'erreur\n    }\n    *resultat = a / b;\n    return 0; // Succès\n}\n\nint main() {\n    int res;\n    if (diviser(10, 0, &res) != 0) {\n        fprintf(stderr, \"Erreur : Division par zéro !\\n\");\n    }\n    return 0;\n}",
    "best_practices": "Adopter une convention claire pour vos fonctions : renvoyer `0` pour un succès, et un code négatif ou un ID d'erreur spécifique en cas de problème.",
    "pitfalls": "Retourner une valeur de calcul qui se confond avec un code d'erreur. Si votre fonction peut légitimement renvoyer `-1`, séparez le code d'erreur du résultat en utilisant un pointeur pour le résultat (comme dans l'exemple complet).",
    "notes": "La bibliothèque standard de C fournit la variable globale `errno` (déclarée dans `<errno.h>`) pour identifier la cause exacte des pannes du système."
  },
  "async_await_13": {
    "minimal": "// Pas d'async/await natif. Usage des threads POSIX.\npthread_t thread;\npthread_create(&thread, NULL, maFonction, NULL);",
    "complete": "#include <stdio.h>\n#include <stdlib.h>\n#include <pthread.h>\n#include <unistd.h>\n\nvoid* tacheFond(void* arg) {\n    printf(\"Début de la tâche de fond...\\n\");\n    sleep(2); // Simule un travail de 2 secondes\n    printf(\"Tâche de fond terminée !\\n\");\n    return NULL;\n}\n\nint main() {\n    pthread_t threadId;\n    \n    // Création d'un thread parallèle\n    if (pthread_create(&threadId, NULL, tacheFond, NULL) != 0) {\n        perror(\"Échec de création du thread\");\n        return EXIT_FAILURE;\n    }\n    \n    printf(\"Le programme principal continue en parallèle...\\n\");\n    \n    // Attente de la fin du thread (équivalent d'un await brut)\n    pthread_join(threadId, NULL);\n    printf(\"Tout est fini.\\n\");\n    return EXIT_SUCCESS;\n}",
    "best_practices": "Toujours appeler `pthread_join()` ou détacher le thread avec `pthread_detach()` pour éviter de créer des 'threads zombies' qui gaspillent les ressources système.",
    "pitfalls": "Tenter de modifier une même variable globale depuis deux threads différents sans utiliser de verrou (`pthread_mutex_t`). Cela provoque une situation de compétition (Race Condition) et corrompt vos données.",
    "notes": "L'API `pthread.h` (POSIX Threads) est le standard sous Linux/macOS. Sous Windows, il faut utiliser l'API Win32 (`CreateThread`) ou une bibliothèque de compatibilité."
  },
  "file_io_14": {
    "minimal": "FILE *f = fopen(\"log.txt\", \"w\");\nfputs(\"Hi\", f);\nfclose(f);",
    "complete": "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    FILE *fichier = fopen(\"donnees.txt\", \"w+\");\n    if (fichier == NULL) {\n        return EXIT_FAILURE;\n    }\n    \n    // Écriture\n    fprintf(fichier, \"Ligne %d : %s\\n\", 1, \"Bonjour le C\");\n    \n    // Retour au début pour lire\n    rewind(fichier);\n    \n    // Lecture ligne par ligne\n    char tampon[100];\n    while (fgets(tampon, sizeof(tampon), fichier) != NULL) {\n        printf(\"Lu : %s\", tampon);\n    }\n    \n    fclose(fichier);\n    return EXIT_SUCCESS;\n}",
    "best_practices": "Toujours fermer vos fichiers avec `fclose()` dès que vous n'en avez plus besoin pour libérer le descripteur de fichier maintenu par le système d'exploitation.",
    "pitfalls": "Utiliser la fonction `gets()` ou ne pas limiter la taille dans `fscanf()`. Utilisez toujours `fgets()` qui permet de spécifier la taille maximale du tampon et évite les Buffer Overflows.",
    "notes": "Le mode `w+` écrase le fichier s'il existe déjà. Pour ajouter du contenu à la fin sans effacer, utilisez le mode `a` (Append)."
  }
};
