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
//     console.log(vl) // this is use for element
// }
// for (let vl in ar){
//     console.log(vl) // this is use for indexing (for in)
// }


// Push() 
// Pop()

// ar=['himanshu', 24,'bhopal',5.8]
// console.log(ar[3])
// for(let v of ar){
//     console.log(v)
// }

// ar.push('india','mp')
// console.log(ar)

// ar.pop()
// console.log(ar)

// unshift() --add element in starting of an array
// shift() -- remove element from starting of an array

// ar.unshift("101","PK")
// console.log(ar)

// ar.shift()
// console.log(ar)

// slice --
// let ar=["php",45,10.7,"MP"]
// let ar1=ar.slice(1,3)
// console.log(ar1)
// console.log(ar)

// splice --
// let ar=["php",45,10.7,"MP"]
// ar.splice(1,3)   // 1 is indexing value & 2 is no of elements
// console.log(ar)

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