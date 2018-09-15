import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { PostsPage } from '../posts/posts';

/**
 * Generated class for the BloglistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bloglist',
  templateUrl: 'bloglist.html',
})
export class BloglistPage {

  responseData:any;
  bloglist:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authServiceProvider: AuthServiceProvider) {

      this.getbloglist();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BloglistPage');
  }

  getbloglist(){
    let userData: any;
    
    //console.log(this.userDetails);
   userData = {
     status:1, 
     
    };  
      
    //API Document here
    this.authServiceProvider.postData(userData, "get_blogs_content").then((result)=>{
      //console.log(result);
      this.responseData = result;
      this.bloglist = this.responseData.data;
      console.log(this.bloglist);
    
  }, (err)=>{
    //Connection failed or something like that
  })
  }
  gotoblog(id:any){
    this.navCtrl.push(PostsPage, {singleId:id});
  }
}
