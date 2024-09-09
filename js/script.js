// MENU ATIVO (ATIVAR LINKS DO MENU)

// 1° PASSSO: Criar constante e armazenar a busca pelos links.
const links = document.querySelectorAll(".header-menu a");

// 3° PASSO: Criar a função
function ativarLink(link) {
  // Primeiro: Metodo para encontar o link ativo do URL da pagina.
  const url = location.href;

  // Segundo: Metodo para encontar o link do HTML
  const href = link.href;

  // Quarto: Metodo para verificar se o URL ativo inclue no href do link <a>.
  if (url.includes(href)) {
    // "SE" incluir adicionar uma classe com o nome de ativo no link e com o CSS adicionar a mudança que quero fazer que é adicionar um sublinhado a 100% quando o link estiver ativo. O css foi adicionado na pasta global arquivo header.
    link.classList.add("ativo");
  }
}

// 2° PASSO: Ativar uma função para cada um dos links.
links.forEach(ativarLink);
// Ao usar a constante de links com forEach eu estou buscando cada link individual. E quando eu estou ativando uma função coloco link em singular porque a funcção esta falando com cada elemento individualmente.






// PARAMETROS URL (ATIVAR ITENS DO ORCAMENTO)

// 1° PASSO: Location.search localiza o url contendo os paramentros de ? para frente. ex: "?tipo=bikcraft&produto=magic".
const parametros = new URLSearchParams(location.search); 
// A função ou classe new URLSearchParams(), pega a location search e extrai somente os elementos necessarios e coloca em uma lista. ex: bikcraft, magic.

// 3° PASSO: A função ativarProduto tem como argumento cada elemento de "parametros" (ex: bikcraft, magic) vou chamar esse parametro de parametrox. 
function ativarProduto(parametroX) { 
  // 4° PASSO Essa função vai procurar pela id o elemento com o mesmo nome que localizado e que esta sendo disponibilizado sem vermos em "parametroX". 
  const elemento = document.getElementById(parametroX); 

  // 5° PASSO: "SE" o elemento existir.
  if (elemento) { 
    // 6° PASSO: Vamos marcar o elemento. FIM!!!!!
    elemento.checked = true; 
  }
}

// 2° PASSO: Uso paramentros.forEach para aplicar a função em cada elemento encontrado pela função "new URLSearchParams(location.search)".
parametros.forEach(ativarProduto); 






// PERGUNTAS FREQUENTES 

// 1° PASSO: Selecionar todos os botões dentro da classe pergutas.
const perguntas = document.querySelectorAll('.perguntas button'); 


// 4° PASSO: Aqui vou dizer o que esse evento vai fazer.
function ativarPergunta(evento){ 
  // Primeiro: Vou colocar em uma constante o evento atual.
  const pergunta = evento.currentTarget; 
  // Segundo: Vou colocar em uma constante o atributo aria-control da pergunta atual (vou suar a constante "pergunta") que estabeleci no html e que me da o número da pergunta exato. Ex: "Pergunta1"
  const controls = pergunta.getAttribute('aria-controls'); 
  // Terceiro: Vou usar a constante "controls" que fiz anteriormente para encontrar um elemento pela Id. No caso os elementos que tem a id igual o aria-controls são as minhas respostas para as minhas perguntas.
  const resposta = document.getElementById(controls); 

  // Quarto: Para cada resposta vou alternar em adicionar e remover a classe 'ativa'.
  resposta.classList.toggle('ativa'); 
  // Sexto: Vou verificar se a classe ativa existe em resposta usando este metodo. FI!!!!!M
  const ativa = resposta.classList.contains('ativa'); 
  // Quinto: Para cada pergunta vou trocar o atributo aria-expanded. Para isso vou usar o resultado boolean da resposta verificando se ela contém a classe ativa ou não. O resultado é em boolean mas o .setAttribule() converte ele automaticamente para string. 
  pergunta.setAttribute("aria-expanded", ativa); 
}

// 3° PASSO: para cada pergunta ou botão específico eu irei criar um evento em que ao clicar eu irei ativar uma função.
function eventosPerguntas(pergunta){ 
pergunta.addEventListener('click', ativarPergunta);
}

// 2° PASSO: Criar um evento para todas as perguntas que são botões. 
perguntas.forEach(eventosPerguntas); 





// GALERIA IMAGENS (GALERIA DE BICICLETAS)

// 1° PASSO: Selecionar a lista de itens e o container da galeria. 
const galeria = document.querySelectorAll('.bicicleta-imagens img'); 
const galeriaContainer = document.querySelector('.bicicleta-imagens')


// 4° PASSO: Criar a funcão para definir o que o evento irá fazer.
function trocarImagem(evento) {
  const img = evento.currentTarget;
  const media = matchMedia('(min-width:1000px)').matches; // Com esse metodo ativo a troca de imagens na galeria so ocorre acima de 1000px.
  if(media) {
    galeriaContainer.prepend(img);
} 
  // método prepend() faz com que qualquer elemento mude para primeira posição.
  
}


// 3° PASSO: Criar a função para adicionar o evento.
function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem);
}

// 2° PASSO: Criar um evento de clique.
galeria.forEach(eventosGaleria);


// ANIMACAO
if(window.SimpleAnime){
  new SimpleAnime();
}




