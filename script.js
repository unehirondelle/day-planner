// CREATE TASK-BLOCK
// addEventListener on a + button to create an element of a task block
$("#add-task").on("click", function () {
//   display the new task block
    $("#new-task").removeClass("hide");
});
let newTime = "";
let newTask = "";
//set local storage based on user's input
$("#save").on("click", function () {

    newTime = $("option").val();
    newTask = $("#task-description").val();
    console.log("time ", newTime, "task: ", newTask);
    localStorage.setItem(newTime, newTask);
//create new table row with task in a task-block
    let newRow = $("<tr></tr>");
    let addTime = $("<td></td>");
    addTime.text(newTime);
    let addTask = $("<td></td>");
    addTask.text(localStorage.getItem(newTime));
    console.log("localStorage task: ", localStorage.getItem(newTime));
    $("#task-table").append(newRow);
    $(newRow).append(addTime);
    $(newRow).append(addTask);
    $("#task-description").val("");
});

$("#close").on("click", function () {
    $("#new-task").addClass("hide");
})