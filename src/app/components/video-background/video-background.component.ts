import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.css']
})
export class VideoBackgroundComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $('#myVideo').on('loadstart', function(event) {
      $(this).addClass('loading');
    });
    $('#myVideo').on('canplay', function(event) {
      $(this).removeClass('loading');
      $(this).attr('poster', '');
      const audioPlayer = <HTMLVideoElement> document.getElementById('myVideo');
      audioPlayer.play();
    });
  }
}
