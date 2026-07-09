// data/languages/csharp.js
window.CompIde = window.CompIde || {};

CompIde.csharpData = {
  "base_hello_world": {
    "minimal": "Console.WriteLine(\"Hello World!\");",
    "complete": "using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(\"Hello World!\");\n    }\n}",
    "best_practices": "Utiliser les instructions de niveau supérieur (Top-level statements) en C# 9+.",
    "pitfalls": "Main prend une majuscule (contrairement au C++).",
    "notes": "Compilé en IL (Intermediate Language) puis exécuté par le CLR."
  },
  "base_variables_02": {
    "minimal": "int x = 42;\nvar y = 3.14;",
    "complete": "using System;\n\nclass Program {\n    static void Main() {\n        int age = 25;\n        const double PI = 3.14159;\n        var nom = \"CompIde\";\n        Console.WriteLine($\"{nom} - Age: {age}\");\n    }\n}",
    "best_practices": "Utiliser 'var' si le type sous-jacent est clair à la lecture.",
    "pitfalls": "Le type 'var' reste statique, impossible de changer de type en cours de route.",
    "notes": "Typage fort et statique garanti par la plate-forme .NET."
  },
  "ctrl_conditions_01": {
    "minimal": "if (score > 10) { Gagner(); }",
    "complete": "using System;\n\nclass Program {\n    static void Main() {\n        int score = 75;\n        if (score >= 90) Console.WriteLine(\"Excellent\");\n        else if (score >= 50) Console.WriteLine(\"Validé\");\n        else Console.WriteLine(\"Échec\");\n        string statut = (score >= 50) ? \"Reçu\" : \"Ajourné\";\n    }\n}",
    "best_practices": "Exploiter les expressions 'switch' modernes avec du pattern matching.",
    "pitfalls": "Confondre types valeur (struct) et types référence (class) dans les tests d'égalité.",
    "notes": "Intègre le Pattern Matching puissant depuis C# 8."
  },
  "ctrl_loops_02": {
    "minimal": "foreach (var x in liste) {}",
    "complete": "using System;\nusing System.Collections.Generic;\n\nclass Program {\n    static void Main() {\n        var nombres = new List<int> { 10, 20, 30, 40 };\n        foreach (int nb in nombres) {\n            Console.WriteLine(nb);\n        }\n    }\n}",
    "best_practices": "Préférer 'foreach' par sécurité sur les collections.",
    "pitfalls": "Modifier une liste pendant un parcours 'foreach' lève une InvalidOperationException.",
    "notes": "Foreach repose sur l'interface IEnumerable<T>."
  },
  "func_basics_01": {
    "minimal": "int Ajouter(int a, int b) => a + b;",
    "complete": "using System;\n\nclass Program {\n    static void Afficher(string msg, int repet = 1) {\n        for(int i = 0; i < repet; i++) Console.WriteLine(msg);\n    }\n    static void Main() {\n        Afficher(msg: \"Alerte\", repet: 3); // Paramètres nommés\n    }\n}",
    "best_practices": "Utiliser des arguments nommés pour éclaircir l'appel des booléens.",
    "pitfalls": "Modifier des valeurs de paramètres optionnels dans une DLL partagée.",
    "notes": "Surcharges et paramètres nommés pleinement supportés."
  },
  "func_lambdas_02": {
    "minimal": "Func<int, int> f = x => x * 2;",
    "complete": "using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        var v = new List<int> { 1, 2, 3 };\n        var res = v.Select(n => n * 3).ToList();\n        Console.WriteLine(string.Join(\", \", res));\n    }\n}",
    "best_practices": "Placer le mot-clé 'static' devant les lambdas sans capture pour optimiser la mémoire.",
    "pitfalls": "Capturer une variable d'itération de boucle modifiée.",
    "notes": "Se convertit soit en délégué, soit en arbre d'expression (LINQ)."
  },
  "mem_management_01": {
    "minimal": "using var stream = new StreamWriter(\"f.txt\");",
    "complete": "using System;\nusing System.IO;\n\nclass Program {\n    static void Main() {\n        using var writer = new StreamWriter(\"log.txt\");\n        writer.WriteLine(\"Donnée managée\");\n    } // Libération automatique de la ressource IDisposable\n}",
    "best_practices": "Utiliser le bloc 'using' sur tout objet implémentant IDisposable.",
    "pitfalls": "Conserver des ressources non-managées actives en attendant le Garbage Collector.",
    "notes": "La mémoire est gérée par un Garbage Collector intergénérationnel."
  },
  "mem_references_02": {
    "minimal": "void Modifier(ref int x) { x += 10; }",
    "complete": "using System;\n\nclass Program {\n    static void Incrementer(ref int val) => val += 10;\n    static void Main() {\n        int x = 10;\n        Incrementer(ref x);\n        Console.WriteLine(x); // 20\n    }\n}",
    "best_practices": "Utiliser 'in' pour passer des 'struct' en référence lecture seule.",
    "pitfalls": "Confondre passage par référence d'un type valeur (ref struct) et type référence (class).",
    "notes": "Le mot-clé 'ref' simule la référence C++."
  },
  "poo_classes_01": {
    "minimal": "public class Personne {\n    public string Nom { get; private set; }\n}",
    "complete": "using System;\n\npublic class Personne {\n    public string Nom { get; }\n    public Personne(string nom) => Nom = nom;\n}\nclass Program {\n    static void Main() {\n        var p = new Personne(\"Alice\");\n        Console.WriteLine(p.Nom);\n    }\n}",
    "best_practices": "Utiliser des propriétés auto-implémentées { get; set; } au lieu de champs publics.",
    "pitfalls": "Créer une récursion infinie dans le setter d'une propriété.",
    "notes": "Génère automatiquement les méthodes d'accès lors de la compilation."
  },
  "poo_polymorphism_02": {
    "minimal": "public class Chien : Animal {\n    public override void Crier() {}\n}",
    "complete": "using System;\n\npublic abstract class Animal {\n    public abstract void Crier();\n}\npublic class Chien : Animal {\n    public override void Crier() => Console.WriteLine(\"Wouf!\");\n}\nclass Program {\n    static void Main() {\n        Animal a = new Chien();\n        a.Crier();\n    }\n}",
    "best_practices": "Préfixer le nom des interfaces par un 'I' majuscule (ex: IDisposable).",
    "pitfalls": "Oublier le mot-clé 'override' lors de la redéfinition d'une méthode virtuelle.",
    "notes": "Héritage simple pour les classes, implémentation d'interfaces multiples autorisée."
  },
  "err_exceptions_01": {
    "minimal": "try {} catch(Exception e) {} finally {}",
    "complete": "using System;\n\nclass Program {\n    static void Main() {\n        try {\n            throw new ArgumentException(\"Erreur d'argument\");\n        } catch (ArgumentException e) {\n            Console.WriteLine(e.Message);\n        } finally {\n            Console.WriteLine(\"Nettoyage\");\n        }\n    }\n}",
    "best_practices": "Utiliser 'throw;' sans paramètre pour conserver la trace de la pile d'exécution.",
    "pitfalls": "Intercepter la classe générique Exception sans traiter l'erreur.",
    "notes": "Toutes les exceptions sont non-vérifiées (Unchecked Exceptions) à la compilation."
  },
  "gen_generics_01": {
    "minimal": "public class Boite<T> { public T Contenu { get; set; } }",
    "complete": "using System;\n\npublic class Entrepôt<T> where T : class {\n    public T Element { get; set; }\n}\nclass Program {\n    static void Main() {\n        var e = new Entrepôt<string> { Element = \"Conteneur\" };\n        Console.WriteLine(e.Element);\n    }\n}",
    "best_practices": "Appliquer des contraintes explicites (where T : class, new()).",
    "pitfalls": "Utiliser des opérateurs arithmétiques sur des génériques sans les interfaces dédiées (C# 11+).",
    "notes": "Les Génériques conservent leur type réel au runtime (pas d'effacement de type)."
  },
  "conc_async_02": {
    "minimal": "async Task<int> RunAsync() { await Task.Delay(100); return 42; }",
    "complete": "using System;\nusing System.Threading.Tasks;\n\nclass Program {\n    static async Task Main() {\n        await Task.Delay(100);\n        Console.WriteLine(\"Opération terminée\");\n    }\n}",
    "best_practices": "Suivre le principe 'Async all the way'. Renvoyer Task au lieu de void.",
    "pitfalls": "Utiliser .Result ou .Wait() sur une tâche, risquant un blocage mortel (deadlock).",
    "notes": "Convertit le code en une machine à états asynchrone lors de la compilation."
  },
  "struct_maps_01": {
    "minimal": "var map = new Dictionary<string, int>();",
    "complete": "using System;\nusing System.Collections.Generic;\n\nclass Program {\n    static void Main() {\n        var prix = new Dictionary<string, double> { { \"Café\", 1.50 } };\n        if (prix.TryGetValue(\"Café\", out double val)) {\n            Console.WriteLine($\"{val}€\");\n        }\n    }\n}",
    "best_practices": "Utiliser TryGetValue() au lieu de faire une recherche double avec ContainsKey.",
    "pitfalls": "Utiliser un objet personnalisé en clé sans surcharger GetHashCode et Equals.",
    "notes": "Complexité d'accès en O(1) basée sur une table de hachage."
  },
  "struct_strings_02": {
    "minimal": "string s = $\"Hello {nom}\";",
    "complete": "using System;\nusing System.Text;\n\nclass Program {\n    static void Main() {\n        string nom = \"C#\";\n        string msg = $\"Langage : {nom}\";\n        var sb = new StringBuilder();\n        sb.Append(\"A\").Append(\"B\");\n        Console.WriteLine(sb.ToString());\n    }\n}",
    "best_practices": "Utiliser StringBuilder dans les boucles volumineuses.",
    "pitfalls": "Les chaînes System.String sont strictement immuables.",
    "notes": "L'interpolation ($) est optimisée à la compilation."
  }
};