let customSynonyms=[];
fetch("https://dictionaryapi.com/api/v3/references/ithesaurus/json/cat?key=5deba92a-f0fd-4d7a-b2ac-7a327f04d33c")
        .then(function(responseData){
            return responseData.json();
        })
        .then(function(jsonData){
            console.log(jsonData);
            
            customSynonyms.push(jsonData[0].meta.syns[0][0]);
            console.log(jsonData[0].meta.syns[0][0]);
        })
console.log(customSynonyms);