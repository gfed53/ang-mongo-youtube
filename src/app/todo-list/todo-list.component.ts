import { Component, OnInit } from '@angular/core';


// Services
import { TodoService } from '../services/todo.service';

import { Todo } from '../types/todo';
import { MOCK_TODOS } from '../mockData';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

	public todos: Todo[];

	public currentID: number;

	addTodo(todoDescription: string): void{

		this.currentID++;

		let todoObj = {
			id: this.currentID,
			description: todoDescription,
			checked: false
		}

		this._todoService.addTodo(todoObj);

		//Refresh list
		this.todos = this._todoService.getTodos();

	}




  constructor(private _todoService: TodoService) { }

  ngOnInit() {
  	console.log('TodoList oninit');
  	this.todos = this._todoService.getTodos();
  	console.log('this.todos',this.todos);
  	this.currentID = this.todos.length;
  }

}
