//create an array from words.js
//log 6 random values from word.js
// for each value in the new array, set into btn
//identify important HTML elements
let buttonOne = document.getElementById('one');
let buttonTwo = document.getElementById('two');
let buttonThree = document.getElementById('three');
let buttonFour = document.getElementById('four');
let buttonFive = document.getElementById('five');
let buttonSix = document.getElementById('six');
let opening = document.getElementsByClassName("opening");
let turn = document.getElementById("turn");
let gameWords = [];
let gameSynonym = document.getElementById("synonym");
let player = "blue";
let blueScore = 0; //remember that light yellow and light blue are lease likely to be unreadable to colorblind students
let yellowScore = 0;
let gameScore = document.getElementById("score");

console.log(blueScore);
words = [
"Abolish",
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

synonyms = [
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

//Start with popup of directions

//return a random word

function wordsValues(){

    let word = words[Math.floor(Math.random()*words.length)];
    let index = words.indexOf(word);
    let synonym = synonyms[index];
    return[word , index , synonym];
    
};
//use wordsValue to log values into gameWords
for (i = 0; i < 6; i ++){
    gameWords[i]=(wordsValues());
}

console.log(gameWords); //references the word in the gamewords, need to log into the button text content

//create a synonym from the array something like Math.Random(gameWords[][2])
let winningValue = gameWords[Math.floor(Math.random()*gameWords.length)]
synonym.textContent = (winningValue[2])
console.log(winningValue);

buttonOne.textContent = (gameWords[0][0]);
buttonTwo.textContent = (gameWords[1][0]);
buttonThree.textContent = (gameWords[2][0]);
buttonFour.textContent = (gameWords[3][0]);
buttonFive.textContent = (gameWords[4][0]);
buttonSix.textContent = (gameWords[5][0]);

//log event listener on buttons, if value is true..add to player one score 
function checkWin(target){
    console.log(target.textContent);
    if (target.textContent==winningValue[0] && player=="blue"){
        console.log(true);
        blueScore ++;
        player = "yellow";
        checkIfEndGame();
    }else if (target.textContent==winningValue[0] && player=="yellow"){
        console.log(true);
        yellowScore ++;
        player = "blue";
        checkIfEndGame();
    } else if (target.textContent!==winningValue[0] && player=="blue"){
        console.log(false);
        player = "yellow";
    } else if(target.textContent!==winningValue[0] && player=="yellow"){
        console.log(false);
        player = "blue";
    };
    console.log(blueScore);
    console.log(yellowScore);
    turn.textContent = ("It's " +player + "'s turn." );
    gameScore.textContent = ("Blue: " + blueScore + " Yellow: " + yellowScore)
}

buttonOne.addEventListener('click', function(){checkWin(buttonOne)});
buttonTwo.addEventListener('click', function(){checkWin(buttonTwo)});
buttonThree.addEventListener('click', function(){checkWin(buttonThree)});
buttonFour.addEventListener('click', function(){checkWin(buttonFour)});
buttonFive.addEventListener('click', function(){checkWin(buttonFive)});
buttonSix.addEventListener('click', function(){checkWin(buttonSix)});

function checkIfEndGame (){
    if (blueScore >= 10){
        console.log("Blue Player Wins!")
        blueScore = 0;
        yellowScore = 0;
    } else if (yellowScore >=10){
        console.log("Yellow Player Wins!")
        blueScore = 0;
        yellowScore = 0;
    }
}

