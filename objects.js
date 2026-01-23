let person = {
    "name": "Jane Doe",
    "age":25,
    "address":"123 KIMATHI ST",
    "is student":true
}
console.log(person)
console.log(typeof(person))//object

//accessingg values - dot notation
console.log(person.name) //Jane Doe
console.log(person.age)//25

//accessing values - bracket notation
console.log(person["is student"]) //true

//adding values / properties to an object
person.job = "Software Engineer"
console.log(person)//{name: 'Jane Doe', age: 25, address: '123 KIMATHI ST', is student: true, job: 'Software Engineer'}

person["id"] = 34567
console.log(person)

//updating existing values - use keys
person.name = "Alice Kamau"
console.log(person) //{name: 'Alice Kamau', age: 25, address: '123 KIMATHI ST', is student: true, job: 'Software Engineer', …}

console.log(Object.keys(person)) //['name', 'age', 'address', 'is student', 'job', 'id']
console.log(Object.values(person)) //['Alice Kamau', 25, '123 KIMATHI ST', true, 'Software Engineer', 34567]
console.log(Object.entries(person))


