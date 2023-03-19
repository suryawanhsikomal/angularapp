import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    todoList :any = [];
  constructor( private todoService: TodoService) { }

  ngOnInit() {
    this.listTodos();
  }
  createTodo(){
    let todo ={
      id: new Date().getTime(),
      title :'formated data of firebase'

    } 
    this.todoService.create(todo).subscribe((ressponce) =>{
      console.log('todo create',ressponce);
      this.listTodos();

    },(error =>{
      console.log('error occur',error);
    }))
           
  }
  listTodos(){
    this.todoService.list().subscribe((res) =>{
    console.log(res);
    this.todoList = res;
    
    },(error=>{
      console.log(error);
      
    }))
  }
  editTodo(todo : any){
     let editdata ={
      id  : new Date().getTime(),
      title : 'edited Titile'
     }
     this.todoService.update(todo.id, editdata).subscribe(res =>{
      this.listTodos();
     })
  }
  deleteTodo(id : any){
    this.todoService.delete(id).subscribe(res =>{
      console.log('record has been delete',res);
      this.listTodos();
      
    })
  }

}
