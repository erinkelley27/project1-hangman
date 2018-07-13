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
      lossScore = lossScore + 1
      if (lossScore === 1) {
        let head = document.querySelector('#hangman-head')
        head.idName = 'hangman-head'
        head.style.backgroundColor = 'lightpink'
      } else if (lossScore === 2) {
        let body = document.querySelector('#hangman-body')
        body.idName = 'hangman-body'
        body.style.backgroundColor = 'lightpink'
      } else if (lossScore === 3) {
        let leftArm = document.querySelector('#hangman-left-arm')
        leftArm.idName = 'hangman-left-arm'
        leftArm.style.backgroundColor = 'lightpink'
      } else if (lossScore === 4) {
        let rightArm = document.querySelector('#hangman-right-arm')
        rightArm.idName = 'hangman-right-arm'
        rightArm.style.backgroundColor = 'lightpink'
      } else if (lossScore === 5) {
        let leftLeg = document.querySelector('#hangman-left-leg')
        leftLeg.idName = 'hangman-left-leg'
        leftLeg.style.backgroundColor = 'lightpink'
      } else if (lossScore === 6) {
        let rightLeg = document.querySelector('#hangman-right-leg')
        rightLeg.idName = 'hangman-right-leg'
        rightLeg.style.backgroundColor = 'lightpink'
        // Set alert for loser
        window.alert('Better luck next time - try again')
      }
    }
    // Add letters to usedLetters array to be checked for later so the user cannot repeat a letter
    usedLetters.push(letter.value)
    // Set alert for winner
    if (winScore === wordArray.length) {
      window.alert('Winner!')
    }
  })
})

// EXTRAS
// Make it work for words that have repeat letters
// Clear the input field after submit is clicked
// Automatically reset after the game is over - clicks ok on the winner/loss alerts?
