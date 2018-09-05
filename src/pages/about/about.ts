import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  singleId:any;
  responseData:any;
  about:any;
  programName:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authServiceProvider: AuthServiceProvider) {
      console.log('hello');
      this.getAboutContent();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  getAboutContent(){
    console.log('I am here');

    let userData: any = 1;

    //API Document here
    this.authServiceProvider.postData(userData, "get_about_content").then((result)=>{
      //console.log(result);
      this.responseData = result;
      this.about = this.responseData.data;
      //this.programName = this.program[0].p_name;
      console.log(this.responseData.data);
      
      
    
  }, (err)=>{
    console.log('error');
    //Connection failed or something like that
  })
  }

  }

