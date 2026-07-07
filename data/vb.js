window.CompIde = window.CompIde || {};

CompIde.vbData = {
  "base_hello_world": {
    "minimal": "Console.WriteLine(\"Hello World!\")",
    "complete": "Module Program\n    Sub Main()\n        Console.WriteLine(\"Hello World!\")\n    End Sub\nEnd Module",
    "best_practices": "Respecter la capitalisation standard de l'écosystème .NET même si VB est insensible à la casse.",
    "pitfalls": "Oublier la structure de fermeture comme End Sub ou End Module.",
    "notes": "Visual Basic .NET partage le même moteur d'exécution (CLR) que le C#."
  },
  "base_variables_02": {
    "minimal": "Dim x As Integer = 42\nDim y = 3.14",
    "complete": "Module Program\n    Sub Main()\n        Dim pseudo As String = \"VBMaster\"\n        Dim score As Integer = 500\n        Dim estActif As Boolean = True\n        \n        Console.WriteLine(\"{0} - Score: {1}\", pseudo, score)\n    End Sub\nEnd Module",
    "best_practices": "Toujours activer Option Explicit et Option Strict en haut du fichier pour forcer un typage propre et sécurisé.",
    "pitfalls": "Laisser Option Strict à OFF, ce qui autorise des conversions implicites dangereuses et masquées.",
    "notes": "Syntaxe verbeuse, inspirée du langage naturel. Totalement insensible à la casse."
  },
  "ctrl_conditions_03": {
    "minimal": "If x > 10 Then\n    Console.WriteLine(\"Grand\")\nEnd If",
    "complete": "Dim note As Integer = 75\n\nIf note >= 90 Then\n    Console.WriteLine(\"A\")\nElseIf note >= 70 Then\n    Console.WriteLine(\"B\")\nElse\n    Console.WriteLine(\"C\")\nEnd If\n\n' Structure Select Case\nDim code As String = \"OK\"\nSelect Case code\n    Case \"OK\", \"SUCCESS\"\n        Console.WriteLine(\"Validé\")\n    Case Else\n        Console.WriteLine(\"Erreur\")\nEnd Select",
    "best_practices": "Utiliser 'ElseIf' en un seul mot. Écrire 'Else If' en deux mots crée une structure imbriquée qui nécessite un 'End If' supplémentaire.",
    "pitfalls": "Oublier le mot-clé 'Then' à la fin de la ligne du If ou du ElseIf, ce qui déclenche immédiatement une erreur de syntaxe.",
    "notes": "La structure 'Select Case' en VB.NET est beaucoup plus puissante que le switch du C. Elle gère nativement les plages de valeurs (`Case 1 To 10`) et les expressions (`Case Is > 5`)."
  },
  "ctrl_boucles_04": {
    "minimal": "For i As Integer = 0 To 4\n    Console.WriteLine(i)\nNext",
    "complete": "Dim liste() As String = {\"A\", \"B\", \"C\"}\n\n' Boucle For Each\nFor Each lettre As String In liste\n    Console.WriteLine(lettre)\nNext\n\n' Boucle While\nDim c As Integer = 0\nWhile c < 3\n    Console.WriteLine(c)\n    c += 1\nEnd While",
    "best_practices": "Toujours préciser le nom de la variable après le mot-clé 'Next' (ex: `Next i`) dans les longues boucles imbriquées pour améliorer la lisibilité du code.",
    "pitfalls": "Attention à la borne supérieure du 'For i = 0 To 4' : en VB, la boucle s'exécute **5 fois** (la borne supérieure est INCLUSE), contrairement à la plupart des autres langages.",
    "notes": "VB.NET propose également la boucle `Do ... Loop Until` ou `Do While ... Loop` pour des contrôles de flux alternatifs."
  },
  "func_declaration_05": {
    "minimal": "Function Somme(a As Integer, b As Integer) As Integer\n    Return a + b\nEnd Function",
    "complete": "Module Outils\n    ' Une Sub ne retourne aucune valeur (équivalent void)\n    Public Sub AfficherMessage(msg As String)\n        Console.WriteLine(\"LOG: \" & msg)\n    End Sub\n\n    ' Une Function retourne obligatoirement une valeur\n    Public Function CalculerCarre(nombre As Integer) As Integer\n        Return nombre * nombre\n    End Function\nEnd Module",
    "best_practices": "Utiliser le mot-clé `Return` de manière explicite pour renvoyer le résultat, plutôt que l'ancienne méthode consistant à assigner la valeur au nom de la fonction.",
    "pitfalls": "Confondre `Sub` et `Function`. Tenter de récupérer le résultat d'une procédure `Sub` lèvera une erreur de compilation.",
    "notes": "Contrairement à VB6/VBA, VB.NET intègre pleinement la surcharge de méthodes via le mot-clé optionnel `Overloads`."
  },
  "func_arguments_06": {
    "minimal": "Sub Traiter(Optional valeur As Integer = 0)",
    "complete": "Module App\n    ' Arguments par valeur (ByVal), par référence (ByRef) et optionnels\n    Public Sub AjusterParametres(\n        ByVal id As Integer, \n        ByRef compteur As Integer, \n        Optional ByVal prefixe As String = \"ID_\"\n    )\n        compteur += 1\n        Console.WriteLine(prefixe & id)\n    End Sub\nEnd Module",
    "best_practices": "Toujours expliciter le mode de passage des arguments via `ByVal` (copie sécurisée) ou `ByRef` (pointeur modifiable). Par défaut, VB.NET applique ByVal.",
    "pitfalls": "Oublier de fournir une valeur par défaut obligatoire lors de la déclaration d'un paramètre marqué `Optional`.",
    "notes": "VB.NET gère parfaitement l'appel de fonctions avec paramètres nommés : `AjusterParametres(id:=42, compteur:=c)`."
  },
  "data_structures_07": {
    "minimal": "Dim liste As New List(Of String) FROM {\"A\", \"B\"}",
    "complete": "Imports System.Collections.Generic\n\nModule Program\n    Sub Main()\n        ' Liste dynamique générique\n        Dim stack As New List(Of Integer)()\n        stack.Add(10)\n        stack.Add(20)\n        \n        stack(1) = 25 ' Modification par index\n        stack.RemoveAt(0) ' Suppression par index\n        \n        Console.WriteLine(\"Nombre : \" & stack.Count)\n    End Sub\nEnd Module",
    "best_practices": "Privilégier la classe générique `List(Of T)` plutôt que le vieux tableau statique ou l'ancienne classe `ArrayList` non typée.",
    "pitfalls": "Se faire piéger par le redimensionnement des tableaux statiques avec `ReDim`. Utiliser `ReDim` efface toutes les données existantes. Pour conserver les données, il faut impérativement écrire `ReDim Preserve tableau(nouvelleTaille)`.",
    "notes": "L'accès aux éléments d'une liste ou d'un tableau se fait avec des parenthèses `liste(0)` en VB, et non des crochets `liste[0]`."
  },
  "data_structures_08": {
    "minimal": "Dim dict As New Dictionary(Of String, String)()",
    "complete": "Imports System.Collections.Generic\n\nModule Program\n    Sub Main()\n        Dim capitales As New Dictionary(Of String, String)()\n        \n        ' Ajout\n        capitales.Add(\"France\", \"Paris\")\n        capitales(\"Italie\") = \"Rome\"\n        \n        ' Recherche sûre\n        If capitales.ContainsKey(\"France\") Then\n            Console.WriteLine(capitales(\"France\"))\n        End If\n    End Sub\nEnd Module",
    "best_practices": "Utiliser `capitales.TryGetValue(cle, valeurRecuperee)` pour tester la présence d'une clé et extraire sa valeur en une seule opération performante.",
    "pitfalls": "Tenter d'ajouter une clé déjà existante avec la méthode `.Add()`. Cela lève immédiatement une exception fatale `ArgumentException`. Utilisez l'assignation directe `capitales(cle) = valeur` pour écraser ou insérer sans risque.",
    "notes": "Le `Dictionary` de VB.NET s'appuie sur l'infrastructure ultra-performante du Framework .NET."
  },
  "oop_classes_09": {
    "minimal": "Public Class Client\n    Private _nom As String\nEnd Class",
    "complete": "Public Class Personne\n    Private _nom As String\n\n    ' Déclaration d'une propriété standard .NET\n    Public Property Nom() As String\n        Get\n            Return _nom\n        End Get\n        Set(ByVal value As String)\n            If value <> \"\" Then _nom = value\n        End Set\n    End Property\n\n    ' Propriété auto-implémentée (Syntaxe courte)\n    Public Property Age As Integer\nEnd Class",
    "best_practices": "Utiliser les propriétés auto-implémentées (`Public Property Score As Integer`) lorsque vous n'avez pas de logique de validation particulière à appliquer à la donnée.",
    "pitfalls": "Ne pas respecter les conventions de nommage : l'usage veut qu'on préfixe l'attribut privé par un underscore (`_nom`) et qu'on mette la propriété publique en PascalCase (`Nom`).",
    "notes": "VB.NET est un vrai langage orienté objet qui compile en langage intermédiaire (IL) à l'instar de C#."
  },
  "oop_methods_10": {
    "minimal": "Public Sub New(nom As String)\n    Me.Nom = nom\nEnd Sub",
    "complete": "Public Class Compte\n    Public Property Titulaire As String\n\n    ' En VB.NET, le constructeur s'appelle obligatoirement New\n    Public Sub New(ByVal nom As String)\n        Me.Titulaire = nom\n    End Sub\nEnd Class\n\nModule Executeur\n    Sub Main()\n        ' Instanciation\n        Dim monCompte As New Compte(\"Bob\")\n        Console.WriteLine(monCompte.Titulaire)\n    End Sub\nEnd Module",
    "best_practices": "Utiliser le mot-clé `Me` (équivalent de `this`) pour cibler explicitement les membres de l'instance en cours d'utilisation.",
    "pitfalls": "Créer une fonction nommée d'après la classe (comme en Java/C#) pour faire le constructeur. En VB, ce sera ignoré, seul `Sub New` fait office de constructeur valide.",
    "notes": "VB.NET propose l'initialisation d'objets en bloc compact très élégante : `Dim c As New Compte With {.Titulaire = \"Alice\"}`."
  },
  "errors_try_catch_11": {
    "minimal": "Try\n    Calculer()\nCatch ex As Exception\n    Console.WriteLine(ex.Message)\nEnd Try",
    "complete": "Try\n    Dim denominateur As Integer = 0\n    Dim x = 10 / denominateur\nCatch ex As DivideByZeroException\n    Console.WriteLine(\"Tentative de division par zéro détectée.\")\nCatch ex As Exception When ex.InnerException IsNot Nothing\n    ' Utilisation d'un filtre conditionnel 'When'\n    Console.WriteLine(\"Erreur imbriquée complexe.\")\nFinally\n    Console.WriteLine(\"Nettoyage mémoire effectué.\")\nEnd Try",
    "best_practices": "Placer les blocs `Catch` du plus spécifique (ex: `DivideByZeroException`) au plus général (`Exception`) pour intercepter les anomalies au bon niveau de granularité.",
    "pitfalls": "Utiliser l'ancien mot-clé VB6 `On Error Resume Next`. Cette instruction masque toutes les erreurs à l'exécution et engendre des comportements imprévisibles dans une application moderne .NET.",
    "notes": "Le bloc `Finally` s'exécute quoi qu'il arrive, même si une instruction de sortie prématurée comme `Return` ou `Exit Sub` est appelée dans le Try ou le Catch."
  },
  "errors_throw_12": {
    "minimal": "Throw New ArgumentException(\"Donnée invalide\")",
    "complete": "Public Sub MettreAJourAge(ByVal nvAge As Integer)\n    If nvAge < 0 OrElse nvAge > 120 Then\n        ' Instanciation et levée immédiate de l'exception\n        Throw New ArgumentOutOfRangeException(\"nvAge\", \"L'âge doit être compris entre 0 et 120 ans.\")\n    End If\nEnd Sub",
    "best_practices": "Utiliser l'opérateur logique court-circuit `OrElse` (plutôt que `Or`) dans vos conditions de garde avant de lever une exception, pour optimiser les performances de calcul.",
    "pitfalls": "Ré-émettre une exception attrapée en écrivant `Throw ex` dans votre bloc catch. Cela réinitialise la pile d'exécution (Stack Trace). Écrivez simplement `Throw` tout court pour propager l'erreur d'origine sans altérer son historique.",
    "notes": "Le mot-clé pour instancier et envoyer l'erreur est `Throw New` combiné."
  },
  "async_await_13": {
    "minimal": "Async Function TraiterAsync() As Task\n    Await Task.Delay(1000)\nEnd Function",
    "complete": "Imports System.Threading.Tasks\n\nModule ModuleAsync\n    ' Une méthode asynchrone qui renvoie une valeur\n    Public Async Function TelechargerPageAsync(url As String) As Task(Of Integer)\n        Dim resultat As String = \"\" \n        \n        ' Attente asynchrone non-bloquante\n        Await Task.Delay(2000) ' Simule un appel réseau\n        \n        Return resultat.Length\n    End Function\nEnd Module",
    "best_practices": "Ajouter systématiquement le suffixe 'Async' au nom de vos méthodes asynchrones (ex: `CalculerPrixAsync`) pour respecter les directives architecturales de Microsoft .NET.",
    "pitfalls": "Déclarer une méthode asynchrone avec `Async Sub` au lieu de `Async Function ... As Task`. Un `Async Sub` est une méthode 'fire-and-forget' impossible à attendre via `Await` et dont les exceptions peuvent faire crasher l'application. À réserver exclusivement aux gestionnaires d'événements UI.",
    "notes": "Le modèle de programmation asynchrone basé sur les tâches (TAP) utilise les objets `Task` et `Task(Of T)`."
  },
  "file_io_14": {
    "minimal": "IO.File.WriteAllText(\"c:\\log.txt\", \"Ok\")",
    "complete": "Imports System.IO\n\nModule ModuleFichiers\n    Sub Main()\n        Dim chemin As String = \"rapport.txt\"\n        \n        ' Écriture simple et rapide\n        File.WriteAllText(chemin, \"Contenu généré par VB.NET\")\n        \n        ' Lecture ligne par ligne sécurisée\n        If File.Exists(chemin) Then\n            Dim lignes() As String = File.ReadAllLines(chemin)\n            For Each ligne As String In lignes\n                Console.WriteLine(\"Ligne : \" & ligne)\n            End For\n        End If\n    End Sub\nEnd Module",
    "best_practices": "Utiliser les méthodes statiques de la classe `System.IO.File` (`WriteAllText`, `ReadAllLines`) pour les opérations simples de fichiers, car elles ouvrent, traitent et ferment le flux automatiquement.",
    "pitfalls": "Tenter de manipuler un fichier ouvert dans une application externe sans gérer l'exception `IOException` (ex: si le fichier est déjà verrouillé par Excel).",
    "notes": "VB.NET dispose d'un espace de noms très pratique appelé `My.Computer.FileSystem` qui encapsule ces opérations avec une syntaxe encore plus accessible."
  }
};