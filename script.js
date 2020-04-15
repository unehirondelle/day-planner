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
});