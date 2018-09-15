import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SinglestoryPage } from './singlestory';

@NgModule({
  declarations: [
    SinglestoryPage,
  ],
  imports: [
    IonicPageModule.forChild(SinglestoryPage),
  ],
})
export class SinglestoryPageModule {}
