import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  logoImage:string = "assets/images/logo.png";
  avatharImage:string="assets/images/avatar.jpg";
  slider:string[]=["assets/images/1.jpg","assets/images/2.jpg","assets/images/3.jpg","assets/images/4.jpg"]
  slidesOne:string="assets/images/1.jpg";
  slidesTwo:string="assets/images/2.jpg";
  slidesThree:string="assets/images/3.jpg"
  slidesFour:string="assets/images/4.jpg";
  service:string[]=["assets/images/1-1.jpg","assets/images/2-1.jpg","assets/images/3-1.jpg"];
  galleryImages:string[]=["assets/images/gallery1.jpg","assets/images/gallery2.jpg","assets/images/gallery3.jpg",
                          "assets/images/gallery4.jpg","assets/images/gallery5.jpg","assets/images/gallery6.jpg",
                          "assets/images/gallery7.jpg","assets/images/gallery8.jpg","assets/images/gallery9.jpg"];
  adminImage:string='assets/images/admin-1.jpg';
  blogImageOne:string="assets/images/blog1.jpg";
  blogImageTwo:string="assets/images/blog2.jpg";
  blogImageThree:string="assets/images/blog3.jpg";
  img:string="assets/images/1-1.jpg";
  popularImages:string[]=['assets/images/popular-1.jpg','assets/images/popular-2.jpg'];
  

  constructor() { }

  ngOnInit(): void {
  }

}
