// Local Storage- 
// Local Storage is a storage. 
// store data in key&value format 
// type of data will be String. 

// 1. setItem() - insert
// 2. getItem() - retrive
// 3. removeItem() - delete
// 4. clear() - all delete



function store(){
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let email = document.querySelector('#age').value
    let pass = document.querySelector('#pass').value
    let contact = document.querySelector('#contact').value

    localStorage.setItem('Username',name)
    localStorage.setItem('UserAge',age)
    localStorage.setItem('UserEmail',email)
    localStorage.setItem('UserPassword',pass)
    localStorage.setItem('UserContact',contact)
}

let a = localStorage.getItem('Username')
console.log(a)

localStorage.removeItem('UserAge')

localStorage.clear()