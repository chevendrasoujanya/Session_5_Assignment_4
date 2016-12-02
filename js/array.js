var employee = [
	{name: 'John',	age: 25,	salary: 50000,	address: {city: 'Bangalore', state: 'Karnataka', pincode: '560071'}},
	{name: 'Smith', age: 28, salary: 75000, address: {city: 'Mysore', state: 'Karnataka', pincode: '560084'}},
	{name: 'Thomson', age: 32, salary: 25000, address: {city: 'Hyderabad', state: 'Telangana', pincode: '501505'}},
	{name: 'Stephen', age: 30, salary: 125000, address: {city: 'Vijayawaga', state: 'Andhra Pradesh', pincode: '520011'}},
	{name: 'Robert', age: 35, salary: 500000, address: {city: 'Kurnool', state: 'Andhra Pradesh', pincode: '500013'}},
];

console.log("Employee Name: " + employee[3].name + "\n" + "Age: " + employee[3].age + "\n" + "Salary: " + employee[3].salary + "\n" + "City: " + employee[3].address.city + "\n" + "State: " + employee[3].address.state + "\n" + "PinCode: " + employee[0].address.pincode);