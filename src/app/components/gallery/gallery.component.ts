import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const header = document.getElementById('years');
    const tabs = header.getElementsByClassName('ditems');
    for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
    const current = document.getElementsByClassName('activetabs');
    current[0].className = current[0].className.replace('activetabs', 'inactivetabs');
    this.className = this.className.replace('inactivetabs', 'activetabs');
    })
  }


    $('#gallery17').lightGallery({
      videojs: true
  });
    $(function() {
      $('a').click(function() {
         if ($(this).attr('id') === '17') {
          $('#gallery16').hide();
          $('#gallery15').hide();
          $('#gallery14').hide();
          $('#gallery13').hide();
          $('#gallery12').hide();
          $('#gallery11').hide();
          $('#gallery10').hide();
          $('#gallery9').hide();
          $('#gallery8').hide();
          $('#gallery7').hide();
          $('#gallery6').hide();
           $('#gallery17').show();
           $('#gallery17').lightGallery({
            videojs: true
        });
         } else if ($(this).attr('id') === '16') {
          $('#gallery17').hide();
          $('#gallery15').hide();
          $('#gallery14').hide();
          $('#gallery13').hide();
          $('#gallery12').hide();
          $('#gallery11').hide();
          $('#gallery10').hide();
          $('#gallery9').hide();
          $('#gallery8').hide();
          $('#gallery7').hide();
          $('#gallery6').hide();
          $('#gallery16').show();
          $('#gallery16').lightGallery({
            videojs: true
        });
         } else if ($(this).attr('id') === '15') {
          $('#gallery16').hide();
          $('#gallery17').hide();
          $('#gallery14').hide();
          $('#gallery13').hide();
          $('#gallery12').hide();
          $('#gallery11').hide();
          $('#gallery10').hide();
          $('#gallery9').hide();
          $('#gallery8').hide();
          $('#gallery7').hide();
          $('#gallery6').hide();
          $('#gallery15').show();
          $('#gallery15').lightGallery({
            videojs: true
        });
         } else if ($(this).attr('id') === '14') {
          $('#gallery16').hide();
          $('#gallery15').hide();
          $('#gallery17').hide();
          $('#gallery13').hide();
          $('#gallery12').hide();
          $('#gallery11').hide();
          $('#gallery10').hide();
          $('#gallery9').hide();
          $('#gallery8').hide();
          $('#gallery7').hide();
          $('#gallery6').hide();
          $('#gallery14').show();
          $('#gallery14').lightGallery({
            videojs: true
        });
         } else if ($(this).attr('id') === '13') {
          $('#gallery16').hide();
          $('#gallery15').hide();
          $('#gallery14').hide();
          $('#gallery17').hide();
          $('#gallery12').hide();
          $('#gallery11').hide();
          $('#gallery10').hide();
          $('#gallery9').hide();
          $('#gallery8').hide();
          $('#gallery7').hide();
          $('#gallery6').hide();
          $('#gallery13').show();
          $('#gallery13').lightGallery({
            videojs: true
        });
         } else if ($(this).attr('id') === '12') {
          $('#gallery16').hide();
          $('#gallery15').hide();
          $('#gallery14').hide();
          $('#gallery13').hide();
          $('#gallery17').hide();
          $('#gallery11').hide();
          $('#gallery10').hide();
          $('#gallery9').hide();
          $('#gallery8').hide();
          $('#gallery7').hide();
          $('#gallery6').hide();
          $('#gallery12').show();
          $('#gallery12').lightGallery({
            videojs: true
        });
         } else if ($(this).attr('id') === '11') {
          $('#gallery16').hide();
          $('#gallery15').hide();
          $('#gallery14').hide();
          $('#gallery13').hide();
          $('#gallery12').hide();
          $('#gallery17').hide();
          $('#gallery10').hide();
          $('#gallery9').hide();
          $('#gallery8').hide();
          $('#gallery7').hide();
          $('#gallery6').hide();
          $('#gallery11').show();
          $('#gallery11').lightGallery({
            videojs: true
        });
         } else if ($(this).attr('id') === '10') {
          $('#gallery16').hide();
          $('#gallery15').hide();
          $('#gallery14').hide();
          $('#gallery13').hide();
          $('#gallery12').hide();
          $('#gallery11').hide();
          $('#gallery17').hide();
          $('#gallery9').hide();
          $('#gallery8').hide();
          $('#gallery7').hide();
          $('#gallery6').hide();
          $('#gallery10').show();
          $('#gallery10').lightGallery({
            videojs: true
        });
         } else if ($(this).attr('id') === '9') {
          $('#gallery16').hide();
          $('#gallery15').hide();
          $('#gallery14').hide();
          $('#gallery13').hide();
          $('#gallery12').hide();
          $('#gallery11').hide();
          $('#gallery10').hide();
          $('#gallery17').hide();
          $('#gallery8').hide();
          $('#gallery7').hide();
          $('#gallery6').hide();
          $('#gallery9').show();
          $('#gallery9').lightGallery({
            videojs: true
        });
         } else if ($(this).attr('id') === '8') {
          $('#gallery16').hide();
          $('#gallery15').hide();
          $('#gallery14').hide();
          $('#gallery13').hide();
          $('#gallery12').hide();
          $('#gallery11').hide();
          $('#gallery10').hide();
          $('#gallery9').hide();
          $('#gallery17').hide();
          $('#gallery7').hide();
          $('#gallery6').hide();
          $('#gallery8').show();
          $('#gallery8').lightGallery({
            videojs: true
        });
         } else if ($(this).attr('id') === '7') {
          $('#gallery16').hide();
          $('#gallery15').hide();
          $('#gallery14').hide();
          $('#gallery13').hide();
          $('#gallery12').hide();
          $('#gallery11').hide();
          $('#gallery10').hide();
          $('#gallery9').hide();
          $('#gallery8').hide();
          $('#gallery17').hide();
          $('#gallery6').hide();
          $('#gallery7').show();
          $('#gallery7').lightGallery({
            videojs: true
        });
         } else if ($(this).attr('id') === '6') {
          $('#gallery16').hide();
          $('#gallery15').hide();
          $('#gallery14').hide();
          $('#gallery13').hide();
          $('#gallery12').hide();
          $('#gallery11').hide();
          $('#gallery10').hide();
          $('#gallery9').hide();
          $('#gallery8').hide();
          $('#gallery7').hide();
          $('#gallery17').hide();
          $('#gallery6').show();
          $('#gallery6').lightGallery({
            videojs: true
        });
         }
      });
  });
}}
