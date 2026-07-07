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
        this.fillCode('code-lang-1', 'cpp', concept);
        this.fillCode('code-lang-2', lang2, concept);
        this.fillCode('code-lang-3', lang3, concept);

        // Relancer la coloration syntaxique de Prism
        if (window.Prism) {
            Prism.highlightAllUnder(document.getElementById('center-panel'));
        }
        
        // Mise à jour des documentations par langage
        this.fillDocumentation('doc-lang-1', 'cpp', concept);
        this.fillDocumentation('doc-lang-2', lang2, concept);
        this.fillDocumentation('doc-lang-3', lang3, concept);
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

    fillDocumentation(elementId, langKey, concept) {
        const container = document.getElementById(elementId);
        if (!container) return;

        let html = '';

        // Description du concept (affichée une seule fois, mais incluse dans chaque panneau)
        html += `<div style="font-size: 13px; line-height: 1.5; color: var(--text-main); margin-bottom: 15px;">
                    ${concept.description}
                 </div>`;

        // Alert-boxes spécifiques au langage
        if (concept.languages && concept.languages[langKey]) {
            const langData = concept.languages[langKey];
            if (langData.notes) {
                html += `<div class="alert-box alert-note">
                            <strong>ℹ️ Remarques ${this.getLangLabel(langKey)} :</strong><br>${langData.notes}
                         </div>`;
            }
            if (langData.best_practices) {
                html += `<div class="alert-box alert-practice">
                            <strong>✅ Bonnes pratiques :</strong><br>${langData.best_practices}
                         </div>`;
            }
            if (langData.pitfalls) {
                html += `<div class="alert-box alert-pitfall">
                            <strong>⚠️ Pièges fréquents :</strong><br>${langData.pitfalls}
                         </div>`;
            }
        }

        // Concepts liés (affichés dans chaque panneau de documentation)
        if (concept.related_concepts && concept.related_concepts.length > 0) {
            html += `<div style="margin-top: 20px; border-top: 1px solid var(--panel-border); padding-top: 12px;">
                        <strong style="font-size: 12px; color: var(--text-muted);">🔗 Concepts liés :</strong>
                        <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 8px;">`;
            concept.related_concepts.forEach(relId => {
                const targetConcept = CompIde.data.find(c => c.id === relId);
                if (targetConcept) {
                    html += `<a href="#" style="color: var(--accent-color); text-decoration: none; font-size: 12px;" 
                                onclick="CompIde.App.selectConcept('${targetConcept.id}'); return false;">👉 ${targetConcept.name}</a>`;
                }
            });
            html += `    </div>
                     </div>`;
        }

        container.innerHTML = html;
    },

    getLangLabel(langKey) {
        const labels = { cpp: 'C++', csharp: 'C#', python: 'Python' };
        return labels[langKey] || langKey;
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