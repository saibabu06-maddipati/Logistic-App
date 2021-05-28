import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  color:ThemePalette = 'primary'; //check box color
  constructor() { }
  itemsPerSlide = 5;
  singleSlideOffset = true;
 
  slides = [
    {image: 'assets/images/gallery1.jpg'},
    {image: 'assets/images/gallery2.jpg'},
    {image: 'assets/images/gallery3.jpg'},
    {image: 'assets/images/gallery4.jpg'},
    {image: 'assets/images/gallery5.jpg'},
    {image: 'assets/images/gallery6.jpg'},
    {image: 'assets/images/gallery7.jpg'},
    {image: 'assets/images/gallery8.jpg'},
    {image: 'assets/images/gallery1.jpg'},
    {image: 'assets/images/gallery2.jpg'}

  ];
  ngOnInit(): void {
  }

}
