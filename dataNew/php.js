window.CompIde = window.CompIde || {};

CompIde.phpData = {
  "base_hello_world": {
    "minimal": "echo \"Hello World!\";",
    "complete": "<?php\necho \"Hello World!\\n\";\n?>",
    "best_practices": "Ne pas mettre la balise de fermeture ?> si le fichier ne contient que du code PHP pur (évite les injections d'espaces invisibles).",
    "pitfalls": "Oublier le point-virgule `;` à la fin de l'instruction echo, PHP lève immédiatement une Parse Error.",
    "notes": "Langage de script serveur majoritairement intégré au HTML."
  },
  "base_variables_02": {
    "minimal": "$x = 42;\n$y = 3.14;",
    "complete": "<?php\n$joueur = \"Gamer\";\n$vies = 3;\n$score = 14.5;\n\necho $joueur . \" a \" . $vies . \" vies.\\n\";\n?>",
    "best_practices": "Utiliser define() ou le mot-clé const pour les constantes globales immuables.",
    "pitfalls": "Oublier le symbole `$` devant le nom d'une variable lors de sa réutilisation.",
    "notes": "Typage dynamique. PHP 7+ introduit le typage optionnel des arguments de fonctions pour plus de structure."
  },
  "ctrl_conditions_03": {
    "minimal": "if ($x > 0) {\n    echo \"Positif\";\n}",
    "complete": "<?php\n$age = 20;\n\nif ($age >= 18) {\n    echo \"Majeur\";\n} else {\n    echo \"Mineur\";\n}\n\n// Match expression (PHP 8+)\n$statut = match (true) {\n    $age >= 18 => 'Accès autorisé',\n    default => 'Accès refusé',\n};\n?>",
    "best_practices": "Utiliser l'expression `match()` (introduite en PHP 8) plutôt que `switch()`. `match` renvoie directement une valeur et réalise une comparaison stricte (`===`) sans nécessiter de 'break'.",
    "pitfalls": "Utiliser `elseif` (en un mot) ou `else if` (en deux mots). Bien que les deux soient valides avec des accolades, seule la syntaxe `elseif` est tolérée si vous utilisez la syntaxe alternative à base de deux-points (`if:...:elseif:...:endif;`).",
    "notes": "PHP effectue des conversions automatiques agressives. `\"10\" == 10` est VRAI. Utilisez toujours `===` pour sécuriser vos conditions."
  },
  "ctrl_boucles_04": {
    "minimal": "for ($i = 0; $i < 5; $i++) {\n    echo $i;\n}",
    "complete": "<?php\n$utilisateurs = ['Alice', 'Bob', 'Charlie'];\n\n// Boucle Foreach avec clé et valeur\nforeach ($utilisateurs as $index => $nom) {\n    echo \"Clé: $index ; Valeur: $nom\\n\";\n}\n?>",
    "best_practices": "Toujours utiliser `foreach` pour manipuler des tableaux en PHP. C'est la structure la plus optimisée et la plus propre du langage.",
    "pitfalls": "Si vous utilisez un passage par référence dans un foreach (`foreach ($arr as &$val)`), n'oubliez jamais de détruire la variable avec `unset($val)` juste après la boucle. Sinon, modifier `$val` plus tard écrasera accidentellement le dernier élément du tableau !",
    "notes": "PHP accepte le mot-clé `continue` suivi d'un entier pour spécifier à combien de niveaux de boucles imbriquées l'instruction doit s'appliquer (ex: `continue 2;`)."
  },
  "func_declaration_05": {
    "minimal": "function saluer() {\n    echo \"Hello\";\n}",
    "complete": "<?php\n// Déclaration stricte des types (recommandé en haut de fichier)\ndeclare(strict_types=1);\n\nfunction calculerTotal(float $prix, int $quantite): float {\n    return $prix * $quantite;\n}\n\necho 'Total : ' . calculerTotal(19.99, 3);\n?>",
    "best_practices": "Activer systématiquement `declare(strict_types=1);` au tout début de vos fichiers PHP pour forcer le moteur à respecter scrupuleusement les types indiqués au lieu de faire des conversions magiques.",
    "pitfalls": "Déclarer des fonctions globales dans des fichiers inclus plusieurs fois (`include`), ce qui provoque une erreur fatale 'Cannot redeclare function'. Utilisez `include_once` ou encapsulez dans des classes.",
    "notes": "PHP supporte les fonctions anonymes (closures) et, depuis PHP 7.4, les fonctions fléchées raccourcies via la syntaxe `fn($a, $b) => $a + $b`."
  },
  "func_arguments_06": {
    "minimal": "function logMsg(string $msg, int $level = 1) { }",
    "complete": "<?php\n// Combinaison d'arguments par défaut, par référence (via &) et variables (...)\nfunction ajouterTaxes(array &$prixList, float $taxe = 0.20): void {\n    foreach ($prixList as &$prix) {\n        $prix += $prix * $taxe;\n    }\n}\n\n// PHP 8+ introduit les arguments nommés\nfunction creerUser(string $nom, string $role = \"guest\") { }\ncreerUser(role: \"admin\", nom: \"Marc\"); \n?>",
    "best_practices": "Profiter des arguments nommés de PHP 8+ lors de l'appel de fonctions comportant de nombreux paramètres optionnels, afin de ne pas devoir passer une chaîne de valeurs vides intermédiaires.",
    "pitfalls": "Mettre un argument obligatoire après un argument optionnel dans la signature d'une fonction. Depuis PHP 8.0, cette pratique lève une erreur de dépréciation.",
    "notes": "L'opérateur de déballage de tableaux (`...`) permet de passer les éléments d'un tableau directement comme arguments individuels d'une fonction."
  },
  "data_structures_07": {
    "minimal": "$arr = [1, 2, 3];\n$arr[] = 4; // Append",
    "complete": "<?php\n$utilisateurs = [\"Alice\", \"Bob\"];\n\n$utilisateurs[] = \"Charlie\"; // Ajout à la fin\narray_push($utilisateurs, \"David\");\n\n// Suppression et décalage des index numériques\narray_splice($utilisateurs, 1, 1); // Enlève 'Bob'\n\necho \"Nombre d'éléments : \" . count($utilisateurs);\n?>",
    "best_practices": "Utiliser la syntaxe courte `$arr[] = $valeur;` pour ajouter un élément à la fin d'un tableau, c'est plus rapide et plus lisible que d'appeler la fonction `array_push()`.",
    "pitfalls": "Utiliser `unset($arr[1])` sur un tableau indexé numériquement pour enlever un élément. `unset` supprime la case mais **ne réindexe pas** le tableau. Vous vous retrouverez avec un index manquant (`0, 2, 3`). Utilisez `array_splice()` pour réindexer automatiquement.",
    "notes": "En PHP, un tableau indexé numériquement est en fait la même structure sous-jacente qu'un tableau associatif."
  },
  "data_structures_08": {
    "minimal": "$dico = [\"cle\" => \"valeur\"];\n$dico[\"new\"] = 12;",
    "complete": "<?php\n$capitales = [\n    \"France\" => \"Paris\",\n    \"Espagne\" => \"Madrid\"\n];\n\n$capitales[\"Allemagne\"] = \"Berlin\"; // Ajout\n\n// Vérification d'existence sûre\nif (array_key_exists(\"France\", $capitales)) {\n    echo $capitales[\"France\"];\n}\n\n// Fusion de tableaux associatifs (PHP 8.1+)\n$complements = [\"Italie\" => \"Rome\"];\n$complet = [...$capitales, ...$complements];\n?>",
    "best_practices": "Utiliser l'opérateur de fusion de null (`??`) pour attribuer des valeurs de repli lors de l'accès aux clés : `$ville = $capitales['Inconnu'] ?? 'Non répertoriée';`.",
    "pitfalls": "Utiliser `isset($capitales['clé'])` pour tester l'existence d'une clé. Si la clé existe mais possède la valeur `null`, `isset()` retournera `false`. Préférez toujours la fonction robuste `array_key_exists()`.",
    "notes": "Les tableaux associatifs PHP conservent par défaut l'ordre d'insertion des éléments, ce qui n'est pas le cas dans d'autres langages."
  },
  "oop_classes_09": {
    "minimal": "class Joueur {\n    public string $nom;\n    private int $hp;\n}",
    "complete": "<?php\ndeclare(strict_types=1);\n\nclass Utilisateur {\n    // Propriétés typées (PHP 7.4+)\n    public string $login;\n    private int $niveau = 1;\n    \n    // Propriété en lecture seule (PHP 8.1+)\n    public readonly string $uuid;\n\n    public function getNiveau(): int {\n        return $this->niveau;\n    }\n}\n?>",
    "best_practices": "Toujours typer vos propriétés de classe (`public string $nom`) pour empêcher l'injection de types incohérents dans votre modèle de données.",
    "pitfalls": "Tenter d'accéder à une propriété d'instance en écrivant `$this->$login` (avec un `$` de trop sur l'attribut). La syntaxe correcte est impérativement `$this->login`.",
    "notes": "PHP dispose d'un modèle objet complet et moderne calqué sur celui de Java depuis sa version 5."
  },
  "oop_methods_10": {
    "minimal": "public function __construct(string $n) {\n    $this->nom = $n;\n}",
    "complete": "<?php\nclass Produit {\n    // Promotion de propriété dans le constructeur (PHP 8.0+)\n    // Déclare, injecte et assigne en même temps !\n    public function __construct(\n        public string $libelle,\n        private float $prix\n    ) {}\n}\n\n// Instanciation\n$article = new Produit(\"Clavier\", 59.99);\necho $article->libelle;\n?>",
    "best_practices": "Exploiter la promotion de propriétés dans le constructeur (`public function __construct(public string $nom) {}`) introduite en PHP 8 pour épurer drastiquement votre code.",
    "pitfalls": "Oublier le double underscore devant le mot `__construct`. Écrire `_construct` avec un seul tiret du bas fera de votre constructeur une méthode ordinaire et l'objet ne sera pas initialisé.",
    "notes": "PHP intègre également une méthode magique `__destruct()` exécutée automatiquement lors de la suppression de l'objet de la mémoire."
  },
  "errors_try_catch_11": {
    "minimal": "try {\n    executer();\n} catch (Exception $e) {\n    echo $e->getMessage();\n}",
    "complete": "<?php\ntry {\n    $connexion = new PDO('mysql:host=localhost;dbname=test', 'root', '');\n} catch (PDOException $e) {\n    // Interception ciblée d'un type d'exception précis\n    echo \"Échec de la base de données : \" . $e->getMessage();\n} catch (Exception $e) {\n    echo \"Autre type d'erreur : \" . $e->getMessage();\n} finally {\n    echo \"Fin de la tentative de connexion.\";\n}\n?>",
    "best_practices": "Profiter de l'interception multiple (Multi-catch) de PHP 7.1+ si vous devez traiter plusieurs types d'exceptions de la même façon : `catch (Error1 | Error2 $e)`.",
    "pitfalls": "Confondre l'interface `Throwable`, la classe `Error` et la classe `Exception`. Depuis PHP 7, les erreurs internes du moteur (comme les erreurs de syntaxe ou de types) lancent des objets `Error`. Pour intercepter absolument tout, ciblez le type `Throwable`.",
    "notes": "L'introduction des blocs `try/catch` a permis à PHP de s'affranchir progressivement des anciens messages d'alertes natifs de type `Warning` ou `Notice` non interceptables."
  },
  "errors_throw_12": {
    "minimal": "throw new InvalidArgumentException(\"Invalide\");",
    "complete": "<?php\nfunction verifierFichier(string $chemin): void {\n    if (!file_exists($chemin)) {\n        // Levée d'une exception de la bibliothèque SPL de PHP\n        throw new RuntimeException(\"Le fichier spécifié est introuvable : \" . $chemin);\n    }\n}\n?>",
    "best_practices": "Utiliser l'écosystème étendu des exceptions de la bibliothèque SPL (Standard PHP Library) intégrée au langage (`InvalidArgumentException`, `OutOfBoundsException`) pour donner du sens à vos alertes.",
    "pitfalls": "Oublier que lever une exception dans une fonction sans avoir de bloc `try/catch` plus haut dans votre script provoquera une erreur fatale d'exécution de type 'Uncaught Exception' qui stoppera net le serveur web.",
    "notes": "Depuis PHP 8.0, l'instruction `throw` est devenue une expression. Cela signifie qu'elle peut être intégrée dans des emplacements compacts comme des fonctions fléchées ou des opérateurs de coalescence : `$nom = $input ?? throw new Exception('Nom manquant');`."
  },
  "async_await_13": {
    "minimal": "// PHP est synchrone par défaut.\nsleep(2); // Pause le script",
    "complete": "<?php\n// PHP s'exécute de manière linéaire par cycle de requête HTTP\necho \"Étape 1\\n\";\n\n// Met en pause l'exécution du serveur pour ce script pendant 2 secondes\nsleep(2); \n\necho \"Étape 2 (2 secondes plus tard)\\n\";\n\n// Note : Pour faire du vrai asynchrone ou du non-bloquant en PHP moderne,\n// on utilise des extensions ou des frameworks spécialisés comme ReactPHP, Amp, ou Swoole.\n?>",
    "best_practices": "Ne pas faire de traitements lourds (envoi de mails de masse, gros calculs) directement dans le flux d'une requête web. Déléguez ces tâches à un système de file d'attente (Queue) comme RabbitMQ ou Redis, traité en tâche de fond par un script PHP en CLI.",
    "pitfalls": "Utiliser `sleep()` dans un script web classique de production, car cela bloque un processus de votre serveur web (FPM/Apache) inutilement et réduit la capacité de charge de votre site.",
    "notes": "PHP 8.1 a introduit les 'Fibers' (Fibres), un mécanisme bas niveau permettant d'implémenter de la concurrence non-bloquante (multitâche coopératif) au sein du langage."
  },
  "file_io_14": {
    "minimal": "file_put_contents('log.txt', 'OK');\n$data = file_get_contents('log.txt');",
    "complete": "<?php\n$fichier = 'journal.txt';\n\n// Écriture simplifiée (écrase le fichier, ou crée-le)\nfile_put_contents($fichier, \"Contenu texte PHP\\n\", FILE_APPEND);\n\n// Lecture simplifiée complète\nif (file_exists($fichier)) {\n    $contenu = file_get_contents($fichier);\n    echo $contenu;\n    \n    // Lecture sous forme de tableau de lignes\n    $lignes = file($fichier, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);\n}\n?>",
    "best_practices": "Utiliser le drapeau `FILE_APPEND` dans `file_put_contents()` pour ajouter du contenu à la suite d'un fichier existant sans l'effacer.",
    "pitfalls": "Ne pas vérifier les droits d'écriture sur le dossier cible. Si l'utilisateur système du serveur web (`www-data` ou `nginx`) n'a pas les permissions d'écriture, PHP lèvera un avertissement et l'enregistrement échouera.",
    "notes": "Pour des manipulations chirurgicales de fichiers volumineux, PHP propose les fonctions classiques et granulaires `fopen()`, `fwrite()`, `fgets()`, et `fclose()`."
  }
};