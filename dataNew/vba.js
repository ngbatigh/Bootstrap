// data/languages/vba.js
window.CompIde = window.CompIde || {};

CompIde.vbaData = {
  "base_hello_world": {
    "minimal": "MsgBox \"Hello World!\"",
    "complete": "Public Sub Main()\n    MsgBox \"Hello World!\"\nEnd Sub",
    "best_practices": "Utiliser 'Debug.Print' au lieu de 'MsgBox' pour consigner des traces de débogage sans bloquer l'exécution.",
    "pitfalls": "Tenter d'exécuter du code hors d'une Sub ou d'une Function.",
    "notes": "Langage de macro intégré aux applications Microsoft Office."
  },
  "base_variables_02": {
    "minimal": "Dim x As Integer\nx = 42",
    "complete": "Public Sub TesterVariables()\n    Dim age As Integer\n    Dim nom As String\n    age = 25\n    nom = \"CompIde\"\n    Debug.Print nom & \" - Age: \" & age\nEnd Sub",
    "best_practices": "Ajouter systématiquement 'Option Explicit' en toute première ligne de chaque module.",
    "pitfalls": "Ne pas déclarer de type : la variable devient implicitement de type 'Variant' (lourde en mémoire).",
    "notes": "Typage statique facultatif, typage dynamique par défaut via le type 'Variant'."
  },
  "ctrl_conditions_01": {
    "minimal": "If score > 10 Then Gagner",
    "complete": "Public Sub TesterCondition()\n    Dim score As Integer\n    score = 75\n    If score >= 90 Then\n        Debug.Print \"Excellent\"\n    ElseIf score >= 50 Then\n        Debug.Print \"Validé\"\n    Else\n        Debug.Print \"Échec\"\n    End If\nEnd Sub",
    "best_practices": "Utiliser la structure 'Select Case' pour simplifier les tests conditionnels multiples.",
    "pitfalls": "Écrire 'Else If' au lieu du mot-clé unifié 'ElseIf'.",
    "notes": "Pas d'opérateur ternaire natif direct (on utilise la fonction `IIf(cond, vrai, faux)`)."
  },
  "ctrl_loops_02": {
    "minimal": "For Each item In collection : Next item",
    "complete": "Public Sub TesterBoucle()\n    Dim nombres As Variant\n    Dim nb As Variant\n    nombres = Array(10, 20, 30)\n    For Each nb In nombres\n        Debug.Print nb\n    Next nb\nEnd Sub",
    "best_practices": "Utiliser 'For Each' pour parcourir les collections de données ou de cellules Excel.",
    "pitfalls": "Oublier de libérer les pointeurs de boucles d'objets lourds.",
    "notes": "La boucle 'For i = A To B' est inclusive sur ses deux bornes."
  },
  "func_basics_01": {
    "minimal": "Function Ajouter(a As Integer, b As Integer) As Integer\n    Ajouter = a + b\nEnd Function",
    "complete": "Public Function Diviser(a As Double, Optional b As Double = 1#) As Double\n    Diviser = a / b\nEnd Function\n\nPublic Sub Main()\n    Debug.Print Diviser(10#)\nEnd Sub",
    "best_practices": "Retourner la valeur en l'assignant directement au nom de la fonction.",
    "pitfalls": "Utiliser le mot-clé 'Return' (ce mot-clé est invalide en VBA pour retourner une valeur).",
    "notes": "Prend en charge les paramètres optionnels via 'Optional'."
  },
  "func_lambdas_02": {
    "minimal": "// Non supporté nativement en VBA.",
    "complete": "Public Sub ExecuterPointeur()\n    ' Utilisation de Application.Run sous Excel pour simuler un rappel dynamique\n    Application.Run \"MaSubDeRappel\"\nEnd Sub",
    "best_practices": "Remplacer l'absence de lambdas par des modules de classe ou des appels 'Application.Run'.",
    "pitfalls": "Aucune fonction anonyme ni closure n'existe en VBA.",
    "notes": "Ne supporte pas les lambdas ni les fonctions anonymes."
  },
  "mem_management_01": {
    "minimal": "Set obj = Nothing",
    "complete": "Public Sub LibererMemoire()\n    Dim dict As Object\n    Set dict = CreateObject(\"Scripting.Dictionary\")\n    ' Traitement...\n    Set dict = Nothing ' Libération explicite de la mémoire\nEnd Sub",
    "best_practices": "Libérer systématiquement tous les objets instanciés en les assignant à 'Nothing' en fin de traitement.",
    "pitfalls": "Ne pas libérer les variables objets, créant des fuites mémoire dans l'application hôte (Excel, Access).",
    "notes": "Basé sur un gestionnaire de mémoire simple à comptage de références COM."
  },
  "mem_references_02": {
    "minimal": "Sub Modifier(ByRef x As Integer) : x = x + 10 : End Sub",
    "complete": "Public Sub Incrementer(ByRef val As Integer)\n    val = val + 10\nEnd Sub\n\nPublic Sub Main()\n    Dim x As Integer\n    x = 10\n    Incrementer x\n    Debug.Print x ' 20\nEnd Sub",
    "best_practices": "Inscrire systématiquement 'ByVal' devant chaque paramètre qui ne doit pas être modifié.",
    "pitfalls": "En VBA, le passage d'argument est 'ByRef' par défaut si aucun mot-clé n'est indiqué.",
    "notes": "Le passage par référence 'ByRef' permet de modifier la valeur de la variable d'origine."
  },
  "poo_classes_01": {
    "minimal": "' Dans un Module de Classe nomme 'Personne'\nPrivate pAge As Integer",
    "complete": "' Fichier : Personne.cls\nPrivate pNom As String\n\nPublic Property Get Nom() As String\n    Nom = pNom\nEnd Property\n\nPublic Property Let Nom(Value As String)\n    pNom = Value\nEnd Property",
    "best_practices": "Séparer clairement les accesseurs 'Property Get' et les mutateurs 'Property Let' (ou 'Set' pour un objet).",
    "pitfalls": "Essayer de déclarer un constructeur prenant des arguments (impossible en VBA).",
    "notes": "Les classes doivent obligatoirement résider dans des fichiers séparés '.cls' (Modules de classe)."
  },
  "poo_polymorphism_02": {
    "minimal": "Implements IAnimal",
    "complete": "' Dans le module de classe Chien.cls\nImplements IAnimal\n\nPrivate Sub IAnimal_Crier()\n    MsgBox \"Wouf!\"\nEnd Sub",
    "best_practices": "Définir des interfaces pures dans des modules de classe indépendants.",
    "pitfalls": "L'héritage de classes n'est pas supporté (pas de mot-clé 'Inherits').",
    "notes": "Seule l'implémentation d'interfaces via 'Implements' est possible."
  },
  "err_exceptions_01": {
    "minimal": "On Error GoTo GestionErreur",
    "complete": "Public Sub TesterErreur()\n    On Error GoTo ErreurHandler\n    Dim x As Long\n    x = 1 / 0\n    Exit Sub\nErreurHandler:\n    Debug.Print \"Erreur : \" & Err.Description\nEnd Sub",
    "best_practices": "Placer une instruction 'Exit Sub' juste avant le label de gestion d'erreur.",
    "pitfalls": "Utiliser 'On Error Resume Next' à l'aveugle, ce qui masque toutes les erreurs sans les résoudre.",
    "notes": "Utilise le mécanisme de déroutement historique 'On Error GoTo'."
  },
  "gen_generics_01": {
    "minimal": "' Utiliser le type Variant ou des Collections pour la généricité.",
    "complete": "Public Sub TraiterGeneric()\n    Dim col As New Collection\n    col.Add 100\n    col.Add \"Texte\"\n    Debug.Print col.Item(1) & \" - \" & col.Item(2)\nEnd Sub",
    "best_practices": "Employer des objets Collection ou Scripting.Dictionary pour stocker des types variables.",
    "pitfalls": "Le langage VBA ne possède aucune forme de généricité native (pas de templates ni de generics).",
    "notes": "La généricité est simulée par l'usage du type universel 'Variant'."
  },
  "conc_async_02": {
    "minimal": "Application.OnTime Now + TimeValue(\"00:00:01\"), \"MaSub\"",
    "complete": "Public Sub LancerMinuteur()\n    ' Diffère l'exécution d'une macro de manière non-bloquante sous Excel\n    Application.OnTime Now + TimeValue(\"00:00:01\"), \"MiseAJour\"\nEnd Sub\n\nPublic Sub MiseAJour()\n    Debug.Print \"Exécuté en différé\"\nEnd Sub",
    "best_practices": "Exploiter 'Application.OnTime' pour libérer la main à l'interface d'Excel pendant un traitement.",
    "pitfalls": "VBA est fondamentalement mono-thread et synchrone.",
    "notes": "L'asynchronisme natif ou le multithread n'est pas supporté directement."
  },
  "struct_maps_01": {
    "minimal": "Set dict = CreateObject(\"Scripting.Dictionary\")",
    "complete": "Public Sub TesterDictionary()\n    Dim dict As Object\n    Set dict = CreateObject(\"Scripting.Dictionary\")\n    dict.Add \"Café\", 1.5\n    If dict.Exists(\"Café\") Then\n        Debug.Print dict.Item(\"Café\") & \"€\"\n    End If\nEnd Sub",
    "best_practices": "Utiliser l'objet 'Scripting.Dictionary' (bibliothèque Microsoft Scripting Runtime) plutôt qu'une Collection.",
    "pitfalls": "Essayer d'ajouter une clé déjà existante dans un Dictionary déclenche une erreur d'exécution.",
    "notes": "La structure 'Dictionary' propose un accès clé-valeur avec une recherche rapide."
  },
  "struct_strings_02": {
    "minimal": "s = \"Hello \" & nom",
    "complete": "Public Sub TraiterChaine()\n    Dim nom As String\n    Dim msg As String\n    nom = \"VBA\"\n    msg = \"Langage : \" & UCase(nom)\n    Debug.Print msg\nEnd Sub",
    "best_practices": "Utiliser l'opérateur commerciale '&' pour réaliser des concaténations de chaînes.",
    "pitfalls": "Utiliser l'opérateur '+' pour concaténer deux chaînes, ce qui peut provoquer des erreurs de conversion si l'une des variables est numérique.",
    "notes": "Fournit une bibliothèque standard de manipulation de chaînes (Mid, Left, Right, InStr)."
  }
};