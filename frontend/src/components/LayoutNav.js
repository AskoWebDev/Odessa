const nav = document.getElementsById('navigation')[0]
const toggleBtn = document.getElementsById('btn')[0]

toggleBtn.addEventListener('click', () => {
	nav.classList.toggle('active')
})