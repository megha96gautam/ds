import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { NewhomePage } from '../newhome/newhome';
import { ForgotPage } from '../forgot/forgot';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responseData: any;
  userData = {"mobile":"", "password":""};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public authServiceProvider: AuthServiceProvider,
    private toastCtrl: ToastController) 
    {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){

    let userData: any;
    //API Document here
    if(this.userData.mobile && this.userData.password){

      this.authServiceProvider.postData(this.userData, "login_users").then((result)=>{
        this.responseData = result;
        console.log(this.responseData.status);
        if(this.responseData.status == 1){
          localStorage.setItem('userData', JSON.stringify(this.responseData))
          this.navCtrl.push(NewhomePage);
        }else{
          this.presentToast('Wrong username or password');
        }
        

      }, (err)=>{
        
        //Connection failed or something like that
      })
    }else{
      this.presentToast('Give Username and Password');
    }
    

  }

  dologin(){
    this.navCtrl.push(HomePage);
  }

  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }

  goToForgot(){
    this.navCtrl.push(ForgotPage);
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
