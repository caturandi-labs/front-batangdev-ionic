import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the KontakProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const API:string = `https://batang-gis.herokuapp.com/api/kontak/`;
@Injectable()
export class KontakProvider {

  constructor(public http: HttpClient) {
    console.log('Hello KontakProvider Provider');
  }

  getListKontak(){
    return new Promise(resolve => {
      this.http.get(API).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
