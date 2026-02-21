
const circle = document.createElement('div')
circle.style.height = '100px'
circle.style.width = '100px'
circle.style.backgroundColor = '#00000049'
circle.style.borderRadius = '50%'
circle.style.alignItems = 'center'
circle.style.justifyContent = 'between'
circle.style.display = 'flex'
document.body.appendChild(circle)
circle.className = 'circle'

let lilCircle = document.createElement('div')
circle.appendChild(lilCircle)

lilCircle.style.height = '50px'
lilCircle.style.width = '50px'
lilCircle.style.backgroundColor = '#0000009f'
lilCircle.style.borderRadius = '50%'


window.addEventListener('mousemove', (e) => {
    circle.style.transform = `translate(calc(${e.clientX}px - 50px), calc(${e.clientY}px - 50px))`,
    console.log(circle.style.transform)
})



