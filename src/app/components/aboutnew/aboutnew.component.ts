import { Component, OnInit } from '@angular/core';
declare var $ ;
@Component({
  selector: 'app-aboutnew',
  templateUrl: './aboutnew.component.html',
  styleUrls: ['./aboutnew.component.css']
})
export class AboutnewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const script = $(document).ready(function() {
      $('.js-anchor-link').click(function(e){
     e.preventDefault();
     const target = $($(this).attr('href'));
     if( target.length){
       const scrollTo = target.offset().top;
       $('body, html').animate({scrollTop: scrollTo-100+'px'}, 1500);
     }
   });
  });
  }

}
