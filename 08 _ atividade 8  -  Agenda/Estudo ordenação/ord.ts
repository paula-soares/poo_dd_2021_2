
/// ordenação é o processo de organizar os elementos de uma lista em uma ordem definida de acordo com 
/// o problema.

// os algoritmos mais conhecidos de ordenação são bubble sort, insertion sort, selection sort, quick, merge e combinações entre esses
/// tem um conteudo em visualgo que mostra de forma visual esses exemplos. 

/// para ordenar uma lista usamos o comando .sort();

/// o prof criou essa função pra exibir a ordenação, pq usando o console.log() fica em uma formato tipico de matriz
// o join.(",") Especifica uma string para separar cada elemento da matriz. Se omitido, os elementos da matriz são separados por uma vírgula.

let mostrar = (lista:any[]) => console.log(" [ " + lista.join("__") + " ] "  );

let lista : Array<number> = [3,2,5,4.8,6,9,7,-3,2.2,4.5,8.7,10,-21];
lista.sort(); /// aqui vai ta organizando do menor para o maior , mas é o .sort faz uma leitura dos numero como string, então em alguns casos, quando vc usa -10 o -
mostrar(lista) //// acaba sendo "contado" também e pode vir antes ou depois de alguns numeros, de acordo com a codificação UTF-8
console.log("primeiro exemplo") 

//// ok, o sort vai organizar os numeros dessa forma, mas como fazer para mudar os critério de ordenação? ai vem essa função q o prof chama de  compare_to

function compare_to(a:number, b:number):number{
    if (a<b){
        return - 1 
    } else if (a>b){
        return 1
    } else {
        return 0 
    }
}

lista.sort(compare_to)
mostrar(lista);
console.log("segundo exemplo") 

/// simplificando usando arrow fucntion ficaria :

lista.sort((a,b) => a-b);
mostrar(lista);
console.log("terceiro exemplo") 
lista.sort((a,b) => b-a);
mostrar(lista);
console.log("quarto exemplo") /// aqui como é um processo de um nomero menos o outro, a ordenação fica invertida 

/// convertendo em valores absolutos usa o math.abs, ai vai ordenar, independete do valor negativo ou positivo

lista.sort((a,b) => Math.abs(a) - Math.abs(b));
mostrar(lista);
console.log("quinto exemplo") 
lista.sort((a,b) => Math.abs(b) - Math.abs(a));
mostrar(lista);
console.log("sexto exemplo") /// aqui como é um processo de um nomero menos o outro, a ordenação fica invertida 

/// certo, com algumas limitações esses processos servem na comparação de numero, mas e de strings?


let nomes: Array<string> = ["joão","maria", "eduarda","xama", "beterraba"]
nomes.sort();
mostrar(nomes);
console.log("setimo exemplo") /// ordenando por ordem alfabética

//// novamente, no processo de inversão ou mudança, é preciso comparar os elementos, no caso dos numeros, existe a lógica que anteriormente mencionamos
/// no caso da string, existe por padrão uma função que é lacaleCompare(x)
/// usando a lista citada no ultimo exemplo fica:

nomes.sort((a,b) => -a.localeCompare(b)); /// aqui o negativo(-) inverte a comparação padrão, e o locale demonstra que vai realizar o processo em UTF-8 portugues
mostrar(nomes)
console.log("oitavo exemplo")

/// ordenando pessoas, criando classe

class Pessoa {
    constructor(public nome:string, public idade:number ){} /// aqui é um versão resumida do processo de criar os metodos e o constructor evitando o this.idade = idade
    public toString():string{
        return this.nome + ":" + this.idade;

    }
}
/// criando a lista usando a classe pessoa

let Pessoas: Array <Pessoa> = [ new Pessoa ("paula",20) , new Pessoa ("paula",50),
                                new Pessoa ("juca",10) , new Pessoa ("juca",15),
                                new Pessoa ("jucão",10) , new Pessoa ("jucão",15),
                                new Pessoa ("fernanda",14 ) ,new Pessoa("fernanda",25)]

/// e ai agora como comparar essas "pessoas" que tem o mesmo nome, mas tem idades diferentes ?

Pessoas.sort() /// comapração padrão transformando numero e pessoas em string através do toString()
mostrar(Pessoas);
console.log("comparação 1 crescente - sem  parametro de comparação");

Pessoas.sort((a , b) => a.nome.localeCompare(b.nome));
mostrar(Pessoas);
console.log("comparação 2 crescente comparando o nome ")

Pessoas.sort((a , b) => a.idade - b.idade) /// aqui não usa o localeCompare pq só usamos em strings
mostrar(Pessoas);
console.log("comparação 3 crescente -  idade ");

Pessoas.sort((a , b) => b.idade - a.idade) 
mostrar(Pessoas);
console.log("comparação 3 decrescente -  idade ");

Pessoas.sort((a , b) =>a.nome.localeCompare(b.nome) || a.idade - b.idade) 
mostrar(Pessoas);
console.log("comparação 3 crescente - nome e idade ");

/// nesse caso do ou ||,  a linguagem no processo de comparação, vai pegar sempre o ultimo valor falso ou o primeiro não falso 
// então se a e b = 0, passa para a proxima comparação, se idade a idade b = 0 ou iguais, passa para o próximo
/// e ai isso possibilita o uso de diversas possibilidades de comparação  

                    



