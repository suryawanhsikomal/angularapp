import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
   imageUrl="https://seosherpa.com/wp-content/uploads/2020/12/airbnb-404-page.jpg"
  constructor() { }

  ngOnInit() {
  }

}
