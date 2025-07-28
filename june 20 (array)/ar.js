// Array-- multiple data stores []
// ordered -> indexing
// indexing -> starts with 0

// let ar=["aman", 34, 5.7, 'B',true]
// console.log(ar[3])

// for(let i=0; i<5; i++){
//     console.log(ar[i])
// }


// let ar=[1,2,3,4,5,6,7,8,9,10]
// for(let i=0; i<10; i++){
//     console.log(ar[i])
// }


// for(let i=0; i<10;i++){
//    if (ar[i]%2==0){
//     console.log(ar[i])
//    }
// }


// why indexing starts with 0?
// let ar=[1,2,3,4,5,6,7,8,9,10]
// for (let vl of ar){
//     console.log(vl) // this is use for element (for of)
// }
// for (let vl in ar){
//     console.log(vl) // this is use for indexing (for in)
// }



// push() -- add element in last of an array
// pop() -- remove element from last of an array
// unshift() --add element in starting of an array
// shift() -- remove element from starting of an array

// let ar=['himanshu', 24,'bhopal',5.8]
// console.log(ar[3])
// for(let vl of ar){
//     console.log(vl)
// }

// ar.push('india','mp')
// console.log(ar)

// ar.pop()
// console.log(ar)

// ar.unshift("101","PK")
// console.log(ar)

// ar.shift()
// console.log(ar)



// slice -- array.slice(starting, ending)
// by using slice function we can get values between starting(include starting value) and ending(-1) index 
// by default starting position is 0 

// let ar=["php",45,10.7,"MP"]
// let ar1=ar.slice(1,3)
// console.log(ar1)
// console.log(ar)



// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus)


// splice -- The splice() method adds or removes array elements.
// ar.splice(a,b) -- a is starting value & b is how many elements you want to delete


// let ar=["php",45,10.7,"MP"]
// ar.splice(1,2)   // 1 is indexing value & 2 is no of elements
// console.log(ar) 


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // At position 2, add "Lemon" and "Kiwi":
// fruits.splice(2,0,"lemon","kiwi");
// // 2 is starting index, 0 is deleting element and after that add element name inside" " 
// console.log(fruits)


// let ar=["php",45,10.7,"MP"]
// ar.splice(2,0,"sir")
// console.log(ar)

// que1-
// let ar=["cy",2,3,"n"]
// let ar1=ar.slice(2,3)
// console.log(ar1)
// for(let i=1;i<=10;i++){
//     console.log(ar1[0]*i)
// }

// let ar=[1,3,5,2,4,10,11,15]
// let a=parseInt(prompt("Enter starting value: "))
// let b=parseInt(prompt("How many elements want to delete: "))

// ar.splice(a,b)
// console.log(ar)