// js/compare.js
window.CompIde = window.CompIde || {};

CompIde.Compare = {
    update() {
        if (!CompIde.currentConceptId) return;
        
        // Récupération du concept actif
        const concept = CompIde.data.find(c => c.id === CompIde.currentConceptId);
        if (!concept) return;

        // Mise à jour des titres et catégories
        document.getElementById('concept-title').innerText = concept.name;
        document.getElementById('concept-category').innerText = concept.category;

        // Récupération des langages sélectionnés dans les menus déroulants
        const lang2 = document.getElementById('select-lang-2').value;
        const lang3 = document.getElementById('select-lang-3').value;

        // Remplissage des trois blocs de code
        this.fillCode('code-cpp', 'cpp', concept);
        this.fillCode('code-lang-2', lang2, concept);
        this.fillCode('code-lang-3', lang3, concept);

        // Relancer la coloration syntaxique de Prism
        if (window.Prism) {
            Prism.highlightAllUnder(document.getElementById('center-panel'));
        }
        
        // Mise à jour du panneau de documentation à droite
        CompIde.UI.updateDocumentation(concept);
    },

    fillCode(elementId, langKey, concept) {
        const preEl = document.getElementById(elementId);
        if (!preEl) return;

        let codeEl = preEl.querySelector('code');
        if (!codeEl) {
            codeEl = document.createElement('code');
            preEl.appendChild(codeEl);
        }

        // Réinitialisation des classes pour Prism
        codeEl.className = '';
        codeEl.classList.add(`language-${langKey}`);

        // Injection du code selon le scope choisi (minimal ou complete)
        if (concept.languages && concept.languages[langKey]) {
            const scope = CompIde.UI.codeScope || 'minimal';
            codeEl.textContent = concept.languages[langKey][scope] || concept.languages[langKey].minimal || "// Code non disponible";
        } else {
            codeEl.textContent = `// Pas d'équivalent documenté pour : ${langKey}`;
        }
        
        // Application du niveau de zoom de la police
        if (CompIde.UI && CompIde.UI.applyZoom) {
            CompIde.UI.applyZoom();
        }
    },

    copy(elementId, event) {
        const preEl = document.getElementById(elementId);
        if (!preEl) return;
        
        const codeEl = preEl.querySelector('code');
        const textToCopy = codeEl ? codeEl.textContent : preEl.innerText;

        navigator.clipboard.writeText(textToCopy).then(() => {
            const btn = event.target;
            const originalText = btn.innerText;
            btn.innerText = "Copié !";
            btn.style.color = "#4caf50";
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.color = "var(--accent-color)";
            }, 1500);
        }).catch(err => {
            console.error("Impossible de copier le code : ", err);
        });
    }
};