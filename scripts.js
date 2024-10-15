const menuIcon = document.querySelector('.menu-icon')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')

menuIcon.addEventListener('click', () => {
	sidebar.classList.toggle('small-sidebar')
	container.classList.toggle('large-container')
})
