
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
      let dir = 'up';
      let div = 0;
     let isScrollable = true;


      $(document.body).on('wheel', function (e) {

          {if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
              dir = 'down';
          } else {
              dir = 'up';
             // isScrollable = false;
            }  // div = -1;
        //     divs.each(function(i) {
        //       if (div < 0 && ($(this).offset().top >= $(window).scrollTop())) {
        //           div = i;
        //       }
        //   });
          if (dir === 'up' && div > 0) {
              if ( isScrollable ) {
                div--;
              }

          }
          if (dir === 'down' && div < divs.length) {
              if ( isScrollable ) {
                div++;
              }
          }

         // if ( div) {
           //   x = 1;
         // }
         if (isScrollable) {
            $('html,body').stop().animate({
                scrollTop: divs.eq(div).offset().top
            }, 750, function() {
              isScrollable = true;

            });

         }
         isScrollable = false;

          // x = 0;
        //  isScrollable = true;
          return false;
        }
      //  isScrollable = true;
      });
      $(window).resize(function () {
          $('html,body').scrollTop(divs.eq(div).offset().top);
      });
  });
  }
}
