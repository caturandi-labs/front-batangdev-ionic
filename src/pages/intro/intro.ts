import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  slides = [
    {
      title: "Selamat Datang",
      description: "<b>Batang Guide</b> Adalah Aplikasi City Directory Kabupaten Batang , Ayo Temukan Hal Menarik !</b>",
      image: "assets/imgs/batang_logo.png",
    },
    {
      title: "Batang Guide",
      description: "Sedang Berada Di Batang ? Cari dan Temukan Pengalaman baru dengan mengunjungi tempat wisata dan tempat menarik lainnya",
      image: "assets/imgs/maps.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToHomePage(): void{
    this.navCtrl.push(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

}
