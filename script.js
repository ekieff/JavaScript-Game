
let buttonOne = document.getElementById('btnone');
let buttonTwo = document.getElementById('btntwo');
let buttonThree = document.getElementById('btnthree');
let buttonFour = document.getElementById('btnfour');
let buttonFive = document.getElementById('btnfive');
let buttonSix = document.getElementById('btnsix');
const btns = document.querySelectorAll('button[id^=btn]')
let opening = document.getElementsByClassName("opening");
let turn = document.getElementById("turn");
let gameWords = [];
let gameSynonym = document.getElementById("synonym");
let player = "Player One";
let playerOneScore = 0; 
let playerTwoScore = 0;
let displayPlayerOneScore = document.getElementById("playerOneScore");
let displayPlayerTwoScore = document.getElementById("playerTwoScore");
let winningValue;
let startButton = document.getElementById("start");
let startDiv = document.getElementById("opening");
let playAgainButton = document.getElementById("playAgain");
let customizeButton = document.getElementById("makeYourOwn");
defaultWords = [    
"abolish",
"absurd",
"abuse",
"access",
"accomplish",
"achievement",
"aggressive",
"alternate",
"altitude",
"antagonist",
"antonym",
"anxious",
"apparent",
"approximate",
"aroma",
"assume",
"astound",
"available",
"avalanche",
"banquet",
"beverage",
"bland",
"blizzard",
"budge",
"bungle",
"cautiously",
"challenge",
"character",
"combine",
"companion",
"crave",
"compassion",
"compensate",
"comply",
"compose",
"concept",
"confident",
"convert",
"course",
"courteous",
"debate",
"decline",
"dedicate",
"deprive",
"detect",
"dictate",
"document",
"duplicate",
"edible",
"endanger",
"escalate",
"evade",
"exasperate",
"excavate",
"exert",
"exhibit",
"exult",
"feeble",
"frigid",
"gigantic",
"gorge",
"guardian",
"hazy",
"hearty",
"identical",
"illuminate",
"immense",
"impressive",
"independent",
"industrious",
"intense",
"intercept",
"jubilation",
"kin",
"luxurious",
"major",
"miniature",
"minor",
"mischief",
"monarch",
"moral",
"myth",
"narrator",
"navigate",
"negative",
"nonchalant",
"numerous",
"obsolete",
"occasion",
"overthrow",
"pardon",
"pasture",
"pedestrian",
"perish",
"portable",
"preserve",
"protagonist",
"provide",
"purchase",
"realistic",
"reassure",
"reign",
"reliable",
"require",
"resemble",
"retain",
"retire",
"revert",
"saunter",
"seldom",
"senseless",
"sever",
"slither",
"sluggish",
"soar",
"solitary",
"solo",
"sparse",
"spurt",
"strategy",
"suffocate",
"summit",
"suspend",
"talon",
"taunt",
"thrifty",
"translate",
"visible",
"visual",
"vivid",
"wilderness",
"withdraw"
];

defaultSynonyms = [
"repeal",
"foolish",
"misconduct",
"entry",
"achieve",
"victory",
"intrusive",
"stand-in",
"distance",
"adversary",
"opposite",
"apprehensive",
"probable",
"close",
"perfume",
"speculate",
"bewilder",
"handy",
"barrage",
"feast",
"drink",
"banal",
"gale",
"change",
"botch",
"carefully",
"objection",
"nature",
"blend",
"accomplice",
"covet",
"empathy",
"pay",
"satisfy",
"make",
"theory",
"bold",
"disciple",
"plan",
"polite",
"argument",
"drop",
"allot",
"rob",
"observe",
"govern",
"chronicle",
"clone",
"tasty",
"expose",
"grow",
"avoid",
"annoy",
"scrape",
"apply",
"advertise",
"rejoice",
"fragile",
"chilly",
"enormous",
"canyon",
"attendant",
"blurred",
"generous",
"exact",
"brighten",
"boundless",
"dramatic",
"self-reliant",
"diligent",
"deep",
"ambush",
 "happiness",
"cousin",
"deluxe",
"leading",
"mini",
"secondary",
"prank",
"emperor",
"adage",
"fantasy",
"author",
"cross",
"gloomy",
"aloof",
"plentiful",
"out-of-date",
 "incident",
 "abolish",
 "exonerate",
 "meadow",
 "hiker",
 "cease",
 "compact",
 "keep",
 "hero",
 "contribute",
 "acquire",
 "practical",
 "bolster",
 "dominate",
 "stable",
 "desire",
 "parallel",
 "cling to",
 "depart",
 "regress",
 "amble",
"hardly",
"illogical",
 "detach",
 "crawl",
"heavy",
 "lift",
 "lone",
"individual",
 "inadequate",
"eruption",
 "approach",
 "stifle",
 "capstone",
 "dangle",
 "claw",
"gibe",
 "frugal",
 "convert",
 "clear",
 "optic",
 "animated",
 "jungle",
 "leave"
];
let words;
let synonyms;
let customWords=[];
let customSynonyms=[];
//var mykey = config.MY_KEY;

function gamePlay(target){  //if button choice is the right value, increase score, always change user, always change words and relog scores, and prompt next user.
    if (target.textContent==winningValue[0] && player=="Player One"){
        playerOneScore ++;
        player = "Player Two";
        checkIfEndGame();   //for correct choices check if the scores prompt a win.
    }else if (target.textContent==winningValue[0] && player=="Player Two"){
        playerTwoScore ++;
        player = "Player One";
        checkIfEndGame();
    } else if (target.textContent!==winningValue[0] && player=="Player One"){
        player = "Player Two";
    } else if(target.textContent!==winningValue[0] && player=="Player Two"){
        player = "Player One";
    };

    wordsValues();
    turn.textContent = ("It's " +player + "'s turn." );
    displayPlayerOneScore.textContent = ("Player One: " + playerOneScore)
    displayPlayerTwoScore.textContent = (" Player Two: " + playerTwoScore)
}

btns.forEach(btn => { //on click run game play.

   btn.addEventListener('click', event =>{
    gamePlay(event.target);
    })
});


function checkIfEndGame (){ //if the score of a player is 10, reset score values for next play. for each, close gameplay and open the winner div.
    if (playerOneScore >= 5){
        playerOneScore = 0;
        playerTwoScore = 0;
        document.getElementById("mainboard").style.display="none";
        document.getElementById("winner").style.display="block";
        document.getElementById("winnerTitle").textContent=("Player One Wins!")
    } else if (playerTwoScore >=5){
        document.getElementById("winnerTitle").textContent=("Player Two Wins!")
        playerOneScore = 0;
        playerTwoScore = 0;
        document.getElementById("mainboard").style.display="none";
        document.getElementById("winner").style.display="block";
    }
}

startButton.addEventListener('click', function(){   //start button from the main screen uses default array to load word values, opens game page
    startDiv.style.display="none";
    document.getElementById("mainboard").style.display="block";
    words=defaultWords;
    synonyms=defaultSynonyms;
    wordsValues();
})

playAgainButton.addEventListener("click", function(){   //after win screen, button to replay, will open the game back up.
    document.getElementById("mainboard").style.display="block";
    document.getElementById("winner").style.display="none";
})

customizeButton.addEventListener("click", function(){   //on the start screen, if choosing to build custom, opens custom view.
    customizeButton.style.display="none";
    startDiv.style.display="none";
    document.getElementById("customize").style.display="block";
})



document.getElementById("newWord").addEventListener("click", function(){    //on submitting a new word, pulls value and logs into file, at the same time pulls the synonym from the api and logs to synonyms.
    let newWord = document.getElementById("newWords").value
    customWords.push(newWord);
    document.getElementById("newWords").value = "";

    let fullAddress = "https://dictionaryapi.com/api/v3/references/ithesaurus/json/" +newWord +"?key=5deba92a-f0fd-4d7a-b2ac-7a327f04d33c"
    fetch(fullAddress)
        .then(function(responseData){
            return responseData.json();
        })
        .then(function(jsonData){
            customSynonyms.push(jsonData[0].meta.syns[0][0]);
        })
});


document.getElementById("play").addEventListener("click", function(){   //on the play button in custom input, creates the play values. setting the words for the play values and opening gameboard.
    words=customWords;
    synonyms=customSynonyms;
    wordsValues();
    document.getElementById("customize").style.display="none";
    document.getElementById("mainboard").style.display="block";
});

function wordsValues(){ //creates array with words, for each round logs 4 random words into the array, using the index value of the word, matches the synonym, returns word, value and synonym into game words.
    gameWords = [];     //also finds a random synonym to create the synonym clue. logs values into buttons.
    for (i = 0; i < 4; i ++){
    let word = words[Math.floor(Math.random()*words.length)];
    let index = words.indexOf(word);
    let synonym = synonyms[index];
    gameWords[i]=[word , index , synonym];
    };
    winningValue = gameWords[Math.floor(Math.random()*gameWords.length)]
    synonym.textContent = (winningValue[2])
    
//buttons
    buttonOne.textContent = (gameWords[0][0]);
    buttonTwo.textContent = (gameWords[1][0]);
    buttonThree.textContent = (gameWords[2][0]);
    buttonFour.textContent = (gameWords[3][0]);
};