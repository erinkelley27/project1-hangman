// Submit a word button
let submitWordButton = document.querySelector('#submit-word-button')
let word = document.querySelector('#word-input-field')

// Submit a letter button
let submitLetterButton = document.querySelector('#submit-letter-button')
let letter = document.querySelector('#letter-input-field')

// Create blanks array
let blanksArray = []

// Set a base score
let score = 0

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
    // Check if guess letter matches any letters in the array
    for (let i = 0; i < wordArray.length; i++) {
    // The letter appears in place of a blank when the user guesses correctly
      if (letter.value === wordArray[i]) {
        console.log('true')
        document.getElementById([i]).innerHTML = letter.value
      // The hangman appears part by part when the user guesses incorrectly
      } else if (letter.value !== wordArray[i]) { // Create a hangman array and loop through, changing the first one that is not pink
        console.log('false')
        score = (score + 1)
        if (score === blanksArray.length) {
          let head = document.querySelector('#hangman-head')
          head.idName = 'hangman-head'
          head.style.backgroundColor = 'yellow'
        }
      }
      // What happens when a repeat letter has been guessed already?
    }
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
