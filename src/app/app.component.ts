import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BobToursServiceProvider } from '../providers/bob-tours-service/bob-tours-service'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'FavoritenPage';

  pages: Array<{ title: string, component: any }>;

  settings: any = {};

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public btService: BobToursServiceProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Meine Favoriten', component: 'FavoritenPage' },
      { title: 'Regionen', component: 'RegionenPage' },
      { title: 'Tour-Typen', component: 'TourTypenPage' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.btService.initializeService();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  updateSettings() {
    console.log(this.settings.notifications);
  }

}
