let users = [
    {id: 12, name: "javohir", age: 15, salary: 250, isActive: true},
    {id: 13, name: "Anvar", age: 12, salary: 100, isActive: true},
    {id: 14, name: "Sarvar", age: 18, salary: 300, isActive: false},
    {id: 15, name: "Begzod", age: 21, salary: 200, isActive: false}
]

let per = users.map(salom => (salom.salary + ((salom.salary / 100) * 15)))
console.log(per)