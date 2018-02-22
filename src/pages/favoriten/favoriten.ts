import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FavoritenServiceProvider } from '../../providers/favoriten-service/favoriten-service';

/**
 * Generated class for the FavoritenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoriten',
  templateUrl: 'favoriten.html',
})
export class FavoritenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private favService: FavoritenServiceProvider) { }

  showDetails(tour) {
    this.navCtrl.push('DetailsPage', tour);
  }

}
