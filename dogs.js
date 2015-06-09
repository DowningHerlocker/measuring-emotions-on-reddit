var dogs =[ {name: 'homer', age:3}, {name: 'plato', age:5}, {name: 'otto', age:4}]

var ages= []
dogs.forEach(function(dog) {
	ages.push(dog.age) 
})

console.log(ages)

