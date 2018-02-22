import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BobToursServiceProvider } from '../../providers/bob-tours-service/bob-tours-service'

/**
 * Generated class for the RegionenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  }

  showTourListe(region) {
    this.navCtrl.push('ListePage', ['Region', region]);
  }

}
