import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  singleId:any;
  responseData:any;
  post:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authServiceProvider: AuthServiceProvider) {

      this.singleId = this.navParams.get('singleId');
      this.showpost();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');
  }
  showpost(){
    let userData: any;
    //console.log(this.userDetails);
    userData = {
    p_id :this.singleId
     
    };
      
    //API Document here
    this.authServiceProvider.postData(userData, "postById").then((result)=>{
      //console.log(result);
      this.responseData = result;
      this.post = this.responseData.data;
      //this.storyfull = this.story[0].p_name;
      console.log(this.post);
      
      
    
  }, (err)=>{
    //Connection failed or something like that
  })
  }

}
