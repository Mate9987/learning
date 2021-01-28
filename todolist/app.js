const toDos = [];

while (true) {

    let toDoList = prompt("What would you want do to?");

    if (toDoList === "quit") {
        break;
    }

    else if (toDoList === "new") {
        let newToDo = (prompt("Please enter your new todo:"));
        toDos.push(newToDo);
        console.log(`${newToDo} was added to the list.`);
    }

    else if (toDoList === "list") {
        console.log('********')
        for (i = 0; i < toDos.length; i++) {
            console.log(`${[i]}: ${toDos[i]}`)
        }
        console.log('********')
    }

    else if (toDoList === "delete") {
        let del = prompt("Please enter the index of todo to delete:")
        toDos.splice(del, 1)
        console.log('Todo Removed')


    }
}

console.log("You quit the app.")