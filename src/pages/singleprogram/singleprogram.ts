import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@IonicPage()
@Component({
  selector: 'page-singleprogram',
  templateUrl: 'singleprogram.html',
})
export class SingleprogramPage {

  singleId:any;
  responseData:any;
  program:any;
  programName:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authServiceProvider: AuthServiceProvider) {

      this.singleId = this.navParams.get('singleId');

      this.getsingleprogram();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleprogramPage');
  }

  getsingleprogram(){

    let userData: any;
    
    
    //console.log(this.userDetails);
   userData = {
    p_id :this.singleId
     
    };
      
    //API Document here
    this.authServiceProvider.postData(userData, "programById").then((result)=>{
      //console.log(result);
      this.responseData = result;
      this.program = this.responseData.data;
      this.programName = this.program[0].p_name;
      console.log(this.program[0].p_name);
      
      
    
  }, (err)=>{
    //Connection failed or something like that
  })
  }

}
