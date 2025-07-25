// String--
let str = "HAcker Space"
console.log(str)

console.log(str[1])
console.log(str.length)

// Allow (-ve) indexing so we use at()

let an = str.at(-1)
console.log(an)

// repeat 10 times

let student = "Hello "
console.log(student.repeat(10))

// Replace--
let str2= "we are developer"
let rs = str2.replace('developer','SDE')
console.log(rs)

// Replaceall--
let str3 = "vivek is very good student and also good in studies and also good in attendance and also good in project making"
console.log(str3.replaceAll('good','bad'))

// toUppeerCase--
let str4 = "prince"
console.log(str4.toUpperCase())

// toLowerCase--
let str5 = "Google"
console.log(str5.toLowerCase())

// Slice--
let str6 = "pushpendra"
console.log(str6.slice(0,5))

// split--
let str7 = "apple,mango,orange"
console.log(str7.split(','))

// template literals--
let fname = "Md"
let mname = "Qasim"
let lname ="khan"

console.log("my name"+" "+ fname +" " + mname +" " + lname)

console.log(`my name ${fname} and ${mname} and last name ${lname}`)



