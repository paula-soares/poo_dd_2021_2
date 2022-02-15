/// aqui a intenção é criar uma linha horizontal e vertical perfeitamente direcionadas e retas
//// repetindo a outra linha numa ordem inversa chegamos eim: 

/// line(0,random(height),width,random(height)); /// aqui random(height) se repete

/// line(random(width),0,random(width),height); /// aqui random(width) se repete 

/// nesse caso tanto o y2 random(height), quanto o x2 random(width) que se repetem, parece só uma repetição,
/// pra cumprir os 4 valores orbrigatórios em x1,y1 x2,y2. Porque só de definir um valor de x1 = 0 e o valor de x2 width
/// o valor de y1 random(height) a linha já iria assumir alturas variadas, não parecendo tão necessário o  y2, tanto que se repete.

function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(10)
  }
  
function draw() {
    
  ///  background(0);
    
stroke(0,255,0,500);
strokeWeight(5);
line(0,random(height),width,random(height));
  
stroke(0,0,0,500);
strokeWeight(5);
line(random(width),0,random(width),height)
    
  }

/// segundo a aula, substituiremos o valor repetido na linha 1 e na linha 2 por 
/// uma variável, eu só não entendo como isso de forma mágica faz a linha ficar exatamente
/// reta, já que é o mesmo valor, mas apenas transformada em uma variável, ficando assim :


function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(2)
  }
  
function draw() {
    background(0);
    
  
stroke(0,20,50,500);
strokeWeight(5);
let L1Xlargura = random(width);
line (L1Xlargura,0,L1Xlargura,height);
  
stroke(0,255,0,500);
strokeWeight(5);
let L2Yaltura = random(height)
line(0,L2Yaltura,width,L2Yaltura);
    
  }

/// pra finalizar e criar a mira, precisamos colocar uma bolinha exatamente em cima
/// do encontro das duas linhas, como o circulo é composto de 3 valores, 2 x e y e 1 do diametro
/// colocaremos os valores de x e y das linhas, para que a bolinha acompanhe, ficando:


function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(2)
  }
  
function draw() {
    
background(0);
    
  
stroke(0,20,50,500);
strokeWeight(5);
let L1Xlargura = random(width);
line (L1Xlargura,0,L1Xlargura,height);
  
stroke(0,255,0,500);
strokeWeight(5);
let L2Yaltura = random(height)
line(0,L2Yaltura,width,L2Yaltura);
  
noStroke(); 
circle(L1Xlargura,L2Yaltura,80);
    
  }

  /// adicionei noStroke() para tirar o contorno