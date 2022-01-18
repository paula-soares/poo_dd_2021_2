///O objetivo dessa atividade é implementar o sistema de alocação de uma única sala de cinema. Se existem cadeiras livres, os clientes podem reservá-las. Também podem desistir da reserva. O sistema deve mostrar quem está sentado em cada cadeira.

///Nessa atividade, você deverá criar:

/////Uma classe que representa o cliente.
///Uma classe que representa a sala de cinema e guarda os clientes.
///Uma classe que controle o fluxo de entrada e saída e processe as chamadas.
/// falar aqui no relatorio que não entendi muito como implementar o readlyne pra receber esse input do usuário 

/// começamos com a classe cinefilo que tem um nome e cpf

class Cinefilo {
    nome: string;
    cpf:number;

    constructor ( nome:string, cpf:number){
        this.nome = nome
        this.cpf = cpf

    }

    toString(){
        return this.nome + ", " + this.cpf;
    }


}

// aqui uma classe sala de cinema, que tem um atributo do tipo cadeira que pode ter um cinefilo (cliente) ou null (vazio) além da possibilidade
// de reservar e cancelar uma cadeira na sala 


class saladecinema {
    cadeiras: Array < Cinefilo | null >;

    constructor(vagas:number) {
        this.cadeiras = [];
        for (let i = 0; i < vagas; i++){
            this.cadeiras.push(null); /// aqui o for com o push vai criando sempre novas cadeiras de acordo com as vagas disponíveis
        }                             //// funciona como no exemplo do banco ao criar os caixas 

    }

    reserva(cinefilo:Cinefilo, cadeira:number): boolean { // aqui a reserva que contem o cinéfilo que é a pessoa e a cadeira, do tipo bool
        for(let i = 0; i < this.cadeiras.length; i++){      /// aqui o for para percorrer as cadeiras disponveis a partir da quantidade criada da sala 
            if (this.cadeiras[i]?.cpf === cinefilo.cpf){  /// que é o tamanho da lista que tá lá no constructor, portanto se o cpf mencionado for 
                console.log("cinéfilo já cadastradado");  /// exatamente igual ao cadastradado, imprime cinéfilo já cadastrado  
                return false;
            }
        }
        if (this.cadeiras[cadeira] != null){ 
            console.log("A cadeira " + cadeira + " já está preenchida!")  //// aqui se a cadeira tal da lista cadeiras for diferente de vazio é porque
            return false                                                   //// já está preenchida e não é possível adicionar novo cinéfilo a essa cadeira
        }else {                                                             /// caso contrário a cadeira this.cadeiras[cadeira] recebe o novo cinéfilo cadastrado
            this.cadeiras[cadeira] = cinefilo;
            console.log("A cadeira" + cadeira + " foi reservada") /// se não for igual a null, a cadeira em cadeiras recebe o cinéfilo ( e o seu nome e cpf)
            return true;                                    
        }
        
    }  

    cancelamento(cpf:number, ):boolean{
        for(let i = 0; i < this.cadeiras.length; i++){ /// aqui em cancelamento, usando o for para percorrer a lista de cadeiras como em reserva e se a cadeira
            if(this.cadeiras[i] != null){               /// mencionada não estiver vazia (diferente de null ) e somente se cpf da cadeira tal for igual ao mencionado
                if(this.cadeiras[i].cpf == cpf){         // this.cadeiras recebe null, e portanto o espaço na lista que anteriormente estava ocupado fica vazio 
                    this.cadeiras = null;
                    console.log(" A cadeira cadastrada no cpf de numero " + cpf + " foi cancelada " );
                    return true
                }
            }
               
        }
    }

    toString(){
        return this.cadeiras;
    }


}

class inicilizacao {
    criarreserva(): saladecinema {
      write("escolha uma cadeira entre 0 e 100 ");
      let cade = input ();
      write("digite o seu nome")
      let energiamax = input();
      write("digite cpf");
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


/// CASOS

/// criando nova sala 

let sala1 = new saladecinema(5)
    console.log(sala1.toString());

    /// cadastrando novos cinefilos em cadeiras

    sala1.reserva(new Cinefilo("paula",200), 0);
    sala1.reserva(new Cinefilo("garuzinha",300), 1);
    console.log(sala1.toString);

    ///  proibindo o cinéfilo de pegar outra cadeira  

    sala1.reserva(new Cinefilo("garuzinha",300), 2);

    /// proibindo de pegar a cadeira já comprada por outro cinéfilo 

    sala1.reserva(new Cinefilo("juca",100), 1);

    /// cancelando através do cpf, pois as pessoas podem ter nomes iguais 

    sala1.cancelamento(300);
    console.log(sala1)