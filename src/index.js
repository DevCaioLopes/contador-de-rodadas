const { uniq } = require('lodash');
const { arrayLetras, arrayNumeros } = require('./array')

const arrayNumeroUnico = uniq(arrayNumeros)
const arrayLetraUnica = uniq(arrayLetras)

console.log(arrayNumeroUnico)
console.log(arrayLetraUnica)
