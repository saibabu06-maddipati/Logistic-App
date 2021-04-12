import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallex-testmonils',
  templateUrl: './parallex-testmonils.component.html',
  styleUrls: ['./parallex-testmonils.component.css']
})
export class ParallexTestmonilsComponent implements OnInit {

  adminImage:string='assets/images/admin-1.jpg';
  slidesOne:string="assets/images/1.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
