var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;


function preload(){
 
  console.log("load")
  
}

function setup(){
  
  createCanvas(400,400);
path=createSprite(200,200,20,20)
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

boy = createSprite(200,100,10,10)
//adicione uma animação de corrida para ele
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
