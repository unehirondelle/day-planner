//get the current local time hour and date
let currentDate = new Date();
// console.log("Today:", currentDate);
let currentHour = currentDate.getHours();
// console.log("current hour", currentHour, typeof currentHour);
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

let newRow;
let hourValue;
//localStorage keys/values
let localStorageKeys = Object.keys(localStorage);
let localStorageValues = Object.values(localStorage);
// console.log(key);

//autocreate a table based on a current localStorage information
parseLocalStorage();

//set local storage based on user's input
$("#save").on("click", function () {
    let newTime = $("#time-picker option:selected").attr("value");
    let newTask = $("#task-description").val();
    console.log("time ", newTime, "task: ", newTask);
    localStorage.setItem(newTime, newTask);
    appendRow(newTime, newTask);
    console.log("keyText:", newTime, "valueText:", newTask);
    checkCurrentTime(newTime);
    //clean up textarea after saving task description
    $("#task-description").val("");
});

//close button to remove the new task block
$("#close").on("click", function () {
    $("#new-task").addClass("hide");
});

//take the actual text from key in localStorage
function parseLocalStorage() {
    for (let k = 0; k < localStorageKeys.length; k++) {
        if (localStorageKeys[k] !== -1) {
            let keyText = localStorageKeys[k];
            let valueText = localStorageValues[k];
            console.log("key:", localStorageKeys[k], "value: ", localStorageValues[k]);
            appendRow(keyText, valueText);
            checkCurrentTime(keyText);
        }
    }
}

//build the table
function appendRow(keyText, valueText) {
    newRow = $("<tr></tr>");
    let addTime = $("<th></th>");
    addTime.text(keyText);
    let addTask = $("<td></td>");
    addTask.text(valueText);
    $("#task-table").append(newRow);
    $(newRow).append(addTime);
    $(newRow).append(addTask);
}

//determine the class
function checkCurrentTime(keyText) {
    hourValue = parseInt(keyText.split(":")[0]);
    if (hourValue > currentHour) {
        newRow.addClass("future")
    } else if (hourValue === currentHour) {
        newRow.addClass("current");
    } else {
        newRow.addClass("past")
    }
}




