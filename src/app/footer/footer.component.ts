import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  email: string = 'sachinpatel3745@gmail.com';
  redirectWhatsapp() {
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.href = `https://wa.me/8140374580?text=I%20am%20interested%20in%20your%20service`;
    link.target = '_blank';
    link.click();
  }

  redirectInstagram() {
    const instagramUsername = 'maruti_car_ac18';
    const url = `https://www.instagram.com/${instagramUsername}`;
    window.open(url, '_blank');
  }

  redirectFacebook() {
    const facebookUsername = 'facebook_username';
    const url = `https://www.facebook.com/${facebookUsername}`;
    window.open(url, '_blank');
  }
}
