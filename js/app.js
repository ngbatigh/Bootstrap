// js/app.js
window.CompIde = window.CompIde || {};

CompIde.App = {
    currentConceptId: null,

    // C'est ici que la magie de la fusion JSON opère
    async loadData() {
        try {
            // 1. Chargement asynchrone et simultané de tous les fichiers JSON
            const [metaRes, cppRes, csharpRes, pythonRes] = await Promise.all([
                fetch('data/metadata.json'),
                fetch('data/cpp.json'),
                fetch('data/csharp.json'),
                fetch('data/python.json')
            ]);

            const metadata = await metaRes.json();
            const cppData = await cppRes.json();
            const csharpData = await csharpRes.json();
            const pythonData = await pythonRes.json();

            // 2. Fusion dans le format unique CompIde.data attendu par le reste du code
            CompIde.data = metadata.map(concept => {
                return {
                    ...concept,
                    languages: {
                        cpp: cppData[concept.id] || {},
                        csharp: csharpData[concept.id] || {},
                        python: pythonData[concept.id] || {}
                    }
                };
            });

        } catch (error) {
            console.error("Erreur critique lors du chargement des fichiers JSON :", error);
            CompIde.data = [];
        }
    },

    async init() {
        // 1. Initialiser l'interface utilisateur (boutons, zoom)
        CompIde.UI.init();

        // 2. Écouteur de la barre de recherche textuelle
        const searchBox = document.getElementById('search-box');
        if (searchBox) {
            searchBox.addEventListener('input', (e) => {
                CompIde.Search.renderTree(e.target.value);
            });
        }

        // 3. Charger les fichiers JSON avant d'afficher quoi que ce soit
        await this.loadData();

        // 4. Sélectionner le premier concept et dessiner l'arbre
        if (CompIde.data && CompIde.data.length > 0) {
            this.selectConcept(CompIde.data[0].id);
        } else {
            CompIde.Search.renderTree();
        }
    },

    selectConcept(conceptId) {
        CompIde.currentConceptId = conceptId;
        
        if (CompIde.Compare && CompIde.Compare.update) {
            CompIde.Compare.update();
        }

        if (CompIde.Search && CompIde.Search.renderTree) {
            const searchBox = document.getElementById('search-box');
            const currentFilter = searchBox ? searchBox.value : "";
            CompIde.Search.renderTree(currentFilter);
        }
    }
};

// Lancement de l'application
document.addEventListener("DOMContentLoaded", () => {
    CompIde.App.init();
});