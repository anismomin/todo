var Todo = (function () {
    function Todo(todoFieldId, todoListId) {
        this.todoFieldId = todoFieldId;
        this.todoListId = todoListId;
        this.add(this.todoFieldId);
        this.countTodos();
    }
    Todo.prototype.add = function (todoFieldId) {
        var item = document.getElementById(this.todoFieldId);
        item.onkeypress = function (e) {
            if (e.which == 13) {
                e.preventDefault();
                document.forms[0].submit();
                item.value = '';
            }
        };
    };
    Todo.prototype.countTodos = function () {
        var List = document.getElementById(this.todoListId).children;
        var count = List.length;
        document.getElementsByClassName('count-todos')[0].innerHTML = count;
    };
    return Todo;
})();
var todo = new Todo('add-todo', 'sortable');
