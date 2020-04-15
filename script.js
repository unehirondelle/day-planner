//get the current local time hour and date
let currentDate = new Date($.now());
console.log("Today:", currentDate);
let currentHour = currentDate.getHours();
console.log("current hour", currentHour, typeof currentHour);
let weekdaysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "October", "December"]
let currentWeekday = weekdaysArr[currentDate.getDay()-1];
let currentMonth = monthsArr[currentDate.getMonth()];
let currentDay = currentDate.getDate();
let currentYear = currentDate.getFullYear();

$("#current-date").text(currentWeekday + " " + currentMonth + " " + currentDay + " " + currentYear);

// CREATE TASK-BLOCK
// addEventListener on a + button to create an element of a task block
$("#add-task").on("click", function () {
//   display the new task block
    $("#new-task").removeClass("hide");
});

//generate values for time selection options
for (let i = 0; i < 24; i++) {
    let newTimeOption = $("<option></option>");
    newTimeOption.attr("value", i);
    newTimeOption.text(i + ":00");
    $("#time-picker").append(newTimeOption);
}

let newTime = "";
let newTask = "";
//set local storage based on user's input
$("#save").on("click", function () {

    newTime = $("#time-picker option:selected").text();
    newTask = $("#task-description").val();
    console.log("time ", newTime, "task: ", newTask);
    localStorage.setItem(newTime, newTask);
//create new table row with task in a task-block
    let newRow = $("<tr></tr>");
    let hourValue = parseInt(newTime.split(":")[0]);
    if (hourValue === currentHour) {
        newRow.addClass("current");
    }
    let addTime = $("<th></th>");
    addTime.attr("scope", "row");
    addTime.text(newTime);
    let addTask = $("<td></td>");
    addTask.text(localStorage.getItem(newTime));
    $("#task-table").append(newRow);
    $(newRow).append(addTime);
    $(newRow).append(addTask);
    //clean up textarea after saving task description
    $("#task-description").val("");

});

//close button to remove the new task block
$("#close").on("click", function () {
    $("#new-task").addClass("hide");
});







