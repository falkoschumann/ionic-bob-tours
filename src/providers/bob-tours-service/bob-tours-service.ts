import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import _ from 'lodash';
import 'rxjs/add/operator/map';

import { FavoritenServiceProvider } from '../favoriten-service/favoriten-service';

/*
  Generated class for the BobToursServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BobToursServiceProvider {

  public regionen: any;
  public tourtypen: any;
  public touren: any;

  baseUrl = 'https://bob-tours-app-13843.firebaseio.com/';

  constructor(public http: Http,
    private favService: FavoritenServiceProvider) { }

  initializeService() {
    this.getRegionen().then(data => this.regionen = data);
    this.getTourtypen().then(data => this.tourtypen = data);
    this.getTourenAndFavoriten();
  }

  getRegionen() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/Regionen.json`)
        .subscribe(res => resolve(res.json()));
    })
  }

  getTourtypen() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/Tourtypen.json`)
        .subscribe(res => resolve(_.sortBy(res.json(), 'Name')));
    })
  }

  getTouren() {
    return this.http.get(`${this.baseUrl}/Touren.json`)
      .map((response) => {
        return _.sortBy(response.json(), 'Titel');
      })
  }

  getTourenAndFavoriten() {
    this.getTouren().subscribe(data => {
      this.touren = data;
      this.favService.init(this.touren);
    });
  }

}
