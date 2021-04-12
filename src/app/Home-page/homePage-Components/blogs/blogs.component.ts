import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogImageOne:string="assets/images/blog1.jpg";
  blogImageTwo:string="assets/images/blog2.jpg";
  blogImageThree:string="assets/images/blog3.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
