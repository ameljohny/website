
import { Component, Input, OnInit} from '@angular/core';
import { timeout } from 'q';
import { RouterModule } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit  {
    constructor() {}
    ngOnInit() {
//         $(document).ready(function () {
//     const divs = $('.mydiv');
//       let dir ;
//       let div = 0;
//      let isScrollable = true;


//       $(document.body).on('wheel', function (e) {

//           {if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
//               dir = 'down';
//           } else {
//               dir = 'up';
//             }
//           if (dir === 'up' && div > 0) {
//               if ( isScrollable ) {
//                 div--;
//               }}
//           if (dir === 'down' && div < divs.length && div !== divs.length - 1) {
//               if ( isScrollable ) {
//                 div++;
//               }
//           }
//          if (isScrollable) {
//             $('html,body').stop().animate({
//                 scrollTop: divs.eq(div).offset().top
//             }, 680, function() {
//               isScrollable = true;

//             });

//          }
//          isScrollable = false;
//           return false;
//         }
//       });
//       $(window).resize(function () {
//           $('html,body').scrollTop(divs.eq(div).offset().top);
//       });
//   });
  $(document).ready(function() {
  // INITIATE THE FOOTER
  siteFooter();
  // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
  $(window).resize(function() {
    siteFooter();
  });
  function siteFooter() {
    const siteContent = $('#site-content');
    const siteContentHeight = siteContent.height();
    const siteContentWidth = siteContent.width();

    const sitefooter = $('#site-footer');
    const siteFooterHeight = sitefooter.height();
    const siteFooterWidth = sitefooter.width();

    console.log('Content Height = ' + siteContentHeight + 'px');
    console.log('Content Width = ' + siteContentWidth + 'px');
    console.log('Footer Height = ' + siteFooterHeight + 'px');
    console.log('Footer Width = ' + siteFooterWidth + 'px');

    siteContent.css({
      'margin-bottom' : siteFooterHeight
    });
  }
});

  }







}
