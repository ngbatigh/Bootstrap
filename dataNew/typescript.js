// data/languages/typescript.js
window.CompIde = window.CompIde || {};

CompIde.typescriptData = {
  "base_hello_world": {
    "minimal": "console.log(\"Hello World!\");",
    "complete": "function main(): void {\n    console.log(\"Hello World!\");\n}\nmain();",
    "best_practices": "Annoter les types de retour de fonction explicites.",
    "pitfalls": "Oublier l'étape de compilation vers JavaScript (transpilation).",
    "notes": "Surcouche typée de JavaScript développée par Microsoft."
  },
  "base_variables_02": {
    "minimal": "let x: number = 42;\nconst y: string = \"TS\";",
    "complete": "const nom: string = \"WebIDE\";\nlet score: number = 0;\nscore += 10;\nconsole.log(`${nom} - ${score}`);",
    "best_practices": "Laisser l'inférence de type agir quand l'initialisation est évidente.",
    "pitfalls": "Abuser du type 'any' qui désactive la vérification statique.",
    "notes": "Analyse de type statique uniquement à la compilation."
  },
  "ctrl_conditions_01": {
    "minimal": "if (score > 10) { gagne(); }",
    "complete": "const score: number = 75;\nif (score >= 90) console.log(\"Excellent\");\nelse if (score >= 50) console.log(\"Validé\");\nelse console.log(\"Échec\");",
    "best_practices": "Utiliser la réduction de types (Type Narrowing) dans les garde-fous.",
    "pitfalls": "Utiliser l'égalité non-stricte '=='.",
    "notes": "Identique à JavaScript à l'exécution."
  },
  "ctrl_loops_02": {
    "minimal": "for (const item of liste) {}",
    "complete": "const nombres: number[] = [10, 20, 30];\nfor (const nb of nombres) {\n    console.log(nb);\n}",
    "best_practices": "Typer les tableaux explicitement (`type[]`).",
    "pitfalls": "Incompatibilité de types lors de l'insertion d'éléments.",
    "notes": "Génère du code JS standard sans surcoût."
  },
  "func_basics_01": {
    "minimal": "function ajouter(a: number, b: number): number { return a + b; }",
    "complete": "function afficher(msg: string, repet: number = 1): void {\n    for(let i = 0; i < repet; i++) console.log(msg);\n}\nafficher(\"Alerte\", 3);",
    "best_practices": "Définir des paramètres optionnels avec le symbole '?' (ex: repet?: number).",
    "pitfalls": "Mélanger paramètres optionnels et paramètres par défaut sans ordre strict.",
    "notes": "Permet les surcharges de signatures avant le bloc de fonction."
  },
  "func_lambdas_02": {
    "minimal": "const f = (x: number): number => x * 2;",
    "complete": "const mult: number = 3;\nconst v: number[] = [1, 2, 3];\nconst res: number[] = v.map((n: number) => n * mult);",
    "best_practices": "Laisser TypeScript déduire les types des paramètres de callbacks.",
    "pitfalls": "Oublier de typer le retour d'une lambda complexe.",
    "notes": "Conserve le comportement des closures JS."
  },
  "mem_management_01": {
    "minimal": "let obj: { data?: number } | null = { data: 42 };\nobj = null;",
    "complete": "function traiter(): void {\n    const r = { nom: \"Temp\" };\n}\ntraiter();",
    "best_practices": "Libérer les références inutiles pour faciliter le passage du GC.",
    "pitfalls": "Conserver des références fortes dans des structures de données.",
    "notes": "Même gestion mémoire que JavaScript."
  },
  "mem_references_02": {
    "minimal": "let a: { v: number } = { v: 10 };",
    "complete": "interface Donnee { v: number; }\nfunction modif(d: Donnee): void {\n    d.v += 10;\n}\nconst obj: Donnee = { v: 10 };\nmodif(obj);",
    "best_practices": "Utiliser Readonly<T> pour empêcher la modification de l'objet.",
    "pitfalls": "Considérer qu'une interface crée une copie d'un objet.",
    "notes": "Les types et interfaces disparaissent complètement après transpilation."
  },
  "poo_classes_01": {
    "minimal": "class Personne {\n    private age: number;\n}",
    "complete": "class Personne {\n    constructor(private nom: string) {}\n    public getNom(): string { return this.nom; }\n}\nconst p = new Personne(\"Alice\");\nconsole.log(p.getNom());",
    "best_practices": "Utiliser l'initialisation raccourcie dans le constructeur (`constructor(public nom: string)`).",
    "pitfalls": "Croire que le mot-clé 'private' de TS est inviolable au runtime (préférer `#`).",
    "notes": "Ajoute des modificateurs d'accès statiques (public, private, protected)."
  },
  "poo_polymorphism_02": {
    "minimal": "interface Animal { crier(): void; }",
    "complete": "interface Animal {\n    crier(): void;\n}\nclass Chien implements Animal {\n    crier(): void { console.log(\"Wouf!\"); }\n}\nconst a: Animal = new Chien();\na.crier();",
    "best_practices": "Utiliser des interfaces pour définir des contrats structurels.",
    "pitfalls": "Confondre l'héritage de classes (extends) et le contrat d'interface (implements).",
    "notes": "Typage structurel : deux types compatibles par leur forme sont équivalents."
  },
  "err_exceptions_01": {
    "minimal": "try {} catch(e: unknown) {}",
    "complete": "try {\n    throw new Error(\"Échec\");\n} catch (e: unknown) {\n    if (e instanceof Error) console.error(e.message);\n}",
    "best_practices": "Typer l'exception attrapée en 'unknown' puis vérifier avec 'instanceof'.",
    "pitfalls": "Présumer que le type attrapé dans catch est toujours de type Error.",
    "notes": "Le bloc try/catch suit exactement les règles de JavaScript."
  },
  "gen_generics_01": {
    "minimal": "function id<T>(arg: T): T { return arg; }",
    "complete": "class Boite<T> {\n    constructor(public contenu: T) {}\n}\nconst b = new Boite<number>(100);\nconsole.log(b.contenu);",
    "best_practices": "Restreindre les génériques à l'aide de contraintes (`<T extends Structure>`).",
    "pitfalls": "Multiplier inutilement des paramètres génériques complexes.",
    "notes": "Vérification des génériques effectuée uniquement à la compilation."
  },
  "conc_async_02": {
    "minimal": "const res: Response = await fetch(url);",
    "complete": "async function charger(): Promise<number> {\n    return 42;\n}\nasync function main(): Promise<void> {\n    const v = await charger();\n    console.log(v);\n}\nmain();",
    "best_practices": "Typer systématiquement le retour des fonctions asynchrones avec `Promise<T>`.",
    "pitfalls": "Oublier de gérer les pannes avec try/catch sur les tâches asynchrones.",
    "notes": "Transpilé en promesses ou machines à états JS selon la cible."
  },
  "struct_maps_01": {
    "minimal": "const map = new Map<string, number>();",
    "complete": "const prix = new Map<string, number>();\nprix.set(\"Café\", 1.50);\nconsole.log(prix.get(\"Café\"));",
    "best_practices": "Spécifier les types de la clé et de la valeur lors de l'instanciation de la Map.",
    "pitfalls": "Accéder à une clé absente d'une Map sans vérifier le retour 'undefined'.",
    "notes": "Sécurité de typage accrue au niveau des clés et des valeurs insérées."
  },
  "struct_strings_02": {
    "minimal": "const s: string = `Hello ${nom}`;",
    "complete": "const nom: string = \"TypeScript\";\nconst msg: string = `Langage : ${nom.toUpperCase()}`;\nconsole.log(msg);",
    "best_practices": "Utiliser les types littéraux de chaînes pour des valeurs strictes.",
    "pitfalls": "Concaténation manuelle avec '+' au lieu de l'interpolation.",
    "notes": "Les chaînes bénéficient de toutes les méthodes natives de JavaScript."
  }
};