let valor // não inicializado
console.log(valor)


valor = null

console.log(valor)

// console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)

console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // zerar atribuição

console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)