// Assure que l'espace de nom existe
window.CompIde = window.CompIde || {};

CompIde.pythonData = {
  "base_hello_world": {
    "minimal": "print(\"Hello World!\")",
    "complete": "def main():\n    print(\"Hello World!\")\n\nif __name__ == \"__main__\":\n    main()",
    "best_practices": "Toujours utiliser le bloc if __name__ == '__main__' pour rendre le script réutilisable.",
    "pitfalls": "Oublier que print() ajoute automatiquement un saut de ligne.",
    "notes": "Python n'a pas de point d'entrée obligatoire, il exécute le fichier de haut en bas."
  },
  "types_references_02": {
    "minimal": "def modif(liste):\n    liste.append(42)",
    "complete": "def modifier_mutables(liste_ref, entier_val):\n// ... reste du code complet Python",
    "best_practices": "Ne jamais utiliser d'objets mutables comme valeur par défaut.",
    "pitfalls": "Penser qu'écrire a = b effectue une copie d'une liste.",
    "notes": "Tout dépend si l'objet passé est mutable ou immuable."
  }
}