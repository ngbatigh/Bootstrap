// js/app.js
window.CompIde = window.CompIde || {};

CompIde.App = {
    currentConceptId: null,

    // Chargement asynchrone des données depuis l'API Node.js
    async loadData() {
        try {
            const response = await fetch('/api/data');
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            CompIde.data = await response.json();
            
            if (!CompIde.data || CompIde.data.length === 0) {
                console.error("L'API a retourné un tableau de données vide.");
            }
        } catch (error) {
            console.error("Erreur lors du chargement des données depuis /api/data:", error);
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

        // 3. Charger les données depuis le serveur Node
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