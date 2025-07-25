function store(){
    let fname = document.querySelector('#fname').value
    let lname = document.querySelector('#lname').value
    let email = document.querySelector('#email').value
    let pass = document.querySelector('#pass').value
    let contact = document.querySelector('#contact').value

    if(fname==""){
        alert("Please enter your First Name!!")
        document.querySelector('#fname').focus()
        return false
    }
    if(lname==""){
        alert("Please enter your First Name!!")
        document.querySelector('#lname').focus()
        return false
    }
    else if (!(email.includes('@gmail.com'))){
        alert("Please enter valid email @gamil.com or @yahoo.com")
        document.querySelector('#email').focus()
        return false
    }
    else if (pass==""){
        alert("Please enter storng password using special charecter")
        document.querySelector('#password').focus()
        return false
    }
    else if(!(pass.match(/[@#$%^&]/))){
        alert("Please enter storng password using special charecter")
        document.querySelector('#pass').focus()
        return false
    }
    else if(contact==""){
        alert("Please enter your contact!!")
        document.querySelector('#contact').focus()
        return false
    }
    else if(contact.length!=10){
         alert("Please enter 10 digit contact number!!")
         document.querySelector('#contact').focus()
         return false
    }
    else if (isNaN(contact)){
        // isNaN - is not a number
        alert("please enter contact in numbers")
        document.querySelector('#contact').focus()
        return false
    }

    localStorage.setItem('Firstname',fname)
    localStorage.setItem('Lastname',lname)
    localStorage.setItem('Useremail',email)
    localStorage.setItem('Userpassword',pass)
    localStorage.setItem('Usercontact',contact)

    let loginemail = document.querySelector('#loginemail').value
    let loginpass = document.querySelector('#loginpass').value

    let a = localStorage.setItem('Useremail')
    let b = localStorage.setItem('Userpassword')

    if (a!=loginemail){
        alert("Incurrect email ID!!!")
        return false
    }
    else if (b!=loginpass){
        alert("Incurrect Password!!!")
        return false
    }





}
