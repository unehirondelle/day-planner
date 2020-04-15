// CREATE TASK-BLOCK
// addEventListener on a + button to create an element of a task block
$("#add-task").on("click", function () {
//   display the new task block
    $("#new-task").removeClass("hide");
});

//set local storage based on user's input
$("#save").on("click", function () {
    let newTime = $("option").val();
    let newTask = $("#task").val();
    console.log("time ", newTime, "task: ", newTask);
    localStorage.setItem(newTime, newTask);
//create new line with task in a task-block
    let addTime = $("<div>");
    // addTime.text(localStorage.getItem(newTime));
    console.log("localStorage time: ", localStorage.getItem(newTime));
    $("#task").append(addTime);

});