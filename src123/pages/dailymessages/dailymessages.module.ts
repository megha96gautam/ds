import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailymessagesPage } from './dailymessages';

@NgModule({
  declarations: [
    DailymessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(DailymessagesPage),
  ],
})
export class DailymessagesPageModule {}
