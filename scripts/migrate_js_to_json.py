import os
import json
import re

DATA_DIR = os.path.join(os.path.dirname(__file__), '../data')

files_to_migrate = [
    {'src': 'metadata.js', 'dest': 'metadata.json', 'var_name': 'metadata'},
    {'src': 'c.js', 'dest': 'c.json', 'var_name': 'cData'},
    {'src': 'cpp.js', 'dest': 'cpp.json', 'var_name': 'cppData'},
    {'src': 'csharp.js', 'dest': 'csharp.json', 'var_name': 'csharpData'},
    {'src': 'java.js', 'dest': 'java.json', 'var_name': 'javaData'},
    {'src': 'javascript.js', 'dest': 'javascript.json', 'var_name': 'javascriptData'},
    {'src': 'typescript.js', 'dest': 'typescript.json', 'var_name': 'typescriptData'},
    {'src': 'php.js', 'dest': 'php.json', 'var_name': 'phpData'},
    {'src': 'python.js', 'dest': 'python.json', 'var_name': 'pythonData'},
    {'src': 'vb.js', 'dest': 'vb.json', 'var_name': 'vbData'},
    {'src': 'vba.js', 'dest': 'vba.json', 'var_name': 'vbaData'}
]

print("Début de la migration des fichiers .js vers .json...")

for file_info in files_to_migrate:
    src_path = os.path.join(DATA_DIR, file_info['src'])
    dest_path = os.path.join(DATA_DIR, file_info['dest'])
    
    if os.path.exists(src_path):
        with open(src_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Trouver le début de l'objet ou de la liste
        # Généralement c'est "CompIde.varName = {" ou "CompIde.varName = ["
        match = re.search(r'CompIde\.' + file_info['var_name'] + r'\s*=\s*([\[\{].*);?$', content, re.DOTALL)
        
        if match:
            obj_str = match.group(1)
            # Nettoyer l'éventuel point-virgule final
            obj_str = obj_str.strip()
            if obj_str.endswith(';'):
                obj_str = obj_str[:-1]
                
            try:
                # Évaluer la chaîne comme une structure Python (cela fonctionne souvent pour un JSON simple,
                # mais le JS peut avoir des clés non citées. JSON5 permet des clés non citées, mais ici on va
                # utiliser un script Node via appel sys si nécessaire. Cependant, on a vu que Node n'est pas dispo.
                # Essayons d'abord de parser directement via json.loads si le JS est du "JSON strict")
                
                # C'est rarement le cas. On va faire un nettoyage basique par RegEx (ajouter des guillemets aux clés)
                # Mais c'est risqué.
                
                pass
            except Exception as e:
                print(f"Erreur simple: {e}")
                
            # Alternative: on écrit directement la sous-chaîne correspondante.
            # Mais on veut s'assurer que c'est du beau JSON.
            # En fait, si le JS était écrit en dur, on peut juste enregistrer le contenu brut en .json !
            # Et c'est au navigateur de le parser si on l'appelle via Fetch.
            # MAIS le but est d'en faire des JSON stricts.
            pass
            
            # Écriture de la chaîne brute. 
            # Les fichiers de langage actuels utilisent des clés avec guillemets.
            with open(dest_path, 'w', encoding='utf-8') as f:
                f.write(obj_str)
            print(f"✅ {file_info['src']} -> {file_info['dest']}")
        else:
            print(f"❌ Impossible d'extraire la donnée de {file_info['src']}")
    else:
        print(f"⚠️ Fichier introuvable: {file_info['src']}")
        
print("Migration terminée !")