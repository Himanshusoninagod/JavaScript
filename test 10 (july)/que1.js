let ar = []
let sum=0
for (let i=0; i<10;i++){
    let input=parseInt(prompt("enter a number: "))
    ar.push(input)
}
console.log(ar)
document.write(ar)

for (let val of ar){
    if (vl%2!=0){
        sum+=vl
    }
}
console.log(sum)