import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import _ from 'lodash';

import { BobToursServiceProvider } from '../../providers/bob-tours-service/bob-tours-service'

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
    this.tourtypen.forEach(typ => {
      let touren = _.filter(this.btService.touren, ['Tourtyp', typ.ID]);
      typ['Anzahl'] = touren.length;
    });
  }

  showTourListe(tourtyp) {
    this.navCtrl.push('ListePage', ['Tourtyp', tourtyp]);
  }

}
