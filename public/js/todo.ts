class Todo {

	constructor(public todoFieldId : string, public todoListId : string) {
		this.add(this.todoFieldId);
		this.countTodos();
	}

	add(todoFieldId : string) {
		
		var item: HTMLInputElement = document.getElementById(this.todoFieldId);
		
		item.onkeypress = (e) => {
			if (e.which == 13) {
				e.preventDefault();
				document.forms[0].submit();
				item.value = '';
			} 
		}	
	}

	countTodos() {
		let List = document.getElementById(this.todoListId).children;
		var count = List.length;
		document.getElementsByClassName('count-todos')[0].innerHTML = count;
	}
}


var todo = new Todo('add-todo', 'sortable');
