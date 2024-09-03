// MENU ATIVO (ATIVAR LINKS DO MENU)

// Primeiro passo criar constante e armazenar a busca pelos links.
const links = document.querySelectorAll(".header-menu a");

// Terceiro passo criar a função
function ativarLink(link) {
  // Metodo para encontar o link ativo do URL da pagina.
  const url = location.href;

  // Metodo para encontar o link do HTML
  const href = link.href;

  // Metodo para verificar se o URL ativo inclue no href do link <a>.
  if (url.includes(href)) {
    // "SE" incluir adicionar uma classe com o nome de ativo no link e com o CSS adicionar a mudança que quero fazer que é adicionar um sublinhado a 100% quando o link estiver ativo. O css foi adicionado na pasta global arquivo header.
    link.classList.add("ativo");
  }
}

// Segundo passo ativar uma função para cada um dos links.
links.forEach(ativarLink);
// Ao usar a constante de links com forEach eu estou buscando cada link individual. E quando eu estou ativando uma função coloco link em singular porque a funcção esta falando com cada elemento individualmente.

// PARAMETROS URL (ATIVAR ITENS DO ORCAMENTO)

const parametros = new URLSearchParams(location.search); // 1° PASSO: Location.search localiza o url contendo os paramentros de ? para frente. ex: "?tipo=bikcraft&produto=magic".
// A função ou classe new URLSearchParams(), pega a location search e extrai somente os elementos necessarios e coloca em uma lista. ex: bikcraft, magic.

function ativarProduto(parametroX) { // 3° PASSO: A função ativarProduto tem como argumento cada elemento de "parametros" (ex: bikcraft, magic) vou chamar esse parametro de parametrox. 
  const elemento = document.getElementById(parametroX); // 4° PASSO Essa função vai procurar pela id o elemento com o mesmo nome que localizado e que esta sendo disponibilizado sem vermos em "parametroX". 

  if (elemento) { // 5° PASSO: "SE" o elemento existir.
    elemento.checked = true; // 6° PASSO: Vamos marcar o elemento. FIM!!!!!
  }
}

parametros.forEach(ativarProduto); // 2° PASSO Uso paramentros.forEach para aplicar a função em cada elemento encontrado pela função "new URLSearchParams(location.search)".


// PERGUNTAS FREQUENTES 

const perguntas = document.querySelectorAll('.perguntas button'); // 1° PASSO: Selecionar todos os botões dentro da classe pergutas.

function ativarPergunta(evento){ // 4° PASSO: Aqui vou dizer o que esse evento vai fazer.
  const pergunta = evento.currentTarget; // Primeiro: Vou colocar em uma constante o evento atual.
  const controls = pergunta.getAttribute('aria-controls'); // Segundo: Vou colocar em uma constante o atributo aria-control da pergunta atual (vou suar a constante "pergunta") que estabeleci no html e que me da o número da pergunta exato. Ex: "Pergunta1"
  const resposta = document.getElementById(controls); // Terceiro: Vou usar a constante "controls" que fiz anteriormente para encontrar um elemento pela Id. No caso os elementos que tem a id igual o aria-controls são as minhas respostas para as minhas perguntas.

  resposta.classList.toggle('ativa'); // Quarto: Para cada resposta vou alternar em adicionar e remover a classe 'ativa'.
  const ativa = resposta.classList.contains('ativa'); // Sexto: Vou verificar se a classe ativa existe em resposta usando este metodo. FI!!!!!M
  pergunta.setAttribute("aria-expanded", ativa); // Quinto: Para cada pergunta vou trocar o atributo aria-expanded. Para isso vou usar o resultado boolean da resposta verificando se ela contém a classe ativa ou não. O resultado é em boolean mas o .setAttribule() converte ele automaticamente para string. 
}

function eventosPerguntas(pergunta){ // 3° PASSO: para cada pergunta ou botão específico eu irei criar um evento em que ao clicar eu irei ativar uma função.
pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas); // 2° PASSO: Criar um evento para todas as perguntas que são botões. 
