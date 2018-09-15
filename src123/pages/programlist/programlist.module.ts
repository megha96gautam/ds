import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramlistPage } from './programlist';

@NgModule({
  declarations: [
    ProgramlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramlistPage),
  ],
})
export class ProgramlistPageModule {}
