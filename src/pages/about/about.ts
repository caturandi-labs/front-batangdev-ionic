import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public menus: any[];
  constructor(public navCtrl: NavController) {
    this.menus = [
      {
        menu: 'No Telepon Penting',
        icon: 'attach',
        color: '#E63135'
      },
      {
        menu: 'Info Batang',
        icon: 'information-circle',
        color: '#333333'
      },
      {
        menu: 'Pemerintah Kabupaten Batang',
        icon: 'globe',
        color: '#0CA9EA'
      },
      {
        menu: 'Persibat Batang Info',
        icon: 'basketball',
        color: '#333333'
      }
    ];
  }

}
