// client side JS and 3rd Party API (grammar checker)
// basic concept: check button --> send to api --> return message from API --> enter that into the output textarea


/* REFRESH BTN EVENT LISTENER that reload the window so you can enter another sentence to check */
document.querySelector('#reload-btn').addEventListener('click', (event) => {
    window.location.reload();
});


/* CHECK BTN EVENT LISTENER that calls runGrammarChecker function on click */
document.querySelector('#check-content-btn').addEventListener('click', (event) => {
    let contentToCheck = document.getElementById("content-input").value
    // console.log(contentToCheck); // works
    
    runGrammarChecker(contentToCheck);
});
   

/* GRAMMAR BOT API FETCH nested within function*/
function runGrammarChecker(contentToCheck){
    const encodedParams = new URLSearchParams();
    encodedParams.append("text" , contentToCheck);
    encodedParams.append("language", "en-US");
    
    const url = 'https://grammarbot.p.rapidapi.com/check';
    
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded', 
        'X-RapidAPI-Key': '8b6d21335emsh214b124ff3c14a7p1cad53jsna29e7e1a2155',// process.env.API_KEY, // won't let me use this bc process undefined? have to put the actual API Key which is then exposed on github ugh
        'X-RapidAPI-Host': 'grammarbot.p.rapidapi.com'
      },
      body: encodedParams
    };
    
    fetch(url, options)
        .then(res => res.json())
        .then(json => {
            let feedback = json;
            console.log(json);
            // insert the message into the DOM
            let message = document.querySelector('#content-output');
            if (feedback.matches.length === 0){
                message.value = 'Congratulations! No errors found.'
            } else if (feedback.matches[0].message){
                for (let i = 0; i < feedback.matches.length; i++){
                    console.log(feedback.matches[i].message);
                    message.value +=  `${feedback.matches[i].message} `;
                }
            } 
            message.classList.add('dynamic');
        })
        .catch(err => console.error('error:' + err));
}; 




// in future, could make this app better by putting the error in a list and then possible replacement as well. say where the error is, why it's wrong, and replacement suggestions.