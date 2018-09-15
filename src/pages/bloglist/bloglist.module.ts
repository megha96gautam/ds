import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BloglistPage } from './bloglist';

@NgModule({
  declarations: [
    BloglistPage,
  ],
  imports: [
    IonicPageModule.forChild(BloglistPage),
  ],
})
export class BloglistPageModule {}
