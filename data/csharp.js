window.CompIde = window.CompIde || {};

CompIde.csharpData = {
  "base_hello_world": {
    "minimal": "Console.WriteLine(\"Hello World!\");",
    "complete": "using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(\"Hello World!\");\n    }\n}",
    "best_practices": "Pour les applications et scripts modernes, préférez l'utilisation des instructions de niveau supérieur (Top-level statements) introduites en C# 9 pour épurer le code.",
    "pitfalls": "Oublier le point-virgule terminal ou faire une erreur de casse sur le nom des méthodes (C# est sensible à la casse, Console.writeline fera échouer la compilation).",
    "notes": "C# s'exécute au sein d'une machine virtuelle appelée la CLR. Historiquement, le point d'entrée est la méthode statique et publique Main."
  },
  "base_variables_02": {
    "minimal": "int x = 42;\nvar y = 3.14; // Inférence",
    "complete": "using System;\n\nclass Program {\n    static void Main() {\n        int score = 100;\n        string joueur = \"Master\";\n        var estActif = true; // Déduction automatique stricte au moment de la compilation\n        \n        Console.WriteLine($\"{joueur} - Score: {score} (Actif: {estActif})\");\n    }\n}",
    "best_practices": "Utiliser le mot-clé var uniquement lorsque le type réel est évident à la lecture de la ligne (ex: `var liste = new List<string>();`).",
    "pitfalls": "Penser que var fonctionne comme un type dynamique. Écrire `var x = 10; x = \"test\";` déclenchera immédiatement une erreur de compilation.",
    "notes": "C# est à typage statique fort. Il intègre le mot-clé 'dynamic' pour des cas d'interopérabilité très spécifiques, mais à éviter par défaut."
  },
  "ctrl_conditions_01": {
    "minimal": "if (score > 10) { Gagner(); }",
    "complete": "using System;\n\nclass Program {\n    static void Main() {\n        int score = 85;\n        \n        // Structure conditionnelle classique\n        if (score >= 90) {\n            Console.WriteLine(\"A+\");\n        } else if (score >= 75) {\n            Console.WriteLine(\"B\");\n        } else {\n            Console.WriteLine(\"C\");\n        }\n        \n        // Expression ternaire\n        string resultat = (score >= 50) ? \"Reçu\" : \"Échoué\";\n    }\n}",
    "best_practices": "C# moderne supporte les expressions de filtrage de motifs (Pattern Matching) avec switch. Utilisez-les pour remplacer les longues suites de if/else if complexes.",
    "pitfalls": "Utiliser des objets ou variables pouvant être nuls dans une condition sans appliquer l'opérateur de coalescence nulle ou l'opérateur de propagation nulle (`v?.Propriete`).",
    "notes": "C# convertit les expressions ternaires simples de façon très optimisée au niveau du langage intermédiaire (IL)."
  },
  "ctrl_loops_02": {
    "minimal": "foreach(var item in collection) {}",
    "complete": "using System;\nusing System.Collections.Generic;\n\nclass Program {\n    static void Main() {\n        var capitales = new List<string> { \"Paris\", \"Berlin\", \"Londres\" };\n        \n        // Boucle foreach sécurisée en lecture seule\n        foreach (string ville in capitales) {\n            Console.WriteLine(ville);\n        }\n    }\n}",
    "best_practices": "Pour parcourir une collection sans intention de la modifier, utilisez toujours `foreach`. C'est plus lisible et cela utilise les énumérateurs optimisés du langage.",
    "pitfalls": "Tenter d'ajouter ou de retirer un élément d'une liste à l'intérieur d'un bloc `foreach`. Cela lève instantanément une exception de type InvalidOperationException au runtime.",
    "notes": "La boucle `foreach` fonctionne sur n'importe quel objet implémentant l'interface IEnumerable ou exposant une méthode GetEnumerator()."
  },
  "func_basics_01": {
    "minimal": "int Ajouter(int a, int b) => a + b;",
    "complete": "using System;\n\nclass Program {\n    // Paramètres nommés, optionnels et valeurs par défaut\n    static void ConfigurerUtilisateur(string pseudo, int niveau = 1, bool Premium = false) {\n        Console.WriteLine($\"{pseudo} - Nv {niveau} - Premium: {Premium}\");\n    }\n\n    static void Main() {\n        ConfigurerUtilisateur(\"Sniper\"); // Utilise les valeurs par défaut\n        ConfigurerUtilisateur(\"Neo\", Premium: true, niveau: 99); // Paramètres nommés inversés\n    }\n}",
    "best_practices": "Pour les fonctions à une seule ligne, utilisez la syntaxe d'expression fléchée (Expression-bodied member) : `public int Doubler(int x) => x * 2;`.",
    "pitfalls": "Abuser du mot-clé `params` pour accepter un nombre infini d'arguments si la fonction est appelée des millions de fois, car cela alloue un tableau en arrière-plan.",
    "notes": "C# gère parfaitement la surcharge de méthodes et la résolution se fait entièrement à la compilation."
  },
  "func_lambdas_02": {
    "minimal": "Func<int, int> doubleur = x => x * 2;",
    "complete": "using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        int facteur = 5;\n        var nombres = new List<int> { 1, 2, 3 };\n        \n        // Expression lambda avec capture de la variable locale 'facteur'\n        var resultats = nombres.Select(n => n * facteur).ToList();\n        \n        Console.WriteLine(string.Join(\", \", resultats));\n    }\n}",
    "best_practices": "Si votre lambda n'a pas besoin de capturer de variables de son environnement, déclarez-la comme une fonction statique anonyme (`static n => n * 2`) pour éviter des allocations mémoires inutiles.",
    "pitfalls": "Capturer une variable de boucle modifiée à chaque itération dans une ancienne version de C#. Ce comportement a été corrigé pour foreach mais reste piégeux dans les boucles for classiques.",
    "notes": "Les lambdas s'appuient sur les types délégués prédéfinis du framework .NET comme `Func<...>` (renvoie une valeur) ou `Action<...>` (ne renvoie rien)."
  },
  "mem_management_01": {
    "minimal": "using (var res = new MaRessource()) { }",
    "complete": "using System;\n\nclass GestionnaireFichier : IDisposable {\n    public void Dispose() {\n        // Libération explicite des ressources non managées (fichiers, connexions)\n        Console.WriteLine(\"Ressources nettoyées de suite.\");\n    }\n}\n\nclass Program {\n    static void Main() {\n        // Utilisation moderne de l'instruction using imbriquée\n        using var gf = new GestionnaireFichier();\n        Console.WriteLine(\"Travail en cours...\");\n        // gf.Dispose() est appelé automatiquement à la sortie de la méthode\n    }\n}",
    "best_practices": "Pour tout objet implémentant l'interface `IDisposable`, utilisez impérativement le mot-clé `using` pour garantir le nettoyage immédiat sans attendre le passage aléatoire du Garbage Collector.",
    "pitfalls": "Instancier des milliers de gros objets à vie courte dans des boucles serrées, ce qui sature la génération 0 du Garbage Collector et provoque des micro-gels de l'application.",
    "notes": "Le Garbage Collector de .NET fonctionne par générations (Gen 0, Gen 1, Gen 2) pour optimiser la vitesse de balayage de la mémoire."
  },
  "mem_references_02": {
    "minimal": "void Modifier(ref int valeur);",
    "complete": "using System;\n\nclass Program {\n    static void DoubleParValeur(int num) { num *= 2; }\n    static void DoubleParRef(ref int num) { num *= 2; }\n    static void InitialiserOut(out int num) { num = 42; } // Obligation d'assigner\n\n    static void Main() {\n        int x = 10;\n        DoubleParValeur(x); // x vaut toujours 10\n        DoubleParRef(ref x);   // x vaut désormais 20\n        \n        InitialiserOut(out int y); // y est créée et initialisée à la volée\n    }\n}",
    "best_practices": "Utiliser le modificateur `in` (`in int x`) pour passer une structure volumineuse par référence afin d'éviter la copie, tout en interdisant sa modification.",
    "pitfalls": "Oublier que les classes (Reference Types) passent déjà leur référence par valeur. Modifier une propriété d'un objet classe dans une fonction affecte l'original sans mot-clé `ref`.",
    "notes": "Le mot-clé `ref` force le passage par adresse de la variable, qu'il s'agisse d'un type valeur (struct) ou d'un type référence (class)."
  },
  "poo_classes_01": {
    "minimal": "public class Joueur {\n    public string Nom { get; set; }\n}",
    "complete": "using System;\n\npublic class CompteBancaire {\n    // Propriété auto-implémentée avec accesseur privé (Encapsulation)\n    public double Solde { get; private set; }\n\n    public CompteBancaire(double depotInitial) {\n        Solde = depotInitial;\n    }\n\n    public void Deposer(double montant) {\n        if(montant > 0) Solde += montant;\n    }\n}\n\nclass Program {\n    static void Main() {\n        var cb = new CompteBancaire(500);\n        cb.Deposer(150);\n        Console.WriteLine($\"Solde : {cb.Solde}\");\n    }\n}",
    "best_practices": "Utiliser les propriétés auto-implémentées `{ get; private set; }` plutôt que de déclarer manuellement des variables privées et des méthodes Get/Set d'anciennes générations.",
    "pitfalls": "Laisser des propriétés publiques modifiables de l'extérieur sans contrôle de validation, ce qui viole le principe fondamental de l'encapsulation.",
    "notes": "C# introduit le mot-clé `init` (`{ get; init; }`) permettant de créer des objets immuables dont les propriétés ne peuvent être définies qu'au moment de l'instanciation."
  },
  "poo_polymorphism_02": {
    "minimal": "public abstract class Forme {\n    public abstract void Dessiner();\n}",
    "complete": "using System;\n\npublic class Employe {\n    // C# exige le mot-clé virtual pour autoriser la redéfinition !\n    public virtual void Travailler() => Console.WriteLine(\"Tâches standards\");\n}\n\npublic class Developpeur : Employe {\n    // Le mot-clé override est obligatoire pour redéfinir\n    public override void Travailler() => Console.WriteLine(\"Écriture de code\");\n}\n\nclass Program {\n    static void Main() {\n        Employe emp = new Developpeur();\n        emp.Travailler(); // Affiche Écriture de code grâce au polymorphisme\n    }\n}",
    "best_practices": "Utiliser préférentiellement des Interfaces (`interface`) plutôt que des classes abstraites si vous n'avez pas de code d'implémentation par défaut à partager.",
    "pitfalls": "Oublier le mot-clé `override` et mettre par mégarde le mot-clé `new` devant la méthode de l'enfant. Cela masque la méthode parente au lieu de la redéfinir, brisant le polymorphisme.",
    "notes": "C# ne gère pas l'héritage multiple entre classes, mais permet d'implémenter un nombre illimité d'interfaces."
  },
  "err_exceptions_01": {
    "minimal": "try { Process(); }\ncatch(Exception e) { Log(e); } finally { Cleanup(); }",
    "complete": "using System;\n\nclass Program {\n    static void Main() {\n        try {\n            string texte = null;\n            int longueur = texte.Length; // Lève une NullReferenceException\n        } catch (NullReferenceException ex) {\n            Console.WriteLine($\"Erreur de référence nulle capturée : {ex.Message}\");\n        } catch (Exception ex) {\n            Console.WriteLine($\"Erreur générale : {ex.Message}\");\n        } finally {\n            Console.WriteLine(\"Le bloc finally s'exécute envers et contre tout.\");\n        }\n    }\n}",
    "best_practices": "Si vous devez intercepter une exception pour faire un log mais la laisser remonter, utilisez un simple `throw;` vide. Écrire `throw ex;` réinitialise la pile d'appels et détruit l'origine de l'erreur.",
    "pitfalls": "Utiliser les exceptions pour gérer des flux de contrôle normaux (ex: intercepter une erreur de conversion au lieu d'utiliser un propre et performant `int.TryParse()`).",
    "notes": "C# supporte les filtres d'exceptions via le mot-clé `when` (ex: `catch (Exception ex) when (ex.HResult == 404)`)."
  },
  "gen_generics_01": {
    "minimal": "public T Maximum<T>(T a, T b) where T : IComparable<T> {\n    return a.CompareTo(b) > 0 ? a : b;\n}",
    "complete": "using System;\n\npublic class Entrepot<T> where T : class {\n    private T _stock;\n    public void Stocker(T element) {\n        _stock = element;\n        Console.WriteLine($\"Élément de type {typeof(T).Name} stocké.\");\n    }\n}\n\nclass Program {\n    static void Main() {\n        var entrepot = new Entrepot<string>();\n        entrepot.Stocker(\"Conteneur A\");\n    }\n}",
    "best_practices": "Toujours appliquer des contraintes précises (`where T : struct`, `where T : new()`) pour exposer explicitement les capacités de vos types génériques.",
    "pitfalls": "Tenter d'utiliser des opérateurs mathématiques comme `+` ou `-` directement sur un type générique `T` sans passer par les interfaces numériques modernes de C# 11 (`INumber<T>`).",
    "notes": "Contrairement au C++, les Generics de C# ne dupliquent pas le code. Ils sont intégrés dans le moteur d'exécution (CLR) qui génère le code machine à la volée de manière optimisée."
  },
  "conc_async_02": {
    "minimal": "async Task<int> RecupererIdAsync() {\n    await Task.Delay(500);\n    return 42;\n}",
    "complete": "using System;\nusing System.Net.Http;\nusing System.Threading.Tasks;\n\nclass Program {\n    static async Task Main() {\n        Console.WriteLine(\"Téléchargement du site...\");\n        using HttpClient client = new HttpClient();\n        string page = await client.GetStringAsync(\"https://example.com\");\n        Console.WriteLine($\"Téléchargement fini. Longueur : {page.Length}.\");\n    }\n}",
    "best_practices": "Suivre la règle d'or 'Async all the way' (Asynchrone de bout en bout). Éviter absolument de bloquer un thread asynchrone avec `.Result` ou `.Wait()`, car cela crée des risques de Deadlock.",
    "pitfalls": "Déclarer une méthode asynchrone avec `async void` au lieu de `async Task`. Les méthodes `async void` empêchent de capturer proprement les exceptions et rompent le flux d'exécution.",
    "notes": "C# est le pionnier de la syntaxe `async/await`. Lors de la compilation, le code est transformé en une puissante machine à états gérée par la CLR."
  },
  "struct_maps_01": {
    "minimal": "var dict = new Dictionary<string, int>();",
    "complete": "using System;\nusing System.Collections.Generic;\n\nclass Program {\n    static void Main() {\n        var capitales = new Dictionary<string, string> {\n            { \"France\", \"Paris\" },\n            { \"Italie\", \"Rome\" }\n        };\n\n        if (capitales.TryGetValue(\"France\", out string ville)) {\n            Console.WriteLine($\"La capitale est {ville}\");\n        }\n    }\n}",
    "best_practices": "Toujours privilégier `TryGetValue` plutôt que de faire une double vérification inefficace avec `ContainsKey` suivi de l'opérateur crochet `dict[cle]`.",
    "pitfalls": "Passer un objet personnalisé (une `class`) comme clé d'un dictionnaire sans avoir surchargé correctement les méthodes `GetHashCode()` et `Equals()`.",
    "notes": "Depuis .NET Core, l'ordre d'insertion des éléments n'est pas garanti dans un `Dictionary`. Si l'ordre importe, il faut utiliser un `OrderedDictionary` ou un `SortedDictionary`."
  },
  "struct_strings_02": {
    "minimal": "string s = $\"Hello {nom}\"; // Interpolation\n// Immuable",
    "complete": "using System;\nusing System.Text;\n\nclass Program {\n    static void Main() {\n        string nom = \"Alice\";\n        int age = 28;\n        string message = $\"Bonjour {nom}, vous avez {age} ans.\";\n\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < 1000; i++) {\n            sb.Append(i).Append(\" \");\n        }\n        string chaineLongue = sb.ToString();\n    }\n}",
    "best_practices": "Bannir les concaténations avec l'opérateur `+` à l'intérieur d'une boucle (`for`/`foreach`). Utilisez impérativement la classe `StringBuilder` pour ne pas fragmenter la mémoire.",
    "pitfalls": "Penser qu'appeler `texte.ToUpper()` modifie la chaîne `texte`. Les strings étant immuables, la méthode génère et retourne une *nouvelle* chaîne sans toucher à l'originale.",
    "notes": "L'interpolation de chaînes (préfixée par `$`) est convertie lors de la compilation en appels optimisés vers `string.Format` ou des structures de création de chaînes."
  }
};