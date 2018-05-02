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
    tabs[i].addEventListener('mouseover', function() {
    const current = document.getElementsByClassName('col-md-4');
    current[0].className = current[0].className.replace('active col-lg-4 col-md-4', 'col-lg-2 col-md-2');
    this.className = this.className.replace('col-lg-2 col-md-2', 'active col-lg-4 col-md-4');
    });
  }
  }

}
