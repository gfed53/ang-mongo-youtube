import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable.js';
import 'rxjs/add/operator/map';

import { Todo } from '../types/todo';
import { MOCK_TODOS } from '../mockData';

@Injectable()
export class TodoService{

	//Probably won't need this once we start working with Mongo..
	public todos: Todo[];

	constructor(private _http: Http){}

	/*Define methods for:
	 getting list of Todos
	 creating a new Todo
	 updating existing Todo
	 deleting a Todo
	*/

	// Get list of existing todos
	// Maybe hardcode a list of todos for now?



	getTodos(): Observable<Todo[]> {
		console.log('getTodos running from service');
		//Retrieve mongodb collection from route
		return this._http.get('/api/todos')
						.map((res) => res.json());
			
	}

	addTodo(description: string): Observable<any> {
		console.log('addTodo running from service');
		return this._http.post('/api/todos', {
			_description: description
		}).map((res) => res.json());
	}

	updateTodo(todo: Todo): Observable<any> {
		console.log('updateTodo running from service');
		let id = todo._id;
		let url = `/api/todos/${id}`;

		return this._http.put(url, {
			_id: todo._id,
			_checked: !todo._checked
		})
			.map((res) => res.json());
		// Toggles checked for passed todo
		// Handling by mongo now?

	}

	deleteTodo(_todo: Todo): void {
		console.log('deleteTodo running from service');
		// this.todos = this.todos.filter(todo => {
		// 	return todo.id !== _todo.id;
		// });
		// Handling by mongo now?

	}




}
