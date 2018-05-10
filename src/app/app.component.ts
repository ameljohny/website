
import { Component, Input, OnInit} from '@angular/core';
import { timeout } from 'q';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
    constructor() {}
    ngOnInit() {
        $(document).ready(function () {
    const divs = $('.mydiv');
      let dir ;
      let div = 0;
     let isScrollable = true;


      $(document.body).on('wheel', function (e) {

          {if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
              dir = 'down';
          } else {
              dir = 'up';
            }
          if (dir === 'up' && div > 0) {
              if ( isScrollable ) {
                div--;
              }}
          if (dir === 'down' && div < divs.length && div !== divs.length - 1) {
              if ( isScrollable ) {
                div++;
              }
          }
         if (isScrollable) {
            $('html,body').stop().animate({
                scrollTop: divs.eq(div).offset().top
            }, 680, function() {
              isScrollable = true;

            });

         }
         isScrollable = false;
          return false;
        }
      });
      $(window).resize(function () {
          $('html,body').scrollTop(divs.eq(div).offset().top);
      });
  });
  }
}
