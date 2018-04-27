import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { KontakProvider } from './../../providers/kontak/kontak';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-detail-kontak',
  templateUrl: 'detail-kontak.html',
})
export class DetailKontakPage {

  public listKontak: any;
  private loading: any;

  constructor(public navCtrl: NavController
  	, public navParams: NavParams
  	, public kontakProvider: KontakProvider
  	, public callNumber: CallNumber
  	, public loadingCtrl: LoadingController
    , public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailKontakPage');
    this.getKontak();
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Mohon Tunggu...'
    });

    this.loading.present();
  }

  getKontak(){
    this.showLoader();
    this.kontakProvider.getListKontak()
    .then(data => {
      this.loading.dismiss();
      this.listKontak = data;
      console.log(data);
    }).catch(err =>{
      this.presentToast(err);
    });
  }

  lakukanPanggilan(number){
  	this.callNumber.callNumber(number, true)
	  .then(() => console.log('Panggilan Dilakukan'))
	  .catch((err) => this.presentToast(err));
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
