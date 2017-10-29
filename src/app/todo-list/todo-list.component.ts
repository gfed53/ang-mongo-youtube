import { Component, OnInit } from '@angular/core';

import { Todo } from '../types/todo';
import { MOCK_TODOS } from '../mockData';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

	todos: Todo[];




  constructor() { }

  ngOnInit() {
  	console.log('TodoList oninit');
  	this.todos = MOCK_TODOS;
  	console.log('this.todos',this.todos);
  }

}
