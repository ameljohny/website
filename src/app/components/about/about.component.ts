import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("lefthead1").style.display="none";
    document.getElementById("leftpara1").style.display="none";


    document.getElementById("lefthead3").style.display="none";
    document.getElementById("leftpara3").style.display="none";

    document.getElementById("lefthead4").style.display="none";
    document.getElementById("leftpara4").style.display="none";

  }

}


