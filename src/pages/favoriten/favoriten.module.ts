import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritenPage } from './favoriten';

@NgModule({
  declarations: [
    FavoritenPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritenPage),
  ],
})
export class FavoritenPageModule {}
