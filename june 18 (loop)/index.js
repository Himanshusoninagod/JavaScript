// Write a program to print 1 to 10 numbers using do while loop?
// let num=1
// do{
//     console.log(num)
//     num++
// }while(num<11)

// white a program to print a table of a number using do while loop?
// let num=parseInt(prompt("Enter number: "))
// let i=1
// do{
//     console.log(num*i)
//     i++
// }while(i<=10)

// write a program to print microsoft 15 times using while loop? 
// let num="Microsoft"
// let i=1
// while(i<=15){
//     document.write(num,"<br>")
//     i++
// }

// write a program to print a reverse table of n number using while loop 
// let num=parseInt(prompt("Enter number: "))
// let i=10
// while(i>0){
//     console.log(num*i)
//     i--
// }

// write a program to print only odd numbers bw 20 to 1 
// let num=20
// while(num>0){
//     if (num%2!=0){
//         console.log(num)
        
//     }
//     num--
// }


// write a program to print square of all even numbers between 20 to 1 
// for (let i=20; i>=1; i--){
//     if (i%2==0){
//         console.log(i*i)
//     }
// }

// if number bw 11 to 20 print 20 to 1 numbers--
// if number bw 1 to 10 print 1 to num numbers--
// var a= parseInt(prompt("Enter number: "))
// if (a>=1 && a<=10){
//     for (let n=1; n<=a; n++){
//         console.log(n)
//     }
// }
// else if (a>=11 && a<=20){
//     for(let n=20; n>=1; n--){
//         console.log(n)
//     }
// }
// else {
//     console.log("Invalid input")
// }


// multiplication table of 2 & 3 --
// for (let a=2; a<=3; a++){
//     for(let b=1; b<=10; b++){
//         console.log(a*b)
//     }
// }

// print *****
// for (let a=1; a<=5; a++){
//     document.write("*")
// }


// print--
// *
// **
// ***
// ****
// *****

// for (let r=1; r<=5; r++){
//     for (let c=1; c<=5; c++){
//         if(c<=r){
//             document.write("*")
//         }
//     }
//     document.write("<br>")
// }


// print--
// *****
// *   *
// *   *
// *   *
// *****

for(let r=1; r<=5;r++){
    for(let c=1; c<=5; c++){
        if(r==1 || r==5 || c==1 || c==5){
            document.write("* ")
        }
        else{
            document.write("&nbsp&nbsp&nbsp")
        }
    }
    document.write("<br>")
}


