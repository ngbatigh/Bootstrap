window.CompIde = window.CompIde || {};

CompIde.javaData = {
  "base_hello_world": {
    "minimal": "System.out.println(\"Hello World!\");",
    "complete": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World!\");\n    }\n}",
    "best_practices": "Le nom du fichier doit correspondre exactement au nom de la classe publique (Main.java).",
    "pitfalls": "Confondre la casse (Java est sensible à la casse : system.out ne compilera pas).",
    "notes": "Tout code Java doit obligatoirement résider à l'intérieur d'une classe."
  },
  "base_variables_02": {
    "minimal": "int x = 42;\nvar y = 3.14; // Java 10+",
    "complete": "public class Main {\n    public static void main(String[] args) {\n        int score = 100;\n        String joueur = \"Sniper\";\n        var estActif = true; // Inférence locale (Java 10+)\n        \n        System.out.println(joueur + \" - Score: \" + score);\n    }\n}",
    "best_practices": "Utiliser le mot-clé final pour déclarer des constantes de manière explicite (`final double PI = 3.14;`).",
    "pitfalls": "Tenter d'utiliser l'inférence 'var' pour des attributs de classe. 'var' est strictement réservé aux variables locales.",
    "notes": "Typage statique fort. Java sépare strictement les types primitifs (int, double) des types objets (Integer, String)."
  },
  "ctrl_conditions_03": {
    "minimal": "if (actif) {\n    System.out.println(\"Oui\");\n}",
    "complete": "public class Main {\n    public static void main(String[] args) {\n        int choix = 2;\n        \n        // Switch moderne (Java 14+)\n        String resultat = switch (choix) {\n            case 1 -> \"Option 1\";\n            case 2 -> \"Option 2\";\n            default -> \"Inconnu\";\n        };\n        System.out.println(resultat);\n    }\n}",
    "best_practices": "Pour comparer des chaînes de caractères (String), utiliser impérativement `.equals()` et JAMAIS `==` (qui compare les références mémoire).",
    "pitfalls": "Utiliser un switch traditionnel et oublier le mot-clé break.",
    "notes": "Java requiert un vrai type booléen (`boolean`). Écrire `if (1)` provoquera une erreur de compilation, contrairement au C."
  },
  "ctrl_boucles_04": {
    "minimal": "for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}",
    "complete": "import java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Boucle For-Each (très utilisée sur les collections)\n        List<String> pseudos = List.of(\"Alice\", \"Bob\", \"Charlie\");\n        for (String nom : pseudos) {\n            System.out.println(\"Membre: \" + nom);\n        }\n    }\n}",
    "best_practices": "Préférer la syntaxe 'for-each' (`for (Type item : liste)`) dès que vous devez parcourir l'intégralité d'un tableau ou d'une collection.",
    "pitfalls": "Modifier une liste (ajouter/supprimer des éléments) directement à l'intérieur d'une boucle 'for-each' lève une exception `ConcurrentModificationException`.",
    "notes": "Java supporte également les instructions `break` et `continue` étiquetées (labeled statements) pour sortir de boucles imbriquées complexes."
  },
  "func_declaration_05": {
    "minimal": "public static void saluer() {\n    System.out.println(\"Hi\");\n}",
    "complete": "public class Calculateur {\n    // Méthode statique (d'utilité)\n    public static int multiplier(int a, int b) {\n        return a * b;\n    }\n\n    public static void main(String[] args) {\n        int res = Calculateur.multiplier(4, 5);\n        System.out.println(\"Résultat: \" + res);\n    }\n}",
    "best_practices": "Donner des noms de méthodes explicites en utilisant la convention camelCase (ex: `calculerScoreTotal`).",
    "pitfalls": "Confondre les méthodes d'instance (qui requièrent `new`) et les méthodes statiques (`static`) qui appartiennent à la classe.",
    "notes": "En Java, on parle exclusivement de 'méthodes' puisque tout code est obligatoirement rattaché à une classe."
  },
  "func_arguments_06": {
    "minimal": "public void faireQuelqueChose(String... options) { } // Varargs",
    "complete": "public class UserApp {\n    // Java ne gère pas les arguments optionnels par défaut, on utilise la surcharge\n    public void connecter(String login) {\n        connecter(login, \"Anonyme\");\n    }\n\n    public void connecter(String login, String role) {\n        System.out.println(login + \" connecté en tant que \" + role);\n    }\n}",
    "best_practices": "Utiliser les 'Varargs' (`Type... nom`) uniquement en dernier paramètre d'une méthode si le nombre d'arguments est variable.",
    "pitfalls": "Penser que passer un objet en paramètre permet de remplacer la référence de l'objet d'origine. Java passe tout par valeur (la valeur de la référence).",
    "notes": "Les types primitifs (int, double) sont passés par copie de valeur. Les objets sont passés par copie de leur référence."
  },
  "data_structures_07": {
    "minimal": "List<String> list = new ArrayList<>(List.of(\"A\", \"B\"));",
    "complete": "import java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Liste dynamique (ArrayList)\n        List<String> fruits = new ArrayList<>();\n        fruits.add(\"Pomme\");\n        fruits.add(\"Banane\");\n        \n        fruits.set(0, \"Fraise\"); // Modification\n        fruits.remove(\"Banane\"); // Suppression\n        \n        System.out.println(\"Taille : \" + fruits.size());\n        System.out.println(\"Premier : \" + fruits.get(0));\n    }\n}",
    "best_practices": "Toujours déclarer vos collections en utilisant l'interface en guise de type (`List<String> x = new ArrayList<>()`) plutôt que l'implémentation concrète, pour garder le code flexible.",
    "pitfalls": "Tenter d'utiliser des types primitifs (`List<int>`) dans les collections génériques. C'est interdit, vous devez utiliser les classes enveloppes (`List<Integer>`).",
    "notes": "Java fait la distinction entre les Tableaux natifs à taille fixe (`int[] arr = new int[5]`) et l'écosystème des Collections dynamiques (List, Set)."
  },
  "data_structures_08": {
    "minimal": "Map<String, Integer> map = new HashMap<>();",
    "complete": "import java.util.HashMap;\nimport java.util.Map;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Integer> inventaire = new HashMap<>();\n        \n        // Insertion Clé-Valeur\n        inventaire.put(\"Or\", 500);\n        inventaire.put(\"Bois\", 12);\n        \n        // Accès sécurisé\n        if (inventaire.containsKey(\"Or\")) {\n            int quantite = inventaire.get(\"Or\");\n            System.out.println(\"Or dispo : \" + quantite);\n        }\n        \n        // Parcours\n        for (Map.Entry<String, Integer> entree : inventaire.entrySet()) {\n            System.out.println(entree.getKey() + \" -> \" + entree.getValue());\n        }\n    }\n}",
    "best_practices": "Utiliser `inventaire.getOrDefault(cle, valeurParDefaut)` pour éviter de récupérer une valeur `null` si la clé demandée n'existe pas.",
    "pitfalls": "Utiliser des objets modifiables personnalisés comme clés dans une `HashMap` sans redéfinir correctement les méthodes `equals()` et `hashCode()`, sous peine de rendre les données introuvables.",
    "notes": "L'implémentation standard `HashMap` ne garantit aucun ordre particulier des clés lors du parcours. Pour maintenir l'ordre d'insertion, utilisez `LinkedHashMap`."
  },
  "oop_classes_09": {
    "minimal": "public class Compte {\n    private double solde;\n}",
    "complete": "public class CompteBancaire {\n    // Encapsulation stricte\n    private String titulaire;\n    private double solde;\n\n    // Getter\n    public double getSolde() {\n        return this.solde;\n    }\n\n    // Setter avec contrôle de validité\n    public void deposer(double montant) {\n        if (montant > 0) {\n            this.solde += montant;\n        }\n    }\n}",
    "best_practices": "Appliquer scrupuleusement le principe d'encapsulation : passer les attributs en `private` et fournir des accesseurs (getters/setters) uniquement si nécessaire.",
    "pitfalls": "Modifier des attributs publics directement depuis l'extérieur de la classe, ce qui brise la sécurité du modèle de données.",
    "notes": "Depuis les versions récentes de Java, le mot-clé `record` permet de créer des classes de données immuables ultra-courtes en une ligne (`public record User(String nom, int age) {}`)."
  },
  "oop_methods_10": {
    "minimal": "public CompteBancaire(String t) {\n    this.titulaire = t;\n}",
    "complete": "public class CompteBancaire {\n    private String titulaire;\n    private double solde;\n\n    // Constructeur explicite\n    public CompteBancaire(String titulaire, double soldeInitial) {\n        this.titulaire = titulaire;\n        this.solde = soldeInitial;\n    }\n\n    public static void main(String[] args) {\n        // Instanciation via le mot-clé 'new'\n        CompteBancaire monCompte = new CompteBancaire(\"Alice\", 1500.0);\n        System.out.println(\"Compte créé pour \" + monCompte.titulaire);\n    }\n}",
    "best_practices": "Utiliser le mot-clé `this` à l'intérieur du constructeur pour lever l'ambiguïté si les paramètres portent le même nom que les attributs de la classe.",
    "pitfalls": "Oublier que si vous écrivez un constructeur personnalisé avec des arguments, le constructeur par défaut sans argument (`public Classe()`) disparaît automatiquement. Pensez à le réécrire si nécessaire.",
    "notes": "L'allocation mémoire des objets se fait entièrement sur le tas, et la destruction est gérée de façon transparente par le Garbage Collector (GC)."
  },
  "errors_try_catch_11": {
    "minimal": "try {\n    // code\n} catch (Exception e) {\n    e.printStackTrace();\n}",
    "complete": "import java.io.FileReader;\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Try-with-resources (ferme automatiquement le fichier)\n        try (FileReader reader = new FileReader(\"test.txt\")) {\n            int data = reader.read();\n        } catch (IOException e) {\n            System.err.println(\"Erreur de lecture : \" + e.getMessage());\n        } finally {\n            System.out.println(\"Opération terminée.\");\n        }\n    }\n}",
    "best_practices": "Utiliser le mécanisme du 'try-with-resources' (voir code complet) pour toutes les classes implémentant `AutoCloseable` (fichiers, connexions réseau) afin d'éviter les fuites de ressources.",
    "pitfalls": "Intercepter l'exception générique `Exception` ou `Throwable` au lieu de cibler l'exception précise (`IOException`, `NullPointerException`), ce qui masque d'autres bugs imprévus.",
    "notes": "Java fait la distinction entre les 'Checked Exceptions' (que l'on doit obligatoirement intercepter ou déclarer) et les 'Unchecked Exceptions' (dérivant de `RuntimeException`)."
  },
  "errors_throw_12": {
    "minimal": "throw new IllegalArgumentException(\"Invalide\");",
    "complete": "public class Compte {\n    private double solde = 100.0;\n\n    // Signature obligeant à déclarer l'exception si elle est de type 'Checked'\n    public void retirer(double montant) throws Exception {\n        if (montant > solde) {\n            throw new Exception(\"Solde insuffisant pour un retrait de : \" + montant);\n        }\n        solde -= montant;\n    }\n}",
    "best_practices": "Privilégier l'utilisation des exceptions standard intégrées au JDK (comme `IllegalArgumentException`, `IllegalStateException`) avant de décider de créer votre propre classe d'exception personnalisée.",
    "pitfalls": "Lever une exception générique sans aucun message textuel explicite, rendant le débogage complexe dans les journaux d'erreurs (logs).",
    "notes": "Le mot-clé `throws` (au pluriel) dans la signature de la méthode prévient le compilateur, tandis que `throw` (au singulier) déclenche l'action de lever l'anomalie."
  },
  "async_await_13": {
    "minimal": "CompletableFuture.runAsync(() -> System.out.println(\"Async\"));",
    "complete": "import java.util.concurrent.CompletableFuture;\nimport java.util.concurrent.ExecutionException;\n\npublic class Main {\n    public static void main(String[] args) throws ExecutionException, InterruptedException {\n        // Programmation asynchrone moderne via CompletableFuture\n        CompletableFuture<String> futureTache = CompletableFuture.supplyAsync(() -> {\n            try { Thread.sleep(2000); } catch (InterruptedException e) {} \n            return \"Données récupérées\";\n        });\n\n        System.out.println(\"Traitement principal libre...\");\n        \n        // Bloque et attend le résultat (équivalent de await)\n        String resultat = futureTache.get();\n        System.out.println(resultat);\n    }\n}",
    "best_practices": "Depuis Java 21, privilégiez l'utilisation des Threads Virtuels (`Executors.newVirtualThreadPerTaskExecutor()`) pour gérer des millions de tâches asynchrones légères de manière ultra-performante.",
    "pitfalls": "Appeler `.get()` immédiatement après avoir lancé un `CompletableFuture`, ce qui annule tout l'intérêt de l'asynchronisme en bloquant instantanément le thread principal.",
    "notes": "Java n'a pas de mots-clés `async` / `await`. Il gère la concurrence via l'API robuste `java.util.concurrent` (Futures, Callables, Executors)."
  },
  "file_io_14": {
    "minimal": "Files.writeString(Path.of(\"f.txt\"), \"Hello\");",
    "complete": "import java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.io.IOException;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        Path chemin = Path.of(\"exemple.txt\");\n        \n        try {\n            // Écriture moderne (NIO.2)\n            Files.writeString(chemin, \"Première ligne\\nDeuxième ligne\");\n            \n            // Lecture complète d'un coup\n            List<String> lignes = Files.readAllLines(chemin);\n            for (String ligne : lignes) {\n                System.out.println(\"-> \" + ligne);\n            }\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}",
    "best_practices": "Utiliser l'API moderne `java.nio.file.Files` introduite avec Java 7/8 pour les opérations simples, plutôt que les vieilles classes lourdes `FileWriter` ou `BufferReader`.",
    "pitfalls": "Tenter de charger un fichier de plusieurs gigaoctets en mémoire d'un seul coup avec `Files.readAllLines()`. Cela provoquera immédiatement une erreur `OutOfMemoryError`. Pour les gros fichiers, utilisez `Files.lines(chemin)` qui traite les lignes sous forme de flux (Stream).",
    "notes": "L'API NIO utilise des tampons optimisés au niveau du système pour accélérer les transferts de données."
  }
};