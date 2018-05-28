import { Component, OnInit } from '@angular/core';
declare var $ ;
@Component({
  selector: 'app-nav-horizontal',
  templateUrl: './nav-horizontal.component.html',
  styleUrls: ['./nav-horizontal.component.css']
})
export class NavHorizontalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $( '#toggle' ).hide('slide');
       $('#nav-icon1').click(function() {
      $(this).toggleClass('open');
      $( '#toggle' ).toggle('slide');
      });
      $( '#toggle' ).hide('slide');
});
  }

}

