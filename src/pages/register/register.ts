import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  
  responseData: any;
  userData = {"fullname":"", "mobile":"", "DOB":""};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authServiceProvider: AuthServiceProvider,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  doregister(){
    let userData: any;
    //API Document here
    if(this.userData.mobile && this.userData.fullname){

        this.authServiceProvider.postData(this.userData, "create_user_register").then((result)=>{
        this.responseData = result;
        console.log(this.responseData.status);
        if(this.responseData.status == 1){
    
            localStorage.setItem('userData', JSON.stringify(this.responseData))
            this.navCtrl.push(LoginPage);
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

  goToLogin(){
    this.navCtrl.push(LoginPage);
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
