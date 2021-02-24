// localStorage.getItem(userInput);

//Display current day in header
var currentDayEL =  $("#currentDay");
var currentDay = moment().format("dddd, MMM Do, YYYY");
currentDayEL.text(currentDay);

//Timeblocks for standard business hours
function getTime () {
  var currentHour = moment().hour();
    console.log(currentHour);
    $(".time-block").each(function() {
    var elementHour = $(this).attr("id").split("-")[1];
    if (elementHour < currentHour) {
      $(this).addClass("past")
    } else if ( elementHour === currentHour) {
      $(this).addClass("present")
    } else {
      $(this).addClass("future");
    }
  })

}

getTime()


//Caputure user input from any textarea and save to local storage
function captureInput() {
  $(".textarea").each(function() {
    $(".saveBtn").on("click", function() {
      var userInput = $(".textarea").val();
      localStorage.setItem("userInput", userInput);
      console.log(userInput);
      })
    })
  };

captureInput();

//Click save button for individual time blocks
var x = {
  name: 2,
}


//Text for events saved to local storage


//Refresh page and saved events persist
