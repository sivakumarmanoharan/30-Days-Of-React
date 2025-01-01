// The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 

// Sort the array and find the min and max age
sorted_ages= ages.sort()
console.log(sorted_ages)

console.log(`Minimum age: ${sorted_ages[0]}
Maximum age: ${sorted_ages[sorted_ages.length-1]}
`)

// Find the median age(one middle item or two middle items divided by two) - 
console.log(`Median age: ${sorted_ages[sorted_ages.length/2]}`)

// Find the average age(all items divided by number of items) - 
sum =0
sorted_ages.forEach(age =>{
    sum += age
})
console.log(`Average Age: ${~~(sum/sorted_ages.length)}`)

// Find the range of the ages(max minus min) - 
console.log(`Range of the ages: ${sorted_ages[sorted_ages.length-1]-sorted_ages[0]}`)

// Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(~~(sorted_ages[0]-(sum/sorted_ages.length)),~~(sorted_ages[sorted_ages.length-1]-(sum/sorted_ages.length))))

// Slice the first ten countries from the countries array
const countries = require('./countries')
console.log(countries.slice(-2))

// Find the middle country(ies) in the countries array
middleCountry_index = countries.length % 2 === 0 ?  (countries.length / 2)-1 : (countries.length-1)/2
console.log(countries[middleCountry_index])

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
firstHalf = countries.slice(0,(countries.length / 2))
secondHalf = countries.slice((countries.length / 2),countries.length)
console.log(firstHalf, secondHalf)