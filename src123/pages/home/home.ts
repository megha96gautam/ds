import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from 'ionic-angular';
import { DailymessagesPage } from '../dailymessages/dailymessages';
import { UpcomingPage } from '../upcoming/upcoming';
import { CategoriesPage } from '../categories/categories';
import { VideoPage } from '../video/video';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  id:any;

  constructor(public navCtrl: NavController, public sanitizer: DomSanitizer) {

    this.getquote();
    this.getupcoming();

  }

  getquote(){
    //api call jo quote of the day layegi
  }
  getupcoming(){
    //api call for upcoming program
  }
  goTo(id){
    this.navCtrl.push(DailymessagesPage, {param1: id});
  }
  upcoming(){
    this.navCtrl.push(UpcomingPage);
  }
  viewCategories(){
    this.navCtrl.push(CategoriesPage);
  }
  goTochannel(){
    this.navCtrl.push(VideoPage);
  }

}
