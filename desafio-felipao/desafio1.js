// 1° Desafio Classificador de Nível de Herói

// **O que deve ser utilizado**

// - Variáveis 
// - Operadores 
// - Laços de repetição
// - Estrutura de decisões

// Obejetivo - Crie uma variável para armazenar o nome e a quantidade de experência (XP)
// de um herói, depois utilize uma estrutura de decisão para apresentar alguma mensagem 
// abaixo:

// Se o XP for menor do que 1.000 = Ferro
// Se o XP estiver entre 1.001 e 2.000 = Bronze
// Se o XP estiver entre 2.001 e 5.000 = Prata
// Se o XP estiver entre 6.001 e 7.000 = Ouro
// Se o XP estiver entre 7.001 e 8.000 = Platina
// Se o XP estiver entre 8.001 e 9.000 = Ascendente
// Se o XP estiver entre 9.001 e 10.000 = Imortal 
// Se o XP for maior ou igual a 10.001 = Radiante

// Saída - Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nível}**"

let nome = 'João'
let exp = 10001

let niveis = [
    {min: 0, max: 1000, nome: 'Ferro'},
    {min: 1001, max: 2000, nome: 'Bronze'},
    {min: 2001, max: 5000, nome: 'Prata'},
    {min: 6001, max: 7000, nome: 'Ouro'},
    {min: 7001, max: 8000, nome: 'Platina'},
    {min: 8001, max: 9000, nome: 'Ascendente'},
    {min: 9001, max: 10000, nome: 'Imortal'},
    {min: exp>10001, nome: 'Radiante'}
]

let nivel = 'Radiante'

for (let contador = 0; contador < niveis.length; contador++) {
    if(exp >= niveis[contador].min && exp <= niveis[contador].max){
        nivel = niveis[contador].nome
        break
    }
}

console.log(`O herói de nome ${nome} está no nível ${nivel}.`)







