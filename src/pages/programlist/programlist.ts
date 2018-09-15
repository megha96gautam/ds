import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SingleprogramPage } from '../singleprogram/singleprogram';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ProgramlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programlist',
  templateUrl: 'programlist.html',
})
export class ProgramlistPage {

  initiativeid:any;
  responseData:any;
  programlist:any;
  programName:any;

  imageUrl = "http://deepaktheinspiration.com/api/uploads/";
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public authServiceProvider: AuthServiceProvider) {

    this.initiativeid = this.navParams.get('pid');

    this.getprogramById();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramlistPage');
  }

  getprogramById(){

    let userData: any;
    
    //console.log(this.userDetails);
   userData = {
    parent_id :this.initiativeid
     
    };
      
    //API Document here
    this.authServiceProvider.postData(userData, "programListById").then((result)=>{
      //console.log(result);
      this.responseData = result;
      this.programlist = this.responseData.data;
      console.log(this.programlist);
  }, (err)=>{
    //Connection failed or something like that
  })
  }

  singleprogram(id:any){
    //console.log(id);
    this.navCtrl.push(SingleprogramPage, {singleId: id});
  }

}
