let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // ! simbolo de "não é" negação

// !!TRUE = TRUE e !!FALSE = FALSE
// !TRUE = FALSE e !FALSE = TRUE


console.log('os verdadeiros...')
console.log(!!3) //inteiro
console.log(!!-1) //inteiro
console.log(!!' ') //string
console.log(!![]) //array
console.log(!!{}) //objeto
console.log(!!Infinity) //tipo infinito
console.log(!!(isAtivo = true)) //operação

console.log('os falsos...')
console.log(!!0) //zero
console.log(!!'') //string vazia
console.log(!!null) //null
console.log(!!NaN) //Not a Number
console.log(!!undefined) //tipo indefinido
console.log(!!(isAtivo = false)) //operação

console.log('pra finalizar...')
console.log(!!(''|| null || 0 || " " ))

let nome = ''
console.log(nome || 'Desconhecido')


