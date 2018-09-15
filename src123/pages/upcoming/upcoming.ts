import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the UpcomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html',
})
export class UpcomingPage {

  responseData: any;
  program_master:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public authServiceProvider: AuthServiceProvider
  ) {
    this.getUpcomingList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }

  getUpcomingList(){
    let userData: any;
    
    //console.log(this.userDetails);
   userData = {
     status:1,    
    };
    
   
      
    //API Document here
    this.authServiceProvider.postData(userData, "select_program_Api").then((result)=>{
      //console.log(result);
      this.responseData = result;
      this.program_master = this.responseData.data;
      //console.log(this.responseData.data);    
  }, (err)=>{
    //Connection failed or something like that
  })

  }
  }


