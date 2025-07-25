let ob ={
    name:"Himanshu",
    contact:9589152996,
    city:"Bhopal"
}

localStorage.setItem('userdata',JSON.stringify(ob))
// JSON.stringify if a function which convert value in string format 

let data = JSON.parse(localStorage.getItem('userdata'))
// JSON.parse if a function which convert value in previous format
console.log(data)

