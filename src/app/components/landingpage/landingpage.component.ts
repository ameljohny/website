import { Component, OnInit } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { LiveComponent } from '../live/live.component';
declare var $;
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

        siteContent.css({
          'margin-bottom' : siteFooterHeight
        });
      }
    });


}

}
