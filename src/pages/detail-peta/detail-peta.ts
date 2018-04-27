import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
/**
 * Generated class for the DetailPetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-peta',
  templateUrl: 'detail-peta.html',
})
export class DetailPetaPage {
	map: GoogleMap;
	latitude: number;
	longitude: number;
	namaLokasi: string;

  constructor(public navCtrl: NavController
  	, public navParams: NavParams
  	, private googleMaps: GoogleMaps) {
  	this.latitude = this.navParams.get('latitude');
  	this.longitude = this.navParams.get('longitude');
  	this.namaLokasi = this.navParams.get('namaLokasi');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPetaPage');
    this.loadMap();
  }

  loadMap() {
  	let mapCanvas: HTMLElement = document.getElementById('map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.latitude,
          lng: this.longitude
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create(mapCanvas, mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        this.map.addMarker({
            title: this.namaLokasi,
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: this.latitude,
              lng: this.longitude
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert(this.namaLokasi);
              });
          });

      });
  	}

}
