
//const readline = require ("readline-sync");
//console.log("Digite o seu nome:")
//let nome = readline.question();
//console.log("Ola, meu amigo " + nome);

///let nome = readline.question();
//console.log("Ola, meu amigo " + nome);


const readline = require ("readline-sync");
let input = () => readline.question(); /// função pra ler o que é escrito que funciona através dos pacotes que foram instalados
let write = (x: any ) => process.stdout.write(" " + x); /// aqui é pra não quebrar a linha 


class Bichim {
  private nome: string = " "; /// o private é um controlador de acesso, relembrando que temos, public, private e protected, no caso usando
  private energia:number; /// o private, isso torna o acessso a nome, e energia apenas dentro da classe, eu vi em um texto que no typescript
  private energiamax:number; /// o private não funciona na real, o uso no typescript desse controlador fica apenas como uma sugestão, 
  private vivooumorto:boolean = true; /// como esse atributo começa definido como true não há necessidade de ser colocado no constructor
  private higiene:number;
  private higienemin:number;
  private alegria:number;
  private alegriamin:number;
  getBanho: string;
  

  constructor(nome:string, energiamax:number, higiene:number, felicidade:number, alegria:number) {
    this.setNome(nome); 

    this.energia = energiamax; //// aqui fica assim pq energia começa com energia máxima
    this.energiamax = energiamax;

    this.higiene = higiene;
    this.higienemin = higiene - 80 ;

    this.alegria = alegria;
    this.alegriamin = alegria - 80;
  
  }

  public toString(){
    if( this.vivooumorto = true) 
        return this.nome + " : " + this.energia + " / " + this.energiamax + " / " + this.higiene  + " / " + this.higienemin + " / " + this.alegria + " / " + this.alegriamin;
    return  "o " + this.nome + " está morto :( "
  }

  
  public getNome(): string { /// get dando acesso, não há aqi nenhuma necessidade restritiva 
    return this.nome;
  }

    public getEnergia ():number{ /// get dando acesso, não há aqi nenhuma necessidade restritiva 
      return this.energia
  }

  public getEnergiamax ():number{ /// get dando acesso, não há aqi nenhuma necessidade restritiva 
    return this.energia
  }

  public getAlegria ():number{ /// get dando acesso, não há aqi nenhuma necessidade restritiva 
    return this.alegria
  }  

  public getAlegriamin ():number{ /// get dando acesso, não há aqi nenhuma necessidade restritiva 
    return this.alegriamin
  }  
  
  public getHigiene ():number{ /// get dando acesso, não há aqi nenhuma necessidade restritiva 
    return this.higiene
  }

  public getHigienemin ():number{ /// get dando acesso, não há aqi nenhuma necessidade restritiva 
    return this.higienemin
  }

  public setNome(nome:string){ /// o length mede o tamanho da lista, então se nome.length for igual a 0 é porque não foi colocado nada
    if( nome.length == 0 ){    //// em nome, dai vai receber por padrao "tamagoshi"
        this.nome = "tamagoshi" 

    } else {
        this.nome = nome;
    }
  }

  public setEnergia(energia:number){ /// criando outro set restritivo onde se energia for menor que 0, energia recebe 0
      if (energia < 0 ){                //// e se energia for maior que energia maxima, energia recebe energia máxima, isso faz com que
          this.energia = 0;             /// energia fique sempre entre o valor de 0 e o valor definido como energia máxima 
          this.vivooumorto = false;
          console.log("morreu de fome :( ");     /// porem se isso acontecer, vivooumorto recebe false e o bicho morre ( tem q colocar la no toString)       
      } else if ( energia > this.energiamax ){
          this.energia = this.energiamax; 
          this.vivooumorto = false;
          console.log("morreu de comer de mais!:( ");  //// se comer de mais também morre 
      } else if ( this.energia == this.energiamax - 80){
          console.log("precisa comer ou vai morrer :(")
      } else {
          this.energia = energia   /// se energia não for menor que 0 , nem maior que o máximo de energia, energia vai ser igual ao valor de energia  estabelecido 
      } 
  }


  public setAlegriamin(alegriamin:number){
    if (this.alegriamin > 0 && this.alegriamin < 30){
    } else if (this.energia > 0 && this.energia < 30 ){
    } write("Seu bicho ta triste e com fome ◑︿◐" )
  }

  public setHigienemin(higienemin:number){
    if (this.higienemin > 0 && this.higienemin < 30){
    } write("Seu bicho ta sujooo ◑▂◐ ")
  }
  
  public setBanho(): void {
        if(!this.vivooumorto) {
            console.log(" SEU BICHO MORREU NÃO PRECISA DE BANNHO ~~((-_-))~~_ \n")
            return;
        }
        this.setHigienemin(this.getHigienemin() + 50);
        this.setEnergia(this.getEnergia() - 10);
        this.setAlegriamin(this.getAlegriamin() + 20)
        write ("bichinho banhadooo (◡‿◡✿) ")
  }

  public setComer(): void {
        if(!this.vivooumorto) {
            console.log(" SEU BICHO MORREU NÃO PRECISA COMER ~~((-_-))~~_ \n")
            return;
        }
        this.setEnergia(this.getEnergia() + 50);
        this.setAlegriamin(this.getAlegriamin() + 20)
        write("bichinho alimentado ｡◕‿◕｡ ")
  }

  public setBrincar(): void {
    if(!this.vivooumorto) {
        console.log(" SEU BICHO MORREU NÃO PODE BRINCAR ~~((-_-))~~_  \n")
        return;
    }
    this.setEnergia(this.getEnergia() - 50);
    this.setAlegriamin(this.getAlegriamin() + 40)
    this.setHigienemin(this.getHigienemin() - 50);
    write("bichinho feliz <3 ⊱✿◕‿◕✿⊰ ")
    
  
} }

class inicilizacao {
  criarbichim(): Bichim {
    write("digite o nome do seu bichim");
    let nome = input ();
    write("digite o máximo de energia")
    let energiamax = input();
    write("digite higiene");
    let higiene = input();
  
    let bichim = new Bichim (nome,energiamax,0,0,0);
    return bichim
    
  }


  help () {
    write ("comandos: \n");
    write ("iniciar: <nome> <energiamax> < higiene> <felicidade> <alegria> : cria um novo bichim")
    write ("mostrar: mostra o estado do seu bichim ")
    write ("brinca: faz o bichim brincar")
    write ("come: faz o bichim comer")
    write ("banho: faz o bichim se limpar")
    write ("sair: sai do jogo")

  }
  
  menu () {

    let bichim = this.criarbichim ();
    while(true) {
      let linha = input();
      let palavras =  linha.split(" "); 
      if(palavras[0] == "sair") {
        break;
      } else if (palavras[0] == "mostrar"){
        write (" ESTE É O SEU BICHIM ｡◕‿◕｡ " + bichim + "\n");
      } else if (palavras[0] == "iniciar"){
        bichim = new Bichim(palavras[1],+palavras[2],+palavras[3],+palavras[4],+palavras[5]);
      } else if (palavras[0] == "brinca"){
        write(" bichindo banhando <3 " + bichim.setBrincar)
      } else if (palavras[0] == "come"){
        write(" bichinho comendo <3 " + bichim.setComer)
      } else if (palavras[0] == "banho"){
        write(" bichinho banhando <3 " + bichim.Banho)
      }else {
        console.log("comando inválido, digite novamente! ")
      }

  }

  


}}

let iniciar = new inicilizacao();
iniciar.menu();