// 1. Getting countries and webTechs from other files
const countries = require('./countries')
const webTechs = require('./webtechs')
console.log(countries)
console.log(webTechs)

// 2. Remove all the punctuations and change the string to array and count the number of words in the array
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
txt_array = text.split(' ')
for(i=0;i<txt_array.length;i++){
    txt_array[i] = txt_array[i].replace(/[^\w\s]/g, '')
}
console.log(txt_array)

// 3.In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    
//  3.1 add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat')
console.log(shoppingCart) 

// 3.2 add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar')
console.log(shoppingCart)

// 3.3 Remove Honey if you are allergic to honey

indexOfHoney = shoppingCart.indexOf("Honey")
if (indexOfHoney != -1)
    shoppingCart.splice(indexOfHoney,1)
console.log(shoppingCart)

// 3.4 Modify Tea to Green Tea

indexOfTea = shoppingCart.indexOf("Tea")
if (indexOfTea != -1){
    shoppingCart[indexOfTea]='Green Tea'
}
console.log(shoppingCart)

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
countries.indexOf('Ethiopia')!= -1? console.log(`${countries[countries.indexOf('Ethiopia')].toUpperCase()}`): countries.push('Ethiopia')


// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

webTechs.indexOf('Sass')!= -1? console.log(`${webTechs[webTechs.indexOf('Sass')]} is a CSS preprocess. `): webTechs.push('Sass')
console.log(webTechs)

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)