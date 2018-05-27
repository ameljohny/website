import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-vert-contact',
  templateUrl: './nav-vert-contact.component.html',
  styleUrls: ['./nav-vert-contact.component.css']
})
export class NavVertContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    document.getElementById('a1').classList.add('hoverclass');
    document.getElementById('lefthead1').style.display='block';
    document.getElementById('leftpara1').style.display='block';
  
    document.getElementById('lefthead2').style.display='none';
    document.getElementById('leftpara2').style.display='none';
  
    document.getElementById('lefthead3').style.display='none';
    document.getElementById('leftpara3').style.display='none';
  
    document.getElementById('lefthead4').style.display='none';
    document.getElementById('leftpara4').style.display='none';


document.getElementById('a1').onclick=function a()
{
  document.getElementById('lefthead1').style.display='block';
  document.getElementById('leftpara1').style.display='block';

  document.getElementById('lefthead2').style.display='none';
  document.getElementById('leftpara2').style.display='none';

  document.getElementById('lefthead3').style.display='none';
  document.getElementById('leftpara3').style.display='none';

  document.getElementById('lefthead4').style.display='none';
  document.getElementById('leftpara4').style.display='none';

  document.getElementById('a1').classList.add('hoverclass');
  document.getElementById('a2').classList.remove('hoverclass');
  document.getElementById('a3').classList.remove('hoverclass');
  document.getElementById('a4').classList.remove('hoverclass');

}

document.getElementById('a2').onclick=function a()
{
  document.getElementById('lefthead2').style.display='block';
  document.getElementById('leftpara2').style.display='block';

  document.getElementById('lefthead1').style.display='none';
  document.getElementById('leftpara1').style.display='none';


  document.getElementById('lefthead3').style.display='none';
  document.getElementById('leftpara3').style.display='none';

  document.getElementById('lefthead4').style.display='none';
  document.getElementById('leftpara4').style.display='none';

  document.getElementById('a2').classList.add('hoverclass');
  document.getElementById('a1').classList.remove('hoverclass');
  document.getElementById('a3').classList.remove('hoverclass');
  document.getElementById('a4').classList.remove('hoverclass');

}

document.getElementById('a3').onclick=function a()
{
  document.getElementById('lefthead3').style.display='block';
  document.getElementById('leftpara3').style.display='block';

  document.getElementById('lefthead1').style.display='none';
  document.getElementById('leftpara1').style.display='none';

  document.getElementById('lefthead2').style.display='none';
  document.getElementById('leftpara2').style.display='none';


  document.getElementById('lefthead4').style.display='none';
  document.getElementById('leftpara4').style.display='none';

  document.getElementById('a3').classList.add('hoverclass');
  document.getElementById('a2').classList.remove('hoverclass');
  document.getElementById('a1').classList.remove('hoverclass');
  document.getElementById('a4').classList.remove('hoverclass');

}

document.getElementById('a4').onclick=function a()
{
  document.getElementById('lefthead4').style.display='block';
  document.getElementById('leftpara4').style.display='block';

  document.getElementById('lefthead1').style.display='none';
  document.getElementById('leftpara1').style.display='none';

  document.getElementById('lefthead2').style.display='none';
  document.getElementById('leftpara2').style.display='none';

  document.getElementById('lefthead3').style.display='none';
  document.getElementById('leftpara3').style.display='none';


  document.getElementById('a4').classList.add('hoverclass');
  document.getElementById('a2').classList.remove('hoverclass');
  document.getElementById('a3').classList.remove('hoverclass');
  document.getElementById('a1').classList.remove('hoverclass');

  }

}
}
