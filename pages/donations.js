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

var formJSON;

function handleFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const formJSON = Object.fromEntries(data.entries());
  // this will allow multi-selects to show all opt-ins in the json
  formJSON.optIns = data.getAll("optIns");

  const results = document.querySelector(".results pre");
  results.innerText = JSON.stringify(formJSON, null, 2);
  // addOrUpdateCustomer(formJSON);
}

const form = document.querySelector(".donation-box");
form.addEventListener("submit", handleFormSubmit);

// module.exports = { formJSON };
console.log(formJSON);
