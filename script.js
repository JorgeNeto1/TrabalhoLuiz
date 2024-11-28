// Função para mostrar/ocultar a história ao clicar no botão
function toggleHistory(gameId) {
    const historyDiv = document.getElementById(gameId);
    if (historyDiv.style.display === 'block') {
      historyDiv.style.display = 'none'; // Se já estiver visível, esconde
    } else {
      historyDiv.style.display = 'block'; // Caso contrário, mostra a história
    }
  }
  function voltarPaginaPrincipal1() 
{
    window.history.back() 
}
  