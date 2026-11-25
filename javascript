const visorAtual = document.getElementById('visorAtual');
const visorAntigo = document.getElementById('visorAntigo');

document.querySelectorAll('.botao').forEach(botao => {
  botao.addEventListener('click', () => {
    const texto = botao.innerText;

    if (texto === 'C') {
      visorAtual.innerText = '';
      visorAntigo.innerText = '';
    } else if (texto === '=') {
      visorAntigo.innerText = visorAtual.innerText;
      try {
        visorAtual.innerText = eval(visorAtual.innerText);
      } catch {
        visorAtual.innerText = 'Erro';
      }
    } else {
      visorAtual.innerText += texto;
    }
  });
});
