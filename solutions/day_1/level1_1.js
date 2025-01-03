a=4
b=3
if (a>b)
    console.log(`${a} is greater than ${b}`)
else if (a<b)
    console.log(`${b} is greater than ${a}`)
else{
    console.log(`Both are equal`)
}

console.log((a>b)?`${a} is greater than ${b}`:`${b} is greater than ${a}`)
    
n=20
console.log((n%2==0)?'Even':'Odd')