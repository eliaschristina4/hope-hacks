// where any client side JS and fetches will go

// const contentToCheck = contentInput.value;
document.querySelector('#check-content-btn').addEventListener('click', (event) => {
    const contentToCheck = document.getElementById("content-input").value;

    runGrammarChecker(contentToCheck); // won't work bc of axios situation. need to move below stuff to server.js but that can't access document.querySelecter.etc. so need to export an instance like in the tutorial and nestly the function below in the instance
    console.log(contentToCheck);
});


function runGrammarChecker(contentToCheck){
    const encodedParams = new URLSearchParams();
    encodedParams.append("text", contentToCheck);
    encodedParams.append("language", "en-US");
    
    const options = {
      method: 'POST',
      url: 'https://grammarbot.p.rapidapi.com/check',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '8b6d21335emsh214b124ff3c14a7p1cad53jsna29e7e1a2155',
        'X-RapidAPI-Host': 'grammarbot.p.rapidapi.com'
      },
      data: encodedParams
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
};