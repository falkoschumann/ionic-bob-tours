import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import _ from 'lodash';

import { BobToursServiceProvider } from '../../providers/bob-tours-service/bob-tours-service';

/**
 * Generated class for the ListePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste',
  templateUrl: 'liste.html',
})
export class ListePage {

  filter: string = '';
  auswahl: any;
  titel: string = '';
  touren = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private btService: BobToursServiceProvider) {
  }

  ionViewDidLoad() {
    this.filter = this.navParams.data[0];
    this.auswahl = this.navParams.data[1];
    this.titel = this.auswahl.Name;
    this.touren = _.filter(this.btService.touren, [this.filter, this.auswahl.ID]);
  }

}
