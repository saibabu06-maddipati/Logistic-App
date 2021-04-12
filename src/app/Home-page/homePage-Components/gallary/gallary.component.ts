import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  galleryImages:string[]=["assets/images/gallery1.jpg","assets/images/gallery2.jpg","assets/images/gallery3.jpg",
                          "assets/images/gallery4.jpg","assets/images/gallery5.jpg","assets/images/gallery6.jpg",
                          "assets/images/gallery7.jpg","assets/images/gallery8.jpg","assets/images/gallery9.jpg"]
  constructor() { }

  ngOnInit(): void {
  }

}
