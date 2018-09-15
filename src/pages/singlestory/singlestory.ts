import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the SinglestoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singlestory',
  templateUrl: 'singlestory.html',
})
export class SinglestoryPage {
  singleId:any;
  responseData:any;
  story:any;
  storyfull:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authServiceProvider: AuthServiceProvider) {

    this.singleId = this.navParams.get('singleId');
    this.showsinglestory();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SinglestoryPage');
  }
  showsinglestory(){
    let userData: any;
    
    
    //console.log(this.userDetails);
   userData = {
    p_id :this.singleId
     
    };
      
    //API Document here
    this.authServiceProvider.postData(userData, "storyById").then((result)=>{
      //console.log(result);
      this.responseData = result;
      this.story = this.responseData.data;
      //this.storyfull = this.story[0].p_name;
      console.log(this.story);
      
      
    
  }, (err)=>{
    //Connection failed or something like that
  })
  }
}
