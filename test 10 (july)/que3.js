function validate(){
    let name=document.querySelector('#name').value
    let city=document.querySelector('#city').value
    let contact=document.querySelector('#contact').value
    let email=document.querySelector('#email').value
    let pass=document.querySelector('#pass').value

    if(name==""){
        alert("Please enter name!")
        document.querySelector('#name').focus()
        return false
    }
    else if(city==""){
        alert("Please enter city name!")
        document.querySelector('#city').focus()
        return false
    }
    else if(contact==""){
        alert("Please enter contact number!")
        document.querySelector('#contact').focus()
        return false
    }
    else if(contact.length!=10){
        alert("Please enter contact number!")
        document.querySelector('#contact').focus()
        return false
    }
    else if(email==""){
        alert("Please enter email!")
        document.querySelector('#email').focus()
        return false
    }
    else if(!(email.include("@gmail.com"))){
        alert("Please enter email!")
        document.querySelector('#email').focus()
        return false
    }
    else if(pass==""){
        alert("Please enter password!")
        document.querySelector('#pass').focus()
        return false
    }

}