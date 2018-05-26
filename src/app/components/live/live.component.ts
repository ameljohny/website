import { Component, OnInit, Injectable } from '@angular/core';
declare var $ ;
declare var moment;
Injectable()
@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      let clock;
     // Grab the current date
      const currentDate = new Date();
      moment.tz.add('Asia/Calcutta|HMT BURT IST IST|-5R.k -6u -5u -6u|01232|-18LFR.k 1unn.k HB0 7zX0');
      moment.tz.link('Asia/Calcutta|Asia/Kolkata');

     // Target future date/24 hour time/Timezone.
      const targetDate = moment.tz('2018-08-11 10:00', 'Asia/Calcutta|Asia/Kolkata');
      // Calculate the difference in seconds between the future and current date
      const diff = targetDate / 1000 - currentDate.getTime() / 1000;
      function checktime() {
          const t = clock.getTime();
           if (t <= 0) {
             clock.setTime(0);
           }
           setTimeout(function() {
             checktime();
           }, 1000);
         }
      if (diff <= 0) {
        // If remaining countdown is 0
        clock = $('.clock').FlipClock(0, {
          clockFace: 'DailyCounter',
          countdown: true,
          autostart: false
        });
        } else {
        // Run countdown timer
        clock = $('.clock').FlipClock(diff, {
          clockFace: 'DailyCounter',
          countdown: true,
          callbacks: {
            stop: function() {
              console.log('Timer has ended!');
            }
          }
        });
         // Check when timer reaches 0, then stop at 0
         setTimeout(function() {
          checktime();
        }, 1000);
        }
    });
  }

}
