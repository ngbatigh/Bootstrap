const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataDir = path.join(__dirname, '../data');
const outDir = path.join(dataDir, 'concepts');

console.log("Démarrage de la fusion des concepts...");

// Initialisation d'un environnement virtuel simulant le navigateur
const sandbox = { window: {} };
sandbox.window.CompIde = {};
sandbox.CompIde = sandbox.window.CompIde;

vm.createContext(sandbox);

// Fonction utilitaire pour charger et évaluer un fichier JS
function loadScript(filename) {
    try {
        const filePath = path.join(dataDir, filename);
        if (fs.existsSync(filePath)) {
            const code = fs.readFileSync(filePath, 'utf8');
            vm.runInContext(code, sandbox);
            console.log(`[OK] Chargement de ${filename}`);
        } else {
            console.warn(`[ATTENTION] Fichier introuvable : ${filename}`);
        }
    } catch (err) {
        console.error(`[ERREUR] Impossible d'évaluer ${filename}:`, err);
    }
}

// 1. Charger les métadonnées
loadScript('metadata.js');

// 2. Charger les langages
const langs = ['c', 'cpp', 'csharp', 'python', 'java', 'javascript', 'typescript', 'php', 'vb', 'vba'];
langs.forEach(lang => loadScript(`${lang}.js`));

if (!sandbox.CompIde.metadata) {
    console.error("Erreur critique : metadata.js n'a pas pu être chargé correctement.");
    process.exit(1);
}

// 3. Fusion des données (Logique identique à data/concepts.js)
const unifiedData = sandbox.CompIde.metadata.map(meta => {
    const concept = { ...meta, languages: {} };
    
    langs.forEach(lang => {
        const dataContainer = sandbox.CompIde[`${lang}Data`];
        if (dataContainer && dataContainer[meta.id]) {
            concept.languages[lang] = dataContainer[meta.id];
        }
    });

    return concept;
});

// 4. Création du dossier de destination s'il n'existe pas
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

// 5. Écriture du fichier final en dur
const outputContent = `// Fichier généré automatiquement (en dur) - Contient l'ensemble des concepts fusionnés
window.CompIde = window.CompIde || {};
window.CompIde.data = ${JSON.stringify(unifiedData, null, 2)};
`;

const outputPath = path.join(outDir, 'concepts.js');
fs.writeFileSync(outputPath, outputContent, 'utf8');

console.log(`\n✅ SUCCÈS ! Fichier généré avec succès : ${outputPath}`);
console.log(`Le fichier contient ${unifiedData.length} concepts fusionnés.`);
