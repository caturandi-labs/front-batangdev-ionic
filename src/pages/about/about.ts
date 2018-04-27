import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { UmumProvider } from './../../providers/umum/umum';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  public alamatUrl: any;
  public listKontak: any;

  constructor(public navCtrl: NavController
  	,private iab: InAppBrowser,
  	public umumProvider: UmumProvider) {
    
  }

  ionViewDidLoad() {
    this.getInfoUmum();
  }

  openLink(url):void{
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    this.iab.create(url, '_blank', options).show();
  };

  getInfoUmum(){
  	this.umumProvider.getInformasiUmum()
      .then(data => {
        this.alamatUrl = data;
        console.log(data);
      });
  }

  navigateToNomorPenting(){
  	this.navCtrl.push('DetailKontakPage');
  }
 
}
