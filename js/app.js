// console.log('Olá, mundo do javaScript!');

// // JS trabalha com tipagem dinamica de variáveis
// // em variáveis de string usar as aspas simples, pros restantes eu nao uso aspas

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)

// var userName = 'Guilherme'

// document.getElementById('user-name').innerHTML = userName

// var character1 = 'Gomes'

// document.getElementById('character-name').innerHTML = character1

// //Operadores matemáticos

// //NaN
// var n1 = 5
// var n2 = 'cinco'
// var total = n1 + parseInt(n2)

// console.log(total)

// //Soma transformando a string em número inteiro
// var n1 = 10
// var n2 = '5'
// var total = n1 + parseInt(n2)

// console.log(total)

// //Soma normal
// var n1 = 5
// var n2 = 5
// var total = n1 + parseInt(n2)

// console.log(total)

// //Subtraindo
// var n1 = 5
// var n2 = 5
// var total = n1 - n2

// console.log(total)

// //Multiplicando
// var n1 = 5
// var n2 = 5
// var total = n1 * n2

// console.log(total)

// //Dividindo
// var n1 = 5
// var n2 = 5
// var total = n1 / n2

// console.log(total)

// //Valores float

// var n1 = 5  
// var n2 = 2.5

// console.log(typeof n1) //usando o typeof para passar o tipo da variável
// console.log(typeof n2)

// var total = n1 / n2

// console.log(total)

// // Operadores de comparação

// var v1 = 5
// var v2 = '5'

// var resultado = v1 == v2

// console.log(v1 == v2) //igual
// console.log(v1 === v2) //igual e do mesmo tipo de variável
// console.log(v1 != v2) //diferente
// console.log(v1 > v2) //maior
// console.log(v1 < v2) //menor
// console.log(v1 >= v2) //maior ou igual
// console.log(v1 <= v2) //menor ou igual

// // Funções

// function soma(n1, n2) {
//     console.log(n1 + n2)
// }

// soma(5, 100)

// function boasVindas() {
//     alert('Bem vindo ao meu Portfólio')
// }

// boasVindas('Guilherme')

// function boasVindas(nome) {
//     alert(nome + ', seja bem-vindo ao meu Portfólio')
// }

// boasVindas('Guilherme')  

// function soma(n1, n2) {
//     return n1 + n2
// }

// soma(150, 190)   
// var resultado = soma(150, 190)

// console.log(resultado)
// //----------------------------------------

// Controle de fluxo com BDD

// Cenário 1: Realizando um saque com sucesso
// Dado que eu tenho 10000 reais
// Quando eu realizo um saque de 7500 reais
// Então o valor do saque deve ser deduzido do meu saldo

var saldo = 10000

function saque(valor) {
    saldo = saldo - valor
}

saque(7500)
console.log(saldo)

// Cenário 2: Realizando um saque que o valor seja maior que o saldo
// Dado que eu tenho 10000 reais
// Quando eu realizo um saque de 15000 reais
// Então o valor do saque não deve ser deduzido do meu saldo

var saldo2 = 10000

function saque2(valor2){
    if (valor2 > saldo2){
        alert('Saldo insuficiente')
    } else {
        saldo2 = saldo2 - valor2
    }
}

saque2(15000)
console.log(saldo2)

// Cemário 3: Realizando uma divisão de valores de uma conta com sucesso
// Dado que meu saldo é de 10000 reais
// E quero dividir esse valor por 2 contas
// Quando eu realizo a divisão
// Então o valor deve ser deduzido do meu saldo

var saldo3 = 10000

function divisao(conta1, conta2, conta3) {
    saldo3 = conta1 / conta2 / conta3
}

divisao(10000, 3, 1)
console.log(saldo3)

// Cenário 4: Realizando uma comparação de valores de uma conta com sucesso
// Dado que meu saldo é de 10000 reais
// E quero comparar esse valor com outra conta
// Quando eu realizo a comparação
// Então deve me mostrar um alerta que os valores são iguais

var saldo4 = 10000

function comparacao(conta1, conta2) {
    if (conta1 == conta2) {
        alert('Os valores são iguais')
    } else {
        alert('Os valores são diferentes')
    }
}

comparacao(10000, 1000)
console.log(saldo4)