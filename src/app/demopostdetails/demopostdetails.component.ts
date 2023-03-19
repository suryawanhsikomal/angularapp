import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopostdetails',
  templateUrl: './demopostdetails.component.html',
  styleUrls: ['./demopostdetails.component.css']
})
export class DemopostdetailsComponent implements OnInit {
  detailarr;
//DI
  constructor( private route : ActivatedRoute, private postService:PostService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.postService.getPostById(id).subscribe(res =>{
      console.log('Get post by id', res);
       
      this.detailarr = res;
      
    })
  }

}
