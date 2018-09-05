import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { App } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { OtpPage } from '../pages/otp/otp';
import { DailymessagesPage } from '../pages/dailymessages/dailymessages';
import { UpcomingPage } from '../pages/upcoming/upcoming';
import { CategoriesPage } from '../pages/categories/categories';
import { ProgramlistPage } from '../pages/programlist/programlist';
import { SingleprogramPage } from '../pages/singleprogram/singleprogram';
import { VideoPage } from '../pages/video/video';
import { LogoutPage } from '../pages/logout/logout';
import { AboutPage } from '../pages/about/about';
import { NewhomePage } from '../pages/newhome/newhome';
import { MusicPage } from '../pages/music/music';
import { ContactPage } from '../pages/contact/contact';
import { MfsPage } from '../pages/mfs/mfs';
import { ForgotPage } from '../pages/forgot/forgot';

import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;
  currentUser:any;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private socialSharing: SocialSharing,
    public app: App,
    public alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: NewhomePage },
      
      { title: 'Programs', component: CategoriesPage },
      { title: 'Simplifying Life', component: VideoPage },
      { title: 'About', component: AboutPage},
      { title: 'Contact Us', component: ContactPage},
      { title: 'Logout', component: LogoutPage }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

       //for backbutton problem
  this.platform.registerBackButtonAction(() => {
    // Catches the active view
    let nav = this.app.getActiveNavs()[0];
    let activeView = nav.getActive();                
    // Checks if can go back before show up the alert
    if(activeView.name === 'NewhomePage') {
        if (nav.canGoBack()){
            nav.pop();
        } else {
            const alert = this.alertCtrl.create({
                title: 'Fechar o App',
                message: 'Você tem certeza?',
                buttons: [{
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {
                      this.nav.setRoot('NewhomePage');
                      console.log('** Saída do App Cancelada! **');
                    }
                },{
                    text: 'Fechar o App',
                    handler: () => {
                      this.logout();
                      this.platform.exitApp();
                    }
                }]
            });
            alert.present();
        }
    }
});
//code for back button ends here

      this.currentUser = JSON.parse(localStorage.getItem('userData'));
        this.rootPage = this.currentUser
                      ? NewhomePage
                      : LoginPage;
    });
  }

 


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  logout() {
    this.nav.setRoot('LoginPage');
}
}
