//Variaveis de cor e posição
let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(800, 700);
  
  // background("white");variavel de cor da tela canvas
  //cor = "blue";variavel de cor do circulo
   background(color(100,70,15));// inserção de transparencia na cor com valores de 0 a 100
  
  //RGB é uma sigla para "Red, Green, Blue", que traduzido para português significa: Vermelho, Verde, Azul. Cada valor numérico se refere à quantidade de um pigmento.O random cria cores aleatórias
  cor = color(random(0,255), random(0,255), random(0,255));
 
  //variaveis de posição dos eixos
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}


function draw() {
  
  // circle(200,200,50);eixo x, eixo y e raio da circuferencia
  
  //Criação do circulo
  fill(cor);//cor de preenchimento ao circulo
  circle(posicaoHorizontal,posicaoVertical,60);
 
 //Condições para posição dinamica do circulo nos eixos
  
  if (mouseX < posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal - 1;
  }
  
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal + 1;
  }
  
  if (mouseY < posicaoVertical){
    posicaoVertical--;
  }
    
  if (mouseY > posicaoVertical){
    posicaoVertical++;
  }
  
  //Cria paramentro para mudar de cor do circulo sempre que precionamos o mause na tela.
  
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
    
}