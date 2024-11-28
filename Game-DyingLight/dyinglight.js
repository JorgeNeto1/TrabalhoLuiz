const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active-tab-content'));

    tab.classList.add('active');
    const contentId = tab.id.replace('tab', 'content');
    document.getElementById(contentId).classList.add('active-tab-content');
  });
});

document.querySelector('.tab').click(); // Abre a primeira aba automaticamente
