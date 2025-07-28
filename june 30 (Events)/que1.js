//  In querySelectorAll('li') indenxing start with 0 

// let list = document.querySelectorAll('li')
// for (let i=0;i<=10;i++){
//     if (i%2!=0){
//         list[i].style.backgroundColor="red"
//     }
// }

let col = document.querySelectorAll('li')
for(let i=0;i<=10;i++){
    if (i%2==0){
        col[i].style.backgroundColor="red"
    }
    else{
        col[i].style.backgroundColor="black"
    }
}


