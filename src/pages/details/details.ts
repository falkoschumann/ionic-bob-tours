import { Component } from '@angular/core';
import { ActionSheetController, AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { FavoritenServiceProvider } from '../../providers/favoriten-service/favoriten-service';
import { BobToursServiceProvider } from '../../providers/bob-tours-service/bob-tours-service';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  tour = {};
  istFavorit: boolean;
  region: string;
  tourtyp: string;
  showSocial: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private favService: FavoritenServiceProvider,
    private btService: BobToursServiceProvider,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.tour = this.navParams.data;
    this.istFavorit = this.favService.IDs.indexOf(this.navParams.data.ID) != -1;
    this.region = this.btService.regionen
      .filter(r => r.ID == this.tour['Region'])
      .map(r => r.Name);
    this.tourtyp = this.btService.tourtypen
      .filter(t => t.ID == this.tour['Tourtyp'])
      .map(t => t.Name);
  }

  toggleSocial() {
    this.showSocial = !this.showSocial;
  }

  openSocial(app) {
    console.log('Anwender will Tour über ' + app + ' teilen!');
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
              this.showConfirm();
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

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Favorit entfernen?',
      message: 'Wollen Sie diese Tour wirklich aus den Favoriten entfernen?',
      buttons: [
        {
          text: 'Nein',
          handler: () => {
            console.log('Nein angeklickt');
          }
        },
        {
          text: 'Ja',
          handler: () => {
            this.favService.remove(this.tour);
            this.istFavorit = false;
          }
        }
      ]
    });
    confirm.present();
  }

}
