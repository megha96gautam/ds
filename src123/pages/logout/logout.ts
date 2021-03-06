import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app:App) {

    this.logout(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

  backtoLanding(){
    console.log(this.app.getRootNav());
    const root = this.app.getRootNavById('6997');
    //root.popToRoot();
  }

  logout(){
    localStorage.clear();
    this.login();
  
  }
  login(){
    //alert('hello');
    this.navCtrl.push(LoginPage);
  }

}
