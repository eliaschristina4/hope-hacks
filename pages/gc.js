// client side JS and 3rd Party API (grammar checker)
// basic concept: check button --> send to api --> return message from API --> enter that into the output textarea


/* REFRESH BTN EVENT LISTENER that reload the window so you can enter another sentence */
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
    
    let feedback = "";
    
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
            feedback = json;
            console.log(json);
            console.log(feedback.matches[0].message); // IT WORKEDDDDDD OMGGGGG
            // insert the message into the DOM
            if (feedback.matches[0].message) {
                let message = document.querySelector('#content-output');
                message.value = feedback.matches[0].message;  // works yeehaw
                message.classList.add('dynamic');
            } else if (feedback.matches[0].message == undefined) {
                document.querySelector('#content-output').value = 'There was a problem evaluating the text. Please try again.' // this doesn't work womp. the api is v picky !!!! COME BACK IF TIME
            }
        })
        .catch(err => console.error('error:' + err));
};
