
// Select the button and tasks container
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Function to handle creating a new task
var createTaskHandler = function() {
  // Create a new list item element
  var listItemEl = document.createElement("li");
  
  // Add a class to the list item
  listItemEl.className = "task-item";
  
  // Set the text content of the list item
  listItemEl.textContent = document.getElementById("task-input").value;
  
  // Append the list item to the tasks container
  tasksToDoEl.appendChild(listItemEl);
  
  // Clear the input field after adding the task
  document.getElementById("task-input").value = "";
};

// Add event listener to the button to trigger the task creation
buttonEl.addEventListener("click", createTaskHandler);
