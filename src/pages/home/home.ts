import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Wisata } from '../../models/wisata.interface';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public menus: any[] = [
    {
      img: 'assets/imgs/wisata_ic.png',
      id: 'wisata'
    },
    {
      img: 'assets/imgs/kuliner_ic.png',
      id: 'kuliner'

    },
    {
      img: 'assets/imgs/hotel_ic.png',
      id: "hotel"

    },
    {
      img: 'assets/imgs/bank_ic.png',
      id: "bank"

    },
    {
      img: 'assets/imgs/rs_ic.png',
      id: "rumah_sakit"
    },
    {
      img: 'assets/imgs/ibadah_ic.png',
      id: 'ibadah'

    },
    {
      img: 'assets/imgs/best_place_ic.png',
      id: 'best_place'
    },
    {
      img: 'assets/imgs/budaya_ic.png',
      id: 'budaya'
    },
    {
      img: 'assets/imgs/shop_ic.png',
      id: 'shop'
    }
  ]

  constructor(public navCtrl: NavController) {
    console.log(this.menus);
  }

}
