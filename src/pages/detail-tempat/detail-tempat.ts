import { TempatProvider } from './../../providers/tempat/tempat';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController, ToastController } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-detail-tempat',
  templateUrl: 'detail-tempat.html',
})
export class DetailTempatPage {


  public listTempat:any;
  private params: any;
  public jenisTempat: any;
  private loading: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public tempatProvider: TempatProvider,
    public loadingCtrl: LoadingController,
    private launchNavigator: LaunchNavigator,
    private geolocation: Geolocation,
    private toastCtrl: ToastController) {
      this.params = this.navParams.get('id');
      this.jenisTempat = this.navParams.get('text');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailTempatPage');
    this.getTempat();
  }

  openModal(){
    
  }

  doRefresh(refresher) {
    this.getTempat();

    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Mohon Tunggu...'
    });

    this.loading.present();
  }

  getTempat() {
    this.showLoader();
    if(this.params === 'best_place') {
        this.tempatProvider.getBestPlace()
        .then(data => {
          this.loading.dismiss();
          this.listTempat = data;
          console.log(data);
        }).catch(err =>{
          this.loading.dismiss();  
      this.presentToast(err);
    });;
      }else if(this.params === 'ibadah'){
        this.tempatProvider.getIbadah()
        .then(data => {
          this.loading.dismiss();
          this.listTempat = data;
          console.log(data);
        }).catch(err =>{
          this.loading.dismiss();  
      this.presentToast(err);
    });;
      }else if(this.params === 'hotel'){
        this.tempatProvider.getHotel()
        .then(data => {
          this.loading.dismiss();
          this.listTempat = data;
          console.log(data);
        }).catch(err =>{
          this.loading.dismiss();  
      this.presentToast(err);
    });;
      }else if(this.params === 'shop'){
        this.tempatProvider.getShop()
        .then(data => {
          this.loading.dismiss();
          this.listTempat = data;
          console.log(data);
        }).catch(err =>{
          this.loading.dismiss();  
      this.presentToast(err);
    });;
      }else if(this.params === 'bank'){
        this.tempatProvider.getBankAtm()
        .then(data => {
          this.loading.dismiss();
          this.listTempat = data;
          console.log(data);
        }).catch(err =>{
          this.loading.dismiss();  
      this.presentToast(err);
    });;
      }else if(this.params === 'wisata'){
        this.tempatProvider.getWisata()
        .then(data => {
          this.loading.dismiss();
          this.listTempat = data;
          console.log(data);
        }).catch(err =>{
          this.loading.dismiss();  
      this.presentToast(err);
    });;
      }else if(this.params === 'kuliner'){
        this.tempatProvider.getKuliner()
        .then(data => {
          this.loading.dismiss();
          this.listTempat = data;
          console.log(data);
        }).catch(err =>{
          this.loading.dismiss();  
      this.presentToast(err);
    });;
      }else if(this.params === 'rumah_sakit'){
        this.tempatProvider.getRumahSakit()
        .then(data => {
          this.loading.dismiss();
          this.listTempat = data;
          console.log(data);
        }).catch(err =>{
          this.loading.dismiss();  
      this.presentToast(err);
    });;
      }else if(this.params === 'budaya'){
        this.tempatProvider.getBudaya()
        .then(data => {
          this.loading.dismiss();
          this.listTempat = data;
          console.log(data);
        }).catch(err =>{
          this.loading.dismiss();    
          this.presentToast(err);
        });
      }
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
  
  directToDestination(lat,long){
    console.log(lat,long);
    this.geolocation.getCurrentPosition().then((resp) => {
      let latitude = resp.coords.latitude;
      let longitude = resp.coords.longitude;

      console.log(latitude,longitude);

      let options: LaunchNavigatorOptions = {
        start: `${latitude}, ${longitude}`,
        app: this.launchNavigator.APP.GOOGLE_MAPS
      };

      this.launchNavigator.navigate([lat,long], options)
        .then(
          success => console.log('Launched navigator'),
          error => console.log('Error launching navigator', error)
        );
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  showPeta(namaLokasi: string, latitude:any, longitude:any){
    this.navCtrl.push('DetailPetaPage', {
      namaLokasi: namaLokasi,
      latitude: latitude,
      longitude: longitude
    });
  }

}
