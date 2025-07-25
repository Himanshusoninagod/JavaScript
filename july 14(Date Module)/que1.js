// module -- date module 
// let date = new Date()
// console.log(date);

// console.log(date.getFullYear())
// console.log(date.getDate())
// console.log(date.getMonth()+1)
// console.log(date.getDay())

// let ar=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
// let day=date.getDay()
// console.log(ar[day])

// let ar1=['jan','feb','march','april','may','jun','july','aug','sep','oct','nov','dec']
// let month=date.getMonth()
// console.log(ar1[month])

// console.log(date.toLocaleDateString())




// task --
let data = new Date()

let date = document.querySelector('#date')
let month = document.querySelector('#month')
let day = document.querySelector('#day')
let year = document.querySelector('#year')

date.innerHTML=data.getDate()

let ar=['January','February','March','April','May','Jun','July','August','September','October','November','December']
let month1=data.getMonth()
month.innerHTML=ar[month1]


let ar1=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let day1=data.getDay()
day.innerHTML=ar1[day1]

year.innerHTML=data.getFullYear()

