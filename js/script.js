const ballImg = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const answers = [
	'Tak!',
	'Nie!',
	'Może!',
	'Jeden rabin powie TAK a drugi NIE 🤷‍♂️',
	'Nie wiadomo!',
	'Nie chcesz znać odpowiedzi na to pytanie....',
	'Ten pociąg już dawno odjechał...🚅',
	'Nie rozumiem dlaczego wszyscy się tak pchają do tego FRONT-ENDU 🔥:)',
	'',
]

const generateAnswer = () => {
	error.textContent = ''
	answer.textContent = ''
	ballImg.classList.add('shake-animation')
	setTimeout(() => {
		inputCheck()
	}, 1000)
}

const inputCheck = () => {
	if (input.value === '') {
		error.textContent = 'Musisz zadać jakieś pytanie!'
	} else if (input.value.endsWith('?') !== true) {
		error.textContent = 'Pytanie musi się kończyć znakiem "?".'
	} else {
		showRandomAnswers()
	}
	ballImg.classList.remove('shake-animation')
}

const showRandomAnswers = () => {
	const number = Math.floor(Math.random() * (answers.length - 1))
	answer.innerHTML = `<span>Odpowiedź:</span> ${answers[number]}`
}

ballImg.addEventListener('click', generateAnswer)
