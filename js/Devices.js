document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.pnlContainer');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.style.display = 'none');
      tab.classList.add('active');
      const target = tab.getAttribute('data-tab');
      const panel = document.querySelector(`.pnlContainer[data-tab-content="${target}"]`);
      if (panel) panel.style.display = '';
    });
  });
});
