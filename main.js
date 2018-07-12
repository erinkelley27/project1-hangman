// Submit a word
let submitWordButton = document.querySelector('#submit-word-button')
let word = document.querySelector('#word-input-field')

// Create blanks array
let blanksArray = []

// Create blank spaces in the blanks - quantity to equal length of the word array
submitWordButton.addEventListener('click', function (evt) {
  // Split the string into an array
  let wordArray = word.value.split('')
  for (let i = 0; i < wordArray.length; i++) { 
    blanksArray.push('_')
    evt.preventDefault()
    console.log(word.value)
    console.log(wordArray)
    console.log(blanksArray)
  }
// Add the blanks spaces into the blankSpaces div
//   let blanks = document.createElement('div')
//   blanksArray = getElementsByClassName('blanksArray')
//   blanksArray[0].blank - spaces.appendChild(blanks)
//   blanks.id = 'blanks'

//   for (let i = 0; i < blanksArray.length; i++) {
//     blanks.appendChild(blanksArray[0])
//   }
// })

// Submit a guess letter
// let submitLetterButton = document.querySelector('#submit-letter-button')
// let letter = document.querySelector('#letter-input-field').value

// // Check if guess letter matches any letters in the array
// for (let i = 0; i < wordArray.length; i++) {
//     if letter === wordArray[i]
// // If yes, replace the space with the letter
//     return true
// }
// // If no, body part appears - head, body, left arm, right arm, left leg, right leg
// // Change the color from aqua to pink for the appropriate CSS grid child
// else {
//     return false
// }

// // Determine if player has won or lost
// function callGame () {
// // If all blank spaces are replaced with letters, create an alert winner

// // If all body parts have appeared, create an alert loser
// ,
// }
