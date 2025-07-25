function task(){
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let pass = document.querySelector('#pass').value
    let contact = document.querySelector('#contact').value

    localStorage.setItem('Username',name)
    localStorage.setItem('UserEmail',email)
    localStorage.setItem('UserPassword',pass)
    localStorage.setItem('UserContact',contact)
}