import { Component } from '@angular/core';
import { NavController, ActionSheetController} from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public menus: any[] = [
    {
      img: 'assets/imgs/wisata_ic.png',
      id: 'wisata',
      text: "Pariwisata"
    },
    {
      img: 'assets/imgs/kuliner_ic.png',
      id: 'kuliner',
      text: 'Tempat Kuliner'
    },
    {
      img: 'assets/imgs/hotel_ic.png',
      id: "hotel",
      text: 'Hotel & Penginapan'

    },
    {
      img: 'assets/imgs/bank_ic.png',
      id: "bank",
      text: 'Bank & ATM'
    },
    {
      img: 'assets/imgs/rs_ic.png',
      id: "rumah_sakit",
      text: 'Rumah Sakit'
    },
    {
      img: 'assets/imgs/ibadah_ic.png',
      id: 'ibadah',
      text: 'Tempat Ibadah'
    },
    {
      img: 'assets/imgs/best_place_ic.png',
      id: 'best_place',
      text: 'Best Place'
    },
    {
      img: 'assets/imgs/budaya_ic.png',
      id: 'budaya',
      text: 'Budaya'
    },
    {
      img: 'assets/imgs/shop_ic.png',
      id: 'shop',
      text: 'Pusat Perbelanjaan'
    }
  ]

  private pesanSharing: string;

  constructor(public navCtrl: NavController
    , private actionSheetCtrl: ActionSheetController
    , private socialSharingCtrl: SocialSharing
    ) {
  }

  getTempatDetail(id,text): void{
    console.log(id);
    
    this.navCtrl.push('DetailTempatPage', {
      id: id,
      text: text
    });
  }

  shareAplikasi(){
    this.pesanSharing = "Batang City Directory Adalah Aplikasi Pendukung Smart City Untuk memetakan Lokasi-Lokasi Di Kab.Batang";
    let actionSheetShareAplikasi = this.actionSheetCtrl.create({
      title: 'Bagikan Batang City Directory Ke Teman Anda',
      buttons: [
        {
          text: "Bagikan",
          icon: "share",
          handler: ()=>{
            this.socialSharingCtrl.share(this.pesanSharing,'Aplikasi Batang City Directory',null,'http://sig-batang.online');
          }
        },
        {
          text: 'Batal',
          role: 'destructive'
        }
      ]
    });
    actionSheetShareAplikasi.present();
  }

}
