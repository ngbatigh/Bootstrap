const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');
const outputFile = path.join(dataDir, 'concepts.js');

const languages = ['c', 'cpp', 'csharp', 'java', 'javascript', 'php', 'python', 'typescript', 'vb', 'vba'];

try {
    // 1. Lire les métadonnées (qui définissent les concepts existants)
    const metadataPath = path.join(dataDir, 'metadata.json');
    const metadataRaw = fs.readFileSync(metadataPath, 'utf8');
    const metadata = JSON.parse(metadataRaw);

    // 2. Lire les données pour chaque langage
    const langData = {};
    for (const lang of languages) {
        const langPath = path.join(dataDir, `${lang}.json`);
        if (fs.existsSync(langPath)) {
            const raw = fs.readFileSync(langPath, 'utf8');
            langData[lang] = JSON.parse(raw);
        } else {
            console.warn(`Fichier manquant : ${lang}.json`);
            langData[lang] = {};
        }
    }

    // 3. Fusionner (construire CompIde.data)
    const unifiedData = metadata.map(concept => {
        const conceptLanguages = {};
        
        for (const lang of languages) {
            conceptLanguages[lang] = langData[lang][concept.id] || {};
        }

        return {
            ...concept,
            languages: conceptLanguages
        };
    });

    // 4. Écrire le fichier concepts.js
    const fileContent = `// Fichier généré automatiquement par scripts/build.js\n` +
                        `// Ne pas modifier manuellement. Modifiez les fichiers .json dans data/\n\n` +
                        `window.CompIde = window.CompIde || {};\n` +
                        `CompIde.data = ${JSON.stringify(unifiedData, null, 2)};\n`;

    fs.writeFileSync(outputFile, fileContent, 'utf8');
    console.log(`✅ Fichier ${outputFile} généré avec succès !`);

} catch (error) {
    console.error("❌ Erreur lors de la compilation des données :", error);
}
