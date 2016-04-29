// Every todo has id and body
app.service("localStorageService", function(){

  this.getTodos = function(){
    var todos = localStorage.getItem("todos");
    if(todos === null){
      return [];
    }
    return JSON.parse(todos);
  };

  this.saveNewTodo = function(newTodoBody){
    var todos = this.getTodos();
    var newId = getNewId(todos);
    var newTodo = {
      id: newId,
      body: newTodoBody
    };
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  this.removeTodo = function(id){
    var todos = this.getTodos();
    var newTodos = [];
    for (var i = 0; i < todos.length; i++) {
      if(todos[i].id != id){
        newTodos.push(todos[i]);
      }
    }
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  function getNewId(todos){
    var maxId = 0;
    for (var i = 0; i < todos.length; i++) {
      if(todos[i].id > maxId){
        maxId = todos[i].id;
      }
    }
    return maxId+1;
  }

});
