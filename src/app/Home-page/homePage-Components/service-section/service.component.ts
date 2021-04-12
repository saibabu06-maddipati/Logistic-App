import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  service:string[]=["assets/images/1-1.jpg","assets/images/2-1.jpg","assets/images/3-1.jpg"];
  constructor() { }

  ngOnInit(): void {
  }

}
