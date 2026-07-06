// js/ui.js
window.CompIde = window.CompIde || {};
CompIde.UI = {
    codeFontSize: 13,
    codeScope: 'minimal',

init() {
        const modeBtn = document.querySelector('.toolbar button[onclick="toggleDarkMode()"]');
        if (modeBtn) {
            modeBtn.onclick = () => {
                const isLight = document.body.classList.toggle('light-mode');
                
                // Bascule dynamique des feuilles de style Prism
                document.getElementById('prism-theme-light').disabled = !isLight;
                document.getElementById('prism-theme-dark').disabled = isLight;
                
                CompIde.Compare.update(); 
            };
        }
        this.applyZoom();
    },

    changeZoom(direction) {
        this.codeFontSize = Math.max(10, Math.min(24, this.codeFontSize + direction));
        this.applyZoom();
    },

    applyZoom() {
        document.querySelectorAll('.code-block code').forEach(el => {
            el.style.setProperty('font-size', `${this.codeFontSize}px`, 'important');
            el.style.setProperty('line-height', '1.4', 'important');
        });
    },

    setScope(scope) {
        this.codeScope = scope;
        const btnMin = document.getElementById('btn-scope-minimal');
        const btnComp = document.getElementById('btn-scope-complete');
        
        if (scope === 'minimal') {
            btnMin.style.background = 'var(--accent-color)'; btnMin.style.color = '#fff';
            btnComp.style.background = 'transparent'; btnComp.style.color = 'var(--text-muted)';
        } else {
            btnComp.style.background = 'var(--accent-color)'; btnComp.style.color = '#fff';
            btnMin.style.background = 'transparent'; btnMin.style.color = 'var(--text-muted)';
        }
        
        CompIde.Compare.update();
    },

    updateDocumentation(concept) {
        const docContent = document.getElementById('doc-content');
        let docHTML = `<p style="font-size: 14px; line-height: 1.5; color: var(--text-main); margin-top: 0; margin-bottom: 20px;">${concept.description}</p>`;
        
        if (concept.languages && concept.languages.cpp) {
            const cpp = concept.languages.cpp;
            if (cpp.notes) {
                docHTML += `<div class="alert-box alert-note">
                                <strong>ℹ️ Remarques C++ :</strong><br>${cpp.notes}
                            </div>`;
            }
            if (cpp.best_practices) {
                docHTML += `<div class="alert-box alert-practice">
                                <strong>✅ Bonnes pratiques :</strong><br>${cpp.best_practices}
                            </div>`;
            }
            if (cpp.pitfalls) {
                docHTML += `<div class="alert-box alert-pitfall">
                                <strong>⚠️ Pièges fréquents :</strong><br>${cpp.pitfalls}
                            </div>`;
            }
        }

        if (concept.related_concepts && concept.related_concepts.length > 0) {
            docHTML += `<div style="margin-top: 25px; border-top: 1px solid var(--panel-border); padding-top: 15px;">
                            <strong style="font-size: 13px; color: var(--text-muted);">🔗 Concepts liés :</strong>
                            <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">`;
            
            concept.related_concepts.forEach(relId => {
                const targetConcept = CompIde.data.find(c => c.id === relId);
                if (targetConcept) {
                    docHTML += `<a href="#" style="color: var(--accent-color); text-decoration: none; font-size: 13px; font-weight: 500;" onclick="CompIde.App.selectConcept('${targetConcept.id}'); return false;">👉 ${targetConcept.name}</a>`;
                }
            });
            docHTML += `    </div>
                        </div>`;
        }
        
        docContent.innerHTML = docHTML;
    }
};

window.changeCodeZoom = (dir) => CompIde.UI.changeZoom(dir);
window.setCodeScope = (scope) => CompIde.UI.setScope(scope);