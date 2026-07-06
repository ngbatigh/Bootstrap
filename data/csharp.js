// Assure que l'espace de nom existe
window.CompIde = window.CompIde || {};

CompIde.csharpData = {
  "base_hello_world": {
    "minimal": "Console.WriteLine(\"Hello World!\");",
    "complete": "using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(\"Hello World!\");\n    }\n}",
    "best_practices": "Utiliser les instructions de niveau supérieur (C# 9+) pour les petits scripts.",
    "pitfalls": "Confondre Console.Write et Console.WriteLine.",
    "notes": "Le point d'entrée historique est la méthode statique Main."
  },
  "types_references_02": {
    "minimal": "void Modif(ref int x) { x += 10; }",
    "complete": "using System;\n// ... reste du code complet C#",
    "best_practices": "Utiliser le mot-clé 'in' pour passer des structures en lecture seule.",
    "pitfalls": "Confondre une structure (Value Type) et une classe (Reference Type).",
    "notes": "Le mot-clé 'ref' simule fidèlement la référence C++."
  }
}