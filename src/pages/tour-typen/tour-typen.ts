import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BobToursServiceProvider } from '../../providers/bob-tours-service/bob-tours-service'

/**
 * Generated class for the TourTypenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tour-typen',
  templateUrl: 'tour-typen.html',
})
export class TourTypenPage {

  tourtypen: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private btService: BobToursServiceProvider) {
  }

  ionViewDidLoad() {
    this.tourtypen = this.btService.tourtypen;
  }

  showTourListe(tourtyp) {
    this.navCtrl.push('ListePage', ['Tourtyp', tourtyp]);
  }

}
