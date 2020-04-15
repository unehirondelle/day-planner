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

//get the current local time hour
let currentDate = new Date($.now());
let currentHour = currentDate.getHours();
console.log("current hour", currentHour, typeof currentHour);

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







