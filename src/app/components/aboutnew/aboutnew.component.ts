import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
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


    // Add active class to the current button (highlight it)
    var header = document.getElementById("verticallinks");
    var btns = header.getElementsByClassName("js-anchor-link");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("aboutactive");
        current[0].className = current[0].className.replace(" aboutactive", "");
        this.className += " aboutactive";
      });
    }
  }

}
