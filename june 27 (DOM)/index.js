// DOM--
// it is the concept that helps us to make changes in html file from js 
// the element in the html is known as node in DOM 

let a= document.getElementById('head1')
console.log(a)
a.textContent="Hello World"

let b= document.getElementById('head2')
b.innerHTML="<i> Read More </i>"

// getElementById returns the single element.

let c= document.getElementsByClassName('head3')
// console.log(c) 
c[0].textContent="change with js"
c[1].textContent="js"

let d= document.getElementsByTagName('h3')
// console.log(d)
d[0].textContent="jsjsjs"

