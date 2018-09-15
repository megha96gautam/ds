import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { NewhomePage } from '../newhome/newhome';

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {

  responseData: any;
  userId:any;
  logind:any;
  userDetails:any;
  pageTitle:any = 'Change Password';
  userData = {
    "id":"",
    "old_password":"", 
    "new_password":"",
  };


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authServiceProvider: AuthServiceProvider,
    private toastCtrl: ToastController) {

      const data = JSON.parse(localStorage.getItem('userData'));
      this.userDetails = data.logindata;
      console.log(this.userDetails.id);
      this.userId = this.userDetails.id;
      this.userData.id=this.userId;
      }
      
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }

  changePassword(){
    let userData: any;
    //API Document here
    if(this.userData.old_password && this.userData.new_password){

      console.log(this.userData);

      this.authServiceProvider.postData(this.userData, "user_password_update").then((result)=>{
        this.responseData = result;
        console.log(this.responseData.status);
        if(this.responseData.status == 1){
          
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
