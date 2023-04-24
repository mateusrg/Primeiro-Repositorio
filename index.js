let nome
let idade
console.log(typeof nome);
console.log(typeof idade);
nome = prompt("Qual o seu nome?")
idade = prompt("Quantos anos você tem?")
console.log("Olá", nome, ", você tem", idade, "anos")

//Eu não defini o tipo da variável, se é texto, número etc., então ele me retornou "unidefined" porque está indefinido.

estáVestindoRoupaAzul =  prompt("Você está vestindo roupa azul hoje?")
éBranco = prompt("Você é branco?")
éPobre = prompt("Você é pobre?")
console.log("Você está vestindo roupa azul hoje? -", estáVestindoRoupaAzul)
console.log("Você é branco? -", éBranco)
console.log("Você é pobre? -", éPobre)

let a = 10
let b = 25
let aux = a
a = b
b = aux
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

let num1 = Number(prompt("Primeiro Número"))
let num2 = Number(prompt("Segundo Número"))
x = num1 + num2
y = num1 * num2
console.log(x)
console.log(y)