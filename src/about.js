let about = () => {
	let body = document.querySelector('body')
	let content = document.getElementById('content')
	content.classList.add('about')

	let about = document.getElementById('about')
	about.classList.add('active')

	let container = document.createElement('div')
	container.classList.add('container')
	let headline = document.createElement('h1')
	let tagline = document.createElement('p')
	tagline.classList.add('text')

	headline.innerHTML = 'The Story of Lighthouse Eatery in Columbus, Ohio.'
	tagline.innerHTML =
		'Founded in 1918, the historic Columbus Lighthouse Eatery is home to world famous fine dining and exotic foods. Buckeye greats from Eddie George to Terrell Pryor have their sendoffs in style in our lovely venue.'

	container.appendChild(headline)
	container.appendChild(tagline)
	let footer = document.querySelector('footer')
	body.insertBefore(container, footer)
}

export default about
