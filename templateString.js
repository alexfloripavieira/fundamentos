const nome = 'Rebeca'
const concatenacao = 'Olá '+ nome + '!'
const template =`
    Olá
    ${nome}!`
console.log(concatenacao, template)


//expressoes...
console.log(`1+1 = ${1+1}`) // interpolação entre simbolos de crase

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`) //chamando uma funcção



