// let btn = document.querySelector('#btn')
// btn.addEventListener('click',function(){
//     alert("Working!!!")
// })

// let btn2 = document.querySelector('#btn2')
// btn2.addEventListener('dblclick',function(){
//     alert("Doble Click")
// })

// let btn3 = document.querySelector('#btn3')
// btn3.addEventListener('mouseenter',function(){
//     alert("hover")
// })

// let btn4 = document.querySelector('#btn4')
// btn4.addEventListener('mouseleave',function(){
//     alert("hover remove")
// })



// event fire & add or remove css through javascript--

let btn1 = document.querySelector('#btn1')
btn1.addEventListener('click',()=>{
    let wr = document.querySelector('#wrapper')
    wr.classList.add('main')
})

let btn2 = document.querySelector('.btn2')
btn2.addEventListener('click',()=>{
    let wr = document.querySelector('#wrapper')
    wr.classList.remove('main')
})

let btn3 = document.querySelector('.btn3')
btn3.addEventListener('click',function(){
    let wr = document.querySelector('#wrapper')
    wr.classList.toggle('main')
})

