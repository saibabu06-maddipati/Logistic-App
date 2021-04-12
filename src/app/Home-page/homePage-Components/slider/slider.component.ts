import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }
  logoImage:string = "assets/images/logo.png";
  slider:string[]=["assets/images/1.jpg","assets/images/2.jpg","assets/images/3.jpg","assets/images/4.jpg"]
  slidesOne:string="assets/images/1.jpg";
  slidesTwo:string="assets/images/2.jpg";
  slidesThree:string="assets/images/3.jpg"
  slidesFour:string="assets/images/4.jpg";
 
  


  ngOnInit() {
  }
}
