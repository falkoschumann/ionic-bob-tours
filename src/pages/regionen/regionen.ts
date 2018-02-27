import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import _ from 'lodash';

import { BobToursServiceProvider } from '../../providers/bob-tours-service/bob-tours-service'

@IonicPage()
@Component({
  selector: 'page-regionen',
  templateUrl: 'regionen.html',
})
export class RegionenPage {

  regionen: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private btService: BobToursServiceProvider) {
  }

  ionViewDidLoad() {
    this.regionen = this.btService.regionen;
    this.regionen.forEach(region => {
      let touren = _.filter(this.btService.touren, ['Region', region.ID]);
      region['Anzahl'] = touren.length;
    });
  }

  showTourListe(region) {
    this.navCtrl.push('ListePage', ['Region', region]);
  }

}
