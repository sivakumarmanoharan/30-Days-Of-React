// 1. Declare an empty array
empty_arr = Array()
console.log(empty_arr)

// 2. Declare an array with 5 elements
const array_mt_5 = Array("Apple", 'Banana', 'Strawberry', 'Grapes', 'Plum')
console.log(array_mt_5)

// 3. Find the length of the array
console.log(array_mt_5.length)

// 4. Get the first item, middle item and last_item of the array
console.log("First element: ",array_mt_5[0])
console.log("Last Element:", array_mt_5[array_mt_5.length-1])
console.log("Middle element:", array_mt_5[~~((array_mt_5.length-1)/2)])

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = Array(
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
    45.0
  )
console.log(mixedDataTypes.length)

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = Array('Facebook','Google','Microsoft','IBM','Oracle','Amazon')

// 7. Print the array using console.log()
console.log(itCompanies)

// 8. Print the number of companies in the array
console.log("No of companies: ", itCompanies.length)

// 9. Print the first company, middle and last company
console.log("First company: ",itCompanies[0])
console.log("Last company:", itCompanies[itCompanies.length-1])
console.log("Middle company:", itCompanies[~~((itCompanies.length-1)/2)])

// 10. Print out each company
itCompanies.forEach(company => console.log(company))

// 11. Change each company name to uppercase one by one and print them out
for(i=0;i<itCompanies.length;i++){
    console.log(itCompanies[i].toUpperCase())
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies
sentence = itCompanies.slice(0,itCompanies.length-2).join(', ') + " and " + itCompanies[itCompanies.length-1] + " are big IT companies"
console.log(sentence)

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function isCompanyPresent(company){
    if (itCompanies.indexOf(company) != -1){
        return itCompanies[itCompanies.indexOf(company)] + " is present "
    }
    else{
        return "Company not found"
    }
}

console.log(isCompanyPresent("Google"))
console.log(isCompanyPresent("Cognizant"))

