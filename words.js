//create an array from words.js
//log 6 random values from word.js
// for each value in the new array, set into btn
//identify important HTML elements
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
let player = "blue";
let blueScore = 0; //remember that light yellow and light blue are lease likely to be unreadable to colorblind students
let yellowScore = 0;
let gameScore = document.getElementById("score");
let winningValue;
let startButton = document.getElementById("start");
let startDiv = document.getElementById("opening");
let playAgainButton = document.getElementById("playAgain");
let customizeButton = document.getElementById("makeYourOwn");
console.log(btns);
defaultWords = [
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


//Start with popup of directions

//return a random word


//use wordsValue to log values into gameWords
console.log(gameWords); //references the word in the gamewords, need to log into the button text content

//log event listener on buttons, if value is true..add to player one score 
function checkWin(target){
    console.log(target.textContent);
    if (target.textContent==winningValue[0] && player=="blue"){
        console.log(true);
        blueScore ++;
        player = "yellow";
        checkIfEndGame();
        wordsValues();
    }else if (target.textContent==winningValue[0] && player=="yellow"){
        console.log(true);
        yellowScore ++;
        player = "blue";
        checkIfEndGame();
        wordsValues();
    } else if (target.textContent!==winningValue[0] && player=="blue"){
        console.log(false);
        player = "yellow";
        wordsValues();
    } else if(target.textContent!==winningValue[0] && player=="yellow"){
        console.log(false);
        player = "blue";
        wordsValues()
    };
    console.log(blueScore);
    console.log(yellowScore);
    turn.textContent = ("It's " +player + "'s turn." );
    gameScore.textContent = ("Blue: " + blueScore + " Yellow: " + yellowScore)
}

btns.forEach(btn => {

   btn.addEventListener('click', event =>{
    checkWin(event.target);
    })
});


function checkIfEndGame (){
    if (blueScore >= 10){
        console.log("Blue Player Wins!")
        blueScore = 0;
        yellowScore = 0;
        document.getElementById("mainboard").style.display="none";
        document.getElementById("winner").style.display="block";
        document.getElementById("winnerTitle").textContent=("Blue Player Wins!")
    } else if (yellowScore >=10){
        document.getElementById("winnerTitle").textContent=("Yellow Player Wins!")
        blueScore = 0;
        yellowScore = 0;
        document.getElementById("mainboard").style.display="none";
        document.getElementById("winner").style.display="block";
    }
}

startButton.addEventListener('click', function(){
    startDiv.style.display="none";
    document.getElementById("mainboard").style.display="block";
    words=defaultWords;
    synonyms=defaultSynonyms;
    wordsValues();

})

playAgainButton.addEventListener("click", function(){
    document.getElementById("mainboard").style.display="block";
    document.getElementById("winner").style.display="none";
})

customizeButton.addEventListener("click", function(){
    customizeButton.style.display="none";
    startDiv.style.display="none";
    document.getElementById("customize").style.display="block";
})


function wordsValues(){
    gameWords = [];
    for (i = 0; i < 6; i ++){
    let word = words[Math.floor(Math.random()*words.length)];
    let index = words.indexOf(word);
    let synonym = synonyms[index];
    gameWords[i]=[word , index , synonym];
    };
    winningValue = gameWords[Math.floor(Math.random()*gameWords.length)]
    synonym.textContent = (winningValue[2])
    console.log(winningValue);
    
//buttons
    buttonOne.textContent = (gameWords[0][0]);
    buttonTwo.textContent = (gameWords[1][0]);
    buttonThree.textContent = (gameWords[2][0]);
    buttonFour.textContent = (gameWords[3][0]);
    buttonFive.textContent = (gameWords[4][0]);
    buttonSix.textContent = (gameWords[5][0]);
};

document.getElementById("newWord").addEventListener("click", function(){
    customWords.push(document.getElementById("newWords").value);
    console.log(customWords);

})
let fullAddress;
function newSynonyms(){
    for (i = 0; i < customWords.length; i ++){
    fullAddress = "https://dictionaryapi.com/api/v3/references/ithesaurus/json/" +customWords[i] +"?key=5deba92a-f0fd-4d7a-b2ac-7a327f04d33c"
    fetch(fullAddress)
        .then(response => {
            return response.json();
        })
        .then(data =>{
            customSynonyms.push(data.meta.syns[1][1][1]);
            console.log(data.meta.syns[1][1][1]);
        })
}};

document.getElementById("play").addEventListener("click", function(){
    newSynonyms;
    words=customWords;
    synonyms=customSynonyms;
    wordsValues();
    document.getElementById("customize").style.display="none";
    document.getElementById("mainboard").style.display="block";
});

function grab_json_definition ($word, $ref, $key) {
    $uri = "https://dictionaryapi.com/api/v3/references/" + ($ref) + "/json/" + ($word) + "?key=" + ($key);

    return ($uri);
  };

  console.log(grab_json_definition("test", "ithesaurus", "5deba92a-f0fd-4d7a-b2ac-7a327f04d33c"));