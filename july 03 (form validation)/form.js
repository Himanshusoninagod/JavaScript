function validate(){
    let name = document.querySelector('#name').value
    let city = document.querySelector('#city').value
    let contact = document.querySelector('#contact').value
    let age = document.querySelector('#age').value
    let email = document.querySelector('#email').value
    let pass = document.querySelector('#pass').value

    if(name==""){
        alert("Please enter your name!!")
        document.querySelector('#name').focus()
        return false
    }
    else if(city==""){
        alert("Please enter your city!!")
        document.querySelector('#city').focus()
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
    else if(age==""){
        alert("Please enter your Age!!")
        document.querySelector('#age').focus()
        return false
    }
    else if(age.length>3 || age.length<0 ){
        alert("Please enter your Age<3 digits!!")
        document.querySelector('#age').focus()
        return false
    }

    // else if (!(email.includes('@'))){
    //     alert("Please enter valid email @")
    //     document.querySelector('#email').focus()
    //     return false
    // }

    else if (!(email.includes('@gmail.com' || '@yahoo.com'))){
        alert("Please enter valid email @gamil.com or @yahoo.com")
        document.querySelector('#email').focus()
        return false
    }

    else if (password==""){
        alert("Please enter storng password using special charecter")
        document.querySelector('#password').focus()
        return false
    }

    else if(!(pass.match(/[@#$%^&]/))){
        alert("Please enter storng password using special charecter")
        document.querySelector('#pass').focus()
        return false
    }

    // Map(()=>{}) - higherb order function 
    // ()=>{} - callbavck function 
    // map function use to get elements fron an array and provide new arr[]
    



}