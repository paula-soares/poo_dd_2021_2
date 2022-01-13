//// começando criando a classe bolha, algumas observaçõe:
//// o raio vem com o static que definie o raio como um tamanho e propriedade da classe, ao qual todos os objetos vão ter. 
/// todas as bolhas começam "vivas", ambas essas caracteristicas não são inicializadas no constructor então devem ao menos
// de partida ter um valor padrão. Não entendi pq vitalidade tb nao vem com o estatic, e se vitalidade não ta dentro
/// dessa possibilidade do static, pq não ta inicializada no constructor ? 
// Tudo que é estatico pertence a classe. 


class Bolha {
  x:number
  y:number
  letra:string
  velocidade:number

  static raio: number = 30 
  vitalidade:boolean = true;

  constructor(x: number, y:number, letra:string, velocidade:number){
      this.x = x
      this.y = y
      this.letra = letra
      this.velocidade = velocidade
  }   

  draw():void {
      /// propriedade da bolha 
      // o circulo é a posição de x e y e o diametro, que no caso ta sendo 2 x raio
      fill(225);
      stroke(225);
      circle(this.x,this.y, 2 * Bolha.raio);
      ///propriedades do texto dentro da bolha 
      fill(0);
      stroke(0);
      textSize(15);
      text(this.letra,this.x - 5, this.y + 5 );

  }
}

let bolha1:Bolha 


function setup() {
  createCanvas(800,600); /// ajustar um tamanho melhor pra tela ou isso vai influenciar em algo do posicionamento e etc?
  bolha1 = new Bolha (100,100,"A", 1);

}

function draw(){

  background(100);
  bolha.update(); 
  bolha1.draw();
  
}