import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { MfsPage } from '../mfs/mfs';

/**
 * Generated class for the MusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {

  pageTitle: string = 'Music For Soul';
  responseData:any;
  music_master:any;
  music_master1:any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public sanitizer: DomSanitizer,
    public authServiceProvider: AuthServiceProvider ) {
     

      this.getMusic();

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPage');
  }

  getMusic(){
    let userData: any;
    
    //console.log(this.userDetails);
   userData = {
     status:1, 
     
    };
    //API Document here
    this.authServiceProvider.postData(userData, "get_music_soul_content").then((result)=>{
      //console.log(result);
      this.responseData = result;
      this.music_master = this.responseData.data;
      //console.log(this.music_master);
    
  }, (err)=>{
    //Connection failed or something like that
  })
  }

  goTo(mid){
       
    this.navCtrl.push(MfsPage, {param1: mid});
  }

}
