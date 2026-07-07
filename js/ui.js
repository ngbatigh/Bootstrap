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
    }
};

window.changeCodeZoom = (dir) => CompIde.UI.changeZoom(dir);
window.setCodeScope = (scope) => CompIde.UI.setScope(scope);