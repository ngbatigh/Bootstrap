const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataDir = path.join(__dirname, '../data');

// Fichiers à migrer
const filesToMigrate = [
    { src: 'metadata.js', dest: 'metadata.json', varName: 'CompIde.metadata' },
    { src: 'c.js', dest: 'c.json', varName: 'CompIde.cData' },
    { src: 'cpp.js', dest: 'cpp.json', varName: 'CompIde.cppData' },
    { src: 'csharp.js', dest: 'csharp.json', varName: 'CompIde.csharpData' },
    { src: 'java.js', dest: 'java.json', varName: 'CompIde.javaData' },
    { src: 'javascript.js', dest: 'javascript.json', varName: 'CompIde.javascriptData' },
    { src: 'typescript.js', dest: 'typescript.json', varName: 'CompIde.typescriptData' },
    { src: 'php.js', dest: 'php.json', varName: 'CompIde.phpData' },
    { src: 'python.js', dest: 'python.json', varName: 'CompIde.pythonData' },
    { src: 'vb.js', dest: 'vb.json', varName: 'CompIde.vbData' },
    { src: 'vba.js', dest: 'vba.json', varName: 'CompIde.vbaData' }
];

console.log('Début de la migration des fichiers .js vers .json...');

filesToMigrate.forEach(fileInfo => {
    const srcPath = path.join(dataDir, fileInfo.src);
    const destPath = path.join(dataDir, fileInfo.dest);

    if (fs.existsSync(srcPath)) {
        try {
            const content = fs.readFileSync(srcPath, 'utf8');
            
            // Création d'un environnement d'exécution (sandbox)
            const sandbox = { window: { CompIde: {} } };
            sandbox.CompIde = sandbox.window.CompIde;

            // Exécution du code pour extraire la variable
            vm.createContext(sandbox);
            vm.runInContext(content, sandbox);

            // Extraction de l'objet depuis la variable spécifiée
            // Par exemple: CompIde.metadata -> on cherche dans sandbox.CompIde.metadata
            const propName = fileInfo.varName.split('.')[1]; // 'metadata', 'cData', etc.
            const extractedData = sandbox.CompIde[propName];

            if (extractedData) {
                fs.writeFileSync(destPath, JSON.stringify(extractedData, null, 2), 'utf8');
                console.log(`✅ ${fileInfo.src} -> ${fileInfo.dest}`);
            } else {
                console.error(`❌ Propriété non trouvée pour ${fileInfo.src}`);
            }

        } catch (error) {
            console.error(`❌ Erreur lors du traitement de ${fileInfo.src}:`, error.message);
        }
    } else {
        console.warn(`⚠️ Fichier source introuvable: ${fileInfo.src}`);
    }
});

console.log('Migration terminée !');
