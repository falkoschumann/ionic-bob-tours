import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnfragePage } from './anfrage';

@NgModule({
  declarations: [
    AnfragePage,
  ],
  imports: [
    IonicPageModule.forChild(AnfragePage),
  ],
})
export class AnfragePageModule {}
