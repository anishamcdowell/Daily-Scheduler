//Display current day in header
var currentDayEL =  $("#currentDay");
var currentDay = moment().format("dddd, MMM Do, YYYY");
currentDayEL.text(currentDay);

//Timeblocks color coded by present, past, and future time
function getTime () {
  var currentHour = moment().hour();
    console.log(currentHour);
    $(".time-block").each(function() {
    var elementHour = $(this).attr("id")
    if (elementHour < currentHour) {
      $(this).addClass("past")
    } else if (elementHour > currentHour) {
      $(this).addClass("future")
    } else {
      $(this).addClass("present");
    }
  })

}

getTime();

//Capture user input from any textarea and save to local storage
var saveBtnEl = $(".saveBtn");

saveBtnEl.on("click", function() {
  var time = $(this).parent().attr("id");
  var value = $(this).siblings(".textarea").val();
  localStorage.setItem(time, value);
  });

//Display events in local storage
function displayEvents() {
  for (var i = 8; i < 8 && i <= 21; i++) {
    document.getElementById(i).children(".textarea");
  }
  $(".textarea").val(localStorage.getItem(i));
};

displayEvents();