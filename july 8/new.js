let btn = document.querySelector('#btn')
btn.addEventListener('click',()=>{
    let color = document.querySelector('#color')
    color.classList.toggle('dark')
    btn.textContent="light"
    
})
