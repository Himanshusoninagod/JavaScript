// setTimeout() -

// setTimeout(()=>console.log("Inside Timeout"),3000)

// let frm = document.querySelector('#frm')

// function showfrm(){
//     frm.removeAttribute('style')
// }
// setTimeout(showfrm,3000)


// setInterval() - repeat every 2 sec
// setInterval(() => console.log("Last Class"),2000)

// let count = 0
// setInterval(() => {
//     document.querySelector('#show').innerHTML = ++count
    
// },1000);

// setInterval(() => {
//     let date = new Date()
//     let time = date.toLocaleTimeString()
//     document.querySelector('#time').innerHTML = time
// }, 1000);


let c = 0
let st
function startt(){
    st = setInterval(() => {
        document.querySelector('#time').innerHTML = c++
    }, 500);
}

function stopp(){
    clearInterval(st)
}

