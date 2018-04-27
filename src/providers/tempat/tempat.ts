import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the TempatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const API:string = `https://batang-gis.herokuapp.com/api/tempat/`;

@Injectable()
export class TempatProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TempatProvider Provider');
  }

  getBestPlace(){
    return new Promise(resolve => {
      this.http.get(API+'kategori/5a550d183492e30014ebb698').subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getHotel(){
    return new Promise(resolve => {
      this.http.get(API+'kategori/5a550d563492e30014ebb69a').subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getIbadah(){
    return new Promise(resolve => {
      this.http.get(API+'kategori/5a550d603492e30014ebb69b').subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getWisata(){
    return new Promise(resolve => {
      this.http.get(API+'kategori/5a550d3a3492e30014ebb699').subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getBankAtm(){
    return new Promise(resolve => {
      this.http.get(API+'kategori/5a550d743492e30014ebb69c').subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getShop(){
    return new Promise(resolve => {
      this.http.get(API+'kategori/5a550dc03492e30014ebb69d').subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getKuliner(){
    return new Promise(resolve => {
      this.http.get(API+'kategori/5a550dc93492e30014ebb69e').subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getRumahSakit(){
    return new Promise(resolve => {
      this.http.get(API+'kategori/5a550dd13492e30014ebb69f').subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getBudaya(){
    return new Promise(resolve => {
      this.http.get(API+'kategori/5a5cf92fbc5b6b001479fa23').subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  

}
