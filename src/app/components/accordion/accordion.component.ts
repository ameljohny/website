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
    const current = document.getElementsByClassName('col-md-5');
    current[0].className = current[0].className.replace('active col-lg-5 col-md-5', 'col-lg-1 col-md-1');
    this.className = this.className.replace('col-lg-1 col-md-1', 'active col-lg-5 col-md-5');
    });
  }
  }

}
