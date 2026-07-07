window.CompIde = window.CompIde || {};

CompIde.typescriptData = {
  "base_hello_world": {
    "minimal": "console.log(\"Hello World!\");",
    "complete": "const message: string = \"Hello World!\";\nconsole.log(message);",
    "best_practices": "Laisser TypeScript compiler le code vers du JavaScript standard lisible par tous les navigateurs.",
    "pitfalls": "Croire que TypeScript s'exécute nativement. Il nécessite une phase de transpilation (tsc).",
    "notes": "Surcouche (superset) typée de JavaScript créée par Microsoft."
  },
  "base_variables_02": {
    "minimal": "let x: number = 42;\nlet y = 3.14; // Inférence",
    "complete": "const joueur: string = \"Link\";\nlet rubis: number = 50;\nlet estVivant: boolean = true;\n\nconsole.log(`${joueur} a ${rubis} rubis.`);",
    "best_practices": "Profiter de l'inférence de type automatique au lieu de typer manuellement chaque variable évidente.",
    "pitfalls": "Abuser du type `any` qui désactive complètement les vérifications de sécurité de TypeScript et revient à du JS brut.",
    "notes": "Typage statique optionnel à la compilation. Disparaît totalement une fois converti en JavaScript."
  },
  "ctrl_conditions_03": {
    "minimal": "if (role === \"admin\") {\n    ouvrirConsole();\n}",
    "complete": "type Role = \"admin\" | \"user\" | \"guest\";\nconst userRole: Role = \"user\";\n\nswitch (userRole) {\n    case \"admin\": console.log(\"Accès total\"); break;\n    case \"user\": console.log(\"Accès limité\"); break;\n    case \"guest\": console.log(\"Lecture seule\"); break;\n    default:\n        const _exhaustiveCheck: never = userRole;\n        throw new Error(\"Rôle non géré\");\n}",
    "best_practices": "Exploiter le filtrage de types (Type Guarding) dans vos blocs conditionnels : TypeScript comprend le code et adapte le type de la variable à l'intérieur du bloc.",
    "pitfalls": "Penser qu'un switch valide les types à l'exécution. Si une donnée externe corrompue contourne le compilateur, le switch a besoin d'un 'default'.",
    "notes": "Le pattern de vérification exhaustive avec le type `never` (voir code complet) permet de forcer une erreur de compilation si on oublie de traiter un nouveau cas."
  },
  "ctrl_boucles_04": {
    "minimal": "for (let i: number = 0; i < 5; i++) {\n    console.log(i);\n}",
    "complete": "interface Commande { id: number; prix: number; }\nconst panier: Commande[] = [{ id: 1, prix: 10 }, { id: 2, prix: 25 }];\n\nfor (const item of panier) {\n    console.log(`Commande #${item.id} : ${item.prix}€`);\n}",
    "best_practices": "Profiter du typage strict à l'intérieur des boucles : l'élément extrait d'un tableau est automatiquement typé par l'inférence.",
    "pitfalls": "Déclarer le type de l'index manuellement dans un `for (let i = 0...)`. L'inférence s'en charge parfaitement, ajouter `: number` alourdit inutilement le code.",
    "notes": "Exactement comme en JavaScript à l'exécution, mais sécurisé dès l'écriture grâce à l'analyseur statique."
  },
  "func_declaration_05": {
    "minimal": "function saluer(): void {\n    console.log(\"Hi\");\n}",
    "complete": "interface User { id: number; nom: string; }\n\n// Déclaration avec types de paramètres et type de retour\nfunction extraireNom(utilisateur: User): string {\n    return utilisateur.nom;\n}\n\nconst client: User = { id: 101, nom: \"Alice\" };\nconsole.log(extraireNom(client));",
    "best_practices": "Toujours typer explicitement les arguments de fonction. Le type de retour peut souvent être déduit par inférence, mais le spécifier sécurise l'architecture.",
    "pitfalls": "Déclarer une fonction qui ne retourne jamais rien (boucle infinie ou throw) avec le type `void`. Le vrai type approprié est `never`.",
    "notes": "TypeScript apporte la sécurité des contrats d'interface aux fonctions JavaScript dès l'étape d'écriture."
  },
  "func_arguments_06": {
    "minimal": "function envoyer(msg: string, urgent?: boolean) { } // Optionnel",
    "complete": "// Paramètre optionnel (?), valeur par défaut et paramètre de reste typé\nfunction genererRapport(\n    titre: string, \n    format: \"pdf\" | \"csv\" = \"pdf\", \n    options?: { imprimer: boolean }\n): string {\n    return `Rapport ${titre} au format ${format}`;\n}\n\ngenererRapport(\"Ventes\"); // Valide\ngenererRapport(\"Stats\", \"csv\"); // Valide",
    "best_practices": "Placer obligatoirement tous les paramètres optionnels (`?`) après les paramètres obligatoires dans la signature de la fonction.",
    "pitfalls": "Fournir une valeur par défaut à un paramètre tout en le marquant comme optionnel (`param?: string = \"defaut\"`). C'est redondant et invalide.",
    "notes": "À la compilation, les valeurs par défaut sont traduites en vérifications classiques JavaScript (`param !== undefined ? param : defaut`)."
  },
  "data_structures_07": {
    "minimal": "const notes: number[] = [12, 15];",
    "complete": "const utilisateurs: string[] = [\"Dan\", \"Sam\"];\n\n// Tableaux en lecture seule (immuables)\nconst configuration: readonly number[] = [80, 443];\n\n// Les Tuples (tableaux à structure fixe de types)\nlet reponseServeur: [number, string] = [200, \"OK\"];",
    "best_practices": "Utiliser le modificateur `readonly` pour verrouiller vos tableaux de configuration afin d'empêcher toute modification accidentelle (`.push`, `.pop`) dans le code.",
    "pitfalls": "Confondre un Tableau classique `string[]` et un Tuple `[string, number]`. Le tuple applique une contrainte d'ordre et de taille stricte sur les types.",
    "notes": "TypeScript analyse les opérations sur les tableaux pour s'assurer que vous ne tentez pas d'insérer un type invalide (ex: pousser un booléen dans un tableau de chaînes)."
  },
  "data_structures_08": {
    "minimal": "const scores: Record<string, number> = {};",
    "complete": "// Définition d'un dictionnaire typé strict via Record ou Signature d'index\ninterface Catalogue {\n    [idProduit: string]: number; // Clé string, valeur number\n}\n\nconst prixFleurs: Catalogue = {\n    \"rose\": 2.50,\n    \"tulipe\": 1.80\n};\n\nprixFleurs[\"orchidee\"] = 15.00; // Valide\n// prixFleurs[\"cactus\"] = \"Cher\"; // ERREUR de compilation, la valeur doit être un nombre",
    "best_practices": "Utiliser l'utilitaire de type `Record<CléType, ValeurType>` pour écrire rapidement des dictionnaires propres en ligne sans déclarer d'interface complexe.",
    "pitfalls": "Oublier que même si TypeScript valide les clés lors de la compilation, l'accès à une clé inexistante (`prixFleurs[\"inconnu\"]`) retournera `undefined` à l'exécution sans lever d'erreur. Activez `noUncheckedIndexedAccess` dans le tsconfig pour contrer cela.",
    "notes": "TypeScript permet d'utiliser des types d'Unions comme clés de dictionnaire limitées (`Record<\"gagne\" | \"perdu\", number>`)."
  },
  "oop_classes_09": {
    "minimal": "class Hero {\n    public nom: string;\n    private id: number;\n}",
    "complete": "class Serveur {\n    public nom: string;\n    private ip: string;\n    protected status: boolean = false;\n\n    constructor(nom: string, ip: string) {\n        this.nom = nom;\n        this.ip = ip;\n    }\n\n    public obtenirIP(): string {\n        return this.ip;\n    }\n}",
    "best_practices": "Déclarer explicitement les modificateurs d'accès (`public`, `private`, `protected`) sur vos propriétés pour verrouiller l'usage de votre API au sein de l'équipe.",
    "pitfalls": "Croire que le mot-clé `private` de TypeScript protège la donnée à l'exécution. C'est uniquement une protection à la compilation. Le code transpilé final redevient du JS ordinaire où tout est public (sauf usage du `#` natif).",
    "notes": "TypeScript enrichit considérablement les classes JS en intégrant les notions d'interfaces (`implements`) et de classes abstraites (`abstract`)."
  },
  "oop_methods_10": {
    "minimal": "constructor(public nom: string, private prix: number) {} // Raccourci",
    "complete": "class Capsule {\n    // Syntaxe ultra-courte de TS : Parameter Properties\n    // Crée, tape et assigne automatiquement l'attribut d'un coup !\n    constructor(public identifiant: string, private codeSecret: number) {}\n}\n\nconst maCapsule = new Capsule(\"A-42\", 9876);\nconsole.log(maCapsule.identifiant);",
    "best_practices": "Abuser du raccourci de syntaxe dans le constructeur (`constructor(public x: string)`) : cela évite d'avoir à déclarer les champs en haut de la classe puis de faire les `this.x = x` répétitifs.",
    "pitfalls": "Tenter d'utiliser la surcharge multiple de constructeurs avec des corps de fonctions différents comme en C#. En TS/JS, il ne peut y avoir qu'un seul constructeur physique.",
    "notes": "TypeScript vérifie strictement à la compilation que toutes les propriétés déclarées sont bien initialisées soit par défaut, soit dans le constructeur."
  },
  "errors_try_catch_11": {
    "minimal": "try {\n    action();\n} catch (error) {\n    if (error instanceof Error) console.error(error.message);\n}",
    "complete": "try {\n    JSON.parse(\"{ mauvais_format }\");\n} catch (error: unknown) {\n    // En TS, l'erreur attrapée est obligatoirement de type 'unknown'\n    if (error instanceof Error) {\n        console.error(\"Erreur d'analyse : \" + error.message);\n    } else {\n        console.error(\"Une erreur inconnue est survenue\");\n    }\n}",
    "best_practices": "Toujours typer vos blocs catch en `unknown` (c'est le comportement par défaut sécurisé) et utiliser des protections de type (`instanceof Error`) avant de lire des propriétés comme `.message`.",
    "pitfalls": "Forcer le type de l'erreur interceptée en écrivant `catch (error: any)`. Cela désactive les vérifications du compilateur et réintroduit des risques de plantage silencieux.",
    "notes": "TypeScript ne dispose pas d'un système de 'Checked Exceptions' à la compilation comme Java. Il est impossible de savoir via la signature d'une fonction si elle va lever une exception."
  },
  "errors_throw_12": {
    "minimal": "throw new Error(\"Données corrompues\");",
    "complete": "class ErreurValidation extends Error {\n    constructor(public champ: string, message: string) {\n        super(message);\n        this.name = \"ErreurValidation\";\n    }\n}\n\nfunction verifierChamp(texte: string) {\n    if (!texte) {\n        throw new ErreurValidation(\"email\", \"L'adresse email est requise.\");\n    }\n}",
    "best_practices": "Lors de la création d'une classe d'erreur personnalisée héritant de `Error`, ne pas oublier d'appeler `super(message)` dès la première ligne du constructeur.",
    "pitfalls": "Croire que déclarer une classe d'erreur personnalisée suffit à TypeScript pour la filtrer directement dans le catch (ex: `catch (e: ErreurValidation)` est interdit par la syntaxe). Le tri se fait obligatoirement dans le corps du catch via `if (e instanceof ErreurValidation)`.",
    "notes": "Lever des exceptions typées permet de structurer proprement les couches applicatives d'un projet d'envergure."
  },
  "async_await_13": {
    "minimal": "async function getData(): Promise<string> { return \"ok\"; }",
    "complete": "interface Meteo {\n    temperature: number;\n    ville: string;\n}\n\n// Une fonction async retourne TOUJOURS une Promesse typée\nasync function obtenirMeteo(ville: string): Promise<Meteo> {\n    const reponse = await fetch(`https://api.meteo.test/${ville}`);\n    const donnees: Meteo = await reponse.json();\n    return donnees;\n}\n\n// Appel\nobtenirMeteo(\"Paris\").then(res => console.log(res.temperature));",
    "best_practices": "Déclarer explicitement le type de retour d'une fonction asynchrone sous la forme `Promise<MonType>` pour clarifier les contrats de vos fonctions graphiques ou API.",
    "pitfalls": "Oublier d'utiliser le mot-clé `async` sur la fonction parent alors que vous utilisez un `await` à l'intérieur. Le compilateur TypeScript lèvera instantanément une erreur de syntaxe.",
    "notes": "TypeScript compile parfaitement la syntaxe async/await même si vous ciblez une vieille version d'ECMAScript (comme ES5), en générant des machines à états complexes (Generators) sous le capot."
  },
  "file_io_14": {
    "minimal": "import * as fs from 'fs/promises';\nawait fs.writeFile('t.txt', 'data');",
    "complete": "import { writeFile, readFile } from 'fs/promises';\n\nasync function stockerConfiguration(config: Record<string, any>): Promise<void> {\n    const fichier = './config.json';\n    const chaineJson = JSON.stringify(config, null, 2);\n    \n    await writeFile(fichier, chaineJson, 'utf-8');\n}\n\nasync function lireConfiguration(): Promise<Record<string, any>> {\n    const brut = await readFile('./config.json', 'utf-8');\n    return JSON.parse(brut); // Retourne l'objet typé dynamiquement\n}",
    "best_practices": "Installer les définitions de types système via `npm install @types/node --save-dev` pour que TypeScript connaisse et auto-complète nativement l'ensemble des modules de fichiers (`fs`).",
    "pitfalls": "Penser que `JSON.parse` valide vos types d'interfaces TypeScript automatiquement. Si le fichier JSON est corrompu ou modifié manuellement sur le disque, l'application plantera au runtime.",
    "notes": "L'utilisation combinée du module `fs/promises` et de TypeScript offre l'un des environnements d'écriture de scripts de fichiers les plus confortables de l'industrie."
  }
};