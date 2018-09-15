import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CategoriesPage } from '../categories/categories';
import { NewhomePage } from '../newhome/newhome';

/**
 * Generated class for the ProgramregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programregister',
  templateUrl: 'programregister.html',
})
export class ProgramregisterPage {

  singleId:any;
  responseData: any;
  userData = {"first_name":"", "last_name":"", "email":"", "mobile":"", "p_id":""};


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authServiceProvider: AuthServiceProvider,
    private toastCtrl: ToastController) {

    this.singleId = this.navParams.get('singleId');
    //console.log(this.singleId);
    this.userData.p_id=this.singleId;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramregisterPage');
  }
  doregister(){
    let userData: any;

    //API Document here
    if(this.userData.mobile && this.userData.email){

      console.log(this.userData);

      this.authServiceProvider.postData(this.userData, "program_register").then((result)=>{
      this.responseData = result;
      console.log(this.responseData.status);
      if(this.responseData.status == 1){
  
          //localStorage.setItem('userData', JSON.stringify(this.responseData))
          this.navCtrl.push(NewhomePage);
      }else{
          this.presentToast('Something is wrong');
      }
      
    }, (err)=>{
      //Connection failed or something like that
    })
  }else{
    this.presentToast('Please provide all the details');
  }

    
    
  }
  presentToast(msg) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position:'top',
      cssClass:'toast'
    });
    toast.present();
  }
}
