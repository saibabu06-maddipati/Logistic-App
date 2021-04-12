import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  popularImages:string[]=['assets/images/popular-1.jpg','assets/images/popular-2.jpg'];
  
  logoImage:string = "assets/images/logo.png";

  constructor() { }

  ngOnInit(): void {
  }

}
