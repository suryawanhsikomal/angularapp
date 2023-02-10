import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  title : string = 'Top 3 Bollywood Movies';

  movies : Movie[] = [
    {title:'3 idiot' , director:'Rajkumar', cast:'Amir', realesDate:'2009'},
    {title:'Tumbhad' , director:'Rahil', cast:'Rahi', realesDate:'2020'},
    {title:'Kantara' , director:'Rishab', cast:'Rishab', realesDate:'2022'}
  ]
  favSongs=['kakan','pal pal','thakle re nandlala','Tera Muzse hai pehale ke nata'];

  countries=[
  {id:1, name:'India'},
  {id:2, name:'UK'}
 ]
 arrstates:  Array<any>=[
  {id:'s1', parentId:1, name:'Maharastra'},
  {id:'s2', parentId:2, name:'landon'},
  {id:'s3', parentId:2, name:'Belfast'},
  {id:'s4', parentId:1, name:'Keral'}
 ]
  states:Array<any>=[];
  constructor() { }

  ngOnInit() {
  }
  onCountrySelect(val:any){
    this.states=this.arrstates.filter(c => c.parentId == val.target.value);
  }
}
