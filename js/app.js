// js/app.js
window.CompIde = window.CompIde || {};

CompIde.App = {
    currentConceptId: null,

    buildDatabase() {
        // On vérifie que les métadonnées sont bien chargées globalement
        if (CompIde.metadata) {
            CompIde.data = CompIde.metadata.map(concept => {
                return {
                    ...concept,
                    languages: {
                        cpp: (CompIde.cppData) ? CompIde.cppData[concept.id] : {},
                        csharp: (CompIde.csharpData) ? CompIde.csharpData[concept.id] : {},
                        python: (CompIde.pythonData) ? CompIde.pythonData[concept.id] : {}
                    }
                };
            });
        } else {
            console.error("Erreur : Les métadonnées globales n'ont pas été trouvées.");
            CompIde.data = [];
        }
    },

    init() {
        CompIde.UI.init();

        const searchBox = document.getElementById('search-box');
        if (searchBox) {
            searchBox.addEventListener('input', (e) => {
                CompIde.Search.renderTree(e.target.value);
            });
        }

        // Fusionne les fichiers JS chargés
        this.buildDatabase();

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

document.addEventListener("DOMContentLoaded", () => {
    CompIde.App.init();
});