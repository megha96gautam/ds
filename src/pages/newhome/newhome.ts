import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DailymessagesPage } from '../dailymessages/dailymessages';
import { VideoPage } from '../video/video';
import { CategoriesPage } from '../categories/categories';
import { MusicPage } from '../music/music';
import { UpcomingPage } from '../upcoming/upcoming';
import { SocialSharing } from '@ionic-native/social-sharing';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the NewhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newhome',
  templateUrl: 'newhome.html',
})
export class NewhomePage {

  message: string = "Deepak The Inspiration";
  link: string = "http://www.deepaktheinspiration.com";
  subject: string = null;
  file: string = null;
  imageUrl = "http://deepaktheinspiration.com/api/uploads/daily_quotes/";

  pageTitle: string = 'Transformation';

  responseData:any;
  quotemaster:any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public sanitizer: DomSanitizer,
    private socialSharing: SocialSharing,
    public authServiceProvider: AuthServiceProvider) {

      this.getquote();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewhomePage');
  }

  getquote(){
    let userData: any;

    
    //console.log(this.userDetails);
   userData = {
     status:1, 
     
    };
    //API Document here
    this.authServiceProvider.postData(userData, "selectapi").then((result)=>{
      //console.log(result);
      this.responseData = result;
      this.quotemaster = this.responseData.data;
      console.log(this.quotemaster);
    
  }, (err)=>{
    //Connection failed or something like that
  })
  }
  
  goTo(id){
    this.navCtrl.push(DailymessagesPage, {param1: id, param2: this.pageTitle});
  }
  goTochannel(){
    this.navCtrl.push(VideoPage);
  }
  viewCategories(){
    this.navCtrl.push(CategoriesPage);
  }
  goToMusic(){
    this.navCtrl.push(MusicPage);
  }
  goToupcoming(){
    this.navCtrl.push(UpcomingPage);
  }

  share(){
    this.socialSharing.share(this.message, this.subject, this.link, this.file).then(()=>{

    }).catch(()=>{

    });
  }

}
