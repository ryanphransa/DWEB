let nome = prompt("Digite seu nome: ")
let nota1 = prompt("Digite a primeira nota: ")
let nota2 = prompt("Digite a segunda nota: ") 
let nota3 = prompt("Digite a terceira nota: ")
let nota4 = prompt("Digite a quarta nota: ")

let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4

alert("Nome: " + nome)
alert("Media do aluno: " + media.toFixed(2))


