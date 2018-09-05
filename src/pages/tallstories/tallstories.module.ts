import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TallstoriesPage } from './tallstories';

@NgModule({
  declarations: [
    TallstoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(TallstoriesPage),
  ],
})
export class TallstoriesPageModule {}
