// Fichier généré automatiquement (en dur) via build_concepts.html
window.CompIde = window.CompIde || {};
window.CompIde.data = [
  {
    "id": "base_hello_world",
    "level": 1,
    "chapter": "1. Syntaxe de base",
    "category": "Initialisation",
    "name": "Point d'entrée et Hello World",
    "description": "Structure minimale d'un programme et point d'entrée requis pour l'exécution.",
    "related_concepts": [],
    "languages": {
      "c": {
        "minimal": "int main() {\n    printf(\"Hello World!\");\n    return 0;\n}",
        "complete": "#include <stdio.h>\n\nint main() {\n    printf(\"Hello World!\\n\");\n    return 0;\n}",
        "best_practices": "Inclure toujours stdio.h et retourner 0 en fin de main.",
        "pitfalls": "Oublier le retour à la ligne '\\n' lors du flush de sortie stdout.",
        "notes": "Langage compilé impératif procédural de bas niveau."
      },
      "cpp": {
        "minimal": "int main() {\n    std::cout << \"Hello World!\";\n}",
        "complete": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello World!\\n\";\n    return 0;\n}",
        "best_practices": "Préférer '\\n' à 'std::endl' dans les boucles pour éviter de forcer un flush inutile.",
        "pitfalls": "Oublier l'espace de noms std:: ou l'inclusion <iostream>.",
        "notes": "Si 'return 0;' est omis en main(), le compilateur C++ l'injecte implicitement."
      },
      "csharp": {
        "minimal": "Console.WriteLine(\"Hello World!\");",
        "complete": "using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(\"Hello World!\");\n    }\n}",
        "best_practices": "Utiliser les instructions de niveau supérieur (Top-level statements) en C# 9+.",
        "pitfalls": "Main prend une majuscule (contrairement au C++).",
        "notes": "Compilé en IL (Intermediate Language) puis exécuté par le CLR."
      },
      "python": {
        "minimal": "print(\"Hello World!\")",
        "complete": "def main():\n    print(\"Hello World!\")\n\nif __name__ == \"__main__\":\n    main()",
        "best_practices": "Utiliser le garde-fou 'if __name__ == \"__main__\":'.",
        "pitfalls": "Mélanger des tabulations et des espaces dans l'indentation.",
        "notes": "Langage interprété/bytecode exécuté sur une machine virtuelle (CPython)."
      },
      "java": {
        "minimal": "System.out.println(\"Hello World!\");",
        "complete": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World!\");\n    }\n}",
        "best_practices": "Nommer le fichier du même nom que la classe publique qu'il contient.",
        "pitfalls": "Oublier la signature exacte de la méthode 'public static void main(String[] args)'.",
        "notes": "Compilé en Bytecode puis exécuté par la JVM."
      },
      "javascript": {
        "minimal": "console.log(\"Hello World!\");",
        "complete": "function main() {\n    console.log(\"Hello World!\");\n}\nmain();",
        "best_practices": "Utiliser console.log() au lieu d'alert() pour ne pas bloquer l'interface.",
        "pitfalls": "Oublier l'environnement d'exécution (Navigateur vs Node.js).",
        "notes": "Langage de script interprété à typage dynamique."
      },
      "typescript": {
        "minimal": "console.log(\"Hello World!\");",
        "complete": "function main(): void {\n    console.log(\"Hello World!\");\n}\nmain();",
        "best_practices": "Annoter les types de retour de fonction explicites.",
        "pitfalls": "Oublier l'étape de compilation vers JavaScript (transpilation).",
        "notes": "Surcouche typée de JavaScript développée par Microsoft."
      },
      "php": {
        "minimal": "echo \"Hello World!\";",
        "complete": "<?php\nfunction main(): void {\n    echo \"Hello World!\\n\";\n}\nmain();",
        "best_practices": "Omettre la balise de fermeture '?>' dans les fichiers contenant du PHP pur.",
        "pitfalls": "Oublier de faire précéder le nom des variables du symbole '$'.",
        "notes": "Langage de script côté serveur à typage dynamique progressif."
      },
      "vb": {
        "minimal": "Console.WriteLine(\"Hello World!\")",
        "complete": "Imports System\n\nModule Program\n    Sub Main()\n        Console.WriteLine(\"Hello World!\")\n    End Sub\nEnd Module",
        "best_practices": "Organiser le code dans des Modules ou des Classes formelles.",
        "pitfalls": "Ne pas tenir compte de l'insensibilité à la casse lors de l'interopérabilité.",
        "notes": "Langage de l'écosystème .NET, insensible à la casse."
      },
      "vba": {
        "minimal": "MsgBox \"Hello World!\"",
        "complete": "Public Sub Main()\n    MsgBox \"Hello World!\"\nEnd Sub",
        "best_practices": "Utiliser 'Debug.Print' au lieu de 'MsgBox' pour consigner des traces de débogage sans bloquer l'exécution.",
        "pitfalls": "Tenter d'exécuter du code hors d'une Sub ou d'une Function.",
        "notes": "Langage de macro intégré aux applications Microsoft Office."
      }
    }
  },
  {
    "id": "base_variables_02",
    "level": 1,
    "chapter": "1. Syntaxe de base",
    "category": "Variables",
    "name": "Déclaration et Initialisation",
    "description": "Système de typage, portée des variables et inférence de type.",
    "related_concepts": [
      "base_hello_world"
    ],
    "languages": {
      "c": {
        "minimal": "int x = 42;\nfloat y = 3.14f;",
        "complete": "#include <stdio.h>\n\nint main() {\n    int age = 25;\n    const double PI = 3.14159;\n    printf(\"Age: %d - PI: %.2f\\n\", age, PI);\n    return 0;\n}",
        "best_practices": "Initialiser chaque variable dès sa déclaration.",
        "pitfalls": "Lire une variable non initialisée (valeur poubelle en mémoire).",
        "notes": "Pas de typage implicite automatique (pas de mot-clé 'auto')."
      },
      "cpp": {
        "minimal": "int x = 42;\nauto y = 3.14;",
        "complete": "#include <iostream>\n#include <string>\n\nint main() {\n    int age = 25; \n    const double PI = 3.14159;\n    auto nom = \"CompIde\";\n    std::cout << nom << \" - Age: \" << age << \"\\n\";\n    return 0;\n}",
        "best_practices": "Toujours initialiser les variables pour éviter une valeur mémoire résiduelle.",
        "pitfalls": "Confondre l'initialisation par copie (int x = 5) et l'initialisation uniforme (int x{5}).",
        "notes": "Le type est déduit à la compilation via 'auto' et demeure strictement fixe."
      },
      "csharp": {
        "minimal": "int x = 42;\nvar y = 3.14;",
        "complete": "using System;\n\nclass Program {\n    static void Main() {\n        int age = 25;\n        const double PI = 3.14159;\n        var nom = \"CompIde\";\n        Console.WriteLine($\"{nom} - Age: {age}\");\n    }\n}",
        "best_practices": "Utiliser 'var' si le type sous-jacent est clair à la lecture.",
        "pitfalls": "Le type 'var' reste statique, impossible de changer de type en cours de route.",
        "notes": "Typage fort et statique garanti par la plate-forme .NET."
      },
      "python": {
        "minimal": "x = 42\ny = 3.14",
        "complete": "age: int = 25\npi: float = 3.14159\nnom = \"CompIde\"\nprint(f\"{nom} - Age: {age}\")",
        "best_practices": "Employer le 'Type Hinting' (annotations de types).",
        "pitfalls": "Penser que les annotations bloquent la réassignation de type à l'exécution.",
        "notes": "Typage dynamique et fort."
      },
      "java": {
        "minimal": "int x = 42;\nvar y = 3.14;",
        "complete": "public class Main {\n    public static void main(String[] args) {\n        int age = 25;\n        final double PI = 3.14159;\n        var nom = \"CompIde\"; // Inférence C# style (Java 10+)\n        System.out.println(nom + \" - Age: \" + age);\n    }\n}",
        "best_practices": "Utiliser 'final' pour marquer une variable comme immuable.",
        "pitfalls": "Confondre les types primitifs (int) et leurs classes enveloppes (Integer).",
        "notes": "Typage statique et fort garanti dès la compilation."
      },
      "javascript": {
        "minimal": "let x = 42;\nconst y = 3.14;",
        "complete": "const nom = \"WebIDE\";\nlet score = 0;\nscore += 10;\nconsole.log(`${nom} : ${score}`);",
        "best_practices": "Privilégier 'const' par défaut et 'let' en cas de réassignation. Bannir 'var'.",
        "pitfalls": "Créer des variables globales involontaires en omettant la déclaration.",
        "notes": "Typage dynamique et faible avec portée de bloc."
      },
      "typescript": {
        "minimal": "let x: number = 42;\nconst y: string = \"TS\";",
        "complete": "const nom: string = \"WebIDE\";\nlet score: number = 0;\nscore += 10;\nconsole.log(`${nom} - ${score}`);",
        "best_practices": "Laisser l'inférence de type agir quand l'initialisation est évidente.",
        "pitfalls": "Abuser du type 'any' qui désactive la vérification statique.",
        "notes": "Analyse de type statique uniquement à la compilation."
      },
      "php": {
        "minimal": "$x = 42;\n$y = 3.14;",
        "complete": "<?php\n$nom = \"CompIde\";\n$age = 25;\n$pi = 3.14159;\necho \"$nom - Age: $age\";",
        "best_practices": "Déclarer les types d'arguments et de retours (PHP 7+ / 8+).",
        "pitfalls": "Oublier que les variables sont sensibles à la casse ($val vs $Val).",
        "notes": "Utilise des variables préfixées par '$'."
      },
      "vb": {
        "minimal": "Dim x As Integer = 42\nDim y = 3.14",
        "complete": "Imports System\n\nModule Program\n    Sub Main()\n        Dim age As Integer = 25\n        Const PI As Double = 3.14159\n        Dim nom = \"CompIde\"\n        Console.WriteLine($\"{nom} - Age: {age}\")\n    End Sub\nEnd Module",
        "best_practices": "Activer Option Strict On pour bloquer les conversions de type implicites risquées.",
        "pitfalls": "Oublier de spécifier la clause Option Explicit On (autorise des variables non déclarées).",
        "notes": "Bénéficie du typage fort et statique fourni par le framework .NET."
      },
      "vba": {
        "minimal": "Dim x As Integer\nx = 42",
        "complete": "Public Sub TesterVariables()\n    Dim age As Integer\n    Dim nom As String\n    age = 25\n    nom = \"CompIde\"\n    Debug.Print nom & \" - Age: \" & age\nEnd Sub",
        "best_practices": "Ajouter systématiquement 'Option Explicit' en toute première ligne de chaque module.",
        "pitfalls": "Ne pas déclarer de type : la variable devient implicitement de type 'Variant' (lourde en mémoire).",
        "notes": "Typage statique facultatif, typage dynamique par défaut via le type 'Variant'."
      }
    }
  },
  {
    "id": "ctrl_conditions_01",
    "level": 2,
    "chapter": "2. Structures de contrôle",
    "category": "Conditions",
    "name": "Expressions Conditionnelles",
    "description": "Blocs conditionnels, expressions ternaires et évaluation court-circuit.",
    "related_concepts": [],
    "languages": {
      "c": {
        "minimal": "if (score > 10) { gagne(); }",
        "complete": "#include <stdio.h>\n\nint main() {\n    int score = 75;\n    if (score >= 90) {\n        printf(\"Excellent\\n\");\n    } else if (score >= 50) {\n        printf(\"Validé\\n\");\n    } else {\n        printf(\"Échec\\n\");\n    }\n    return 0;\n}",
        "best_practices": "Garder la logique d'embranchement la plus simple possible.",
        "pitfalls": "En C, tout entier non-nul est évalué à vrai (true), 0 est faux (false).",
        "notes": "Pas de type booléen natif avant la norme C99 (<stdbool.h>)."
      },
      "cpp": {
        "minimal": "if (score > 10) { gagne(); }",
        "complete": "#include <iostream>\n\nint main() {\n    int score = 75;\n    if (score >= 90) {\n        std::cout << \"Excellent\\n\";\n    } else if (score >= 50) {\n        std::cout << \"Validé\\n\";\n    } else {\n        std::cout << \"Échec\\n\";\n    }\n    std::string statut = (score >= 50) ? \"Reçu\" : \"Ajourné\";\n    return 0;\n}",
        "best_practices": "Placer la condition la plus probable en premier pour optimiser la prédiction de branchement.",
        "pitfalls": "Confondre l'opérateur d'égalité == et l'assignation = dans un test.",
        "notes": "Évaluation court-circuit : s'arrête dès que le résultat logique global est garanti."
      },
      "csharp": {
        "minimal": "if (score > 10) { Gagner(); }",
        "complete": "using System;\n\nclass Program {\n    static void Main() {\n        int score = 75;\n        if (score >= 90) Console.WriteLine(\"Excellent\");\n        else if (score >= 50) Console.WriteLine(\"Validé\");\n        else Console.WriteLine(\"Échec\");\n        string statut = (score >= 50) ? \"Reçu\" : \"Ajourné\";\n    }\n}",
        "best_practices": "Exploiter les expressions 'switch' modernes avec du pattern matching.",
        "pitfalls": "Confondre types valeur (struct) et types référence (class) dans les tests d'égalité.",
        "notes": "Intègre le Pattern Matching puissant depuis C# 8."
      },
      "python": {
        "minimal": "if score > 10: gagne()",
        "complete": "score = 75\nif score >= 90:\n    print(\"Excellent\")\nelif score >= 50:\n    print(\"Validé\")\nelse:\n    print(\"Échec\")\nstatut = \"Reçu\" if score >= 50 else \"Ajourné\"",
        "best_practices": "Exploiter le structural pattern matching (match/case) introduit en Python 3.10.",
        "pitfalls": "Oublier les deux-points ':' à la fin des déclarations conditionnelles.",
        "notes": "Opérateur ternaire condensé sous la forme 'X if COND else Y'."
      },
      "java": {
        "minimal": "if (score > 10) { gagne(); }",
        "complete": "public class Main {\n    public static void main(String[] args) {\n        int score = 75;\n        if (score >= 90) System.out.println(\"Excellent\");\n        else if (score >= 50) System.out.println(\"Validé\");\n        else System.out.println(\"Échec\");\n    }\n}",
        "best_practices": "Exploiter les expressions switch améliorées (Java 14+).",
        "pitfalls": "Utiliser '==' pour comparer deux objets String au lieu de '.equals()'.",
        "notes": "Les conditions testent obligatoirement un type booléen strict."
      },
      "javascript": {
        "minimal": "if (score > 10) { gagne(); }",
        "complete": "const score = 75;\nif (score >= 90) {\n    console.log(\"Excellent\");\n} else if (score >= 50) {\n    console.log(\"Validé\");\n} else {\n    console.log(\"Échec\");\n}\nconst statut = score >= 50 ? \"Reçu\" : \"Ajourné\";",
        "best_practices": "Toujours utiliser l'égalité stricte '===' au lieu de '=='.",
        "pitfalls": "Se faire piéger par la conversion implicite des valeurs 'falsy' (0, '', null, undefined).",
        "notes": "Supporte l'opérateur de coalescence des nuls (??)."
      },
      "typescript": {
        "minimal": "if (score > 10) { gagne(); }",
        "complete": "const score: number = 75;\nif (score >= 90) console.log(\"Excellent\");\nelse if (score >= 50) console.log(\"Validé\");\nelse console.log(\"Échec\");",
        "best_practices": "Utiliser la réduction de types (Type Narrowing) dans les garde-fous.",
        "pitfalls": "Utiliser l'égalité non-stricte '=='.",
        "notes": "Identique à JavaScript à l'exécution."
      },
      "php": {
        "minimal": "if ($score > 10) { gagne(); }",
        "complete": "<?php\n$score = 75;\nif ($score >= 90) echo \"Excellent\";\nelseif ($score >= 50) echo \"Validé\";\nelse echo \"Échec\";\n$statut = ($score >= 50) ? \"Reçu\" : \"Ajourné\";",
        "best_practices": "Utiliser l'instruction match() introduite en PHP 8 à la place d'un switch.",
        "pitfalls": "Écrire 'else if' en deux mots distincts dans une syntaxe alternative.",
        "notes": "Propose l'opérateur 'Match' qui effectue une comparaison stricte (===)."
      },
      "vb": {
        "minimal": "If score > 10 Then Gagner()",
        "complete": "Imports System\n\nModule Program\n    Sub Main()\n        Dim score As Integer = 75\n        If score >= 90 Then\n            Console.WriteLine(\"Excellent\")\n        ElseIf score >= 50 Then\n            Console.WriteLine(\"Validé\")\n        Else\n            Console.WriteLine(\"Échec\")\n        End If\n    End Sub\nEnd Module",
        "best_practices": "Utiliser Select Case pour remplacer les blocs d'instructions If complexes.",
        "pitfalls": "Écrire 'Else If' au lieu du mot-clé unifié 'ElseIf'.",
        "notes": "Utilise l'opérateur If() pour simuler l'instruction ternaire."
      },
      "vba": {
        "minimal": "If score > 10 Then Gagner",
        "complete": "Public Sub TesterCondition()\n    Dim score As Integer\n    score = 75\n    If score >= 90 Then\n        Debug.Print \"Excellent\"\n    ElseIf score >= 50 Then\n        Debug.Print \"Validé\"\n    Else\n        Debug.Print \"Échec\"\n    End If\nEnd Sub",
        "best_practices": "Utiliser la structure 'Select Case' pour simplifier les tests conditionnels multiples.",
        "pitfalls": "Écrire 'Else If' au lieu du mot-clé unifié 'ElseIf'.",
        "notes": "Pas d'opérateur ternaire natif direct (on utilise la fonction `IIf(cond, vrai, faux)`)."
      }
    }
  },
  {
    "id": "ctrl_loops_02",
    "level": 2,
    "chapter": "2. Structures de contrôle",
    "category": "Boucles",
    "name": "Itérations et Collections",
    "description": "Boucles itératives et comportement face à la modification d'une collection.",
    "related_concepts": [
      "ctrl_conditions_01"
    ],
    "languages": {
      "c": {
        "minimal": "for(int i = 0; i < 10; i++) {}",
        "complete": "#include <stdio.h>\n\nint main() {\n    int arr[4] = {10, 20, 30, 40};\n    for (int i = 0; i < 4; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    return 0;\n}",
        "best_practices": "Déclarer l'index 'i' dans la boucle 'for' (C99+).",
        "pitfalls": "Déborder du tableau en lisant l'élément arr[4] (Undefined Behavior).",
        "notes": "Pas de boucle style 'foreach' native sur les tableaux."
      },
      "cpp": {
        "minimal": "for(int i=0; i<10; ++i) {}",
        "complete": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> nombres = {10, 20, 30, 40};\n    for (const auto& nb : nombres) {\n        std::cout << nb << \" \";\n    }\n    return 0;\n}",
        "best_practices": "Utiliser 'const auto&' dans une boucle range-based pour éviter la copie d'objets.",
        "pitfalls": "Modifier la taille du conteneur (ex: push_back) durant l'itération.",
        "notes": "L'incrémentation préfixée (++i) évite une copie temporaire de l'itérateur."
      },
      "csharp": {
        "minimal": "foreach (var x in liste) {}",
        "complete": "using System;\nusing System.Collections.Generic;\n\nclass Program {\n    static void Main() {\n        var nombres = new List<int> { 10, 20, 30, 40 };\n        foreach (int nb in nombres) {\n            Console.WriteLine(nb);\n        }\n    }\n}",
        "best_practices": "Préférer 'foreach' par sécurité sur les collections.",
        "pitfalls": "Modifier une liste pendant un parcours 'foreach' lève une InvalidOperationException.",
        "notes": "Foreach repose sur l'interface IEnumerable<T>."
      },
      "python": {
        "minimal": "for i in range(10): pass",
        "complete": "nombres = [10, 20, 30, 40]\nfor nb in nombres:\n    print(nb)\nfor index, val in enumerate(nombres):\n    print(f\"{index}: {val}\")",
        "best_practices": "Utiliser 'enumerate()' pour récupérer la clé et la valeur simultanément.",
        "pitfalls": "Utiliser 'for i in range(len(liste))' au lieu de l'itération directe.",
        "notes": "Toute boucle 'for' agit comme un itérateur."
      },
      "java": {
        "minimal": "for (int nb : nombres) {}",
        "complete": "import java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        var nombres = List.of(10, 20, 30);\n        for (int nb : nombres) {\n            System.out.println(nb);\n        }\n    }\n}",
        "best_practices": "Privilégier la boucle foreach (for-each loop) sur les collections.",
        "pitfalls": "Tenter de modifier la taille d'une liste durant un parcours for-each.",
        "notes": "Interne aux classes implémentant l'interface Iterable."
      },
      "javascript": {
        "minimal": "for (let i = 0; i < 10; i++) {}",
        "complete": "const nombres = [10, 20, 30, 40];\nfor (const nb of nombres) {\n    console.log(nb);\n}",
        "best_practices": "Utiliser 'for...of' pour les tableaux et réserver 'for...in' aux objets.",
        "pitfalls": "Utiliser 'for...in' sur un tableau (parcourt les clés sous forme de chaînes).",
        "notes": "Les tableaux proposent des méthodes itératives natives (.forEach, .map)."
      },
      "typescript": {
        "minimal": "for (const item of liste) {}",
        "complete": "const nombres: number[] = [10, 20, 30];\nfor (const nb of nombres) {\n    console.log(nb);\n}",
        "best_practices": "Typer les tableaux explicitement (`type[]`).",
        "pitfalls": "Incompatibilité de types lors de l'insertion d'éléments.",
        "notes": "Génère du code JS standard sans surcoût."
      },
      "php": {
        "minimal": "foreach ($liste as $item) {}",
        "complete": "<?php\n$nombres = [10, 20, 30];\nforeach ($nombres as $index => $nb) {\n    echo \"$index: $nb\\n\";\n}",
        "best_practices": "Utiliser la structure 'foreach' pour itérer facilement sur les tableaux.",
        "pitfalls": "Oublier de libérer une référence issue d'un parcours foreach (& $element).",
        "notes": "Les tableaux PHP sont en réalité des cartes ordonnées (Ordered Maps)."
      },
      "vb": {
        "minimal": "For Each x In liste : Next",
        "complete": "Imports System\nImports System.Collections.Generic\n\nModule Program\n    Sub Main()\n        Dim nombres As New List(Of Integer) From {10, 20, 30}\n        For Each nb As Integer In nombres\n            Console.WriteLine(nb)\n        Next\n    End Sub\nEnd Module",
        "best_practices": "Utiliser 'For Each' pour l'itération sécurisée sur les collections.",
        "pitfalls": "Utiliser 'For i = 0 To liste.Count' au lieu de 'liste.Count - 1'.",
        "notes": "Les bornes de la boucle 'For i = A To B' sont inclusives."
      },
      "vba": {
        "minimal": "For Each item In collection : Next item",
        "complete": "Public Sub TesterBoucle()\n    Dim nombres As Variant\n    Dim nb As Variant\n    nombres = Array(10, 20, 30)\n    For Each nb In nombres\n        Debug.Print nb\n    Next nb\nEnd Sub",
        "best_practices": "Utiliser 'For Each' pour parcourir les collections de données ou de cellules Excel.",
        "pitfalls": "Oublier de libérer les pointeurs de boucles d'objets lourds.",
        "notes": "La boucle 'For i = A To B' est inclusive sur ses deux bornes."
      }
    }
  },
  {
    "id": "func_basics_01",
    "level": 3,
    "chapter": "3. Fonctions et Modularité",
    "category": "Fonctions",
    "name": "Déclaration et Passage de Paramètres",
    "description": "Signature des fonctions, paramètres par défaut, nommés et variadiques.",
    "related_concepts": [],
    "languages": {
      "c": {
        "minimal": "int ajouter(int a, int b) { return a + b; }",
        "complete": "#include <stdio.h>\n\nvoid afficher(const char* msg) {\n    printf(\"%s\\n\", msg);\n}\n\nint main() {\n    afficher(\"Alerte\");\n    return 0;\n}",
        "best_practices": "Mettre les prototypes de fonctions avant la fonction main().",
        "pitfalls": "Absence de paramètres par défaut ou d'arguments nommés.",
        "notes": "Tout passage de paramètre se fait strictement par valeur."
      },
      "cpp": {
        "minimal": "int ajouter(int a, int b) { return a + b; }",
        "complete": "#include <iostream>\n\nvoid afficherMessage(std::string msg, int repet = 1) {\n    for(int i = 0; i < repet; ++i) {\n        std::cout << msg << \"\\n\";\n    }\n}\n\nint main() {\n    afficherMessage(\"Alerte\", 3);\n    return 0;\n}",
        "best_practices": "Déclarer les prototypes dans les fichiers d'en-tête (.h) et le code dans les sources (.cpp).",
        "pitfalls": "Placer des arguments par défaut avant des arguments obligatoires.",
        "notes": "Supporte la surcharge (overloading) selon la signature des paramètres."
      },
      "csharp": {
        "minimal": "int Ajouter(int a, int b) => a + b;",
        "complete": "using System;\n\nclass Program {\n    static void Afficher(string msg, int repet = 1) {\n        for(int i = 0; i < repet; i++) Console.WriteLine(msg);\n    }\n    static void Main() {\n        Afficher(msg: \"Alerte\", repet: 3); // Paramètres nommés\n    }\n}",
        "best_practices": "Utiliser des arguments nommés pour éclaircir l'appel des booléens.",
        "pitfalls": "Modifier des valeurs de paramètres optionnels dans une DLL partagée.",
        "notes": "Surcharges et paramètres nommés pleinement supportés."
      },
      "python": {
        "minimal": "def ajouter(a, b): return a + b",
        "complete": "def afficher_message(msg, repet=1):\n    for _ in range(repet):\n        print(msg)\n\nafficher_message(repet=3, msg=\"Alerte\")",
        "best_practices": "Définir explicitement les arguments nommés.",
        "pitfalls": "Utiliser un type mutable (ex: une liste []) comme valeur par défaut d'un paramètre.",
        "notes": "Pas de surcharge de fonction native par signature."
      },
      "java": {
        "minimal": "int ajouter(int a, int b) { return a + b; }",
        "complete": "public class Main {\n    static void afficher(string msg, int repet) {\n        for(int i = 0; i < repet; i++) System.out.println(msg);\n    }\n    public static void main(String[] args) {\n        afficher(\"Alerte\", 3);\n    }\n}",
        "best_practices": "Utiliser la surcharge de méthodes pour gérer l'absence de paramètres par défaut.",
        "pitfalls": "Java ne gère pas nativement les paramètres par défaut dans la signature.",
        "notes": "Toutes les fonctions doivent résider à l'intérieur d'une classe."
      },
      "javascript": {
        "minimal": "function ajouter(a, b) { return a + b; }",
        "complete": "function afficherMessage(msg, repet = 1) {\n    for(let i = 0; i < repet; i++) {\n        console.log(msg);\n    }\n}\nafficherMessage(\"Alerte\", 3);",
        "best_practices": "Utiliser des valeurs de paramètres par défaut dans la signature.",
        "pitfalls": "Javascript ne supporte pas la surcharge native de fonctions par signature.",
        "notes": "Les fonctions sont des citoyens de première classe (First-Class Citizens)."
      },
      "typescript": {
        "minimal": "function ajouter(a: number, b: number): number { return a + b; }",
        "complete": "function afficher(msg: string, repet: number = 1): void {\n    for(let i = 0; i < repet; i++) console.log(msg);\n}\nafficher(\"Alerte\", 3);",
        "best_practices": "Définir des paramètres optionnels avec le symbole '?' (ex: repet?: number).",
        "pitfalls": "Mélanger paramètres optionnels et paramètres par défaut sans ordre strict.",
        "notes": "Permet les surcharges de signatures avant le bloc de fonction."
      },
      "php": {
        "minimal": "function ajouter(int $a, int $b): int { return $a + $b; }",
        "complete": "<?php\nfunction afficher(string $msg, int $repet = 1): void {\n    for($i=0; $i<$repet; $i++) echo \"$msg\\n\";\n}\nafficher(repet: 3, msg: \"Alerte\"); // PHP 8+",
        "best_practices": "Activer le mode strict de typage (`declare(strict_types=1);`).",
        "pitfalls": "Mélanger l'ordre des arguments obligatoires et optionnels.",
        "notes": "Accepte les arguments nommés depuis PHP 8.0."
      },
      "vb": {
        "minimal": "Function Ajouter(a As Integer, b As Integer) As Integer\n    Return a + b\nEnd Function",
        "complete": "Imports System\n\nModule Program\n    Sub Afficher(msg As String, Optional repet As Integer = 1)\n        For i As Integer = 1 To repet\n            Console.WriteLine(msg)\n        Next\n    End Sub\n    Sub Main()\n        Afficher(\"Alerte\", 3)\n    End Sub\nEnd Module",
        "best_practices": "Différencier clairement les méthodes Sub (sans retour) et Function (avec retour).",
        "pitfalls": "Ommettre le type de retour d'une fonction.",
        "notes": "Prend en charge les paramètres optionnels via le mot-clé 'Optional'."
      },
      "vba": {
        "minimal": "Function Ajouter(a As Integer, b As Integer) As Integer\n    Ajouter = a + b\nEnd Function",
        "complete": "Public Function Diviser(a As Double, Optional b As Double = 1#) As Double\n    Diviser = a / b\nEnd Function\n\nPublic Sub Main()\n    Debug.Print Diviser(10#)\nEnd Sub",
        "best_practices": "Retourner la valeur en l'assignant directement au nom de la fonction.",
        "pitfalls": "Utiliser le mot-clé 'Return' (ce mot-clé est invalide en VBA pour retourner une valeur).",
        "notes": "Prend en charge les paramètres optionnels via 'Optional'."
      }
    }
  },
  {
    "id": "func_lambdas_02",
    "level": 3,
    "chapter": "3. Fonctions et Modularité",
    "category": "Lambda",
    "name": "Fonctions Anonymes et Fermetures",
    "description": "Expressions lambdas et mécanisme de capture des variables environnantes (Closures).",
    "related_concepts": [
      "func_basics_01"
    ],
    "languages": {
      "c": {
        "minimal": "// Pas de lambdas natives en C.",
        "complete": "#include <stdio.h>\n\nvoid executer(int (*func)(int), int v) {\n    printf(\"Résultat : %d\\n\", func(v));\n}\n\nint doubler(int x) { return x * 2; }\n\nint main() {\n    executer(doubler, 5); // Passage d'un pointeur de fonction\n    return 0;\n}",
        "best_practices": "Utiliser des pointeurs de fonction pour simuler des comportements dynamiques.",
        "pitfalls": "Tenter de capturer un contexte local comme dans une closure.",
        "notes": "Le C gère le comportement dynamique via les pointeurs de fonctions."
      },
      "cpp": {
        "minimal": "auto f = [](int x) { return x * 2; };",
        "complete": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    int mult = 3;\n    std::vector<int> v = {1, 2, 3};\n    std::for_each(v.begin(), v.end(), [mult](int& n) { n *= mult; });\n    return 0;\n}",
        "best_practices": "Favoriser la capture explicite ([x]) à la capture totale ([=] ou [&]).",
        "pitfalls": "Capturer une variable locale par référence [&] dans une lambda appelée de manière asynchrone.",
        "notes": "Instancie en arrière-plan une classe anonyme surchargeant operator()."
      },
      "csharp": {
        "minimal": "Func<int, int> f = x => x * 2;",
        "complete": "using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        var v = new List<int> { 1, 2, 3 };\n        var res = v.Select(n => n * 3).ToList();\n        Console.WriteLine(string.Join(\", \", res));\n    }\n}",
        "best_practices": "Placer le mot-clé 'static' devant les lambdas sans capture pour optimiser la mémoire.",
        "pitfalls": "Capturer une variable d'itération de boucle modifiée.",
        "notes": "Se convertit soit en délégué, soit en arbre d'expression (LINQ)."
      },
      "python": {
        "minimal": "f = lambda x: x * 2",
        "complete": "mult = 3\nv = [1, 2, 3]\nres = list(map(lambda n: n * mult, v))\nprint(res)",
        "best_practices": "Utiliser 'def' si la lambda nécessite un nom pour le débogage.",
        "pitfalls": "Limiter le corps d'une lambda à une seule expression retournée.",
        "notes": "Fermeture (closure) évaluée par liaison tardive (late binding)."
      },
      "java": {
        "minimal": "Function<Integer, Integer> f = x -> x * 2;",
        "complete": "import java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        var v = List.of(1, 2, 3);\n        v.stream().map(n -> n * 3).forEach(System::println);\n    }\n}",
        "best_practices": "S'appuyer sur l'API Streams pour le traitement déclaratif des collections.",
        "pitfalls": "Tenter de modifier une variable locale non 'effectively final' depuis une lambda.",
        "notes": "Repose sur le concept d'interfaces fonctionnelles (ex: Predicate, Function)."
      },
      "javascript": {
        "minimal": "const f = x => x * 2;",
        "complete": "const mult = 3;\nconst v = [1, 2, 3];\nconst res = v.map(n => n * mult);\nconsole.log(res);",
        "best_practices": "Privilégier les fonctions fléchées () => {} pour préserver le 'this' englobant.",
        "pitfalls": "Oublier que les fonctions fléchées n'ont pas d'objet 'arguments' propre.",
        "notes": "Permet une écriture très concise pour les callbacks."
      },
      "typescript": {
        "minimal": "const f = (x: number): number => x * 2;",
        "complete": "const mult: number = 3;\nconst v: number[] = [1, 2, 3];\nconst res: number[] = v.map((n: number) => n * mult);",
        "best_practices": "Laisser TypeScript déduire les types des paramètres de callbacks.",
        "pitfalls": "Oublier de typer le retour d'une lambda complexe.",
        "notes": "Conserve le comportement des closures JS."
      },
      "php": {
        "minimal": "$f = fn($x) => $x * 2;",
        "complete": "<?php\n$mult = 3;\n$v = [1, 2, 3];\n$res = array_map(fn($n) => $n * $mult, $v);\nprint_r($res);",
        "best_practices": "Utiliser les fonctions fléchées courtes (fn) pour la capture automatique par valeur.",
        "pitfalls": "Oublier d'importer les variables externes via la clause 'use ($var)' dans les closures anonymes classiques.",
        "notes": "Existent sous forme d'instances de la classe Closure."
      },
      "vb": {
        "minimal": "Dim f = Function(x As Integer) x * 2",
        "complete": "Imports System\nImports System.Collections.Generic\nImports System.Linq\n\nModule Program\n    Sub Main()\n        Dim v As New List(Of Integer) From {1, 2, 3}\n        Dim res = v.Select(Function(n) n * 3).ToList()\n    End Sub\nEnd Module",
        "best_practices": "Utiliser des expressions lambdas mono-lignes pour la concision.",
        "pitfalls": "Mélanger la syntaxe des lambdas Sub et des lambdas Function.",
        "notes": "Se convertit directement en délégués managés .NET."
      },
      "vba": {
        "minimal": "// Non supporté nativement en VBA.",
        "complete": "Public Sub ExecuterPointeur()\n    ' Utilisation de Application.Run sous Excel pour simuler un rappel dynamique\n    Application.Run \"MaSubDeRappel\"\nEnd Sub",
        "best_practices": "Remplacer l'absence de lambdas par des modules de classe ou des appels 'Application.Run'.",
        "pitfalls": "Aucune fonction anonyme ni closure n'existe en VBA.",
        "notes": "Ne supporte pas les lambdas ni les fonctions anonymes."
      }
    }
  },
  {
    "id": "mem_management_01",
    "level": 4,
    "chapter": "4. Gestion Mémoire",
    "category": "Mémoire",
    "name": "Allocation Pile vs Tas",
    "description": "Gestion de la mémoire, Garbage Collector, pointeurs intelligents et RAII.",
    "related_concepts": [],
    "languages": {
      "c": {
        "minimal": "int* p = malloc(sizeof(int));\nfree(p);",
        "complete": "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int* p = malloc(sizeof(int));\n    if (p == NULL) return 1;\n    *p = 42;\n    printf(\"%d\\n\", *p);\n    free(p); // Libération manuelle stricte\n    return 0;\n}",
        "best_practices": "Toujours vérifier si malloc() retourne NULL avant d'utiliser la mémoire.",
        "pitfalls": "Utiliser de la mémoire après l'avoir libérée (Use-After-Free).",
        "notes": "Gestion de la mémoire 100% manuelle."
      },
      "cpp": {
        "minimal": "auto ptr = std::make_unique<int>(42);",
        "complete": "#include <iostream>\n#include <memory>\n\nclass Ressource {\npublic:\n    Ressource() { std::cout << \"Init\\n\"; }\n    ~Ressource() { std::cout << \"Clean\\n\"; }\n};\n\nint main() {\n    std::unique_ptr<Ressource> res = std::make_unique<Ressource>();\n    return 0;\n}",
        "best_practices": "Bannir new/delete au profit des pointeurs intelligents (std::unique_ptr, std::shared_ptr).",
        "pitfalls": "Oublier de libérer un pointeur brut alloué dynamiquement (fuite mémoire).",
        "notes": "Repose sur le motif RAII (Resource Acquisition Is Initialization)."
      },
      "csharp": {
        "minimal": "using var stream = new StreamWriter(\"f.txt\");",
        "complete": "using System;\nusing System.IO;\n\nclass Program {\n    static void Main() {\n        using var writer = new StreamWriter(\"log.txt\");\n        writer.WriteLine(\"Donnée managée\");\n    } // Libération automatique de la ressource IDisposable\n}",
        "best_practices": "Utiliser le bloc 'using' sur tout objet implémentant IDisposable.",
        "pitfalls": "Conserver des ressources non-managées actives en attendant le Garbage Collector.",
        "notes": "La mémoire est gérée par un Garbage Collector intergénérationnel."
      },
      "python": {
        "minimal": "with open(\"f.txt\", \"w\") as f: f.write(\"Data\")",
        "complete": "class Ressource:\n    def __enter__(self):\n        print(\"Ouverture\")\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print(\"Fermeture\")\n\nwith Ressource():\n    print(\"Traitement\")",
        "best_practices": "Utiliser le gestionnaire de contexte 'with' pour sécuriser la libération des ressources.",
        "pitfalls": "Oublier de fermer un fichier ouvert sans l'instruction 'with'.",
        "notes": "Nettoyage géré par comptage de références combiné à un GC cyclique."
      },
      "java": {
        "minimal": "try (var br = new BufferedReader(...)) {}",
        "complete": "import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try (var writer = new FileWriter(\"log.txt\")) {\n            writer.write(\"Donnée managée\");\n        } catch (IOException e) { e.printStackTrace(); }\n    }\n}",
        "best_practices": "Utiliser la structure try-with-resources pour fermer les flux AutoCloseable.",
        "pitfalls": "Conserver des objets inutiles statiques bloquant le ramasse-miettes.",
        "notes": "Mémoire gérée par un Garbage Collector (G1, ZGC, Shenandoah)."
      },
      "javascript": {
        "minimal": "let obj = { data: 42 };\nobj = null; // Éligible au GC",
        "complete": "function traiter() {\n    const r = { nom: \"Temporaire\" };\n    // 'r' sera automatiquement nettoyé par le GC après la sortie du bloc\n}\ntraiter();",
        "best_practices": "Supprimer les références obsolètes ou les écouteurs d'événements inutiles.",
        "pitfalls": "Créer de fausses fuites mémoire en conservant des références globales.",
        "notes": "La gestion de la mémoire est 100% automatisée via un Garbage Collector (Mark-and-Sweep)."
      },
      "typescript": {
        "minimal": "let obj: { data?: number } | null = { data: 42 };\nobj = null;",
        "complete": "function traiter(): void {\n    const r = { nom: \"Temp\" };\n}\ntraiter();",
        "best_practices": "Libérer les références inutiles pour faciliter le passage du GC.",
        "pitfalls": "Conserver des références fortes dans des structures de données.",
        "notes": "Même gestion mémoire que JavaScript."
      },
      "php": {
        "minimal": "$f = fopen(\"f.txt\", \"w\"); fclose($f);",
        "complete": "<?php\n$fichier = fopen(\"log.txt\", \"w\");\nfwrite($fichier, \"Incrustation\");\nfclose($fichier); // Clôture manuelle du flux",
        "best_practices": "S'assurer de fermer explicitement tous les descripteurs de fichiers système.",
        "pitfalls": "Conserver des objets lourds en session HTTP.",
        "notes": "Gestion mémoire automatisée par comptage de références et GC."
      },
      "vb": {
        "minimal": "Using writer As New StreamWriter(\"f.txt\")\nEnd Using",
        "complete": "Imports System.IO\n\nModule Program\n    Sub Main()\n        Using writer As New StreamWriter(\"log.txt\")\n            writer.WriteLine(\"Data\")\n        End Using\n    End Sub\nEnd Module",
        "best_practices": "Utiliser le bloc Using sur toutes les ressources qui implémentent IDisposable.",
        "pitfalls": "Compter sur le destructeur 'Finalize' au lieu d'un nettoyage immédiat.",
        "notes": "Gestion automatisée déléguée au Garbage Collector du .NET."
      },
      "vba": {
        "minimal": "Set obj = Nothing",
        "complete": "Public Sub LibererMemoire()\n    Dim dict As Object\n    Set dict = CreateObject(\"Scripting.Dictionary\")\n    ' Traitement...\n    Set dict = Nothing ' Libération explicite de la mémoire\nEnd Sub",
        "best_practices": "Libérer systématiquement tous les objets instanciés en les assignant à 'Nothing' en fin de traitement.",
        "pitfalls": "Ne pas libérer les variables objets, créant des fuites mémoire dans l'application hôte (Excel, Access).",
        "notes": "Basé sur un gestionnaire de mémoire simple à comptage de références COM."
      }
    }
  },
  {
    "id": "mem_references_02",
    "level": 4,
    "chapter": "4. Gestion Mémoire",
    "category": "Pointeurs",
    "name": "Pointeurs et Références",
    "description": "Passage par valeur, par adresse (pointeurs) et par référence.",
    "related_concepts": [
      "mem_management_01"
    ],
    "languages": {
      "c": {
        "minimal": "void inc(int* ptr) { (*ptr)++; }",
        "complete": "#include <stdio.h>\n\nvoid modifier(int* ptr) {\n    if (ptr != NULL) *ptr += 10;\n}\n\nint main() {\n    int x = 10;\n    modifier(&x);\n    printf(\"%d\\n\", x); // 20\n    return 0;\n}",
        "best_practices": "Passer des pointeurs 'const' pour la lecture seule.",
        "pitfalls": "Le C ne possède pas de 'références' (au sens C++ ou C#), uniquement des pointeurs.",
        "notes": "Pour modifier une variable dans une fonction, on passe son adresse mémoire (&)."
      },
      "cpp": {
        "minimal": "void inc(int& x) { x++; }",
        "complete": "#include <iostream>\n\nvoid modifier(int* ptr, int& ref) {\n    if (ptr) *ptr += 10;\n    ref += 10;\n}\n\nint main() {\n    int a = 10, b = 20;\n    modifier(&a, b);\n    std::cout << a << \" \" << b;\n    return 0;\n}",
        "best_practices": "Utiliser 'const T&' pour le passage d'objets lourds sans modification.",
        "pitfalls": "Retourner une référence vers une variable locale détruite à la sortie.",
        "notes": "Une référence ne peut être nulle ni réassignée après son initialisation."
      },
      "csharp": {
        "minimal": "void Modifier(ref int x) { x += 10; }",
        "complete": "using System;\n\nclass Program {\n    static void Incrementer(ref int val) => val += 10;\n    static void Main() {\n        int x = 10;\n        Incrementer(ref x);\n        Console.WriteLine(x); // 20\n    }\n}",
        "best_practices": "Utiliser 'in' pour passer des 'struct' en référence lecture seule.",
        "pitfalls": "Confondre passage par référence d'un type valeur (ref struct) et type référence (class).",
        "notes": "Le mot-clé 'ref' simule la référence C++."
      },
      "python": {
        "minimal": "a = [1, 2]\nb = a # Même objet en mémoire",
        "complete": "def modifier(liste_ref, entier_val):\n    liste_ref.append(99) # Mutable -> Modifié\n    entier_val += 10     # Immuable -> Non modifié hors portée\n\nL = [1, 2]\nx = 10\nmodifier(L, x)\nprint(L, x) # [1, 2, 99], 10",
        "best_practices": "Utiliser copy.deepcopy() pour dupliquer des structures d'objets imbriqués.",
        "pitfalls": "Penser que 'a = b' effectue une copie physique de la collection.",
        "notes": "Mécanisme nommé 'Pass-by-object-reference'."
      },
      "java": {
        "minimal": "void modif(Point p) { p.x = 10; }",
        "complete": "class Point { int x; }\npublic class Main {\n    static void modifier(Point p, int val) {\n        p.x += 10; // Référence modifiée\n        val += 10; // Primitif inchangé\n    }\n    public static void main(String[] args) {\n        Point pt = new Point();\n        int v = 10;\n        modifier(pt, v);\n        System.out.println(pt.x + \" \" + v); // 10, 10\n    }\n}",
        "best_practices": "Créer des classes immuables (comme les Records introduits en Java 14).",
        "pitfalls": "Croire qu'on peut réassigner la référence d'un objet passé en argument de méthode.",
        "notes": "Tout argument est passé strictement par valeur (la valeur étant l'adresse de la référence pour les objets)."
      },
      "javascript": {
        "minimal": "let a = { v: 10 };\nlet b = a; // Même référence",
        "complete": "function modifier(obj, val) {\n    obj.v += 10; // Objet modifiable par référence\n    val += 10;   // Primitif passé par valeur\n}\nlet o = { v: 10 }, x = 10;\nmodifier(o, x);\nconsole.log(o.v, x); // 20, 10",
        "best_practices": "Cloner un objet ({...obj}) pour éviter les effets de bord inattendus.",
        "pitfalls": "Penser qu'une assignation d'objet (=) crée une copie indépendante.",
        "notes": "Primitifs passés par valeur, objets/tableaux passés par référence."
      },
      "typescript": {
        "minimal": "let a: { v: number } = { v: 10 };",
        "complete": "interface Donnee { v: number; }\nfunction modif(d: Donnee): void {\n    d.v += 10;\n}\nconst obj: Donnee = { v: 10 };\nmodif(obj);",
        "best_practices": "Utiliser Readonly<T> pour empêcher la modification de l'objet.",
        "pitfalls": "Considérer qu'une interface crée une copie d'un objet.",
        "notes": "Les types et interfaces disparaissent complètement après transpilation."
      },
      "php": {
        "minimal": "function inc(int &$x) { $x++; }",
        "complete": "<?php\nfunction modifier(array &$tab) {\n    $tab[] = 99;\n}\n$l = [1, 2];\nmodifier($l);\nprint_r($l); // [1, 2, 99]",
        "best_practices": "Passer des arguments par référence (&$var) uniquement sur des structures très volumineuses.",
        "pitfalls": "Créer des effets de bord opaques via le passage par référence silencieux.",
        "notes": "Par défaut, les tableaux et types primitifs sont copiés à l'assignation (Copy-On-Write)."
      },
      "vb": {
        "minimal": "Sub Modifier(ByRef x As Integer) : x += 10 : End Sub",
        "complete": "Imports System\n\nModule Program\n    Sub Incrementer(ByRef val As Integer)\n        val += 10\n    End Sub\n    Sub Main()\n        Dim x As Integer = 10\n        Incrementer(x)\n        Console.WriteLine(x) ' 20\n    End Sub\nEnd Module",
        "best_practices": "Utiliser 'ByVal' par défaut (sécurité) et réservé 'ByRef' aux cas nécessaires.",
        "pitfalls": "Passer un argument 'ByRef' par inadvertance à une méthode modifiant le paramètre.",
        "notes": "Différence explicite marquée via les mots-clés ByVal et ByRef dans la signature."
      },
      "vba": {
        "minimal": "Sub Modifier(ByRef x As Integer) : x = x + 10 : End Sub",
        "complete": "Public Sub Incrementer(ByRef val As Integer)\n    val = val + 10\nEnd Sub\n\nPublic Sub Main()\n    Dim x As Integer\n    x = 10\n    Incrementer x\n    Debug.Print x ' 20\nEnd Sub",
        "best_practices": "Inscrire systématiquement 'ByVal' devant chaque paramètre qui ne doit pas être modifié.",
        "pitfalls": "En VBA, le passage d'argument est 'ByRef' par défaut si aucun mot-clé n'est indiqué.",
        "notes": "Le passage par référence 'ByRef' permet de modifier la valeur de la variable d'origine."
      }
    }
  },
  {
    "id": "poo_classes_01",
    "level": 5,
    "chapter": "5. Programmation Orientée Objet",
    "category": "Classes",
    "name": "Classes et Encapsulation",
    "description": "Structure des classes, constructeurs et niveaux de visibilité.",
    "related_concepts": [],
    "languages": {
      "c": {
        "minimal": "typedef struct {\n    int age;\n} Personne;",
        "complete": "#include <stdio.h>\n\ntypedef struct {\n    char nom[50];\n    int age;\n} Personne;\n\nint main() {\n    Personne p = {\"Alice\", 25};\n    printf(\"%s\\n\", p.nom);\n    return 0;\n}",
        "best_practices": "Utiliser typedef pour alléger l'écriture des structures.",
        "pitfalls": "Aucune encapsulation : tous les membres d'une struct sont publics.",
        "notes": "Le C n'a pas de classes ni de méthodes membres."
      },
      "cpp": {
        "minimal": "class Personne {\nprivate:\n    int age;\n};",
        "complete": "#include <iostream>\n#include <string>\n\nclass Personne {\nprivate:\n    std::string nom;\npublic:\n    Personne(std::string n) : nom(n) {}\n    std::string getNom() const { return nom; }\n};\n\nint main() {\n    Personne p(\"Alice\");\n    std::cout << p.getNom() << \"\\n\";\n    return 0;\n}",
        "best_practices": "Utiliser les listes d'initialisation dans les constructeurs (: nom(n)).",
        "pitfalls": "Oublier le point-virgule terminal ';' à la fin de la déclaration de classe.",
        "notes": "Par défaut, les membres d'une 'class' sont private, ceux d'une 'struct' sont public."
      },
      "csharp": {
        "minimal": "public class Personne {\n    public string Nom { get; private set; }\n}",
        "complete": "using System;\n\npublic class Personne {\n    public string Nom { get; }\n    public Personne(string nom) => Nom = nom;\n}\nclass Program {\n    static void Main() {\n        var p = new Personne(\"Alice\");\n        Console.WriteLine(p.Nom);\n    }\n}",
        "best_practices": "Utiliser des propriétés auto-implémentées { get; set; } au lieu de champs publics.",
        "pitfalls": "Créer une récursion infinie dans le setter d'une propriété.",
        "notes": "Génère automatiquement les méthodes d'accès lors de la compilation."
      },
      "python": {
        "minimal": "class Personne:\n    def __init__(self, age):\n        self._age = age",
        "complete": "class Personne:\n    def __init__(self, nom):\n        self.__nom = nom\n    @property\n    def nom(self):\n        return self.__nom\n\np = Personne(\"Alice\")\nprint(p.nom)",
        "best_practices": "Déclarer les attributs protégés par convention avec un simple préfixe '_'.",
        "pitfalls": "Accéder directement à un champ à double préfixe '__' déclenchant le name mangling.",
        "notes": "L'encapsulation stricte au runtime n'existe pas."
      },
      "java": {
        "minimal": "public class Personne {\n    private int age;\n}",
        "complete": "public class Personne {\n    private String nom;\n    public Personne(String nom) { this.nom = nom; }\n    public String getNom() { return nom; }\n}",
        "best_practices": "Encapsuler systématiquement les champs et fournir des accesseurs.",
        "pitfalls": "Utiliser une visibilité par défaut (package-private) par inadvertance.",
        "notes": "Tous les types objets héritent par défaut de la classe java.lang.Object."
      },
      "javascript": {
        "minimal": "class Personne {\n    #age; // Champ privé\n}",
        "complete": "class Personne {\n    #nom;\n    constructor(n) {\n        this.#nom = n;\n    }\n    get nom() { return this.#nom; }\n}\nconst p = new Personne(\"Alice\");\nconsole.log(p.nom);",
        "best_practices": "Utiliser le préfixe privée '#' (ES2022) pour encapsuler les variables.",
        "pitfalls": "Oublier d'utiliser 'this.' pour accéder aux variables membres.",
        "notes": "Le mot-clé 'class' est un sucre syntaxique sur le système d'héritage prototypal."
      },
      "typescript": {
        "minimal": "class Personne {\n    private age: number;\n}",
        "complete": "class Personne {\n    constructor(private nom: string) {}\n    public getNom(): string { return this.nom; }\n}\nconst p = new Personne(\"Alice\");\nconsole.log(p.getNom());",
        "best_practices": "Utiliser l'initialisation raccourcie dans le constructeur (`constructor(public nom: string)`).",
        "pitfalls": "Croire que le mot-clé 'private' de TS est inviolable au runtime (préférer `#`).",
        "notes": "Ajoute des modificateurs d'accès statiques (public, private, protected)."
      },
      "php": {
        "minimal": "class Personne {\n    private int $age;\n}",
        "complete": "<?php\nclass Personne {\n    public function __construct(private string $nom) {}\n    public function getNom(): string { return $this->nom; }\n}\n$p = new Personne(\"Alice\");\necho $p->getNom();",
        "best_practices": "Utiliser la promotion de propriétés dans le constructeur (PHP 8+).",
        "pitfalls": "Oublier le symbole '$' devant un attribut d'instance accédé via `$this->`.",
        "notes": "Supporte l'encapsulation classique public, protected et private."
      },
      "vb": {
        "minimal": "Public Class Personne\n    Public Property Nom As String\nEnd Class",
        "complete": "Imports System\n\nPublic Class Personne\n    Public Property Nom As String\n    Public Sub New(nom As String)\n        Me.Nom = nom\n    End Sub\nEnd Class\n\nModule Program\n    Sub Main()\n        Dim p As New Personne(\"Alice\")\n        Console.WriteLine(p.Nom)\n    End Sub\nEnd Module",
        "best_practices": "S'appuyer sur les propriétés auto-implémentées pour purifier la syntaxe.",
        "pitfalls": "Nommer le constructeur par le nom de la classe au lieu de 'New'.",
        "notes": "Constructeurs obligatoirement nommés 'Sub New()'."
      },
      "vba": {
        "minimal": "' Dans un Module de Classe nomme 'Personne'\nPrivate pAge As Integer",
        "complete": "' Fichier : Personne.cls\nPrivate pNom As String\n\nPublic Property Get Nom() As String\n    Nom = pNom\nEnd Property\n\nPublic Property Let Nom(Value As String)\n    pNom = Value\nEnd Property",
        "best_practices": "Séparer clairement les accesseurs 'Property Get' et les mutateurs 'Property Let' (ou 'Set' pour un objet).",
        "pitfalls": "Essayer de déclarer un constructeur prenant des arguments (impossible en VBA).",
        "notes": "Les classes doivent obligatoirement résider dans des fichiers séparés '.cls' (Modules de classe)."
      }
    }
  },
  {
    "id": "poo_polymorphism_02",
    "level": 5,
    "chapter": "5. Programmation Orientée Objet",
    "category": "Polymorphisme",
    "name": "Héritage et Polymorphisme",
    "description": "Héritage, interfaces, classes abstraites et résolution dynamique.",
    "related_concepts": [
      "poo_classes_01"
    ],
    "languages": {
      "c": {
        "minimal": "// Struct avec pointeurs de fonctions pour simuler du polymorphisme.",
        "complete": "#include <stdio.h>\n\ntypedef struct {\n    void (*crier)(void);\n} Animal;\n\nvoid crierChien() { printf(\"Wouf!\\n\"); }\n\nint main() {\n    Animal chien = { crierChien };\n    chien.crier();\n    return 0;\n}",
        "best_practices": "Simuler des tables virtuelles via des tableaux de pointeurs de fonctions.",
        "pitfalls": "Problèmes fréquents de trancodage manuel de types (casts invalides).",
        "notes": "Pas d'héritage natif en C."
      },
      "cpp": {
        "minimal": "class Animal {\n    virtual void crier() = 0;\n};",
        "complete": "#include <iostream>\n\nclass Animal {\npublic:\n    virtual ~Animal() = default;\n    virtual void crier() const { std::cout << \"...\\n\"; }\n};\n\nclass Chien : public Animal {\npublic:\n    void crier() const override { std::cout << \"Wouf!\\n\"; }\n};\n\nint main() {\n    Animal* a = new Chien();\n    a->crier();\n    delete a;\n    return 0;\n}",
        "best_practices": "Ajouter systématiquement le spécificateur 'override' lors d'une redéfinition.",
        "pitfalls": "Oublier de rendre le destructeur de la classe de base virtuel (virtual ~Animal).",
        "notes": "La résolution dynamique passe par une table de fonctions virtuelles (vtable)."
      },
      "csharp": {
        "minimal": "public class Chien : Animal {\n    public override void Crier() {}\n}",
        "complete": "using System;\n\npublic abstract class Animal {\n    public abstract void Crier();\n}\npublic class Chien : Animal {\n    public override void Crier() => Console.WriteLine(\"Wouf!\");\n}\nclass Program {\n    static void Main() {\n        Animal a = new Chien();\n        a.Crier();\n    }\n}",
        "best_practices": "Préfixer le nom des interfaces par un 'I' majuscule (ex: IDisposable).",
        "pitfalls": "Oublier le mot-clé 'override' lors de la redéfinition d'une méthode virtuelle.",
        "notes": "Héritage simple pour les classes, implémentation d'interfaces multiples autorisée."
      },
      "python": {
        "minimal": "class Chien(Animal):\n    def crier(self): print(\"Wouf\")",
        "complete": "class Animal:\n    def crier(self):\n        pass\nclass Chien(Animal):\n    def crier(self):\n        print(\"Wouf!\")\n\ndef faire_crier(a):\n    a.crier()\n\nfaire_crier(Chien())",
        "best_practices": "Utiliser le module 'abc' pour formaliser des classes de base abstraites.",
        "pitfalls": "Problèmes de résolution de méthodes en cas d'héritage multiple complexe (MRO).",
        "notes": "Repose fondamentalement sur le concept de Duck Typing."
      },
      "java": {
        "minimal": "public class Chien extends Animal {\n    @Override void crier() {}\n}",
        "complete": "abstract class Animal {\n    abstract void crier();\n}\nclass Chien extends Animal {\n    @Override void crier() { System.out.println(\"Wouf!\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Chien();\n        a.crier();\n    }\n}",
        "best_practices": "Ajouter l'annotation @Override lors d'une redéfinition de méthode.",
        "pitfalls": "Oublier qu'une classe ne peut hériter directement que d'une seule classe parente.",
        "notes": "Héritage simple des classes et implémentation multiple d'interfaces."
      },
      "javascript": {
        "minimal": "class Chien extends Animal {\n    crier() { console.log(\"Wouf\"); }\n}",
        "complete": "class Animal {\n    crier() { console.log(\"...\"); }\n}\nclass Chien extends Animal {\n    crier() { console.log(\"Wouf!\"); }\n}\nconst a = new Chien();\na.crier();",
        "best_practices": "Utiliser 'super' dans le constructeur enfant avant d'accéder à 'this'.",
        "pitfalls": "Tenter d'implémenter un héritage multiple (non supporté par JavaScript).",
        "notes": "Repose entièrement sur le Duck Typing et la chaîne de prototypes."
      },
      "typescript": {
        "minimal": "interface Animal { crier(): void; }",
        "complete": "interface Animal {\n    crier(): void;\n}\nclass Chien implements Animal {\n    crier(): void { console.log(\"Wouf!\"); }\n}\nconst a: Animal = new Chien();\na.crier();",
        "best_practices": "Utiliser des interfaces pour définir des contrats structurels.",
        "pitfalls": "Confondre l'héritage de classes (extends) et le contrat d'interface (implements).",
        "notes": "Typage structurel : deux types compatibles par leur forme sont équivalents."
      },
      "php": {
        "minimal": "class Chien extends Animal {\n    public function crier(): void {}\n}",
        "complete": "<?php\nabstract class Animal {\n    abstract public function crier(): void;\n}\nclass Chien extends Animal {\n    public function crier(): void { echo \"Wouf!\"; }\n}\n$a = new Chien();\n$a->crier();",
        "best_practices": "Préférer l'utilisation des Traits pour réutiliser du code sans alourdir l'héritage.",
        "pitfalls": "Tenter une déclaration d'héritage multiple de classes.",
        "notes": "Supporte l'héritage simple, les interfaces et les Traits."
      },
      "vb": {
        "minimal": "Public Class Chien : Inherits Animal\n    Public Overrides Sub Crier() : End Sub\nEnd Class",
        "complete": "Imports System\n\nPublic MustInherit Class Animal\n    Public MustOverride Sub Crier()\nEnd Class\nPublic Class Chien : Inherits Animal\n    Public Overrides Sub Crier()\n        Console.WriteLine(\"Wouf!\")\n    End Sub\nEnd Class",
        "best_practices": "Ajouter la directive Overrides lors d'une redéfinition.",
        "pitfalls": "Oublier le mot-clé Overridable sur la méthode parente que l'on souhaite dériver.",
        "notes": "Utilise les mots-clés explicités MustInherit (abstrait) et Inherits (héritage)."
      },
      "vba": {
        "minimal": "Implements IAnimal",
        "complete": "' Dans le module de classe Chien.cls\nImplements IAnimal\n\nPrivate Sub IAnimal_Crier()\n    MsgBox \"Wouf!\"\nEnd Sub",
        "best_practices": "Définir des interfaces pures dans des modules de classe indépendants.",
        "pitfalls": "L'héritage de classes n'est pas supporté (pas de mot-clé 'Inherits').",
        "notes": "Seule l'implémentation d'interfaces via 'Implements' est possible."
      }
    }
  },
  {
    "id": "err_exceptions_01",
    "level": 6,
    "chapter": "6. Gestion des Erreurs",
    "category": "Exceptions",
    "name": "Le bloc Try-Catch-Finally",
    "description": "Propagation et capture des exceptions, libération des ressources.",
    "related_concepts": [],
    "languages": {
      "c": {
        "minimal": "if (err) { return -1; }",
        "complete": "#include <stdio.h>\n\nint diviser(int a, int b, int* res) {\n    if (b == 0) return -1; // Code d'erreur\n    *res = a / b;\n    return 0; // Succès\n}\n\nint main() {\n    int r;\n    if (diviser(10, 0, &r) != 0) {\n        printf(\"Erreur : division par zéro\\n\");\n    }\n    return 0;\n}",
        "best_practices": "Traiter les codes d'erreurs retournés par chaque fonction.",
        "pitfalls": "Ignorer le code de retour d'une fonction critique.",
        "notes": "Pas de mécanisme d'exceptions nativement (try/catch)."
      },
      "cpp": {
        "minimal": "try { throw std::runtime_error(\"Err\"); }\ncatch(const std::exception& e) {}",
        "complete": "#include <iostream>\n#include <stdexcept>\n\nint main() {\n    try {\n        throw std::invalid_argument(\"Valeur incorrecte\");\n    } catch (const std::invalid_argument& e) {\n        std::cerr << e.what() << \"\\n\";\n    } catch (const std::exception& e) {\n        std::cerr << \"Erreur : \" << e.what() << \"\\n\";\n    }\n    return 0;\n}",
        "best_practices": "Attraper les exceptions par référence constante (const std::exception& e).",
        "pitfalls": "Lancer des types primitifs bruts comme 'throw 404;' au lieu d'objets d'exception.",
        "notes": "Pas de bloc 'finally' natif : le nettoyage s'appuie entièrement sur le RAII."
      },
      "csharp": {
        "minimal": "try {} catch(Exception e) {} finally {}",
        "complete": "using System;\n\nclass Program {\n    static void Main() {\n        try {\n            throw new ArgumentException(\"Erreur d'argument\");\n        } catch (ArgumentException e) {\n            Console.WriteLine(e.Message);\n        } finally {\n            Console.WriteLine(\"Nettoyage\");\n        }\n    }\n}",
        "best_practices": "Utiliser 'throw;' sans paramètre pour conserver la trace de la pile d'exécution.",
        "pitfalls": "Intercepter la classe générique Exception sans traiter l'erreur.",
        "notes": "Toutes les exceptions sont non-vérifiées (Unchecked Exceptions) à la compilation."
      },
      "python": {
        "minimal": "try: pass\nexcept Exception as e: pass\nfinally: pass",
        "complete": "try:\n    res = 10 / 0\nexcept ZeroDivisionError as e:\n    print(e)\nelse:\n    print(\"Pas d'erreur\")\nfinally:\n    print(\"Bloc de clôture\")",
        "best_practices": "Exploiter la clause 'else' pour isoler le code ne devant s'exécuter qu'en l'absence d'exception.",
        "pitfalls": "Capturer toutes les erreurs indifféremment avec un bloc 'except:' nu.",
        "notes": "Philosophie EAFP (Easier to Ask for Forgiveness than Permission)."
      },
      "java": {
        "minimal": "try {} catch(Exception e) {} finally {}",
        "complete": "public class Main {\n    public static void main(String[] args) {\n        try {\n            throw new IllegalArgumentException(\"Erreur argument\");\n        } catch (IllegalArgumentException e) {\n            System.out.println(e.getMessage());\n        } finally {\n            System.out.println(\"Nettoyage\");\n        }\n    }\n}",
        "best_practices": "Spécifier clairement les exceptions vérifiées (Checked Exceptions) dans la méthode.",
        "pitfalls": "Intercepter Throwable ou Error, qui sont réservés aux pannes graves de la JVM.",
        "notes": "Seul langage majeur à implémenter les Checked Exceptions obligatoires à la compilation."
      },
      "javascript": {
        "minimal": "try { throw new Error(\"Err\"); }\ncatch(e) { console.error(e); }",
        "complete": "try {\n    throw new TypeError(\"Format invalide\");\n} catch (e) {\n    console.error(e.message);\n} finally {\n    console.log(\"Nettoyage systématique\");\n}",
        "best_practices": "Instancier des objets d'erreur formels (new Error) avec une trace de pile.",
        "pitfalls": "Laisser des blocs 'catch' vides sans traiter la panne.",
        "notes": "Le bloc 'finally' s'exécute quelle que soit l'issue du bloc try/catch."
      },
      "typescript": {
        "minimal": "try {} catch(e: unknown) {}",
        "complete": "try {\n    throw new Error(\"Échec\");\n} catch (e: unknown) {\n    if (e instanceof Error) console.error(e.message);\n}",
        "best_practices": "Typer l'exception attrapée en 'unknown' puis vérifier avec 'instanceof'.",
        "pitfalls": "Présumer que le type attrapé dans catch est toujours de type Error.",
        "notes": "Le bloc try/catch suit exactement les règles de JavaScript."
      },
      "php": {
        "minimal": "try {} catch(Exception $e) {} finally {}",
        "complete": "<?php\ntry {\n    throw new InvalidArgumentException(\"Paramètre invalide\");\n} catch (InvalidArgumentException $e) {\n    echo $e->getMessage();\n} finally {\n    echo \"Nettoyage\";\n}",
        "best_practices": "Utiliser des exceptions personnalisées étendant la classe Exception.",
        "pitfalls": "Intercepter la classe Throwable globale sans isoler les pannes courantes.",
        "notes": "Toutes les erreurs système historiques (Warnings, Notices) ont été converties en exceptions."
      },
      "vb": {
        "minimal": "Try : Catch ex As Exception : Finally : End Try",
        "complete": "Imports System\n\nModule Program\n    Sub Main()\n        Try\n            Throw New ArgumentException(\"Erreur\")\n        Catch ex As ArgumentException\n            Console.WriteLine(ex.Message)\n        Finally\n            Console.WriteLine(\"Nettoyage\")\n        End Try\n    End Sub\nEnd Module",
        "best_practices": "Organiser les blocs Catch du plus spécifique au plus général.",
        "pitfalls": "Utiliser l'ancienne instruction de gestion d'erreur 'On Error GoTo'.",
        "notes": "Totalement intégré à la hiérarchie d'exceptions .NET."
      },
      "vba": {
        "minimal": "On Error GoTo GestionErreur",
        "complete": "Public Sub TesterErreur()\n    On Error GoTo ErreurHandler\n    Dim x As Long\n    x = 1 / 0\n    Exit Sub\nErreurHandler:\n    Debug.Print \"Erreur : \" & Err.Description\nEnd Sub",
        "best_practices": "Placer une instruction 'Exit Sub' juste avant le label de gestion d'erreur.",
        "pitfalls": "Utiliser 'On Error Resume Next' à l'aveugle, ce qui masque toutes les erreurs sans les résoudre.",
        "notes": "Utilise le mécanisme de déroutement historique 'On Error GoTo'."
      }
    }
  },
  {
    "id": "gen_generics_01",
    "level": 7,
    "chapter": "7. Généricité et Concurrence",
    "category": "Généricité",
    "name": "Programmation Générique",
    "description": "Templates C++, Generics C# et typage dynamique.",
    "related_concepts": [
      "poo_polymorphism_02"
    ],
    "languages": {
      "c": {
        "minimal": "#define MAX(a, b) ((a) > (b) ? (a) : (b))",
        "complete": "#include <stdio.h>\n\n#define IMPRIMER(val, fmt) printf(fmt \"\\n\", val)\n\nint main() {\n    IMPRIMER(42, \"%d\");\n    IMPRIMER(3.14, \"%.2f\");\n    return 0;\n}",
        "best_practices": "Entourer les arguments de macros avec des parenthèses.",
        "pitfalls": "Les macros du préprocesseur ne vérifient aucun type.",
        "notes": "Généricité limitée aux macros ou aux pointeurs `void*`."
      },
      "cpp": {
        "minimal": "template <typename T>\nT maxVal(T a, T b) { return (a > b) ? a : b; }",
        "complete": "#include <iostream>\n\ntemplate <typename T>\nclass Boite {\nprivate:\n    T contenu;\npublic:\n    Boite(T c) : contenu(c) {}\n    T getContenu() const { return contenu; }\n};\n\nint main() {\n    Boite<int> b(100);\n    std::cout << b.getContenu() << \"\\n\";\n    return 0;\n}",
        "best_practices": "Placer l'implémentation des templates dans les fichiers d'en-tête (.h).",
        "pitfalls": "Générer une augmentation de la taille du binaire due à la duplication du code (code bloat).",
        "notes": "Les templates sont évalués à la compilation et permettent la métaprogrammation."
      },
      "csharp": {
        "minimal": "public class Boite<T> { public T Contenu { get; set; } }",
        "complete": "using System;\n\npublic class Entrepôt<T> where T : class {\n    public T Element { get; set; }\n}\nclass Program {\n    static void Main() {\n        var e = new Entrepôt<string> { Element = \"Conteneur\" };\n        Console.WriteLine(e.Element);\n    }\n}",
        "best_practices": "Appliquer des contraintes explicites (where T : class, new()).",
        "pitfalls": "Utiliser des opérateurs arithmétiques sur des génériques sans les interfaces dédiées (C# 11+).",
        "notes": "Les Génériques conservent leur type réel au runtime (pas d'effacement de type)."
      },
      "python": {
        "minimal": "from typing import TypeVar\nT = TypeVar('T')",
        "complete": "from typing import TypeVar, Generic\nT = TypeVar('T')\nclass Boite(Generic[T]):\n    def __init__(self, val: T):\n        self.val = val\n\nb = Boite[int](100)\nprint(b.val)",
        "best_practices": "Utiliser le module 'typing' pour assister l'analyseur statique de code (mypy).",
        "pitfalls": "Croire que spécifier un type générique bloque un mauvais type d'élément au runtime.",
        "notes": "La généricité est prise en charge nativement par le typage dynamique."
      },
      "java": {
        "minimal": "public class Boite<T> { private T contenu; }",
        "complete": "public class Boite<T> {\n    private T val;\n    public Boite(T val) { this.val = val; }\n    public T getVal() { return val; }\n    public static void main(String[] args) {\n        Boite<Integer> b = new Boite<>(100);\n        System.out.println(b.getVal());\n    }\n}",
        "best_practices": "Utiliser les jokers délimités (`<? extends Number>`).",
        "pitfalls": "Tenter d'instancier un type générique avec un type primitif (`Boite<int>` est invalide).",
        "notes": "Basé sur le mécanisme d'effacement de type (Type Erasure) au runtime."
      },
      "javascript": {
        "minimal": "function identite(arg) { return arg; }",
        "complete": "function premierElement(tableau) {\n    return tableau[0];\n}\nconsole.log(premierElement([1, 2, 3]));\nconsole.log(premierElement([\"A\", \"B\"]));",
        "best_practices": "Utiliser JSDoc (`/** @param {T} arg */`) pour indiquer des types génériques aux IDE.",
        "pitfalls": "Présumer qu'une fonction va valider le type des éléments à l'exécution.",
        "notes": "Générique par nature grâce au typage dynamique."
      },
      "typescript": {
        "minimal": "function id<T>(arg: T): T { return arg; }",
        "complete": "class Boite<T> {\n    constructor(public contenu: T) {}\n}\nconst b = new Boite<number>(100);\nconsole.log(b.contenu);",
        "best_practices": "Restreindre les génériques à l'aide de contraintes (`<T extends Structure>`).",
        "pitfalls": "Multiplier inutilement des paramètres génériques complexes.",
        "notes": "Vérification des génériques effectuée uniquement à la compilation."
      },
      "php": {
        "minimal": "/** @template T */",
        "complete": "<?php\n/**\n * @template T\n */\nclass Boite {\n    /** @param T $contenu */\n    public function __construct(public mixed $contenu) {}\n}\n$b = new Boite(100);",
        "best_practices": "Documenter vos génériques à l'aide des annotations PHPDoc pour PHPStan / Psalm.",
        "pitfalls": "S'attendre à une validation stricte des génériques directement à l'exécution.",
        "notes": "PHP n'exécute aucun contrôle natif de génériques au runtime."
      },
      "vb": {
        "minimal": "Public Class Boite(Of T)\n    Public Property Val As T\nEnd Class",
        "complete": "Imports System\n\nPublic Class Boite(Of T)\n    Public Property Contenu As T\n    Public Sub New(val As T)\n        Me.Contenu = val\n    End Sub\nEnd Class\n\nModule Program\n    Sub Main()\n        Dim b As New Boite(Of Integer)(100)\n        Console.WriteLine(b.Contenu)\n    End Sub\nEnd Module",
        "best_practices": "Appliquer des contraintes strictes à l'aide de la clause 'As' (`Of T As Class`).",
        "pitfalls": "Tenter d'utiliser des génériques sans la notation 'Of T'.",
        "notes": "Les génériques VB.NET partagent les mêmes caractéristiques que C#."
      },
      "vba": {
        "minimal": "' Utiliser le type Variant ou des Collections pour la généricité.",
        "complete": "Public Sub TraiterGeneric()\n    Dim col As New Collection\n    col.Add 100\n    col.Add \"Texte\"\n    Debug.Print col.Item(1) & \" - \" & col.Item(2)\nEnd Sub",
        "best_practices": "Employer des objets Collection ou Scripting.Dictionary pour stocker des types variables.",
        "pitfalls": "Le langage VBA ne possède aucune forme de généricité native (pas de templates ni de generics).",
        "notes": "La généricité est simulée par l'usage du type universel 'Variant'."
      }
    }
  },
  {
    "id": "conc_async_02",
    "level": 7,
    "chapter": "7. Généricité et Concurrence",
    "category": "Concurrence",
    "name": "Asynchronisme (Async / Await)",
    "description": "Programmation asynchrone non-bloquante, threads et promesses.",
    "related_concepts": [
      "func_lambdas_02"
    ],
    "languages": {
      "c": {
        "minimal": "// Gestion multithread avec <pthread.h>",
        "complete": "#include <stdio.h>\n#include <pthread.h>\n\nvoid* calcul(void* arg) {\n    printf(\"Thread exécuté\\n\");\n    return NULL;\n}\n\nint main() {\n    pthread_t thread;\n    pthread_create(&thread, NULL, calcul, NULL);\n    pthread_join(thread, NULL);\n    return 0;\n}",
        "best_practices": "Penser à toujours 'joindre' les threads pour libérer leurs ressources.",
        "pitfalls": "Problèmes de concurrence d'accès à la mémoire (Race Conditions).",
        "notes": "Repose sur l'API POSIX pthreads."
      },
      "cpp": {
        "minimal": "auto f = std::async(std::launch::async, [](){ return 42; });",
        "complete": "#include <iostream>\n#include <future>\n#include <thread>\n\nint calcul() {\n    std::this_thread::sleep_for(std::chrono::milliseconds(100));\n    return 42;\n}\n\nint main() {\n    std::future<int> f = std::async(std::launch::async, calcul);\n    std::cout << \"Résultat : \" << f.get() << \"\\n\";\n    return 0;\n}",
        "best_practices": "Spécifier le paramètre 'std::launch::async' pour garantir une exécution parallèle.",
        "pitfalls": "Ignorer l'objet std::future retourné, ce qui rend l'appel synchrone.",
        "notes": "C++20 intègre des coroutines (co_await, co_return) bas niveau."
      },
      "csharp": {
        "minimal": "async Task<int> RunAsync() { await Task.Delay(100); return 42; }",
        "complete": "using System;\nusing System.Threading.Tasks;\n\nclass Program {\n    static async Task Main() {\n        await Task.Delay(100);\n        Console.WriteLine(\"Opération terminée\");\n    }\n}",
        "best_practices": "Suivre le principe 'Async all the way'. Renvoyer Task au lieu de void.",
        "pitfalls": "Utiliser .Result ou .Wait() sur une tâche, risquant un blocage mortel (deadlock).",
        "notes": "Convertit le code en une machine à états asynchrone lors de la compilation."
      },
      "python": {
        "minimal": "import asyncio\nawait asyncio.sleep(0.1)",
        "complete": "import asyncio\nasync def main():\n    await asyncio.sleep(0.1)\n    print(\"Exécuté\")\n\nif __name__ == \"__main__\":\n    asyncio.run(main())",
        "best_practices": "Utiliser asyncio.gather() pour coordonner des tâches concurrentes.",
        "pitfalls": "Exécuter une instruction synchrone bloquante au milieu d'une fonction async.",
        "notes": "S'exécute de manière coopérative sur une boucle d'événements unique (Event Loop)."
      },
      "java": {
        "minimal": "CompletableFuture.supplyAsync(() -> 42);",
        "complete": "import java.util.concurrent.CompletableFuture;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        var f = CompletableFuture.supplyAsync(() -> 42);\n        System.out.println(f.get());\n    }\n}",
        "best_practices": "Exploiter les threads virtuels (Virtual Threads / Projet Loom) issus de Java 21.",
        "pitfalls": "Appeler la méthode bloquante `.get()` sur le thread principal UI.",
        "notes": "Propose l'API CompletableFuture pour enchaîner les traitements."
      },
      "javascript": {
        "minimal": "const res = await fetch(url);",
        "complete": "function delai() {\n    return new Promise(resolve => setTimeout(() => resolve(42), 100));\n}\nasync function main() {\n    const res = await delai();\n    console.log(\"Reçu :\", res);\n}\nmain();",
        "best_practices": "Envelopper les instructions 'await' dans des blocs try/catch.",
        "pitfalls": "Exécuter séquentiellement des promesses indépendantes au lieu d'utiliser Promise.all().",
        "notes": "Repose sur une boucle d'événements (Event Loop) mono-thread."
      },
      "typescript": {
        "minimal": "const res: Response = await fetch(url);",
        "complete": "async function charger(): Promise<number> {\n    return 42;\n}\nasync function main(): Promise<void> {\n    const v = await charger();\n    console.log(v);\n}\nmain();",
        "best_practices": "Typer systématiquement le retour des fonctions asynchrones avec `Promise<T>`.",
        "pitfalls": "Oublier de gérer les pannes avec try/catch sur les tâches asynchrones.",
        "notes": "Transpilé en promesses ou machines à états JS selon la cible."
      },
      "php": {
        "minimal": "// Utilisation des Fibers (PHP 8.1+) ou de ReactPHP/Swoole.",
        "complete": "<?php\n$fiber = new Fiber(function(): void {\n    $valeur = Fiber::suspend('Pause');\n    echo \"Reprise avec : $valeur\\n\";\n});\n$res = $fiber->start();\n$fiber->resume('OK');",
        "best_practices": "Utiliser des frameworks asynchrones dédiés (Swoole, Workerman) pour le traitement I/O massif.",
        "pitfalls": "Confondre l'exécution synchrone par défaut d'un script PHP avec un modèle évènementiel.",
        "notes": "Introduction des coroutines bas niveau avec l'API Fiber en PHP 8.1."
      },
      "vb": {
        "minimal": "Async Function RunAsync() As Task(Of Integer)\n    Await Task.Delay(100)\n    Return 42\nEnd Function",
        "complete": "Imports System\nImports System.Threading.Tasks\n\nModule Program\n    Async Function Main() As Task\n        Await Task.Delay(100)\n        Console.WriteLine(\"Terminé\")\n    End Function\nEnd Module",
        "best_practices": "Toujours suffixer le nom des fonctions asynchrones par 'Async'.",
        "pitfalls": "Utiliser 'Async Sub' sauf pour la gestion des événements d'interface graphique.",
        "notes": "Intègre la syntaxe Async/Await traduite en machine à états."
      },
      "vba": {
        "minimal": "Application.OnTime Now + TimeValue(\"00:00:01\"), \"MaSub\"",
        "complete": "Public Sub LancerMinuteur()\n    ' Diffère l'exécution d'une macro de manière non-bloquante sous Excel\n    Application.OnTime Now + TimeValue(\"00:00:01\"), \"MiseAJour\"\nEnd Sub\n\nPublic Sub MiseAJour()\n    Debug.Print \"Exécuté en différé\"\nEnd Sub",
        "best_practices": "Exploiter 'Application.OnTime' pour libérer la main à l'interface d'Excel pendant un traitement.",
        "pitfalls": "VBA est fondamentalement mono-thread et synchrone.",
        "notes": "L'asynchronisme natif ou le multithread n'est pas supporté directement."
      }
    }
  },
  {
    "id": "struct_maps_01",
    "level": 8,
    "chapter": "8. Structures avancées",
    "category": "Collections",
    "name": "Tables Clés-Valeurs (Maps & Dicts)",
    "description": "Dictionnaires, tables de hachage et complexité d'accès.",
    "related_concepts": [
      "ctrl_loops_02"
    ],
    "languages": {
      "c": {
        "minimal": "// Implémentation manuelle de table de hachage requise.",
        "complete": "#include <stdio.h>\n\ntypedef struct {\n    char* cle;\n    int valeur;\n} Entree;\n\nint main() {\n    Entree dictionnaire[1] = {{\"Café\", 1}};\n    printf(\"%s: %d\\n\", dictionnaire[0].cle, dictionnaire[0].valeur);\n    return 0;\n}",
        "best_practices": "Utiliser une bibliothèque externe éprouvée pour les tables de hachage.",
        "pitfalls": "Gérer soi-même les collisions de hachage de manière naïve.",
        "notes": "Aucune structure de map/dictionnaire dans la bibliothèque standard C."
      },
      "cpp": {
        "minimal": "std::unordered_map<std::string, int> map;",
        "complete": "#include <iostream>\n#include <unordered_map>\n#include <string>\n\nint main() {\n    std::unordered_map<std::string, double> prix = {{\"Café\", 1.50}};\n    prix[\"Thé\"] = 1.80;\n    auto it = prix.find(\"Café\");\n    if (it != prix.end()) {\n        std::cout << it->second << \"€\\n\";\n    }\n    return 0;\n}",
        "best_practices": "Préférer std::unordered_map pour un accès en O(1) moyen.",
        "pitfalls": "Accéder à une clé absente via l'opérateur [] force son insération par défaut.",
        "notes": "std::map repose sur un arbre bicolore et conserve un ordre en $O(log n)$."
      },
      "csharp": {
        "minimal": "var map = new Dictionary<string, int>();",
        "complete": "using System;\nusing System.Collections.Generic;\n\nclass Program {\n    static void Main() {\n        var prix = new Dictionary<string, double> { { \"Café\", 1.50 } };\n        if (prix.TryGetValue(\"Café\", out double val)) {\n            Console.WriteLine($\"{val}€\");\n        }\n    }\n}",
        "best_practices": "Utiliser TryGetValue() au lieu de faire une recherche double avec ContainsKey.",
        "pitfalls": "Utiliser un objet personnalisé en clé sans surcharger GetHashCode et Equals.",
        "notes": "Complexité d'accès en O(1) basée sur une table de hachage."
      },
      "python": {
        "minimal": "d = {\"cle\": \"valeur\"}",
        "complete": "prix = {\"Café\": 1.50}\nprix[\"Thé\"] = 1.80\nval = prix.get(\"Café\", 0.0)\nprint(f\"{val}€\")",
        "best_practices": "Utiliser 'dict.get()' pour interroger une clé sans risque d'exception KeyError.",
        "pitfalls": "Modifier la taille d'un dictionnaire lors de son parcours itératif.",
        "notes": "Conserve l'ordre d'insertion des éléments depuis Python 3.7."
      },
      "java": {
        "minimal": "Map<String, Integer> map = new HashMap<>();",
        "complete": "import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        var prix = new HashMap<String, Double>();\n        prix.put(\"Café\", 1.50);\n        System.out.println(prix.getOrDefault(\"Café\", 0.0));\n    }\n}",
        "best_practices": "Utiliser 'getOrDefault()' pour éviter les valeurs nulles imprévues.",
        "pitfalls": "Redéfinir equals() sans redéfinir hashCode() pour les objets servant de clés.",
        "notes": "Accès moyen en O(1) géré par une table de hachage interne."
      },
      "javascript": {
        "minimal": "const map = new Map();\nmap.set(\"clé\", \"valeur\");",
        "complete": "const prix = new Map([\n    [\"Café\", 1.50],\n    [\"Thé\", 1.80]\n]);\nprix.set(\"Croissant\", 1.20);\nif (prix.has(\"Café\")) {\n    console.log(prix.get(\"Café\") + \"€\");\n}",
        "best_practices": "Préférer 'new Map()' aux objets littéraux si les clés sont dynamiques.",
        "pitfalls": "Utiliser des objets basiques comme dictionnaire avec des clés risquant de polluer le prototype.",
        "notes": "Un objet 'Map' préserve l'ordre d'insertion et accepte tout type pour les clés."
      },
      "typescript": {
        "minimal": "const map = new Map<string, number>();",
        "complete": "const prix = new Map<string, number>();\nprix.set(\"Café\", 1.50);\nconsole.log(prix.get(\"Café\"));",
        "best_practices": "Spécifier les types de la clé et de la valeur lors de l'instanciation de la Map.",
        "pitfalls": "Accéder à une clé absente d'une Map sans vérifier le retour 'undefined'.",
        "notes": "Sécurité de typage accrue au niveau des clés et des valeurs insérées."
      },
      "php": {
        "minimal": "$dict = [\"cle\" => \"valeur\"];",
        "complete": "<?php\n$prix = [\"Café\" => 1.50];\n$prix[\"Thé\"] = 1.80;\nif (array_key_exists(\"Café\", $prix)) {\n    echo $prix[\"Café\"] . \"€\";\n}",
        "best_practices": "Utiliser l'opérateur '??' pour extraire sereinement une valeur.",
        "pitfalls": "Confondre l'existence d'une clé nulle (array_key_exists) et son statut d'initialisation (isset).",
        "notes": "Les tableaux PHP font nativement office de dictionnaires/cartes clés-valeurs."
      },
      "vb": {
        "minimal": "Dim map As New Dictionary(Of String, Integer)",
        "complete": "Imports System\nImports System.Collections.Generic\n\nModule Program\n    Sub Main()\n        Dim prix As New Dictionary(Of String, Double) From {{\"Café\", 1.50}}\n        Dim val As Double\n        If prix.TryGetValue(\"Café\", val) Then\n            Console.WriteLine($\"{val}€\")\n        End If\n    End Sub\nEnd Module",
        "best_practices": "Préférer TryGetValue() pour interroger une clé en sécurité.",
        "pitfalls": "Accéder directement à une clé absente déclenche une KeyNotFoundException.",
        "notes": "Table de hachage fournissant des performances d'accès en O(1)."
      },
      "vba": {
        "minimal": "Set dict = CreateObject(\"Scripting.Dictionary\")",
        "complete": "Public Sub TesterDictionary()\n    Dim dict As Object\n    Set dict = CreateObject(\"Scripting.Dictionary\")\n    dict.Add \"Café\", 1.5\n    If dict.Exists(\"Café\") Then\n        Debug.Print dict.Item(\"Café\") & \"€\"\n    End If\nEnd Sub",
        "best_practices": "Utiliser l'objet 'Scripting.Dictionary' (bibliothèque Microsoft Scripting Runtime) plutôt qu'une Collection.",
        "pitfalls": "Essayer d'ajouter une clé déjà existante dans un Dictionary déclenche une erreur d'exécution.",
        "notes": "La structure 'Dictionary' propose un accès clé-valeur avec une recherche rapide."
      }
    }
  },
  {
    "id": "struct_strings_02",
    "level": 8,
    "chapter": "8. Structures avancées",
    "category": "Algorithmes",
    "name": "Manipulation et Formatage de Chaînes",
    "description": "Sémantique des chaînes, immuabilité vs mutabilité et concaténation.",
    "related_concepts": [
      "base_hello_world"
    ],
    "languages": {
      "c": {
        "minimal": "char str[] = \"Hello\";",
        "complete": "#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s[20] = \"C\";\n    strcat(s, \" Language\"); // Concaténation\n    printf(\"%s (Taille: %lu)\\n\", s, strlen(s));\n    return 0;\n}",
        "best_practices": "Utiliser strncpy/strncat pour éviter de dépasser la taille de mémoire allouée.",
        "pitfalls": "Oublier l'octet de fin de chaîne nul ('\\0').",
        "notes": "Les chaînes C sont de simples tableaux de caractères terminés par '\\0'."
      },
      "cpp": {
        "minimal": "std::string s = \"Hello\";\ns += \" World\";",
        "complete": "#include <iostream>\n#include <string>\n#include <sstream>\n\nint main() {\n    std::string str = \"C++\";\n    str[0] = 'c';\n    std::stringstream ss;\n    ss << str << \" 2026\";\n    std::cout << ss.str() << \"\\n\";\n    return 0;\n}",
        "best_practices": "Utiliser std::string_view (C++17) pour manipuler des sous-chaînes sans copie.",
        "pitfalls": "Tenter d'additionner des littéraux bruts (\"A\" + \"B\").",
        "notes": "Les chaînes std::string sont mutables nativement sur le tas."
      },
      "csharp": {
        "minimal": "string s = $\"Hello {nom}\";",
        "complete": "using System;\nusing System.Text;\n\nclass Program {\n    static void Main() {\n        string nom = \"C#\";\n        string msg = $\"Langage : {nom}\";\n        var sb = new StringBuilder();\n        sb.Append(\"A\").Append(\"B\");\n        Console.WriteLine(sb.ToString());\n    }\n}",
        "best_practices": "Utiliser StringBuilder dans les boucles volumineuses.",
        "pitfalls": "Les chaînes System.String sont strictement immuables.",
        "notes": "L'interpolation ($) est optimisée à la compilation."
      },
      "python": {
        "minimal": "s = f\"Hello {nom}\"",
        "complete": "nom = \"Python\"\nmsg = f\"Langage : {nom.upper()}\"\nmots = [\"A\", \"B\", \"C\"]\nprint(\"-\".join(mots))",
        "best_practices": "Privilégier la méthode 'join()' pour concaténer une liste de chaînes.",
        "pitfalls": "Utiliser l'opérateur '+=' dans une boucle répétitive.",
        "notes": "Chaînes d'objets strictement immuables."
      },
      "java": {
        "minimal": "String s = \"Hello \" + nom;",
        "complete": "public class Main {\n    public static void main(String[] args) {\n        String nom = \"Java\";\n        StringBuilder sb = new StringBuilder();\n        sb.append(\"Langage : \").append(nom);\n        System.out.println(sb.toString());\n    }\n}",
        "best_practices": "Utiliser StringBuilder lors d'assemblages répétés.",
        "pitfalls": "L'utilisation de '==' sur deux objets String compare leurs adresses mémoire.",
        "notes": "Les objets java.lang.String sont immuables en mémoire."
      },
      "javascript": {
        "minimal": "const s = `Hello ${nom}`;",
        "complete": "const str = \"JavaScript\";\nconst resultat = `Langage : ${str.toUpperCase()}`;\nconst mots = [\"A\", \"B\", \"C\"];\nconsole.log(mots.join(\"-\"));",
        "best_practices": "Utiliser l'interpolation de chaînes via les Gabarits de littéraux (`...`).",
        "pitfalls": "Créer des concaténations inefficaces avec '+' dans de très grandes boucles.",
        "notes": "Les chaînes de caractères en JavaScript sont immuables."
      },
      "typescript": {
        "minimal": "const s: string = `Hello ${nom}`;",
        "complete": "const nom: string = \"TypeScript\";\nconst msg: string = `Langage : ${nom.toUpperCase()}`;\nconsole.log(msg);",
        "best_practices": "Utiliser les types littéraux de chaînes pour des valeurs strictes.",
        "pitfalls": "Concaténation manuelle avec '+' au lieu de l'interpolation.",
        "notes": "Les chaînes bénéficient de toutes les méthodes natives de JavaScript."
      },
      "php": {
        "minimal": "$s = \"Hello $nom\";",
        "complete": "<?php\n$nom = \"PHP\";\n$msg = \"Langage : {$nom}\";\n$mots = [\"A\", \"B\", \"C\"];\necho implode(\"-\", $mots);",
        "best_practices": "Utiliser des guillemets doubles pour autoriser l'interpolation de variables.",
        "pitfalls": "L'opérateur de concaténation de chaînes est le point '.' et non le signe '+'.",
        "notes": "Propose une immense bibliothèque native de fonctions de manipulation de chaînes."
      },
      "vb": {
        "minimal": "Dim s As String = $\"Hello {nom}\"",
        "complete": "Imports System\nImports System.Text\n\nModule Program\n    Sub Main()\n        Dim nom As String = \"VB.NET\"\n        Dim msg As String = $\"Langage : {nom}\"\n        Dim sb As New StringBuilder()\n        sb.Append(\"A\").Append(\"B\")\n        Console.WriteLine(sb.ToString())\n    End Sub\nEnd Module",
        "best_practices": "Employer StringBuilder pour l'assemblage de chaînes complexes.",
        "pitfalls": "Utiliser le symbole '&' ou '+' indistinctement sans vérifier le type de variable.",
        "notes": "L'opérateur traditionnel de concaténation en VB est le symbole '&'."
      },
      "vba": {
        "minimal": "s = \"Hello \" & nom",
        "complete": "Public Sub TraiterChaine()\n    Dim nom As String\n    Dim msg As String\n    nom = \"VBA\"\n    msg = \"Langage : \" & UCase(nom)\n    Debug.Print msg\nEnd Sub",
        "best_practices": "Utiliser l'opérateur commerciale '&' pour réaliser des concaténations de chaînes.",
        "pitfalls": "Utiliser l'opérateur '+' pour concaténer deux chaînes, ce qui peut provoquer des erreurs de conversion si l'une des variables est numérique.",
        "notes": "Fournit une bibliothèque standard de manipulation de chaînes (Mid, Left, Right, InStr)."
      }
    }
  }
];
