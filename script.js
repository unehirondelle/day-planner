//get the current local time hour and date
let currentDate = new Date();
console.log("Today:", currentDate);
let currentHour = currentDate.getHours();
console.log("current hour", currentHour, typeof currentHour);
let weekdaysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "October", "December"]
let currentWeekday = weekdaysArr[currentDate.getDay() - 1];
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
    newTimeOption.attr("value", i + ":00");
    newTimeOption.text(i + ":00");
    $("#time-picker").append(newTimeOption);
}

let newTime = "";
let newTask = "";
//set local storage based on user's input
$("#save").on("click", function () {

    newTime = $("#time-picker option:selected").attr("value");
    newTask = $("#task-description").val();
    console.log("time ", newTime, "task: ", newTask);
    localStorage.setItem(newTime, newTask);
//create new table row with task in a task-block
    let newRow = $("<tr></tr>");
    //check if the current time
    let hourValue = parseInt(newTime.split(":")[0]);
    if (hourValue > currentHour) {
        newRow.addClass("future")
    } else if (hourValue === currentHour) {
        newRow.addClass("current");
    } else {
        newRow.addClass("past")
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

//take the actual text from key in localStorage
let key = Object.keys(localStorage);
let value = Object.values(localStorage);
console.log(key);
let keyText = "";
let valueText = "";
for (let k = 0; k < key.length; k++) {
    if (key[k] !== -1) {
        keyText = key[k];
        valueText = value[k];
        console.log("key:", key[k], "value: ", value[k]);
        checkLocalStorage();
    }
}

function checkLocalStorage() {
    let newRow = $("<tr></tr>");
    let addTime = $("<th></th>");
    addTime.attr("scope", "row");
    addTime.text(keyText);
    let addTask = $("<td></td>");
    addTask.text(valueText);
    $("#task-table").append(newRow);
    $(newRow).append(addTime);
    $(newRow).append(addTask);
}






