import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-anfrage',
  templateUrl: 'anfrage.html',
})
export class AnfragePage {

  tour = {};
  anfrage: any = {};
  uebermorgen: string;
  uebernaechstesJahr: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    this.tour = this.navParams.data;
    let heute = new Date();
    let uebermorgen = new Date(heute.getTime() + 1000 * 60 * 60 * 24 * 2);
    this.uebermorgen = uebermorgen.toISOString().slice(0, 10);
    let uebernaechstesJahr = new Date(uebermorgen.getTime() + 1000 * 60 * 60 * 24 * 365 * 2);
    this.uebernaechstesJahr = uebernaechstesJahr.toISOString().slice(0, 10);
  }

  absenden() {
    console.log('Tour angefragt für', this.anfrage.Datum, this.anfrage.Uhrzeit);
  }

  navigate() {
    this.navCtrl.popToRoot();
  }

}
