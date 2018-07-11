// Submit a word
let submitWordButton = document.querySelector('#submit-word-button')
let word = document.querySelector('#word-input-field').value

// Split the string into an array
let wordArray = word.split(' ')

// Create blank spaces - quantity to equal length of the array (map?)
submitWordButton.addEventListener('click', function (evt) {
  evt.preventDefault()
  let blanksArray = []
  for (let i = 0; i <= wordArray.length; i++) {
    blanksArray.push('_')
    // Return them to the blanks spaces div
    let blankSpaces = document.createElement('p')
    document.blank-spaces.appenChild(blankSpaces)
  }
})

// Submit a guess letter

// Check if guess letter matches any letters in the array

// If yes, letter appears appears in the same index of the blank space array, replacing the space

// If no, body part appears - head, body, left arm, right arm, left leg, right leg
// Change the color from aqua to pink for the appropriate CSS grid child

// If all blank spaces are replaced with letters, create an alert winner

// If all body parts have appeared, create an alert loser
