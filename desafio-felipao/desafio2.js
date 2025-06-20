// Calculadora de partidas Rankeadas

// **O que deve ser utilizado**

// - Variáveis
// - Operadores
// - laços de repetição
// - Estruturas de decisões
// - Funções

// Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um 
// jogador, depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve 
// ser feito através do Calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = ferro 
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100 = Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// Saída

// Ao final deve se exibir uma mensagem:
// "O herói tem de saldo **{saldoVitorias} está no nível {nível}**"

let vitorias = 100
let derrotas = 50

let calculoVmenosD = vitorias - derrotas

let resultado = Kda(calculoVmenosD)

console.log(`O herói tem saldo de ${calculoVmenosD} está no nível ${resultado}`)

function Kda(diferença){
    let niveis = [
        {min: 0, max: 10, nome: 'ferro'},
        {min: 11, max: 20, nome: 'Bronze'},
        {min: 21, max: 50, nome: 'Prata'},
        {min: 51, max: 80, nome: 'Ouro'},
        {min: 81, max: 90, nome: 'Diamante'},
        {min: 91, max: 100, nome: 'Lendário'},
        {min: 101, max: Infinity, nome: 'Imortal'},
    ]

    for(let contador = 0; contador < niveis.length; contador++){
        if(diferença >= niveis[contador].min && diferença <= niveis[contador].max){
            return niveis[contador].nome
        }
    }
}
















