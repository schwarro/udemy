var todos = [];

var input = prompt("What would you like to do?");

while(input != "quit") {
  if (input === "list") {
    console.log("**************")
    todos.forEach(function(todo, i){
      console.log((i+1) + ": " + todo);
      console.log("**************")
    });
  } else if (input === "new") {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added " + newTodo);
  } else if (input === "delete") {
    var deleteTodo = prompt("Which item do you want to delete?");
    todos.splice((deleteTodo - 1), 1);
    console.log("Deleted " + deleteTodo);
  }

  input = prompt("What would you like to do?");
}
console.log("You have quit");
