var faker = require('faker');

var database = {users:[]};


for (var i = 0; i <= 5; i++) {
	
	database.users.push({
		id: i,
		name: faker.name.firstName() + ' ' + faker.name.lastName(),
		email: faker.internet.email(),
		phone: faker.phone.phoneNumber(),
    	city: faker.address.city(),
    	country: faker.address.country(),
    	title: faker.name.title()
	})
}

console.log(JSON.stringify(database));