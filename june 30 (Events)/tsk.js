let count =0;
function plusOne(){
    let h2 = document.getElementById('h2')
    h2.textContent= ++count;
    if(count%2==0){
        h2.style.color="black"
    }
    else{
        h2.style.color="red"
    }
}

function minusOne(){
    if (count!=0){
        let h2 = document.getElementById('h2')
        h2.textContent= --count;
        if(count%2==0){
        h2.style.color="black"
        }
        else{
        h2.style.color="red"
        }
    }
}


// function img1(){
//     let img = document.getElementById('changeimg')
//     img.src="/june 30 (Events)/colin-watts-pR-5gi-hB1c-unsplash.jpg"
// }
// function img2(){
//     let img = document.getElementById('changeimg')
//     img.src="/june 30 (Events)/katya-azimova-mNeWvHSoNdA-unsplash.jpg"
// }
// function img3(){
//     let img = document.getElementById('changeimg')
//     img.src="/june 30 (Events)/willian-justen-de-vasconcellos-6xOlLR7avI0-unsplash.jpg"
// }