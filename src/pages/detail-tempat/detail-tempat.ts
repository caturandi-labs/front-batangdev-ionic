import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Wisata } from '../../models/wisata.interface';
/**
 * Generated class for the DetailTempatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-tempat',
  templateUrl: 'detail-tempat.html',
})
export class DetailTempatPage {


  private listWisata: Wisata[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailTempatPage');
  }

}
