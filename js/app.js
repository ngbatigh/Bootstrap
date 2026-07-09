// js/app.js
window.CompIde = window.CompIde || {};

CompIde.App = {
    currentConceptId: null,

    // Vérification du chargement des données (effectué de manière synchrone via les balises script)
    loadData() {
        if (!CompIde.data || CompIde.data.length === 0) {
            console.error("Aucune donnée conceptuelle chargée.");
        }
    },

    init() {
        // 1. Initialiser l'interface utilisateur (boutons, zoom)
        CompIde.UI.init();

        // 2. Écouteur de la barre de recherche textuelle
        const searchBox = document.getElementById('search-box');
        if (searchBox) {
            searchBox.addEventListener('input', (e) => {
                CompIde.Search.renderTree(e.target.value);
            });
        }

        // 3. Vérifier que les données sont bien chargées
        this.loadData();

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