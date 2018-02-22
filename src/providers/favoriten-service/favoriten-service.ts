import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the FavoritenServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritenServiceProvider {

  public IDs: Array<number>;
  public touren: any;
  public keineFavoriten: boolean;

  constructor(public http: Http) { }

  init(touren) {
    this.touren = [];
    this.IDs = JSON.parse(window.localStorage.getItem('FavoritenIDs'));
    if (this.IDs == null) {
      this.IDs = [];
    } else {
      touren.forEach(tour => {
        if (this.IDs.indexOf(tour.ID) != -1) {
          this.touren.push(tour);
        }
      });
    }
    this.keineFavoriten = this.IDs.length == 0;
  }

  add(tour) {
    this.IDs.push(tour.ID);
    this.touren.push(tour);
    this.keineFavoriten = this.IDs.length == 0;
    window.localStorage.setItem('FavoritenIDs', JSON.stringify(this.IDs));
  }

  remove(tour) {
    var removeIndex: number = this.IDs.indexOf(tour.ID);
    if (removeIndex != -1) {
      this.IDs.splice(removeIndex, 1);
      this.touren.splice(removeIndex, 1);
      this.keineFavoriten = this.IDs.length == 0;
      window.localStorage.setItem('FavoritenIDs', JSON.stringify(this.IDs));
    }
  }

}
