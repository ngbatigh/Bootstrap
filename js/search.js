// js/search.js
window.CompIde = window.CompIde || {};
CompIde.Search = {
    renderTree(searchQuery = '') {
        const treeContainer = document.getElementById('concepts-tree');
        treeContainer.innerHTML = '';
        const chapters = {};
        const q = searchQuery.toLowerCase();

        CompIde.data.forEach(concept => {
            if (q && !concept.name.toLowerCase().includes(q) && !concept.description.toLowerCase().includes(q)) {
                return;
            }
            if (!chapters[concept.chapter]) chapters[concept.chapter] = [];
            chapters[concept.chapter].push(concept);
        });

        for (const [chapter, concepts] of Object.entries(chapters)) {
            const chapterDiv = document.createElement('div');
            chapterDiv.innerHTML = `<h4 style="margin: 15px 0 5px 0; color: var(--accent-color); border-bottom: 1px solid var(--panel-border); padding-bottom: 3px;">📂 ${chapter}</h4>`;
            
            const listUl = document.createElement('ul');
            listUl.style.listStyleType = 'none';
            listUl.style.paddingLeft = '10px';
            listUl.style.margin = '0';

            concepts.forEach(concept => {
                const itemLi = document.createElement('li');
                itemLi.className = 'concept-item';
                itemLi.style.padding = '5px 0';
                itemLi.style.cursor = 'pointer';
                itemLi.style.fontSize = '14px';
                itemLi.innerText = `📄 ${concept.name}`;
                
                if (concept.id === CompIde.currentConceptId) {
                    itemLi.style.fontWeight = 'bold';
                    itemLi.style.color = 'var(--accent-color)';
                }

                itemLi.onclick = () => CompIde.App.selectConcept(concept.id);
                listUl.appendChild(itemLi);
            });

            chapterDiv.appendChild(listUl);
            treeContainer.appendChild(chapterDiv);
        }

        if (treeContainer.innerHTML === '') {
            treeContainer.innerHTML = '<p style="font-size:12px; color:#888;">Aucun résultat trouvé.</p>';
        }
    }
};