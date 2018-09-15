import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the TallstoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tallstories',
  templateUrl: 'tallstories.html',
})
export class TallstoriesPage {

  responseData:any;
  stories:any;
  pageTitle:any = "Tall Stories";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authServiceProvider: AuthServiceProvider) {

      this.gettallstories();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TallstoriesPage');
  }
  gettallstories(){
    let userData: any;
    
    //console.log(this.userDetails);
   userData = {
     status:1, 
     
    };  
      
    //API Document here
    this.authServiceProvider.postData(userData, "get_storie_content").then((result)=>{
      //console.log(result);
      this.responseData = result;
      this.stories = this.responseData.data;
      console.log(this.stories);
    
  }, (err)=>{
    //Connection failed or something like that
  })
  }
}
