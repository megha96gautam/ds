import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {

  responseData: any;
  userData = {"mobile":""};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authServiceProvider: AuthServiceProvider,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
  }
  forgot(){
    let userData: any;
    //API Document here
    if(this.userData.mobile){

      this.authServiceProvider.postData(this.userData, "forgot_password").then((result)=>{
        this.responseData = result;
        console.log(this.responseData.status);
        if(this.responseData.status == 1){
          //localStorage.setItem('userData', JSON.stringify(this.responseData))
          this.navCtrl.push(LoginPage);
        }else{
          this.presentToast('Mobile does not exist');
        }
        

      }, (err)=>{
        
        //Connection failed or something like that
      })
    }else{
      this.presentToast('Give Mobile Number');
    }
  }
  presentToast(msg) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position:'top',
      cssClass:'toast'
    });
    toast.present();
  }

}
