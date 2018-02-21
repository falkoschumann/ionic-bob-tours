import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  touren = [
    { ID: '1', Titel: 'Stadtrundgang Bonn' },
    { ID: '2', Titel: 'Auf den Spuren von Beethoven' },
    { ID: '3', Titel: 'Villa Hammerschmidt' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritenPage');
  }

  showDetails(tour) {
    console.log(tour.Titel);
    this.navCtrl.push('DetailsPage', tour);
  }

}
