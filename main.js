let inp = document.querySelector('input')
let btn = document.querySelector('button')
let div = document.querySelector('div')

let p = document.createElement('p')

div.appendChild(p)

inp.addEventListener('keyup', (e) => {
    p.innerText = inp.value
})