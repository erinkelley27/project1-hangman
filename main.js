// Submit a word button
let submitWordButton = document.querySelector('#submit-word-button')
let word = document.querySelector('#word-input-field')

// Submit a letter button
let submitLetterButton = document.querySelector('#submit-letter-button')
let letter = document.querySelector('#letter-input-field')

// Create blanks arrays
let blanksArray = []

// Create array for letters the user has already guessed
let usedLetters = []

// Declare score variables
let winScore = 0
let lossScore = 0

// Create blank spaces in the blanks - quantity to equal length of the word array
submitWordButton.addEventListener('click', function (evt) {
  evt.preventDefault()
  // Split the string into an array
  let wordArray = word.value.split('')
  for (let i = 0; i < wordArray.length; i++) {
    blanksArray.push('_ ')
    console.log(word.value)
    console.log(wordArray)
    console.log(blanksArray)
  }
  // Add the blanks spaces into the #blank-spaces ul
  for (let i = 0; i < blanksArray.length; i++) {
    let blanksUl = document.createElement('li')
    blanksUl.setAttribute('id', [i])
    let blankCharacters = document.createTextNode(blanksArray[i])
    blanksUl.appendChild(blankCharacters)
    document.getElementById('blank-spaces').appendChild(blanksUl)
  }
  // Submit a guess letter - will case matter?
  submitLetterButton.addEventListener('click', function (evt) {
    evt.preventDefault()
    console.log(letter.value)
    // Set an alert if user guesses the same letter twice
    if (usedLetters.includes(letter.value)) {
      window.alert('You already guessed that one!')
      winScore = winScore + 0
      lossScore = lossScore = 0
    // Make letter appear in correct blank space if user guesses correctly
    } else if (wordArray.includes(letter.value)) {
      winScore = winScore + 1
      document.getElementById(wordArray.indexOf(letter.value)).innerHTML = letter.value
    // Make hangman change colors if user guesses incorrectly
    } else {
      console.log('false')
      lossScore = lossScore + 1
      if (lossScore === 1) {
        let head = document.querySelector('#hangman-head')
        head.idName = 'hangman-head'
        head.style.backgroundColor = 'yellow'
      } else if (lossScore === 2) {
        let body = document.querySelector('#hangman-body')
        body.idName = 'hangman-body'
        body.style.backgroundColor = 'yellow'
      } else if (lossScore === 3) {
        let leftArm = document.querySelector('#hangman-left-arm')
        leftArm.idName = 'hangman-left-arm'
        leftArm.style.backgroundColor = 'yellow'
      } else if (lossScore === 4) {
        let rightArm = document.querySelector('#hangman-right-arm')
        rightArm.idName = 'hangman-right-arm'
        rightArm.style.backgroundColor = 'yellow'
      } else if (lossScore === 5) {
        let leftLeg = document.querySelector('#hangman-left-leg')
        leftLeg.idName = 'hangman-left-leg'
        leftLeg.style.backgroundColor = 'yellow'
      } else if (lossScore === 6) {
        let rightLeg = document.querySelector('#hangman-right-leg')
        rightLeg.idName = 'hangman-right-leg'
        rightLeg.style.backgroundColor = 'yellow'
        // Set alert for loser
        window.alert('Better luck next time - try again')
      }
    }
    // Add letters to usedLetters array to be checked for later so the user cannot repeat a letter
    usedLetters.push(letter.value)
  })
})

// Determine if player has won or lost - should I do this in the if/else statement above?
// function callGame () {
// If all blank spaces are replaced with letters, create an alert winner
// If all body parts have appeared, create an alert loser
// Remove console logs

// EXTRAS
// Clear the input field after submit is clicked
// Automatically reset after the game is over - clicks ok on an alert?

// lossScore = lossScore + 1
// if (lossScore === blanksArray.length) {
//   let head = document.querySelector('#hangman-head')
//   head.idName = 'hangman-head'
//   head.style.backgroundColor = 'yellow'
// What happens when a repeat letter has been guessed already?
