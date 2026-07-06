window.CompIde = window.CompIde || {};

CompIde.pythonData = {
  "base_hello_world": {
    "minimal": "print(\"Hello World!\")",
    "complete": "def main():\n    print(\"Hello World!\")\n\nif __name__ == \"__main__\":\n    main()",
    "best_practices": "Toujours englober le code d'exécution principal dans le bloc if __name__ == '__main__'. Cela permet d'importer le fichier comme un module sans déclencher l'affichage automatique.",
    "pitfalls": "Utiliser des parenthèses superflues autour des mots-clés structurels (ex: écrire print (\"Hello\") avec un espace ou for (i) in...), ce qui nuit à l'esthétique idiomatique Python.",
    "notes": "Python est un langage interprété. Il n'a pas de fonction main obligatoire par défaut et exécute le fichier de manière linéaire, de haut en bas."
  },
  "base_variables_02": {
    "minimal": "x = 42\ny = 3.14\n# Pas de mot-clé de type",
    "complete": "def declarer_variables():\n    score = 10\n    nom = \"Invité\"\n    est_valide = False\n    \n    # Type Hinting optionnel pour guider le développeur\n    age: int = 30 \n    \n    print(f\"{nom} (Age: {age}) - Score: {score}\")\n\nif __name__ == \"__main__\":\n    declarer_variables()",
    "best_practices": "Utiliser intensivement les annotations de type (Type Hints) comme `age: int = 20`. Python les ignore au runtime, mais elles permettent à votre IDE de détecter vos bugs à l'écriture.",
    "pitfalls": "Oublier l'importance capitale des règles de portée locale/globale. Modifier une variable globale dans une fonction sans déclarer `global ma_var` créera une variable locale homonyme.",
    "notes": "Typage dynamique et fort. Une variable peut changer de type à la volée en cours de script (`x = 10` puis `x = \"texte\"`), mais Python refuse les opérations incohérentes (ex: additionner un entier et une chaîne)."
  },
  "ctrl_conditions_01": {
    "minimal": "if score > 10:\n    gagner()",
    "complete": "def verifier_score():\n    score = 82\n    \n    # Structure conditionnelle avec élif\n    if score >= 90:\n        print(\"Mention Très Bien\")\n    elif score >= 70:\n        print(\"Mention Assez Bien\")\n    else:\n        print(\"Passable\")\n        \n    # Équivalent de l'expression ternaire en Python\n    statut = \"Reçu\" if score >= 50 else \"Ajourné\"\n\nif __name__ == \"__main__\":\n    verifier_score()",
    "best_practices": "Profiter de l'écriture en chaîne unique de Python pour valider des encadrements numériques clairs (ex: écrire `if 10 <= score <= 20:` au lieu de mettre un double test lourd).",
    "pitfalls": "Oublier les deux-points `:` réglementaires à la fin de vos déclarations conditionnelles ou faire une erreur d'indentation (l'espacement fait partie intégrante du code en Python).",
    "notes": "En Python, l'évaluation courte-circuit des opérateurs `and` et `or` renvoie directement la dernière valeur évaluée, et pas seulement un simple booléen True/False."
  },
  "ctrl_loops_02": {
    "minimal": "for item in collection:\n    pass",
    "complete": "def parcourir_liste():\n    fruits = [\"Pomme\", \"Banane\", \"Orange\"]\n    \n    # Itération propre avec récupération de l'index via enumerate()\n    for index, fruit in enumerate(fruits):\n        print(f\"Index {index} : {fruit}\")\n\nif __name__ == \"__main__\":\n    parcourir_liste()",
    "best_practices": "Pour itérer en récupérant à la fois la position numérique et la valeur, utilisez systématiquement la fonction native `enumerate(ma_liste)` plutôt que de gérer manuellement un compteur.",
    "pitfalls": "Tenter de modifier la taille ou la structure d'un dictionnaire ou d'une liste en cours d'itération directe dessus. Cela lève une exception RuntimeError (modification en cours de parcours).",
    "notes": "Les boucles Python possèdent une clause `else:` très originale. Le bloc else s'exécute si et seulement si la boucle s'est terminée normalement sans rencontrer le mot-clé `break`."
  },
  "func_basics_01": {
    "minimal": "def ajouter(a, b):\n    return a + b",
    "complete": "def créer_profil(pseudo, niveau=1, *args, **kwargs):\n    # *args = arguments positionnels infinis\n    # **kwargs = arguments nommés infinis sous forme de dictionnaire\n    print(f\"Joueur: {pseudo} (Niveau {niveau})\")\n    if kwargs:\n        print(f\"Données en plus: {kwargs}\")\n\nif __name__ == \"__main__\":\n    créer_profil(\"Shadow\", 12, guilde=\"Shadows\", region=\"EU\")",
    "best_practices": "Spécifier explicitement les paramètres exclusivement nommés en insérant un astérisque seul `def func(a, *, cle_obligatoire):` pour forcer la clarté lors de l'appel.",
    "pitfalls": "Mettre un objet mutable (comme une liste vide `def func(ma_liste=[])`) en argument par défaut. Cette liste est instanciée UNE seule fois au chargement du script et sera partagée entre tous les appels !",
    "notes": "Les fonctions Python retournent implicitement la valeur `None` si aucun mot-clé `return` n'est explicitement rencontré en fin de bloc."
  },
  "func_lambdas_02": {
    "minimal": "doubleur = lambda x: x * 2",
    "complete": "def appliquer_filtre():\n    coefficients = [1, 2, 3, 4, 5]\n    facteur_multiple = 10\n    \n    # Syntaxe lambda limitée à une seule expression explicite\n    # Capture automatique de la variable de contexte 'facteur_multiple'\n    resultats = list(map(lambda n: n * facteur_multiple, coefficients))\n    \n    print(resultats)\n\nif __name__ == \"__main__\":\n    appliquer_filtre()",
    "best_practices": "Suivre la charte officielle PEP 8 : évitez d'assigner une expression lambda à un nom de variable (`ma_lambda = lambda x: x`). Utilisez une vraie fonction `def` classique pour cela.",
    "pitfalls": "Le piège de la capture tardive dans les boucles (Late Binding Closure). Si vous créez des lambdas dans une boucle for, elles captureront toutes la valeur finale de l'index de fin de boucle.",
    "notes": "Contrairement à C++ ou C#, les lambdas en Python sont strictement limitées à une seule et unique ligne d'expression. Aucun mot-clé ou affectation n'y est toléré."
  },
  "mem_management_01": {
    "minimal": "with open('file.txt') as f:\n    data = f.read()",
    "complete": "class GestionnaireRessource:\n    def __enter__(self):\n        print(\"Entrée dans le bloc : Ouverture\")\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print(\"Sortie du bloc : Libération instantanée\")\n\nif __name__ == \"__main__\":\n    # Le gestionnaire de contexte garantit le nettoyage\n    with GestionnaireRessource() as gr:\n        print(\"Calculs complexes en cours...\")",
    "best_practices": "Pour la manipulation sécurisée de fichiers ou sockets, utilisez toujours la structure de contexte `with`. C'est le moyen le plus sûr de fermer les flux.",
    "pitfalls": "Créer des références croisées complexes entre objets (A pointe sur B qui pointe sur A). Bien que Python sache s'en défaire via son ramasse-miettes cyclique, cela retarde inutilement la libération de la mémoire.",
    "notes": "L'implémentation de référence de Python (CPython) gère principalement la mémoire par un compteur de références ultra-rapide, complété par un Garbage Collector cyclique pour les cas complexes."
  },
  "mem_references_02": {
    "minimal": "def modif(liste):\n    liste.append(42)",
    "complete": "def verifier_mutabilité(liste_ref, entier_val):\n    liste_ref.append(99) # Modifie la liste d'origine\n    entier_val = entier_val + 10 # Réassignation locale uniquement\n\nif __name__ == \"__main__\":\n    ma_liste = [1, 2]\n    mon_nombre = 10\n    verifier_mutabilité(ma_liste, mon_nombre)\n    # ma_liste vaut [1, 2, 99], mon_nombre vaut toujours 10",
    "best_practices": "Si vous devez passer une liste à une fonction tout en garantissant qu'elle ne soit pas modifiée, passez une copie explicite de celle-ci (`ma_fonction(ma_liste.copy())`) ou utilisez un tuple.",
    "pitfalls": "Croire qu'écrire `A = B` duplique une liste. Cela ne fait que dupliquer l'adresse de référence. Modifier `A` modifiera instantanément `B`.",
    "notes": "En Python, tout est objet. Le passage d'argument est dicté par le mécanisme 'Call-by-sharing' : on passe la référence de l'objet par valeur."
  },
  "poo_classes_01": {
    "minimal": "class Personne:\n    def __init__(self, nom):\n        self.nom = nom",
    "complete": "class CompteBancaire:\n    def __init__(self, depot_initial):\n        # Double underscore prefixé = Attribut privé (Name Mangling)\n        self.__solde = depot_initial\n\n    @property\n    def solde(self):\n        return self.__solde\n\n    def deposer(self, montant):\n        if montant > 0:\n            self.__solde += montant\n\nif __name__ == \"__main__\":\n    compte = CompteBancaire(1000)\n    compte.deposer(250)\n    print(f\"Solde : {compte.solde}\")",
    "best_practices": "Utiliser le décorateur `@property` pour exposer élégamment des variables privées en lecture seule sans obliger l'appelant à taper des parenthèses de fonctions.",
    "pitfalls": "Oublier de mettre le paramètre obligatoire `self` comme tout premier argument de vos méthodes d'instance de classe.",
    "notes": "Le caractère privé en Python est une convention forte. Mettre un double underscore renomme l'attribut en interne pour éviter les collisions, mais n'empêche pas un accès forcé malveillant."
  },
  "poo_polymorphism_02": {
    "minimal": "class Chien(Animal):\n    def crier(self):\n        print(\"Wouf\")",
    "complete": "class Animal:\n    def crier(self): pass\n\nclass Chat(Animal):\n    def crier(self):\n        print(\"Miaou!\")\n\ndef faire_crier_objet(entite):\n    # Duck Typing pur : pas besoin d'hériter d'Animal pour que ça marche !\n    entite.crier()\n\nif __name__ == \"__main__\":\n    faire_crier_objet(Chat())\n",
    "best_practices": "Profiter du Duck Typing de Python : si un objet marche comme un canard et cane comme un canard, alors c'est un canard. Ne forcez pas l'héritage de classes si de simples méthodes communes suffisent.",
    "pitfalls": "Tenter de simuler une surcharge de méthode en écrivant deux fonctions de même nom mais avec des arguments différents dans la même classe. Python ne retiendra que la toute dernière définie !",
    "notes": "Python supporte nativement l'héritage multiple complexe et calcule l'ordre de résolution des méthodes via un algorithme robuste appelé C3 Linearization (MRO)."
  },
  "err_exceptions_01": {
    "minimal": "try: process()\nexcept Exception as e: print(e)\nfinally: cleanup()",
    "complete": "def division_securisee():\n    try:\n        res = 10 / 0\n    except ZeroDivisionError as e:\n        print(f\"Erreur mathématique : {e}\")\n    except Exception as e:\n        print(f\"Autre erreur : {e}\")\n    else:\n        print(\"S'exécute uniquement si aucun problème n'est survenu\")\n    finally:\n        print(\"Nettoyage final systématique.\")\n\nif __name__ == \"__main__\":\n    division_securisee()",
    "best_practices": "Toujours cibler des exceptions spécifiques (`except KeyError:`) plutôt que de placer un grand bloc générique aveugle (`except:`) qui interceptera même la demande de fermeture du script (Ctrl+C).",
    "pitfalls": "Oublier que les exceptions en Python sont des objets légers. Le coût d'entrée dans un bloc `try` est virtuellement nul s'il n'y a pas de crash, profitez-en (philosophie EAFP).",
    "notes": "La structure de gestion d'erreur de Python possède un bloc exclusif `else:` qui permet de séparer le code à risque du code normal qui en découle."
  },
  "gen_generics_01": {
    "minimal": "def maximum(a, b):\n    return a if a > b else b",
    "complete": "from typing import TypeVar, Generic\n\nT = TypeVar('T') # Variable de type pour l'analyse statique\n\nclass PileGenerique(Generic[T]):\n    def __init__(self):\n        self._elements: list[T] = []\n    def empiler(self, element: T) -> None:\n        self._elements.append(element)\n    def depiler(self) -> T:\n        return self._elements.pop()\n\nif __name__ == \"__main__\":\n    ma_pile: PileGenerique[int] = PileGenerique()\n    ma_pile.empiler(42)\n    print(ma_pile.depiler())",
    "best_practices": "Utiliser le module natif `typing` pour annoter vos structures génériques afin de sécuriser l'auto-complétion.",
    "pitfalls": "Penser que spécifier `[int]` va bloquer l'ajout d'une chaîne de caractères à l'exécution. Python reste dynamiquement typé, le script s'exécutera sans planter.",
    "notes": "En Python, la généricité est omniprésente grâce au Duck Typing : toute fonction est générique tant que l'objet supporte l'opération demandée."
  },
  "conc_async_02": {
    "minimal": "async def tache():\n    await asyncio.sleep(0.5)\n    return 42",
    "complete": "import asyncio\n\nasync def simuler_telechargement(id_fichier):\n    print(f\"Début {id_fichier}\")\n    await asyncio.sleep(1) # Pause non-bloquante\n    print(f\"Fin {id_fichier}\")\n    return f\"Contenu {id_fichier}\"\n\nasync def main():\n    resultats = await asyncio.gather(\n        simuler_telechargement(1),\n        simuler_telechargement(2)\n    )\n    print(resultats)\n\nif __name__ == \"__main__\":\n    asyncio.run(main())",
    "best_practices": "Utiliser `asyncio.gather()` pour lancer vos coroutines en parallèle plutôt que de les faire attendre l'une après l'autre avec des `await` successifs.",
    "pitfalls": "Mettre une fonction bloquante synchrone standard (comme `time.sleep(5)`) dans une fonction `async`. Cela gèle l'intégralité de la boucle d'événements.",
    "notes": "L'asynchronisme en Python s'exécute sur un seul et unique Thread à l'aide d'une boucle d'événements coordonnée, idéal pour les opérations I/O."
  },
  "struct_maps_01": {
    "minimal": "mon_dict = {\"nom\": \"Alice\"}\n# Conserve l'ordre d'insertion",
    "complete": "def manipuler_dict():\n    scores = {\"Alice\": 95, \"Bob\": 88}\n    scores[\"Charlie\"] = 92\n    \n    score_indefini = scores.get(\"Denis\", 0)\n    print(f\"Score de Denis : {score_indefini}\")\n    \n    for nom, valeur in scores.items():\n        print(f\"{nom} : {valeur}\")\n\nif __name__ == \"__main__\":\n    manipuler_dict()",
    "best_practices": "Utiliser la méthode `.get('cle', valeur_defaut)` pour extraire sereinement une donnée d'un dictionnaire sans risquer de lever une exception KeyError.",
    "pitfalls": "Créer de fausses clés dynamiques en cours d'itération sur le dictionnaire sous peine de lever un crash de modification de taille.",
    "notes": "Depuis Python 3.7, l'implémentation interne des dictionnaires (`dict`) garantit la conservation de l'ordre d'insertion tout en optimisant la mémoire."
  },
  "struct_strings_02": {
    "minimal": "s = f\"Hello {nom}\" # F-String\n# Immuable comme en C#",
    "complete": "def formater_chaines():\n    nom = \"Alice\"\n    message = f\"Nom : {nom.upper()}\"\n\n    mots = [\"Python\", \"est\", \"génial\"]\n    phrase = \" \".join(mots) # Recommandé pour la concaténation\n    print(phrase)\n\nif __name__ == \"__main__\":\n    formater_chaines()",
    "best_practices": "Utiliser l'idiome `' '.join(liste_de_chaines)` pour fusionner des collections de mots. C'est l'équivalent ultra-rapide du StringBuilder.",
    "pitfalls": "Utiliser l'opérateur `+=` pour accumuler du texte dans une boucle. Cela détruit et réalloue une chaîne à chaque itération, effondrant la vitesse.",
    "notes": "Les chaînes Python sont des instances d'objets immuables. Deux chaînes identiques courtes partagent souvent le même espace mémoire via le String Interning."
  }
};