const escola = "Cod3r"

console.log(escola.charAt(4)) //retornar caracter posição 4

console.log(escola.charCodeAt(3)) //retornar valor na tabela ASCII posição 3

console.log(escola.indexOf('3')) //retornar indice da string '3'

console.log(escola.substring(1)) //parse a partir do indice 1
console.log(escola.substring(0,3)) //parse a partir do indice 0 ate o indice 3 não incluindo o 3

console.log('Escola'.concat("!"))//concatena string

console.log(escola.replace(3, 'e')) // replace no indice 3

console.log(escola.replace(/\d/, 'e')) // replace atraves da expressão regular \d onde substitui todos os digitos pela letra  'e'

console.log(escola.replace(/\w/g, 'e')) // replace atraves da expressão regular \w onde substitui todos os caracteres pela letra  'e'

console.log('Ana,Maria,Pedro'.split(',')) //gerando um array com 3 elementos separados por virgula