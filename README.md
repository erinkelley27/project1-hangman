# Project 1: Hangman

## Description

My project is an interactive game of hangman, intended for two users. User 1 can submit a word, which User 2 must guess by submitting different letters one-by-one. When User 2 guesses a letter correctly, it appears on the screen in the same place as the word. When User 2 guesses a letter incorrectly, one of the hangman's body parts will appear. In order to win, User 2 must guess all letters of the word correctly before the hangmen is complete. If the hangman completes before the word, User 2 loses the game.

## Approach

I selected hangman because it was one of the only games from the list that I had heard of before. I first through through the process of playing hangman, taking notes of each step. Then, I created a wireframe of how I wanted the site to look, making sure it included any features that the user may need to interact with. Next, I started with HTML and CSS, creating my hangman using the CSS grid.

Moving on to Javascript, I put my notes about the process of playing hangman into pseudocode. From here, I started to write my code starting with the first step. Throughout writing all of my code, I added more global variables at the top of my JS to be accessed from inside multiple events and functions.

I initially thought that I would create separate events and functions for each of my steps, but I realized that it was important to do some serious nesting to that the variables and arrays I needed by every event and function that came up.

When it came to score, I decided to create a variable for winScore and lossScore because it was easier to set a conditional for what I wanted to happen when a user won or lost. One score can fluctuate quite a bit, and I needed things to happen in relation to a certain number of turns taken, not a certain score that needed to be reached.

I used a lot of trial and error in getting this game to be semi-successful. I used the console.log and the Inspect feature on Chrome in order to debug my program. And obviously tons of help from Google, everyone in class, Hector and Don.

## Solved Problems

I encountered my first problem with scope. I wanted to split the word into an array with one variable per letter. I declared my array in the global scope, but I ended up having to move it with the scope of event in which the submit button was clicked.

My next struggle was with getting each correct letter of the word to appear in place of the appropriate blank space. All of the guess letters submitted were appearing in hte first blank. To solve this problem (after probably 3 hours), I checked the DOM after submitting my word. Insted of assigning my li tag an id of the index of each letter in the word array, I assigned it as '[i]' which is a string. Because of this, all of my li tags had the same id. 

My final roadblock was with changing the color of a part of the hangman when an incorrect letter was submitted. I originally created a loop that ran through the word array to determine if the letter that was submitted by the user matched any in the word. This worked well, but when I tried to write code for what would happen if a letter was guessed incorrectly, the score (that I intended to use as a conditional for an if statement) was skewed because there was no way to predict a score efficiently by looping through the array. I took out the for loop and used an if else statement with wordArray.includes to find a match without a loop. Then I used .indexOf to put the letter in the correct list item in the DOM.

## Unsolved Problems

* The game does not work if a word has more than one of the same letter.
* The input field does not clear when a word or letter is submitted.
* The alerts for game won and game lost pop up before the letter or hangman part appear in the DOM.
* The game does not automatically reset when the game is over.
* I eventually hope to adjust the CSS to make this game look like it was created in 2018, not 1985.

## List of Features / User Stories

* When the user submits a word, an equal number of blanks to the word length appear on the screen.
* When the user submits a correct letter, the corresponding blank is replaced by the letter.
* When the user submits an incorrect letter, a body part on the hangman appears by changing the color from teal to pink.
* The user receives an alert if a repeat letter is submitted.
* The user receives an alert when the game has been won.
* The user receives an alert when the game has been lost.

## List of Technologies Used

* HTML
* CSS
* Javascript

## Installation Instructions

* Fork repository.
* Clone repository to your local device.
* Open index.html in your browser.
* Play!