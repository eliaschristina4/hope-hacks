// var firstName = "";
// var lastName = "";
// var email = "";
// var dType = "";
// var receipt = "";
// var anon = "";
// var list = "";
// var amount = "";

// $(".set-amount").autoGrow(0);

// /*
// 			if(isiPad || jQuery.browser.mobile){
// 				$('#team').hide()
// 				$('.team-mobile').show();
// 			}else{
// 				$('#team').show()
// 				$('.team-mobile').hide();
// 			}
// 		*/

// //Set & Highlight Donation Amount
// $(".button").click(function () {
//   $(".button").removeClass("selected");
//   $(this).addClass("selected");

//   $(this).find("input").focus();
// });

// //Grow the donation box if they type more than 4 numbers
// $(".set-amount").keyup(function () {
//   if (this.value != this.value.replace(/[^0-9\.]/g, "")) {
//     this.value = this.value.replace(/[^0-9\.]/g, "");
//   }
// });

// $("input").on("change", function () {
//   // $(".donation-box").css("height", "500px");

//   firstName = $("#firstName").val();
//   lastName = $("#lastName").val();
//   email = $("#email").val();

//   if ($("#one-time").prop("checked")) {
//     dType = "One-Time";
//   }
//   if ($("#monthly").prop("checked")) {
//     dType = "Monthly";
//   }
// });
// const { addOrUpdateCustomer } = require("./dynamo");

//?The below function is used to take the table output, convert it to a json format, then send it to the api

function handleFormSubmit(event) {
  // event.preventDefault(); //? This keeps the page from refreashing automatically when submit is hit, and is for testing purposes

  const data = new FormData(event.target); //? Targets the data of the form
  const formJSON = Object.fromEntries(data.entries());
  formJSON.optIns = data.getAll("optIns"); //? this will allow multi-selects with the 'optIns' name to show all opt-ins in the json
  // console.log(formJSON);
  //!send to app.js(api) and call fetch
  fetch("http://127.0.0.1:3000/donate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formJSON),
  })
    .then((res) => res.json()) //This sends the json data
    .then((data) => console.log(data)) //console logs the json
    .catch(console.error()); //if there is an error, this will tell what the cause is

  //? the below code was used to test the function and display the output json below the form
  // const results = document.querySelector(".results pre");
  // results.innerText = JSON.stringify(formJSON, null, 2);
  // addOrUpdateCustomer(formJSON);
}

const form = document.querySelector(".donation-box");
form.addEventListener("submit", handleFormSubmit); //? this runs the function when the submit button is clicked
