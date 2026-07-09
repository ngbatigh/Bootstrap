// data/concepts.js
window.CompIde = window.CompIde || {};

CompIde.data = CompIde.metadata.map(meta => {
  const concept = { ...meta, languages: {} };
  
  const langs = ['c', 'cpp', 'csharp', 'python', 'java', 'javascript', 'typescript', 'php', 'vb', 'vba'];
  
  langs.forEach(lang => {
    const dataContainer = CompIde[`${lang}Data`];
    if (dataContainer && dataContainer[meta.id]) {
      concept.languages[lang] = dataContainer[meta.id];
    }
  });

  return concept;
});