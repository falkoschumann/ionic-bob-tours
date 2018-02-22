import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FavoritenServiceProvider } from '../../providers/favoriten-service/favoriten-service';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  tour = {};
  istFavorit: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private favService: FavoritenServiceProvider) {
  }

  ionViewDidLoad() {
    this.tour = this.navParams.data;
    this.istFavorit = this.favService.IDs.indexOf(this.navParams.data.ID) != -1;
  }

  navigate() {
    this.navCtrl.push('AnfragePage');
  }

}
