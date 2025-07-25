// fetch() - to add api
// promise - fullfil, pending, reject
// HTTP method - get,post,delete,put,patch
// API - Application programming interface
// fetch() => promise => async await get=> 

async function demo(){
    let response = await fetch("https://jsonplaceholder.typicode.com/comments")
    let data = await response.json()
    
    let apidata = data.map((e)=>`
     <tr>
         <td>${e.id}</td>
         <td>${e.name}</td>
         <td>${e.email}</td>
     </tr>
    `).join(" ")

    let savedata = document.querySelector('#savedata')
    savedata.innerHTML = apidata
} 

demo()
