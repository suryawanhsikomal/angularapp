import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import {filter,map}  from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private firebaseService : FirebaseService) { }

  ngOnInit() {
    // 1 2 3 o/p 2, 3, 4
    const obs = of(1,2,3).pipe(
      map(x => x + 1)
     ).subscribe(res => {
      console.log('obs of', res);
     })
	 
	//  // emit (1,2,3,4,5)
  //   const source = from([1,2,3,4,5]);

  //   // filter out non-even numbers 
    
  //   const example = source.pipe(filter(num => num % 2 === 0));
  //   example.subscribe(res => {
  //     console.log(`Even number: ${res}`);
  //   })
    
   }
  CreatePost(){
   this.firebaseService.createPost().subscribe(res =>{
    console.log('firebase post', res);
    
   })
  }
  getData(){
    this.firebaseService.getPostDateFirebas().subscribe(res=>{
      console.log('firebase Get', res);
      
    })
     this.firebaseService.getPostDateFirebas().pipe(
      map(responceData =>{
        console.log('Before Manipulating data',responceData);
        
        //empty array
        const postArray =[];
        for(const key in responceData){
          if(responceData.hasOwnProperty(key)){
            //push new value into array
            postArray.push({...responceData[key],id:key})
          }
        }
        return postArray;
      })
     ).subscribe(res =>{
      console.log('After manipulating data',res);
      
     })
  }
}
