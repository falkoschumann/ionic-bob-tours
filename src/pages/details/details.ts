import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { FavoritenServiceProvider } from '../../providers/favoriten-service/favoriten-service';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  tour = {};
  istFavorit: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private favService: FavoritenServiceProvider,
    private actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    this.tour = this.navParams.data;
    this.istFavorit = this.favService.IDs.indexOf(this.navParams.data.ID) != -1;
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Tour',
      buttons: [
        {
          text: 'Anfragen',
          handler: () => {
            this.navCtrl.push('AnfragePage', this.tour);
          }
        },
        {
          text: (this.istFavorit) ? 'Aus Favoriten entfernen' : 'Zu Favoriten hinzufügen',
          role: (this.istFavorit) ? 'destructive' : '',
          handler: () => {
            if (this.istFavorit) {
              this.favService.remove(this.tour);
              this.istFavorit = false;
            } else {
              this.favService.add(this.tour);
              this.istFavorit = true;
            }
          }
        },
        {
          text: 'Abbrechen',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

}
