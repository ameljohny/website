import { Component, OnInit } from '@angular/core';
declare var lightGallery;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    lightGallery(document.getElementById('lightgallery'));
  }

}
