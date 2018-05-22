import { Component, OnInit} from '@angular/core';
import { Button } from 'protractor';


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
//   // Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var button = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// // button.onclick = function() {
// //     modal.style.display = "none";
// // }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
}

  

}
