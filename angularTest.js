angular.module('angularTest', [])
  .controller('AngularListController', function() {
    var angularList = this;
    angularList.angulars = [
      {text:'learn angular', checked:true},
      {text:'build an angular app', checked:false}];
 
    angularList.addAngular = function() {
      angularList.angulars.push({text:angularList.angularText, checked:false});
      angularList.angularText = '';
    };
 
    angularList.remaining = function() {
      var count = 0;
      angular.forEach(angularList.angulars, function(angular) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });
