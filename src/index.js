import about from './about'
import clear from './clear'
import contact from './contact'
import home from './home'
import menu from './menu'
import './reset.css'
import './style.css'

home()

//Home tab
let homeBtn = document.getElementById('home')
homeBtn.onclick = () => {
	clear()
	home()
}

// About tab
let aboutBtn = document.getElementById('about')
aboutBtn.onclick = () => {
	clear()
	about()
}

// Menu tab
let menuBtn = document.getElementById('menu')
menuBtn.onclick = () => {
	clear()
	menu()
}

// Contact tab
let contactBtn = document.getElementById('contact')
contactBtn.onclick = () => {
	clear()
	contact()
}
