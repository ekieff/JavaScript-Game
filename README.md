# JavaScript-Game

## Game Description
Codenames is a game of vocabulary, it will be played through passing turns between two players. Each game play a board will be set of words in a grid. A synonym "hint" will be provided that relates to the correct word the player should choose. If they correctly choose player will receive a point. After each guess the board will reset with new values for the next player. There is also an option to set your own words, and produce matching synonyms with Merrian Webster thesaurus api.


## Functions

- Game set,
- Game play,
- Check for win,
- Game reset,

## Elements

- JavaScript
- CSS
- HTML
- API

### Game Set

Game set will begin by forming an array that contains key value pairs of a word and a synonym. Retrieving the values to create the buttons. I'll need a function that chooses between these words a specific key, and presents it's pair.

- JavaScript functions

### Game Play

There are two types of game play for this website. The first is an automatic word list, sourced from a fifth grade vocabulary source. In the code these already have the values of defaultWords and defaultSynonyms. If you start to play from the main page these are referenced. Because vocabulary words aren't standardized I also added an option to log your own words to play. By selecting enter your own words you a form appears to enter your game play. It references the Merrian Webster API to produce a synonym pair for each word entered. There are a few challenges with custom game play. The fewer words the more frequently they may appear as options in the random distribution. If a student incorrectly spells a word it will not produce a reference, and if the word doesn't have a synonym a value won't be entered for it. 

### Check for Win

A winner is produced by logging 10 points, at this point the points are reset and the winner is displayed. You can choose to continue play. One feature I added is that the player rounds continue in order. So if Player Two wins the next player is still Player One. I wanted this to account for the "tic-tac-toe" controversy of evenly matched players determined by order.


#### Layout
The layout is simple and confirming to accessible education standards with two key features. The colors yellow and blue and high contrast of white text is best standard for colorblind or vision impaired students. The naming conventions also keep clear to be read by descriptive audio devices. There are some adjustments to display to change between devices.