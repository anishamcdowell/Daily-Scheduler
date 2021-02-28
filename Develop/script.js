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

//for loops with i value = 8. use localStorage.getItem[i]
// select time block via id of i
// .children to get the textarea
// textarea.value(localStorage.getItem(i))

//Display events in local storage
function displayEvents() {
  for (var i = 8; i < 8 && i <= 21; i++) {
    document.getElementById().children(".textarea");
  };
  $(".textarea").val(localStorage.getItem(i));
  return;
};

displayEvents();
