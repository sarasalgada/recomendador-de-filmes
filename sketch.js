

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Maria e João: O Conto das Bruxas";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Tainá - Uma Aventura na Amazônia";          
        } else{
         return "Como treinar seu dragão";
        }
      } else {
        if (gostaDeFantasia) {
          return "ilha de cachorros";
        } else {
          return "Homem-Aranha: Através do Aranhaverso";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de chihiro";
    } else {
      return "Memórias de Marnie";
    }
  }
}