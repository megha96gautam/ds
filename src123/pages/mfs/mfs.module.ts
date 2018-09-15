import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MfsPage } from './mfs';

@NgModule({
  declarations: [
    MfsPage,
  ],
  imports: [
    IonicPageModule.forChild(MfsPage),
  ],
})
export class MfsPageModule {}
