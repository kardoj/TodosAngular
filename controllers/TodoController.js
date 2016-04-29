app.controller("TodoController", function($scope, localStorageService){
  $scope.todos = localStorageService.getTodos();

  $scope.saveNewTodo = function(newTodoBody){
    localStorageService.saveNewTodo(newTodoBody);
    $scope.todos = localStorageService.getTodos();
    $scope.newTodoBody = "";
  };

  $scope.removeTodo = function(id){
    localStorageService.removeTodo(id);
    $scope.todos = localStorageService.getTodos();
  };

});
