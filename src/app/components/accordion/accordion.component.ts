import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const header = document.getElementById('accordion');
    const tabs = header.getElementsByClassName('tabs');
    for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
    const current = document.getElementsByClassName('activetabs');
    current[0].className = current[0].className.replace('activetabs', 'inactivetabs');
    this.className = this.className.replace('inactivetabs', 'activetabs');
    });
  }
  }

}
