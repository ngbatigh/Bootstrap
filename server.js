const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// Permet au serveur (Render, Heroku, etc.) d'injecter son propre port, ou 3000 par défaut
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');

// Types MIME basiques pour servir les fichiers statiques
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml'
};

const LANGUAGES = ['c', 'cpp', 'csharp', 'java', 'javascript', 'php', 'python', 'typescript', 'vb', 'vba'];

// Fusionne les JSON pour l'API
async function getUnifiedData() {
    try {
        // 1. Lire metadata.json
        const metadataRaw = await fs.readFile(path.join(DATA_DIR, 'metadata.json'), 'utf8');
        const metadata = JSON.parse(metadataRaw);

        // 2. Lire les fichiers de chaque langage en parallèle
        const langData = {};
        await Promise.all(LANGUAGES.map(async (lang) => {
            try {
                const raw = await fs.readFile(path.join(DATA_DIR, `${lang}.json`), 'utf8');
                langData[lang] = JSON.parse(raw);
            } catch (err) {
                // Si le fichier manque, on initialise un objet vide
                langData[lang] = {};
            }
        }));

        // 3. Reconstruire l'objet
        const unifiedData = metadata.map(concept => {
            const conceptId = concept.id;
            const conceptLanguages = {};
            
            for (const lang of LANGUAGES) {
                conceptLanguages[lang] = langData[lang][conceptId] || {};
            }

            return {
                ...concept,
                languages: conceptLanguages
            };
        });

        return unifiedData;
    } catch (error) {
        console.error("Erreur de traitement des données JSON :", error);
        throw error;
    }
}

// Création du serveur HTTP
const server = http.createServer(async (req, res) => {
    // Gestion de l'API REST
    if (req.url === '/api/data' && req.method === 'GET') {
        try {
            const data = await getUnifiedData();
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify(data));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Erreur Serveur', message: err.message }));
        }
        return;
    }

    // Routage statique basique (SPA)
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    try {
        const content = await fs.readFile(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
    } catch (err) {
        if (err.code === 'ENOENT') {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>', 'utf-8');
        } else {
            res.writeHead(500);
            res.end(`Erreur serveur : ${err.code}`);
        }
    }
});

server.listen(PORT, () => {
    console.log(`🚀 Serveur Node.js démarré !`);
    console.log(`👉 Ouvrez http://localhost:${PORT} dans votre navigateur.`);
    console.log(`📦 L'API est disponible sur http://localhost:${PORT}/api/data`);
});
