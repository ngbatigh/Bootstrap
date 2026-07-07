window.CompIde = window.CompIde || {};

CompIde.vbaData = {
  "base_hello_world": {
    "minimal": "MsgBox \"Hello World!\"",
    "complete": "Public Sub SayHello()\n    MsgBox \"Hello World!\"\nEnd Sub",
    "best_practices": "Placer le code dans un Module standard (et non dans le code d'une feuille) pour qu'il soit accessible globalement.",
    "pitfalls": "Confondre MsgBox (qui affiche une boîte de dialogue) et Debug.Print (qui écrit discrètement dans la console d'exécution/fenêtre Immédiat).",
    "notes": "VBA est un langage événementiel et de script embarqué. Il n'existe pas de 'main()' obligatoire, on exécute des Procédures (Sub) ou des Fonctions."
  },
  "base_variables_02": {
    "minimal": "Dim x As Integer\nx = 42",
    "complete": "Public Sub GererVariables()\n    Dim pseudo As String\n    Dim score As Integer\n    Dim estActif As Boolean\n    \n    pseudo = \"ExcelMaster\"\n    score = 250\n    estActif = True\n    \n    Debug.Print pseudo & \" - Score: \" & score\nEnd Sub",
    "best_practices": "Toujours inscrire 'Option Explicit' tout en haut du module pour forcer la déclaration obligatoire de toutes les variables via 'Dim'.",
    "pitfalls": "Oublier de déclarer le type (ex: 'Dim x'). Sans type spécifié, VBA transforme la variable en type 'Variant', ce qui consomme beaucoup de mémoire et ralentit l'exécution.",
    "notes": "VBA utilise le symbole '&' pour la concaténation de chaînes (le '+' fonctionne mais peut causer des erreurs d'interprétation avec les nombres). Le mot-clé 'Set' est obligatoire pour assigner des objets (ex: Set classeur = ActiveWorkbook)."
  },
  "ctrl_conditions_03": {
    "minimal": "If x > 10 Then\n    MsgBox \"Grand\"\nEnd If",
    "complete": "Dim score As Integer\nscore = 85\n\nIf score >= 90 Then\n    Debug.Print \"Excellent\"\nElseIf score >= 70 Then\n    Debug.Print \"Bien\"\nElse\n    Debug.Print \"Passable\"\nEnd If\n\n' Select Case en VBA\nDim commande As String\ncommande = \"OUI\"\nSelect Case UCase(commande)\n    Case \"OUI\", \"OK\"\n        Debug.Print \"Validé\"\n    Case Else\n        Debug.Print \"Refusé\"\nEnd Select",
    "best_practices": "Toujours formater les chaînes textuelles avec UCase() ou LCase() avant de les évaluer dans un Select Case pour éviter les rejets dus aux différences de casse.",
    "pitfalls": "Écrire un If sur une seule ligne (ex: `If x = 1 Then y = 2`) sans 'End If', puis tenter de rajouter des lignes en dessous. C'est une source fréquente d'erreurs d'interprétation.",
    "notes": "Comme VB.NET, le `Select Case` supporte l'instruction `Is` pour tester des opérateurs logiques : `Case Is >= 18`."
  },
  "ctrl_boucles_04": {
    "minimal": "For i = 1 To 5\n    Debug.Print i\nNext i",
    "complete": "Dim i As Integer\nFor i = 1 To 3\n    Debug.Print \"Ligne: \" & i\nNext i\n\n' Parcourir une plage Excel (For Each)\nDim cellule As Range\nFor Each cellule In Range(\"A1:A3\")\n    If cellule.Value <> \"\" Then\n        Debug.Print cellule.Value\n    End If\nNext cellule",
    "best_practices": "Lors de l'utilisation de 'For Each' sur des objets de l'application (comme des cellules, des feuilles), toujours s'assurer que la collection n'est pas vide pour éviter de faire planter la macro.",
    "pitfalls": "Utiliser `Dim i As Integer` puis faire une boucle `For i = 1 To 40000`. En VBA, le type `Integer` est limité à 32 767. La boucle lèvera une erreur de 'Dépassement de capacité' (Overflow). Utilisez `Long` à la place !",
    "notes": "Pour interrompre prématurément une boucle en VBA, on utilise l'instruction `Exit For` ou `Exit Do`."
  },
  "func_declaration_05": {
    "minimal": "Function Somme(a As Integer, b As Integer) As Integer\n    Somme = a + b\nEnd Function",
    "complete": "Public Sub AfficherAlerte(texte As String)\n    MsgBox \"ALERTE : \" & texte\nEnd Sub\n\nPublic Function GetTVA(montant As Double) As Double\n    ' En VBA, on retourne en assignant au nom de la fonction\n    GetTVA = montant * 0.2\nEnd Function",
    "best_practices": "Déclarer explicitement le type de retour des fonctions (`As String`, `As Long`, etc.). Si omis, la fonction retourne un type `Variant` lourd et lent.",
    "pitfalls": "Utiliser le mot-clé `Return` dans une fonction VBA. Ce mot-clé n'existe pas pour renvoyer une valeur (il sert uniquement à de vieux sauts GoSub). Vous devez assigner la valeur au nom de la fonction.",
    "notes": "Les procédures `Sub` peuvent être lancées directement via des boutons Excel ou des macros, tandis que les `Function` peuvent être utilisées directement comme formules dans vos cellules Excel !"
  },
  "func_arguments_06": {
    "minimal": "Sub Check(Optional v As Variant)",
    "complete": "Public Sub CalculerSolde(\n    ByVal capital As Double, \n    ByRef totalSorties As Double, \n    Optional ByVal taux As Double = 0.05\n)\n    ' ByRef est le comportement par défaut en VBA !\n    totalSorties = totalSorties + (capital * taux)\nEnd Sub",
    "best_practices": "Écrire explicitement `ByVal` pour vos arguments, sauf si vous voulez sciemment modifier la variable d'origine. En VBA, contrairement à VB.NET, le défaut masqué est `ByRef`.",
    "pitfalls": "Déclarer un paramètre Optionnel d'un type primitif sans lui assigner de valeur par défaut. Pour vérifier s'il a été fourni, il faut qu'il soit de type `Variant` afin d'utiliser la fonction `IsMissing()`.",
    "notes": "Appel nommé disponible en VBA en utilisant la syntaxe `:=` (ex: `CalculerSolde capital:=1000, totalSorties:=t`)."
  },
  "data_structures_07": {
    "minimal": "Dim arr(0 To 2) As String\narr(0) = \"A\"",
    "complete": "Public Sub GererTableau()\n    ' Tableau dynamique\n    Dim codes() As String\n    ReDim codes(0 To 1)\n    \n    codes(0) = \"TXT\"\n    codes(1) = \"XLS\"\n    \n    ' Agrandissement avec conservation des données\n    ReDim Preserve codes(0 To 2)\n    codes(2) = \"PDF\"\n    \n    Debug.Print \"Borne max : \" & UBound(codes)\nEnd Sub",
    "best_practices": "Toujours expliciter les deux bornes lors du dimensionnement d'un tableau (`0 To 4`) plutôt que d'écrire simplement `Dim arr(4)`, car la borne de départ dépend du réglage masqué globale `Option Base`.",
    "pitfalls": "Oublier le mot-clé `Preserve` lors d'un `ReDim`. Sans lui, votre tableau est entièrement remis à zéro et vous perdez toutes vos données précédentes.",
    "notes": "Pour simuler une liste dynamique sans s'embêter avec ReDim, les développeurs VBA avancés utilisent parfois l'objet système `CreateObject(\"System.Collections.ArrayList\")`."
  },
  "data_structures_08": {
    "minimal": "Dim dict As Object\nSet dict = CreateObject(\"Scripting.Dictionary\")",
    "complete": "Public Sub TesterDico()\n    Dim client As Object\n    Set client = CreateObject(\"Scripting.Dictionary\")\n    \n    ' Configuration de la sensibilité à la casse (0 = Sensible, 1 = Insensible)\n    client.CompareMode = 1\n    \n    ' Ajout et modification\n    client.Add \"Nom\", \"Dupont\"\n    client(\"Solde\") = 450.75\n    \n    ' Vérification et lecture\n    If client.Exists(\"Nom\") Then\n        Debug.Print client(\"Nom\")\n    End If\nEnd Sub",
    "best_practices": "Toujours configurer `.CompareMode = 1` immédiatement après la création du dictionnaire pour éviter que les clés \"Cle\" et \"cle\" soient considérées comme deux éléments distincts.",
    "pitfalls": "Tenter d'accéder à une clé inexistante via `valeur = client(\"Inconnu\")`. Au lieu de lever une erreur, le `Scripting.Dictionary` va créer silencieusement la clé \"Inconnu\" avec une valeur vide. Utilisez toujours `.Exists()` avant de lire.",
    "notes": "L'objet `Scripting.Dictionary` requiert l'activation (implicite ou explicite) de la bibliothèque Runtime Microsoft Scripting dans l'éditeur VBA."
  },
  "oop_classes_09": {
    "minimal": "' À placer dans un Module de Classe nommé 'User'\nPrivate m_Nom As String",
    "complete": "' --- DANS UN MODULE DE CLASSE NOMMÉ : clsClient ---\nPrivate m_Nom As String ' Attribut privé d'instance\n\n' Getter (Property Get)\nPublic Property Get Nom() As String\n    Nom = m_Nom\nEnd Property\n\n' Setter pour types primitifs (Property Let)\nPublic Property Let Nom(ByVal nvNom As String)\n    If nvNom <> \"\" Then m_Nom = nvNom\nEnd Property",
    "best_practices": "Renommer impérativement le module de classe via la fenêtre Propriétés de l'éditeur VBA (ex : `clsFacture`), car le nom du fichier dicte le nom de la classe.",
    "pitfalls": "Confondre `Property Let` (assignation pour variables classiques comme String, Integer) et `Property Set` (obligatoire pour assigner des objets comme un Range ou un Worksheet).",
    "notes": "L'encapsulation est gérée par les modules de classe VBA, mais l'héritage de classes n'existe pas en VBA (seule l'implémentation d'interfaces via `Implements` est supportée)."
  },
  "oop_methods_10": {
    "minimal": "Dim c As clsClient\nSet c = New clsClient",
    "complete": "' --- DANS UN MODULE DE CLASSE ---\nPrivate Sub Class_Initialize()\n    ' Événement déclenché au 'New' (Pas de paramètres possibles !)\n    Debug.Print \"Objet créé\"\nEnd Sub\n\n' --- DANS UN MODULE STANDARD (Appel) ---\nPublic Sub Demarrer()\n    Dim instance As clsClient\n    Set instance = New clsClient ' Instanciation et déclenchement de Initialize\n    \n    ' Initialisation manuelle des attributs puisque le constructeur est vide\n    instance.Nom = \"Marc\"\nEnd Sub",
    "best_practices": "Créer une méthode publique d'initialisation personnalisée (ex : `Public Sub Creer(nom As String)`) pour compenser l'impossibilité de passer des paramètres à l'événement `Class_Initialize`.",
    "pitfalls": "Oublier le mot-clé `Set` lors de l'instanciation (`instance = New clsClient`). Sans `Set`, VBA lèvera une erreur d'exécution 91 'Variable objet non définie'.",
    "notes": "VBA détruit automatiquement l'objet dès que plus aucune variable ne pointe dessus, ou à la fin de la procédure si la variable est locale."
  },
  "errors_try_catch_11": {
    "minimal": "On Error GoTo GestionErreur\n' code...\nExit Sub\nGestionErreur:\nMsgBox Err.Description",
    "complete": "Public Sub ImporterDonnees()\n    ' 1. Activation du branchement d'erreur\n    On Error GoTo ErreurHandler\n    \n    Dim x As Integer\n    x = 1 / 0 ' Provoque une division par zéro\n    \n    ' 2. Sortie impérative de la procédure pour ne pas exécuter le handler par accident\n    Exit Sub\n\nErreurHandler:\n    ' 3. Traitement de l'anomalie\n    MsgBox \"Erreur #\" & Err.Number & \" : \" & Err.Description, vbCritical, \"Panne\"\n    Resume FinProcedure\n\nFinProcedure:\n    ' Fait office de bloc Finally pour nettoyer les objets\n    Debug.Print \"Nettoyage final effectué\"\nEnd Sub",
    "best_practices": "Placer toujours une ligne `Exit Sub` ou `Exit Function` immédiatement au-dessus de l'étiquette de votre gestionnaire d'erreur pour empêcher la macro de s'engouffrer inutilement dans le code de traitement en cas de succès.",
    "pitfalls": "Oublier de vider ou de réinitialiser le gestionnaire d'erreur. Si vous devez ignorer temporairement une erreur connue, écrivez `On Error Resume Next`, réalisez l'opération sur une seule ligne, puis rétablissez immédiatement le comportement standard avec `On Error GoTo 0`.",
    "notes": "L'objet global `Err` contient toutes les informations de la dernière anomalie interceptée. La méthode `Err.Clear` permet de vider manuellement ses données."
  },
  "errors_throw_12": {
    "minimal": "Err.Raise 513, \"MaSource\", \"Erreur survenue\"",
    "complete": "Public Sub GenererRapport(ByVal idClient As Long)\n    If idClient <= 0 Then\n        ' En VBA, on lève une exception manuellement via Err.Raise\n        ' Le numéro d'erreur personnalisé doit idéalement être ajouté à la constante vbObjectError\n        Err.Raise vbObjectError + 1001, \"GenererRapport\", \"L'identifiant client doit être positif.\"\n    End If\nEnd Sub",
    "best_practices": "Utiliser la constante système `vbObjectError` comme point de départ numérique lorsque vous générez vos propres numéros d'erreurs applicatives pour éviter d'entrer en collision avec les codes d'erreurs natifs de Windows.",
    "pitfalls": "Appeler `Err.Raise` sans spécifier le paramètre `Source`. Indiquer le nom de la procédure en cours permet d'identifier immédiatement l'origine de la panne dans les projets volumineux contenant des dizaines de modules.",
    "notes": "L'instruction `Err.Raise` interrompt le flux normal et transfère le contrôle au premier gestionnaire `On Error GoTo` actif dans la pile d'appels."
  },
  "async_await_13": {
    "minimal": "' Pas d'asynchronisme. Exécution purement synchrone.\nApplication.Wait (Now + TimeValue(\"00:00:02\"))",
    "complete": "' En VBA, tout s'exécute sur l'unique thread de l'application hôte (Excel)\nPublic Sub SimulerAttente()\n    Debug.Print \"Début de l'attente...\"\n    \n    ' Met en pause Excel complètement pendant 2 secondes\n    Application.Wait (Now + TimeValue(\"00:00:02\"))\n    \n    Debug.Print \"Fin de l'attente\"\nEnd Sub\n\n' Astuce pour lancer une macro en différé sans bloquer l'écran\nPublic Sub LancerTacheDifferee()\n    Application.OnTime Now + TimeValue(\"00:00:05\"), \"MaMacroCible\"\nEnd Sub",
    "best_practices": "Éviter l'utilisation abusive de `Application.Wait` car cela fige l'interface utilisateur d'Excel, donnant l'impression à l'utilisateur que l'application a planté.",
    "pitfalls": "Croire qu'on peut faire du multi-threading natif en VBA. Si vous lancez une boucle de calcul très lourde, l'application passera en état 'Ne répond pas' jusqu'à la fin du traitement.",
    "notes": "L'astuce `Application.OnTime` permet d'enregistrer une macro dans la file d'attente d'Excel pour simuler un traitement asynchrone asynchrone de type tâche de fond."
  },
  "file_io_14": {
    "minimal": "Open \"C:\\t.txt\" For Output As #1\nPrint #1, \"Texte\"\nClose #1",
    "complete": "Public Sub GererFichierTexte()\n    Dim chemin As String\n    chemin = Application.DefaultFilePath & \"\\vba_test.txt\"\n    \n    ' ÉCRITURE (Méthode historique robuste)\n    Dim numFichier As Integer\n    numFichier = FreeFile ' Récupère un identifiant de fichier libre\n    \n    Open chemin For Output As #numFichier\n    Print #numFichier, \"Première ligne VBA\"\n    Print #numFichier, \"Deuxième ligne VBA\"\n    Close #numFichier\n    \n    ' LECTURE\n    Dim ligne As String\n    Open chemin For Input As #numFichier\n    Do While Not EOF(numFichier) ' Boucle jusqu'à la fin du fichier\n        Line Input #numFichier, ligne\n        Debug.Print \"Lu : \" & ligne\n    Loop\n    Close #numFichier\nEnd Sub",
    "best_practices": "Toujours appeler la fonction `FreeFile` pour obtenir le numéro de canal de fichier au lieu d'écrire `#1` en dur, afin d'éviter les conflits si plusieurs fichiers sont ouverts simultanément.",
    "pitfalls": "Oublier de fermer un fichier si une erreur survient au milieu de la procédure. Le fichier restera verrouillé. Mettez impérativement un gestionnaire d'erreur qui passe par une ligne `Close #numFichier`.",
    "notes": "Pour les développeurs préférant une approche orientée objet, il est possible d'utiliser la bibliothèque système `Scripting.FileSystemObject` (FSO) via ses méthodes `CreateTextFile` et `OpenTextFile`."
  }
};