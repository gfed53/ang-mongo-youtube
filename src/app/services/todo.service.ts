import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Todo } from '../types/todo';
import { MOCK_TODOS } from '../mockData';

@Injectable()
export class TodoService{

	//Probably won't need this once we start working with Mongo..
	public todos: Todo[] = Array.from(MOCK_TODOS);

	constructor(http: Http){}

	/*Define methods for:
	 getting list of Todos
	 creating a new Todo
	 updating existing Todo
	 deleting a Todo
	*/

	// Get list of existing todos
	// Maybe hardcode a list of todos for now?



	getTodos(): Todo[] {
		console.log('getTodos running from service');
		return this.todos;
	}

	addTodo(todo: Todo): void {
		console.log('addTodo running from service');
		this.todos.push(todo);
	}

	updateTodo(todo: Todo): void {
		console.log('updateTodo running from service');
		// Toggles checked for passed todo
		//Handling by mongo now?

	}

	deleteTodo(_todo: Todo): void {
		console.log('deleteTodo running from service');
		// this.todos = this.todos.filter(todo => {
		// 	return todo.id !== _todo.id;
		// });
		//Handling by mongo now?

	}




}
