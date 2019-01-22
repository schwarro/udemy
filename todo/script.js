var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){
  if(input === "new"){
    var newTodos = prompt("Enter new todo");
    todos.push(newTodos);
  } else if (input === "list"){
    console.log(todos);
  }
  input = prompt("What would you like to do?")
}
console.log("You have quit the app");
