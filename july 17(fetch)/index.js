async function fet(){
    let res = await fetch('http://localhost:3000/userdata')
    let data = await res.json()
    let st = data.map((item)=>`
    <tr>
       <td>${item.id}</td>
       <td>${item.name}</td>
       <td>${item.age}</td>
       <td>${item.contact}</td>
       <td>${item.city}</td>
       <td><button onclick="mydelete('${item.id}')">Delete</button></td>
       <td><button onclick="myedit('${item.id}')">Edit data</button></td>
    </tr>

    `).join(" ")
    document.querySelector('#storedata').innerHTML = st
}
fet()

async function myedit(id){
    let res = await fetch(`http://localhost:3000/userdata/${id}`)
    let userdata = await res.json()
    let userinput = `<h1>Edit your form-</h1>
    <input type="text" value=${userdata.id} id="id1"readonly/> <br><br>
    <input type="text" value=${userdata.name} id="name1"> <br><br>
    <input type="text" value=${userdata.age} id="age1"> <br><br>
    <input type="text" value=${userdata.contact} id="contact1"> <br><br>
    <input type="text" value=${userdata.city} id="city1"> <br><br>
    <input type="submit" onclick="finaledit('${userdata.id}')"> <br><br>
    `

    document.querySelector('#editfrm').innerHTML = userinput
}

const finaledit = (id) => {
    let usereditdata = {
        id:document.querySelector('#id1').value,
        name:document.querySelector('#name1').value,
        age:document.querySelector('#age1').value,
        contact:document.querySelector('#contact1').value,
        city:document.querySelector('#city1').value
    }
    fetch(`http://localhost:3000/userdata/${id}`,{
        method:'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(usereditdata)     

    })  
    .then(()=>alert("Edit successfully...!!!"))
    // .catch(r =>alert(r))
}

function mydelete(id){
    fetch(`http://localhost:3000/userdata/${id}`,{
        method:"DELETE"
    })
    .then((e)=>alert("deleted..."))

}

function postdata(){
    let frmdata = {
        name:document.querySelector('#name').value,
        age:document.querySelector('#age').value,
        contact:document.querySelector('#contact').value,
        city:document.querySelector('#city').value,
    }
    fetch('http://localhost:3000/userdata',{
        method:"POST",
        headers:{
            'contact-type':'application/json'
        },
        body:JSON.stringify(frmdata)
    })
}