// Submit a word button
let submitWordButton = document.querySelector('#submit-word-button')
let word = document.querySelector('#word-input-field')

// Submit a letter button
let submitLetterButton = document.querySelector('#submit-letter-button')
let letter = document.querySelector('#letter-input-field')

// Create blanks array
let blanksArray = []

// Create blank spaces in the blanks - quantity to equal length of the word array
submitWordButton.addEventListener('click', function (evt) {
  // Split the string into an array
  let wordArray = word.value.split('')
  for (let i = 0; i < wordArray.length; i++) {
    blanksArray.push('_ ')
    evt.preventDefault()
    console.log(word.value)
    console.log(wordArray)
    console.log(blanksArray)
  }
  // Add the blanks spaces into the #blank-spaces div
  for (let i = 0; i < blanksArray.length; i++) {
    let blanksDiv = document.createElement('li')
    blanksDiv.setAttribute('id', '[i]')
    let blankCharacters = document.createTextNode(blanksArray[i])
    blanksDiv.appendChild(blankCharacters)
    document.getElementById('blank-spaces').appendChild(blanksDiv)
  }
  // Submit a guess letter - will case matter?
  submitLetterButton.addEventListener('click', function (evt) {
    evt.preventDefault()
    console.log(letter.value)
    // Check if guess letter matches any letters in the array
    for (let i = 0; i < wordArray.length; i++) {
      if (letter.value === wordArray[i]) {
        console.log('true')
        // Set a variable to the index(es) where the letter value is true?
        document.querySelector('[i]').innerHTML = letter.value
      } else { // Create a hangman array and loop through, changing the first one that is not pink
        console.log('false')
      }
    }
  })
})

// // Determine if player has won or lost - should I do this in the if/else statement above?
// function callGame () {
// // If all blank spaces are replaced with letters, create an alert winner

// // If all body parts have appeared, create an alert loser
// ,
// }
