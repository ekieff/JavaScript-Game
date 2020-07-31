# JavaScript-Game

## Game Description
Codenames is a game of vocabulary, it will be played through passing turns between two players. Each game play a board will be set of words in a grid. A synonym "hint" will be provided that relates to the correct word the player should choose. If they correctly choose player will receive a point. After each guess the board will reset with new values for the next player. There is also an option to set your own words, and produce matching synonyms with Merrian Webster thesaurus api.


## Use
User can choose between using the preloaded vocabulary words or utilizing the custom option to log their own words. It references the Merrian Webster API to produce a synonym pair for each word entered. There are a few challenges with custom game play. The fewer words the more frequently they may appear as options in the random distribution. If a student incorrectly spells a word it will not produce a reference, and if the word doesn't have a synonym to reference it will not be able to produce a synonym.

## Design
This game is designed for current needs for teachers to keep students engaged in virtual classrooms. Students can pair and share screen to utilize the activity together. Because of it's education purpose the game is also designed to be simple to read and focus as well as utilizes color schemes and contrasts that appeal to a broader spectrum of sight impaired learners. Most studies present blue and yellow as colors that are recognizable in multiple spectrums of viewers. Synonym recognition is a common core feature for fifth grade students, and the game is suited to this advanced computer user both in the complexity of custom entry and in the vocabulary preset.

### Game Play
A winner is produced by logging 10 points, at this point the points are reset and the winner is displayed. You can choose to continue play. One feature I added is that the player rounds continue in order. So if Player Two wins the next player is still Player One. I wanted this to account for the "tic-tac-toe" controversy of evenly matched players determined by order.

## Elements

- JavaScript
- CSS
- HTML
- API

### JavaScript

This game depends on many dom events to produce separately viewed elements to produce the gameflow.
One such event is the form submission that inputs customized words and lists the api value that corresponds with the synonym.
``` javaScript
document.getElementById("newWord").addEventListener("click", function(){    
    let newWord = document.getElementById("newWords").value
    customWords.push(newWord);
    document.getElementById("newWords").value = "";

    let fullAddress = "https://dictionaryapi.com/api/v3/references/ithesaurus/json/" +newWord +"key"
    fetch(fullAddress)
        .then(function(responseData){
            return responseData.json();
        })
        .then(function(jsonData){
            customSynonyms.push(jsonData[0].meta.syns[0][0]);
        })
});
```
### CSS

The CSS elements create visible buttons that scale with the size of the screen, as well as are visually distinguised from the headers.
The colors are yellow and blue, designed for inclusive use among students of different visual needs.

### HTML
The HTML elements are displayed in divs that allow for device reading as well as to be opened and closed during different game styles.

### Merriam-Webster Thesaurus API
The game fetches the values of synonyms in the customize screen through the thesaurus API, allowing students and teachers to create their own games with minimal efforts.