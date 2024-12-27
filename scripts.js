const menuIcon = document.querySelector('.menu-icon')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')

menuIcon.addEventListener('click', function () {
	console.log(this)
	sidebar.classList.toggle('small-sidebar')
	container.classList.toggle('large-container')
})

Object.prototype.sayHello = function () {
	console.log(this)
	console.log(`${this.name} is ${this.type} ${this.name} say hello`)
}

// Class definition for creating a "Car" object
class Car {
	constructor(brand, model, year) {
		this.brand = brand
		this.model = model
		this.year = year
	}

	// Method to display car details
	getDetails() {
		return `${this.brand} ${this.model} (${this.year})`
	}

	// Method to start the engine
	startEngine() {
		return `${this.brand} ${this.model}'s engine has started!`
	}
	printDetail() {
		console.log(`${this.brand} -  ${this.model}  -  ${this.year}`)
	}
}

// Creating new car objects using the 'new' keyword
const car1 = new Car('Toyota', 'Camry', 2021)
const car2 = new Car('Tesla', 'Model 3', 2022)

// Accessing the methods from the object
console.log(car1.getDetails())
console.log(car2.getDetails())

console.log(car1.startEngine())
console.log(car2.startEngine())
car2.printDetail()

document.getElementById('bt').addEventListener('click', function name(params) {
	console.log(this.tagName)
})

class Player {
	constructor(name, hp, mp, items) {
		this.name = name
		this.hp = hp
		this.mp = mp
		this.items = items
		console.log('player this', this)
	}
}

class Warrior extends Player {
	constructor(name, hp, mp, items, shield) {
		super(name, hp, mp, items)
		this.shield = shield
		console.log('warrior this', this)
	}
}

const player = new Player('Player', 100, 50, ['banana'])
// console.log(player)

const warrior = new Warrior(
	'Genghis Khan',
	500,
	50,
	['Sabre'],
	'Leather Shield',
)
console.log(warrior)

// Great Grandparent for bubbling
document.getElementById('great-grandparent').addEventListener(
	'click',
	function (e) {
		console.log('Great Grandparent clicked during bubbling')
	},
	true,
)

// Grandparent for bubbling
document.getElementById('grandparent').addEventListener(
	'click',
	function () {
		console.log('Grandparent clicked during bubbling')
	},
	true,
)

// Parent for bubbling
document.getElementById('parent').addEventListener(
	'click',
	function (e) {
		console.log('Parent clicked during bubbling')
	},
	true,
)

// Function for debounce (waits for a pause in events)
function debounce(callback, delay) {
	let timer
	return function (...args) {
		if (timer) clearTimeout(timer) // Clear the timer on each event trigger
		timer = setTimeout(() => {
			callback.apply(this, args) // Execute after delay once user stops
		}, delay)
	}
}

// Function for throttle (executes at most once every 'limit' time period)
function throttle(callback, limit) {
	let inThrottle = true
	return function (...args) {
		if (inThrottle) {
			callback.apply(this, args) // Run the callback immediately
			inThrottle = false
			setTimeout(() => (inThrottle = true), limit) // Block further calls for 'limit' ms
		}
	}
}

// Function to simulate a search query (debounce example)
function searchQuery(query) {
	console.log('Debounced Search for:', query)
	document.getElementById('debounce').innerText = query
}

// Function to simulate throttle query (throttle example)
function throttleQuery(query) {
	console.log('Throttled Search for:', query)
	document.getElementById('throttle').innerText = query
}

// Get input element
const searchInput = document.getElementById('myInput')

// Debounced search (waits for 1000ms after user stops typing)
const debouncedSearch = debounce(function () {
	searchQuery(searchInput.value)
}, 1000)

// Throttled search (runs at most once every 1000ms, even during typing)
const throttledSearch = throttle(function () {
	throttleQuery(searchInput.value)
}, 1000)

// Event listener for input
searchInput.addEventListener('keyup', function () {
	debouncedSearch() // Debounced behavior
	throttledSearch() // Throttled behavior
	document.getElementById('default').innerText = searchInput.value // Immediate update
})

function sum(n) {
	return function (nextNum) {
		if (nextNum === undefined) {
			// Explicitly check for undefined
			return n
		}
		return sum(n + nextNum)
	}
}

console.log(sum(2)(8)()) // 10, with () to stop the chain
