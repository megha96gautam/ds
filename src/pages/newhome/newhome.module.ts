import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewhomePage } from './newhome';

@NgModule({
  declarations: [
    NewhomePage,
  ],
  imports: [
    IonicPageModule.forChild(NewhomePage),
  ],
})
export class NewhomePageModule {}
