/* const person = {
    name: 'Devin',
    age: 53,
    location: {
        city: 'Downers Grove, IL',
        temperature: 42
    }
}

const {name = 'Anonymous', age} = person;

console.log(`${name} is ${age}.`);

const {city, temperature: temp} = person.location;
if (city && typeof temp === 'number') {
    console.log(`It's ${temp} in ${city}.`)
} */

//
// object destructuring 
//

/* const book = {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    publisher: {
        name: 'Allen & Irwin',
        date: 'June 26, 1952'
    }
}
const { title, author } = book;
const { name: publisherName = 'Some guy in a van.', date} = book.publisher;

console.log(`${title} was published by ${publisherName} on ${date}.`); */

//
// array destructuring
//

const address = ['3739 Candlewood Ct', 'Downers Grove', 'IL', '60515', 'USA'];

let [, city, state = 'NY', zip] = address

console.log(`You are in ${city} ${state} with postal code ${zip}.`);

const items = ['Coffee (hot)', '$1.50', '$2.00', '$2.75'];

let [item, , mediumCost] = items;

console.log(`A medium ${item} costs ${mediumCost}.`)