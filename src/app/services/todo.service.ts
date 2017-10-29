import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Todo } from '../types/todo';
import { MOCK_TODOS } from '../mockData';

@Injectable()
export class TodoService{
	constructor(http: Http){}

	/*Define methods for:
	 getting list of Todos
	 creating a new Todo
	 updating existing Todo
	 deleting a Todo
	*/

	//Get list of existing todos
	//Maybe hardcode a list of todos for now?



	getTodos(): Todo[] {
		return MOCK_TODOS;
	}

	addTodo(todo: Todo): void {
		MOCK_TODOS.push(todo);
	}

	refresh(todos: Todo[]){
		//
	}




}
