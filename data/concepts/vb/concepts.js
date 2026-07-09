[
  {
    "id": "vb_control_declarations_01",
    "level": 1,
    "chapter": "1. Syntaxe & Contrôle de Flux",
    "category": "Briques Fondamentales",
    "name": "Déclarations, Contrôle Conditionnel et Select Case",
    "description": "Inférence de type (`Option Infer`), structures conditionnelles (`If...ElseIf`), et filtrage par valeurs/intervalles via `Select Case`.",
    "related_concepts": ["py_control_declarations_01"],
    "languages": {
      "vb": {
        "minimal": "Select Case val : Case 1 : Console.WriteLine(\"Un\") : Case Else : Console.WriteLine(\"Autre\") : End Select",
        "complete": "Option Strict On\nOption Infer On\n\nImports System\n\nPublic Module Program\n    Public Function AnalyserCommande(action As String, val As Integer) As String\n        ' Conditionnelle enligne (Ternaire)\n        Dim statut As String = If(val > 0, \"Actif\", \"Inactif\")\n        \n        ' Select Case avec évaluation de conditions et d'intervalles\n        Select Case val\n            Case Is <= 0\n                Return \"Valeur négative ou nulle\"\n            Case 1 To 10\n                Return $\"Commande '{action}' dans la plage initiale ({statut})\"\n            Case 11, 12, 13\n                Return \"Commande prioritaire\"\n            Case Else\n                Return \"Commande standard\"\n        End Select\n    End Function\nEnd Module",
        "best_practices": "Toujours Activer `Option Strict On` pour éviter les conversions de type implicites risquées au runtime.",
        "pitfalls": "Confondre la fonction `IIf()` (legacy VB6, évalue toujours les deux branches) avec l'opérateur moderne `If(cond, expr1, expr2)` (Short-circuit).",
        "notes": "VB.NET propose un `Select Case` très flexible capable de tester des plages (`To`), des comparaisons (`Is >=`) et des listes de valeurs."
      },
      "python": {
        "minimal": "match val: case 1: print('Un'); case _: print('Autre')",
        "complete": "def analyser_commande(action: str, val: int) -> str:\n    statut = \"Actif\" if val > 0 else \"Inactif\"\n    \n    match val:\n        case v if v <= 0:\n            return \"Valeur négative ou nulle\"\n        case v if 1 <= v <= 10:\n            return f\"Commande '{action}' dans la plage initiale ({statut})\"\n        case 11 | 12 | 13:\n            return \"Commande prioritaire\"\n        case _:\n            return \"Commande standard\"",
        "best_practices": "Utiliser `match/case` pour le Structural Pattern Matching moderne.",
        "pitfalls": "Confondre `match/case` avec un simple `switch` sans déstructuration.",
        "notes": "Pattern matching structurel natif introduit en Python 3.10."
      },
      "javascript": {
        "minimal": "switch(val) { case 1: console.log('Un'); break; default: console.log('Autre'); }",
        "complete": "function analyserCommande(action, val) {\n    const statut = val > 0 ? \"Actif\" : \"Inactif\";\n    if (val <= 0) return \"Valeur négative ou nulle\";\n    \n    switch (true) {\n        case (val >= 1 && val <= 10):\n            return `Commande '${action}' dans la plage initiale (${statut})`;\n        case [11, 12, 13].includes(val):\n            return \"Commande prioritaire\";\n        default:\n            return \"Commande standard\";\n    }\n}",
        "best_practices": "Utiliser `switch(true)` pour simuler des évaluations de conditions complexes.",
        "pitfalls": "Oublier les instructions `break` provoquant un fallthrough involontaire.",
        "notes": "Structures conditionnelles impératives classiques."
      },
      "typescript": {
        "minimal": "const statut: string = val > 0 ? 'Actif' : 'Inactif';",
        "complete": "function analyserCommande(action: string, val: number): string {\n    const statut = val > 0 ? \"Actif\" : \"Inactif\";\n    if (val <= 0) return \"Valeur négative ou nulle\";\n    if (val >= 1 && val <= 10) return `Commande '${action}' (${statut})`;\n    return \"Commande standard\";\n}",
        "best_practices": "Utiliser le typage strict des arguments et des retours de fonctions.",
        "pitfalls": "Le `switch` TS conserve les limites de celui de JS au runtime.",
        "notes": "Vérification de type statique au-dessus de la syntaxe JS."
      },
      "php": {
        "minimal": "$res = match($val) { 1 => 'Un', default => 'Autre' };",
        "complete": "<?php\nfunction analyserCommande(string $action, int $val): string {\n    $statut = $val > 0 ? 'Actif' : 'Inactif';\n    \n    return match(true) {\n        $val <= 0 => 'Valeur négative ou nulle',\n        $val >= 1 && $val <= 10 => \"Commande '{$action}' ({$statut})\",\n        in_array($val, [11, 12, 13]) => 'Commande prioritaire',\n        default => 'Commande standard'\n    };\n}",
        "best_practices": "Préférer l'expression `match` (PHP 8+) au `switch` pour bénéficier de comparaisons strictes.",
        "pitfalls": "Lève une exception si aucun cas ne matche et sans bloc `default`.",
        "notes": "`match` renvoie directement une valeur (expression)."
      },
      "csharp": {
        "minimal": "var res = val switch { 1 => \"Un\", _ => \"Autre\" };",
        "complete": "public static string AnalyserCommande(string action, int val) {\n    var statut = val > 0 ? \"Actif\" : \"Inactif\";\n    return val switch {\n        <= 0 => \"Valeur négative ou nulle\",\n        >= 1 and <= 10 => $\"Commande '{action}' dans la plage initiale ({statut})\",\n        11 or 12 or 13 => \"Commande prioritaire\",\n        _ => \"Commande standard\"\n    };\n}",
        "best_practices": "Utiliser les Switch Expressions modernes avec des relational patterns.",
        "pitfalls": "Avertissement si tous les cas possibles ne sont pas couverts.",
        "notes": "Syntaxe de Pattern Matching très concise en C#."
      },
      "java": {
        "minimal": "String res = switch(val) { case 1 -> \"Un\"; default -> \"Autre\"; };",
        "complete": "public String analyserCommande(String action, int val) {\n    var statut = val > 0 ? \"Actif\" : \"Inactif\";\n    return switch (val) {\n        case 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 -> \"Commande dans la plage (\" + statut + \")\";\n        case 11, 12, 13 -> \"Commande prioritaire\";\n        default -> val <= 0 ? \"Valeur négative\" : \"Commande standard\";\n    };\n}",
        "best_practices": "Employer les expressions `switch` modernes introduites dans Java 14+.",
        "pitfalls": "Break manquant dans les anciens pavés `switch` impératifs.",
        "notes": "Évolution vers un style fonctionnel/déclaratif."
      },
      "cpp": {
        "minimal": "switch(val) { case 1: std::cout << \"Un\"; break; }",
        "complete": "#include <string>\n#include <iostream>\n\nstd::string analyserCommande(const std::string& action, int val) {\n    std::string statut = (val > 0) ? \"Actif\" : \"Inactif\";\n    if (val <= 0) return \"Valeur négative ou nulle\";\n    if (val >= 1 && val <= 10) return \"Commande dans la plage\";\n    return \"Commande standard\";\n}",
        "best_practices": "Préférer les gardes de retour précoce (`if` d'invalidation).",
        "pitfalls": "`switch` limité aux types intégraux/énumérations.",
        "notes": "Contrôle de flux natif bas niveau."
      },
      "c": {
        "minimal": "switch(val) { case 1: break; default: break; }",
        "complete": "#include <stdio.h>\n\nconst char* analyser(int val) {\n    switch (val) {\n        case 1: case 2: case 3:\n            return \"Petit\";\n        default:\n            return \"Grand\";\n    }\n}",
        "best_practices": "Maintenir des blocs conditionnels simples et lisibles.",
        "pitfalls": "Pas de chaînes de caractères dans les `switch` C.",
        "notes": "Contrôle de flux impératif basique."
      },
      "vba": {
        "minimal": "Select Case val : Case 1 : MsgBox \"Un\" : End Select",
        "complete": "Public Function AnalyserCommande(action As String, val As Long) As String\n    Dim statut As String\n    statut = IIf(val > 0, \"Actif\", \"Inactif\")\n    \n    Select Case val\n        Case Is <= 0\n            AnalyserCommande = \"Valeur négative ou nulle\"\n        Case 1 To 10\n            AnalyserCommande = \"Commande '\" & action & \"' (\" & statut & \")\"\n        Case 11, 12, 13\n            AnalyserCommande = \"Commande prioritaire\"\n        Case Else\n            AnalyserCommande = \"Commande standard\"\n    End Select\nEnd Function",
        "best_practices": "Utiliser `Select Case` avec `To` et `Is` pour clarifier la logique de décision.",
        "pitfalls": "Attention : `IIf` en VBA évalue systématiquement ses deux arguments.",
        "notes": "Syntaxe quasi identique à VB.NET."
      }
    }
  },
  {
    "id": "vb_functional_linq_01",
    "level": 2,
    "chapter": "2. Programmation Fonctionnelle & LINQ",
    "category": "Paradigmes",
    "name": "LINQ (Language Integrated Query), Lambdas et Traitements Déclaratifs",
    "description": "Manipulation déclarative de collections via la syntaxe de requête LINQ VB.NET (`From...Where...Select`) et les expressions Lambda.",
    "related_concepts": ["py_functional_fp_01"],
    "languages": {
      "vb": {
        "minimal": "Dim res = From n In nums Where n Mod 2 = 0 Select n * n",
        "complete": "Imports System\nImports System.Collections.Generic\nImports System.Linq\n\nPublic Module Program\n    Public Sub Main()\n        Dim valeurs As New List(Of Integer) From {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}\n        \n        ' Syntaxe de requête LINQ expressive propre à VB.NET\n        Dim requete = From val In valeurs\n                      Where val Mod 2 = 0\n                      Let carre = val * val\n                      Select carre\n                      Order By carre Descending\n                      \n        ' Syntaxe par méthodes d'extension avec Lambdas\n        Dim somme As Integer = valeurs.Where(Function(x) x Mod 2 = 0) _\n                                      .Select(Function(x) x * x) _\n                                      .Sum()\n                                      \n        Console.WriteLine($\"Somme des carrés pairs : {somme}\")\n    End Sub\nEnd Module",
        "best_practices": "Exploiter la clause `Let` dans les requêtes LINQ pour stocker des résultats intermédiaires sans recalculer.",
        "pitfalls": "Même piège de l'évaluation différée (Deferred Execution) : la requête LINQ s'exécute uniquement lors de l'itération (`For Each` ou `.ToList()`).",
        "notes": "VB.NET possède une syntaxe de requête LINQ native particulièrement élégante et proche du SQL."
      },
      "python": {
        "minimal": "carres = [x**2 for x in nums if x % 2 == 0]",
        "complete": "valeurs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# En Python, la compréhension de liste remplace LINQ\ncarres = [x * x for x in valeurs if x % 2 == 0]\nsomme = sum(carres)\nprint(f\"Somme : {somme}\")",
        "best_practices": "Préférer les expressions génératrices `sum(x*x for x in ...)` pour économiser la mémoire.",
        "pitfalls": "Abuser des compréhensions imbriquées complexes au détriment de la lisibilité.",
        "notes": "Les compréhensions sont l'équivalent idiomatique de LINQ en Python."
      },
      "javascript": {
        "minimal": "const res = nums.filter(x => x%2===0).map(x => x**2);",
        "complete": "const valeurs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst somme = valeurs\n  .filter(x => x % 2 === 0)\n  .map(x => x ** 2)\n  .reduce((acc, val) => acc + val, 0);\nconsole.log(somme);",
        "best_practices": "Chaîner les méthodes d'Array de manière immuable.",
        "pitfalls": "Attention aux méthodes mutatives comme `.sort()`.",
        "notes": "Style fonctionnel fluide sur les Arrays."
      },
      "typescript": {
        "minimal": "const res: number[] = nums.filter(x => x % 2 === 0).map(x => x * x);",
        "complete": "const valeurs: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst somme: number = valeurs\n  .filter((x): boolean => x % 2 === 0)\n  .map(x => x * x)\n  .reduce((acc, val) => acc + val, 0);",
        "best_practices": "Activer le typage strict des accumulateurs dans `reduce`.",
        "pitfalls": "Inférence de type parfois perdue dans de longs chaînages.",
        "notes": "API fonctionnelle typée."
      },
      "php": {
        "minimal": "$res = array_map(fn($x)=>$x**2, array_filter($n, fn($x)=>$x%2==0));",
        "complete": "<?php\n$valeurs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n$pairs = array_filter($valeurs, fn($x) => $x % 2 === 0);\n$carres = array_map(fn($x) => $x ** 2, $pairs);\n$somme = array_sum($carres);",
        "best_practices": "Utiliser les fonctions fléchées `fn()`.",
        "pitfalls": "Incohérence des paramètres dans l'API standard PHP.",
        "notes": "Fonctions d'ordre supérieur natives sur les tableaux."
      },
      "csharp": {
        "minimal": "var res = from n in nums where n % 2 == 0 select n * n;",
        "complete": "using System.Linq;\nusing System.Collections.Generic;\n\nvar valeurs = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };\nvar somme = valeurs.Where(x => x % 2 == 0).Select(x => x * x).Sum();",
        "best_practices": "LINQ par méthodes d'extension très populaire en C#.",
        "pitfalls": "Attention aux exécutions multiples des requêtes différées.",
        "notes": "Moteur LINQ identique sous le runtime .NET."
      },
      "java": {
        "minimal": "int res = nums.stream().filter(x -> x%2==0).mapToInt(x -> x*x).sum();",
        "complete": "import java.util.List;\n\nList<Integer> valeurs = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\nint somme = valeurs.stream()\n    .filter(x -> x % 2 == 0)\n    .mapToInt(x -> x * x)\n    .sum();",
        "best_practices": "Privilégier `mapToInt` pour éviter le boxing des types primitifs.",
        "pitfalls": "Un Stream consommé ne peut plus être réutilisé.",
        "notes": "API Stream Java 8+."
      },
      "cpp": {
        "minimal": "// C++20 Ranges & Views",
        "complete": "#include <vector>\n#include <numeric>\n#include <ranges>\n\nstd::vector<int> vals = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\nauto carres = vals | std::views::filter([](int x){ return x % 2 == 0; })\n                   | std::views::transform([](int x){ return x * x; });",
        "best_practices": "Utiliser les `ranges` pour des opérations sans allocation.",
        "pitfalls": "Complexité de débogage des templates.",
        "notes": "Pipelines déclaratifs zéro-surcoût."
      },
      "c": {
        "minimal": "// Boucle impérative classique avec accumulateur",
        "complete": "#include <stdio.h>\n\nint calculer_somme(int* arr, int len) {\n    int acc = 0;\n    for(int i = 0; i < len; i++) {\n        if (arr[i] % 2 == 0) acc += arr[i] * arr[i];\n    }\n    return acc;\n}",
        "best_practices": "Écrire des boucles contiguës en mémoire pour optimiser le cache CPU.",
        "pitfalls": "Dépassement de tableau sans contrôle de taille.",
        "notes": "Approche impérative obligatoire."
      },
      "vba": {
        "minimal": "' Pas de LINQ : itération manuelle impérative dans une boucle For",
        "complete": "Public Function SommeCarresPairs(arr As Variant) As Long\n    Dim i As Long, acc As Long\n    For i = LBound(arr) To UBound(arr)\n        If arr(i) Mod 2 = 0 Then\n            acc = acc + (arr(i) * arr(i))\n        End If\n    Next i\n    SommeCarresPairs = acc\nEnd Function",
        "best_practices": "Encapsuler les traitements de tableaux dans des fonctions réutilisables.",
        "pitfalls": "Absence totale de fonctions anonymes ou de pipelines déclaratifs.",
        "notes": "Itération impérative classique."
      }
    }
  },
  {
    "id": "vb_oop_events_properties_01",
    "level": 3,
    "chapter": "3. Programmation Orientée Objet & Événements",
    "category": "POO & Architecture",
    "name": "Propriétés, Événements (`Event`, `RaiseEvent`), Délégués et Interfaces",
    "description": "Encapsulation par propriétés auto-implémentées, gestion native des événements du langage (`Event`, `RaiseEvent`, `WithEvents`, `Handles`) et polymorphisme d'interface (`Implements`).",
    "related_concepts": ["py_dunder_datamodel_01"],
    "languages": {
      "vb": {
        "minimal": "Public Event CapteurAlerte(msg As String) : RaiseEvent CapteurAlerte(\"Erreur\")",
        "complete": "Imports System\n\nPublic Interface ICapteur\n    Sub Demarrer()\nEnd Interface\n\nPublic Class CapteurTemperature\n    Implements ICapteur\n    \n    ' Déclaration d'un événement natif en VB.NET\n    Public Event SeuilDepasse(temp As Double, heure As DateTime)\n    \n    Public Property Temperature As Double\n    \n    Public Sub Demarrer() Implements ICapteur.Demarrer\n        Me.Temperature = 85.5\n        If Me.Temperature > 80.0 Then\n            ' Déclenchement de l'événement\n            RaiseEvent SeuilDepasse(Me.Temperature, DateTime.Now)\n        End If\n    End Sub\nEnd Class\n\n' Consommation basée sur les événements\nPublic Class GestionnaireAlerte\n    Private WithEvents m_Capteur As New CapteurTemperature()\n    \n    ' Liaison automatique de la méthode à l'événement grâce à Handles\n    Private Sub SurSeuilDepasse(temp As Double, heure As DateTime) Handles m_Capteur.SeuilDepasse\n        Console.WriteLine($\"[ALERTE {heure:HH:mm:ss}] Température critique : {temp}°C\")\n    End Sub\nEnd Class",
        "best_practices": "Utiliser le couple `WithEvents` et `Handles` pour une liaison d'événements lisible et déclarative.",
        "pitfalls": "Oublier la clause `Implements Interface.Methode` lors de l'implémentation d'une interface en VB.NET (le nom de la méthode locale peut être différent).",
        "notes": "VB.NET possède la gestion événementielle la plus intégrée de la plateforme .NET grâce aux mots-clés `Event`, `RaiseEvent` et `Handles`."
      },
      "python": {
        "minimal": "class Capteur: def __init__(self): self._subscribers = []",
        "complete": "class CapteurTemperature:\n    def __init__(self):\n        self._subscribers = []\n        self.temperature = 0.0\n        \n    def s_abonner(self, callback):\n        self._subscribers.append(callback)\n        \n    def demarrer(self):\n        self.temperature = 85.5\n        if self.temperature > 80.0:\n            for cb in self._subscribers:\n                cb(self.temperature)\n\ndef alerte(temp):\n    print(f\"[ALERTE] Température : {temp}°C\")\n\nc = CapteurTemperature()\nc.s_abonner(alerte)\nc.demarrer()",
        "best_practices": "Implémenter le design pattern Observer explicitement ou via des callbacks.",
        "pitfalls": "Pas de mot-clé natif pour les événements : gestion manuelle de la liste des abonnés.",
        "notes": "Pattern Observer manuel en Python."
      },
      "javascript": {
        "minimal": "target.addEventListener('alerte', e => {}); target.dispatchEvent(new Event('alerte'));",
        "complete": "class Capteur extends EventTarget {\n    demarrer() {\n        const temp = 85.5;\n        if (temp > 80) {\n            this.dispatchEvent(new CustomEvent('seuil', { detail: temp }));\n        }\n    }\n}\nconst c = new Capteur();\nc.addEventListener('seuil', e => console.log(`Alerte: ${e.detail}`));\nc.demarrer();",
        "best_practices": "Hériter de `EventTarget` en JS moderne.",
        "pitfalls": "Fuites mémoire si les EventListeners ne sont pas retirés (`removeEventListener`).",
        "notes": "Basé sur EventTarget dans le navigateur/Node.js."
      },
      "typescript": {
        "minimal": "interface Capteur { demarrer(): void; }",
        "complete": "interface EventAlerte { temp: number; }\n\nclass Capteur {\n    private listeners: ((e: EventAlerte) => void)[] = [];\n    onAlerte(cb: (e: EventAlerte) => void) { this.listeners.push(cb); }\n    demarrer() {\n        this.listeners.forEach(cb => cb({ temp: 85.5 }));\n    }\n}",
        "best_practices": "Typer rigoureusement la signature des callbacks d'événements.",
        "pitfalls": "Pertes de contexte `this` dans les handlers.",
        "notes": "Typage strict du pattern Observer."
      },
      "php": {
        "minimal": "// Pattern Observer via SplSubject / SplObserver",
        "complete": "<?php\nclass Capteur implements SplSubject {\n    private SplObjectStorage $observers;\n    public function __construct() { $this->observers = new SplObjectStorage(); }\n    public function attach(SplObserver $obs): void { $this->observers->attach($obs); }\n    public function detach(SplObserver $obs): void { $this->observers->detach($obs); }\n    public function notify(): void {\n        foreach ($this->observers as $obs) $obs->update($this);\n    }\n}",
        "best_practices": "Utiliser les interfaces natives `SplSubject` et `SplObserver`.",
        "pitfalls": "Comportement synchrone bloquant de la notification.",
        "notes": "Support standard via la SPL PHP."
      },
      "csharp": {
        "minimal": "public event Action<double> SeuilDepasse; SeuilDepasse?.Invoke(85.5);",
        "complete": "public class CapteurTemperature {\n    public event EventHandler<double>? SeuilDepasse;\n    public void Demarrer() {\n        double temp = 85.5;\n        if (temp > 80.0) SeuilDepasse?.Invoke(this, temp);\n    }\n}\nvar c = new CapteurTemperature();\nc.SeuilDepasse += (s, temp) => Console.WriteLine($\"Alerte {temp}\");",
        "best_practices": "Utiliser l'opérateur thread-safe `?.Invoke()`.",
        "pitfalls": "Oublier de se désabonner (`-=`) provoquant des fuites mémoire.",
        "notes": "Gestion par délégués `EventHandler` et opérateur `+=`."
      },
      "java": {
        "minimal": "// Listener pattern via interfaces fonctionnelles",
        "complete": "import java.util.*;\n\ninterface SeuilListener { void onSeuil(double temp); }\n\npublic class Capteur {\n    private List<SeuilListener> listeners = new ArrayList<>();\n    public void addListener(SeuilListener l) { listeners.add(l); }\n    public void demarrer() {\n        for (SeuilListener l : listeners) l.onSeuil(85.5);\n    }\n}",
        "best_practices": "Utiliser des collections d'écouteurs thread-safe (`CopyOnWriteArrayList`).",
        "pitfalls": "Génération de classes anonymes superflues avant les Lambdas.",
        "notes": "Modèle JavaBeans Listener classique."
      },
      "cpp": {
        "minimal": "// Simulation par vecteur de std::function",
        "complete": "#include <vector>\n#include <functional>\n#include <iostream>\n\nclass Capteur {\npublic:\n    std::vector<std::function<void(double)>> handlers;\n    void demarrer() {\n        for(auto& f : handlers) f(85.5);\n    }\n};",
        "best_practices": "Stocker des callbacks `std::function` légers.",
        "pitfalls": "Gérer soi-même la durée de vie des objets capturés par référence dans les lambdas.",
        "notes": "Pattern Observer construit manuellement."
      },
      "c": {
        "minimal": "// Tableau de pointeurs de fonctions explicites",
        "complete": "#include <stdio.h>\n\ntypedef void (*CallbackAlerte)(double);\n\ntypedef struct {\n    CallbackAlerte onAlerte;\n} Capteur;\n\nvoid demarrer(Capteur* c) {\n    if (c->onAlerte) c->onAlerte(85.5);\n}",
        "best_practices": "Passer un pointeur de contexte `void* user_data` aux callbacks.",
        "pitfalls": "Risque de SegFault si le pointeur de fonction est nul.",
        "notes": "Callbacks C de bas niveau."
      },
      "vba": {
        "minimal": "Public Event SeuilDepasse(val As Double) : RaiseEvent SeuilDepasse(85.5)",
        "complete": "' Dans un Module de Classe 'clsCapteur.cls'\nOption Explicit\nPublic Event SeuilDepasse(ByVal temp As Double)\n\nPublic Sub Demarrer()\n    Dim temp As Double\n    temp = 85.5\n    If temp > 80# Then\n        RaiseEvent SeuilDepasse(temp)\n    End If\nEnd Sub\n\n' Dans un formulaire ou autre classe:\nPrivate WithEvents m_Capteur As clsCapteur\n\nPrivate Sub m_Capteur_SeuilDepasse(ByVal temp As Double)\n    MsgBox \"Alerte : \" & temp\nEnd Sub",
        "best_practices": "Utiliser `WithEvents` uniquement dans les modules de classe ou formulaires (interdit dans les modules standards `.bas`).",
        "pitfalls": "Les événements VBA ne peuvent pas retourner de valeurs directes aux émetteurs.",
        "notes": "Même modèle événementiel COM natif qu'en VB.NET."
      }
    }
  },
  {
    "id": "vb_concurrency_tpl_01",
    "level": 4,
    "chapter": "4. Asynchronisme & Concurrence (TPL)",
    "category": "Asynchronisme & Threads",
    "name": "Async/Await, TPL (Task Parallel Library) et Parallel.For",
    "description": "Programmation asynchrone non bloquante avec `Async` / `Await` et exécution parallèle sur multi-cœurs via `Parallel.ForEach` et `Task`.",
    "related_concepts": ["py_asyncio_event_loop_01"],
    "languages": {
      "vb": {
        "minimal": "Async Function ExecuterAsync() As Task : Await Task.Delay(1000) : End Function",
        "complete": "Imports System\nImports System.Net.Http\nImports System.Threading.Tasks\n\nPublic Module Program\n    ' Procédure asynchrone non bloquante\n    Public Async Function TelechargerContenuAsync(url As String) As Task(Of Integer)\n        Using client As New HttpClient()\n            Dim html As String = Await client.GetStringAsync(url)\n            Return html.Length\n        End Using\n    End Function\n    \n    ' Parallélisme lourd CPU sur plusieurs cœurs matériel\n    Public Sub TraiterDonneesParalleles(donnees As Integer())\n        Parallel.ForEach(donnees, Sub(item)\n                                      ' Traitement exécuté en parallèle sur le ThreadPool\n                                      Dim res = item * item\n                                  End Sub)\n    End Sub\nEnd Module",
        "best_practices": "S'assurer de retourner `Task` ou `Task(Of T)` dans les fonctions `Async`, et réserver `Async Sub` uniquement pour les gestionnaires d'événements.",
        "pitfalls": "Appeler `.Result` ou `.Wait()` sur une Tâche en VB.NET provoque des risques de Deadlock (Verrou mort) sur le SynchronizationContext de l'IHM.",
        "notes": "Intégration transparente de la Task Parallel Library (TPL) .NET avec une syntaxe très lisible."
      },
      "python": {
        "minimal": "async def main(): await asyncio.sleep(1)",
        "complete": "import asyncio\nimport aiohttp\n\nasync def telecharger_async(url: str) -> int:\n    async with aiohttp.ClientSession() as session:\n        async with session.get(url) as response:\n            html = await response.text()\n            return len(html)\n\n# Exécution de la boucle d'événements\nlongueur = asyncio.run(telecharger_async('https://example.com'))",
        "best_practices": "Utiliser `asyncio.run()` comme point d'entrée unique.",
        "pitfalls": "Bloquer l'Event Loop mono-thread avec du code synchrone lourd.",
        "notes": "Modèle asynchrone coopératif basé sur Event Loop."
      },
      "javascript": {
        "minimal": "async function main() { await new Promise(r => setTimeout(r, 1000)); }",
        "complete": "async function telechargerAsync(url) {\n    const response = await fetch(url);\n    const text = await response.text();\n    return text.length;\n}",
        "best_practices": "Utiliser `Promise.all()` pour paralléliser les requêtes réseau I/O.",
        "pitfalls": "Oublier de gérer les rejets avec un bloc `try...catch`.",
        "notes": "Asynchronisme au cœur du moteur JS."
      },
      "typescript": {
        "minimal": "async function test(): Promise<void> { await delay(1000); }",
        "complete": "async function telechargerAsync(url: string): Promise<number> {\n    const response = await fetch(url);\n    const text = await response.text();\n    return text.length;\n}",
        "best_practices": "Toujours expliciter le type de retour `Promise<T>`.",
        "pitfalls": "Typage des erreurs capturées dans le `catch` (`unknown`).",
        "notes": "Support typé du modèle Async/Await."
      },
      "php": {
        "minimal": "// Fibers PHP 8.1+",
        "complete": "<?php\n$fiber = new Fiber(function(): void {\n    $valeur = Fiber::suspend('Pause');\n});\n$str = $fiber->start();",
        "best_practices": "Utiliser Swoole ou Amp pour des I/O asynchrones performantes.",
        "pitfalls": "Le code PHP standard reste synchrone et bloquant.",
        "notes": "Fibers pour les coroutines bas niveau."
      },
      "csharp": {
        "minimal": "async Task Main() { await Task.Delay(1000); }",
        "complete": "using System.Net.Http;\nusing System.Threading.Tasks;\n\nasync Task<int> TelechargerAsync(string url) {\n    using var client = new HttpClient();\n    string html = await client.GetStringAsync(url);\n    return html.Length;\n}",
        "best_practices": "Configurer `.ConfigureAwait(false)` dans les bibliothèques.",
        "pitfalls": "Ne pas utiliser `async void` sauf pour les handlers d'événements.",
        "notes": "Pattern TAP identique à VB.NET."
      },
      "java": {
        "minimal": "CompletableFuture.runAsync(() -> {});",
        "complete": "import java.net.http.*;\nimport java.net.URI;\n\nHttpClient client = HttpClient.newHttpClient();\nHttpRequest req = HttpRequest.newBuilder(URI.create(\"https://example.com\")).build();\nclient.sendAsync(req, HttpResponse.BodyHandlers.ofString())\n      .thenAccept(res -> System.out.println(res.body().length()));",
        "best_practices": "Adopter les Virtual Threads (Java 21+) pour la haute concurrence.",
        "pitfalls": "Surcharger le ThreadPool avec des tâches bloquantes.",
        "notes": "Virtual Threads (Project Loom)."
      },
      "cpp": {
        "minimal": "co_await std::suspend_always{};",
        "complete": "#include <future>\n#include <iostream>\n\nint main() {\n    auto f = std::async(std::launch::async, []() {\n        return 42;\n    });\n    std::cout << f.get();\n}",
        "best_practices": "Utiliser `std::async` ou Coroutines C++20.",
        "pitfalls": "Gestion complexe des lifetimes d'objets capturés dans les coroutines.",
        "notes": "Coroutines C++20 bas niveau."
      },
      "c": {
        "minimal": "// Pas d'async natif : gestion par callbacks ou libuv",
        "complete": "// Utilisation de bibliothèques événementielles externes (ex: libuv)",
        "best_practices": "Employer `libuv` pour la programmation I/O asynchrone.",
        "pitfalls": "Complexité de la gestion d'états dans 'Callback Hell' en C.",
        "notes": "Gestion événementielle externe."
      },
      "vba": {
        "minimal": "' Pas d'async/await : simulation temporisée via Application.OnTime",
        "complete": "Public Sub LancerTacheDiffere()\n    ' Simule un appel asynchrone non bloquant via la boucle d'événements d'Excel\n    Application.OnTime Now + TimeValue(\"00:00:02\"), \"ProchaineEtape\"\nEnd Sub\n\nPublic Sub ProchaineEtape()\n    MsgBox \"Tache différée exécutée !\"\nEnd Sub",
        "best_practices": "Utiliser `Application.OnTime` pour ne pas figer le fil d'exécution de l'IHM Excel.",
        "pitfalls": "Incapacité d'exécuter du vrai code en arrière-plan parallèle.",
        "notes": "Traitement impératif séquentiel mono-thread."
      }
    }
  },
  {
    "id": "vb_resources_using_01",
    "level": 2,
    "chapter": "5. Robustesse & Gestion des Ressources",
    "category": "Gestion de Ressources",
    "name": "Libération Déterministe (`Using...End Using`), `IDisposable` et Gestion d'Exceptions",
    "description": "Garantie de fermeture des connexions et fichiers via le bloc `Using`, implémentation du pattern Dispose et interception d'erreurs (`Try...Catch...Finally`).",
    "related_concepts": ["py_context_managers_with_01"],
    "languages": {
      "vb": {
        "minimal": "Using f As New StreamWriter(\"t.txt\") : f.WriteLine(\"Data\") : End Using",
        "complete": "Imports System\nImports System.IO\n\nPublic Class RessourceCustom\n    Implements IDisposable\n    \n    Private m_Disposed As Boolean = False\n    \n    Public Sub Traiter()\n        If m_Disposed Then Throw New ObjectDisposedException(\"RessourceCustom\")\n        Console.WriteLine(\"Traitement de la ressource...\")\n    End Sub\n    \n    ' Pattern Dispose standard .NET\n    Protected Overridable Sub Dispose(disposing As Boolean)\n        If Not m_Disposed Then\n            If disposing Then\n                ' Libération des ressources managées\n            End If\n            m_Disposed = True\n        End If\n    End Sub\n    \n    Public Sub Dispose() Implements IDisposable.Dispose\n        Dispose(True)\n        GC.SuppressFinalize(Me)\n    End Sub\nEnd Class\n\nPublic Module Program\n    Public Sub Main()\n        ' Libération déterministe garantie à la sortie du bloc Using\n        Try\n            Using res As New RessourceCustom()\n                res.Traiter()\n            End Using\n        Catch ex As Exception\n            Console.WriteLine($\"Erreur capturée : {ex.Message}\")\n        Finally\n            Console.WriteLine(\"Nettoyage final effectué.\")\n        End Try\n    End Sub\nEnd Module",
        "best_practices": "Utiliser systématiquement les blocs `Using` pour tout objet implémentant `IDisposable` (fichiers, sockets, flux, connexions DB).",
        "pitfalls": "Utiliser le legacy `On Error GoTo` (style VB6) au lieu de la structure moderne `Try...Catch...Finally`.",
        "notes": "Le bloc `Using` garantit l'appel automatique de `.Dispose()` même si une exception survient dans le bloc."
      },
      "python": {
        "minimal": "with open('f.txt') as f: data = f.read()",
        "complete": "class RessourceCustom:\n    def __enter__(self):\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print(\"Nettoyage automatique\")\n        return False\n\ntry:\n    with RessourceCustom() as res:\n        print(\"Traitement...\")\nexcept Exception as e:\n    print(f\"Erreur : {e}\")",
        "best_practices": "Utiliser le gestionnaire de contexte `with` pour la gestion des ressources.",
        "pitfalls": "Masquer les exceptions en retournant `True` dans `__exit__`.",
        "notes": "Équivalent direct du bloc `Using` via le protocole `__enter__`/`__exit__`."
      },
      "javascript": {
        "minimal": "try { ... } finally { res.dispose(); }",
        "complete": "// Avec la nouvelle proposition TC39 Explicit Resource Management ('using')\n/*\n{\n    using res = new Ressource();\n}\n*/\ntry {\n    traiter();\n} finally {\n    nettoyer();\n}",
        "best_practices": "Adopter le mot-clé `using` si supporté par l'environnement JS.",
        "pitfalls": "Oublier le bloc `finally` de nettoyage en JS ES6 classique.",
        "notes": "Arrivée récente du mot-clé `using` dans l'écosystème ECMAScript."
      },
      "typescript": {
        "minimal": "using res = new Resource();",
        "complete": "class Resource implements Disposable {\n    [Symbol.dispose]() {\n        console.log(\"Nettoyage\");\n    }\n}\nfunction test() {\n    using r = new Resource();\n}",
        "best_practices": "Implémenter l'interface native `Disposable` (TS 5.2+).",
        "pitfalls": "Nécessite des Polyfills sur les anciens moteurs JS.",
        "notes": "Gestion déterministe de ressources."
      },
      "php": {
        "minimal": "try { ... } finally { fclose($f); }",
        "complete": "<?php\n$f = fopen('test.txt', 'w');\ntry {\n    fwrite($f, 'Données');\n} finally {\n    fclose($f);\n}",
        "best_practices": "Toujours libérer les handles de fichiers dans un bloc `finally`.",
        "pitfalls": "Absence de mot-clé natif de type `using`.",
        "notes": "Gestion par bloc try...finally."
      },
      "csharp": {
        "minimal": "using var f = File.Create(\"t.txt\");",
        "complete": "using System;\n\nusing var res = new StreamWriter(\"test.txt\");\nres.WriteLine(\"Données\");\n// Dispose automatique à la fin du scope courant",
        "best_practices": "Utiliser la déclaration `using` concise (C# 8+).",
        "pitfalls": "Oublier d'implémenter `IDisposable` sur ses propres classes ressources.",
        "notes": "Même infrastructure `IDisposable` que VB.NET."
      },
      "java": {
        "minimal": "try (var f = new FileWriter(\"t.txt\")) { ... }",
        "complete": "import java.io.FileWriter;\n\ntry (FileWriter writer = new FileWriter(\"test.txt\")) {\n    writer.write(\"Données\");\n} catch (Exception e) {\n    e.printStackTrace();\n}",
        "best_practices": "Utiliser la structure Try-With-Resources (Java 7+).",
        "pitfalls": "Masquage d'exceptions si le `.close()` échoue.",
        "notes": "Structure native Try-With-Resources."
      },
      "cpp": {
        "minimal": "std::ofstream f(\"t.txt\"); // Destructeur RAII automatique",
        "complete": "#include <fstream>\n\nvoid ecrire() {\n    std::ofstream f(\"test.txt\");\n    f << \"Données\";\n} // Fermeture automatique du fichier par le destructeur à la sortie de la pile",
        "best_practices": "Faire confiance au mécanisme RAII et aux destructeurs.",
        "pitfalls": "Pointeurs bruts sans libération.",
        "notes": "Libération automatique basée sur la portée (RAII)."
      },
      "c": {
        "minimal": "FILE* f = fopen(\"t.txt\", \"w\"); fclose(f);",
        "complete": "#include <stdio.h>\n\nvoid ecrire() {\n    FILE* f = fopen(\"test.txt\", \"w\");\n    if (!f) return;\n    fputs(\"Données\", f);\n    fclose(f);\n}",
        "best_practices": "Centraliser le nettoyage avec `goto cleanup;`.",
        "pitfalls": "Fuites de descripteurs si `return` anticipé sans `fclose`.",
        "notes": "Gestion 100% manuelle."
      },
      "vba": {
        "minimal": "' Utilisation obligatoire de On Error GoTo pour simuler un bloc Finally",
        "complete": "Public Sub EcrireFichier()\n    Dim fNum As Integer\n    fNum = FreeFile\n    \n    On Error GoTo GestionErreur\n    Open \"C:\\test.txt\" For Output As #fNum\n    Print #fNum, \"Données\"\n    \nNettoyage:\n    Close #fNum ' Garantit la fermeture du canal\n    Exit Sub\n    \nGestionErreur:\n    MsgBox \"Erreur : \" & Err.Description\n    Resume Nettoyage\nEnd Sub",
        "best_practices": "Organiser rigoureusement le saut d'étiquette `Nettoyage:` pour garantir la libération des canaux.",
        "pitfalls": "Absence de blocs `Try...Catch...Finally` ou `Using` en VBA.",
        "notes": "Gestion des erreurs impérative classique."
      }
    }
  }
]