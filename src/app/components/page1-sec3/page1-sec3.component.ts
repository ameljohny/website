import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1-sec3',
  templateUrl: './page1-sec3.component.html',
  styleUrls: ['./page1-sec3.component.css']
})
export class Page1Sec3Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const header = document.getElementById('accordion');
    const tabs = header.getElementsByClassName('tabs');
    for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('mouseover', function() {
    const current = document.getElementsByClassName('activetabs');
    current[0].className = current[0].className.replace('activetabs', 'inactivetabs');
    this.className = this.className.replace('inactivetabs', 'activetabs');
    });
    }
  }
}
