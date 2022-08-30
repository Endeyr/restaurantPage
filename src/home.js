import footer from './footer'
import nav from './nav'

let home = () => {
	let content = document.getElementById('content')
	content.classList.add('home')

	if (!document.querySelector('nav')) {
		let navbar = nav()
		content.appendChild(navbar)
	}
	let home = document.getElementById('home')
	home.classList.add('active')

	let container = document.createElement('div')
	container.classList.add('container')
	let header = document.createElement('header')
	let headline = document.createElement('h1')
	headline.innerHTML = 'Lighthouse Eatery'
	header.appendChild(headline)
	container.appendChild(header)

	let tagline = document.createElement('p')
	tagline.innerHTML = 'Great View, Better Food'
	header.appendChild(tagline)

	content.appendChild(container)

	if (!document.querySelector('footer')) {
		footer()
	}
}

export default home
