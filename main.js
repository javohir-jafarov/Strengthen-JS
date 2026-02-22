let users = [
    {id: 12, name: "javohir", age: 15, salary: 250, isActive: true},
    {id: 13, name: "Anvar", age: 12, salary: 100, isActive: true},
    {id: 14, name: "Sarvar", age: 18, salary: 300, isActive: false},
    {id: 15, name: "Begzod", age: 21, salary: 200, isActive: false}
]

let active = users.filter(item => item.isActive == true)
for (let i = 0; i < active.length; i++) {
    console.log(active[i].name)
}

let per = users.map(item => item.salary + item.salary * 0.15)
console.log(per)


let total = users.reduce((yiguvchi, hozirgi) => yiguvchi + hozirgi.salary, 0)
console.log("total" + ' ' + total);
