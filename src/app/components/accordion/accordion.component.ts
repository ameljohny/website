import { Component, OnInit, Injectable } from '@angular/core';
import { Button } from 'protractor';
Injectable();
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor() { }

  // public scrollHorizontal() {
  //   const pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
  //     document: this.document,
  //     scrollTarget: '#inHorizontalContainer',
  //     scrollingViews: [this.container.nativeElement],
  //     verticalScrolling: false
  //   });
  //   this.pageScrollService.start(pageScrollInstance);
  // }
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
