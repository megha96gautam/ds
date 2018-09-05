import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { OtpPage } from '../pages/otp/otp';
import { DailymessagesPage } from '../pages/dailymessages/dailymessages';
import { ProgramlistPage } from '../pages/programlist/programlist';
import { LogoutPage } from '../pages/logout/logout';
import { AboutPage } from '../pages/about/about';

import { UpcomingPage } from '../pages/upcoming/upcoming';
import { CategoriesPage } from '../pages/categories/categories';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { SingleprogramPage } from '../pages/singleprogram/singleprogram';
import { VideoPage } from '../pages/video/video';
import { MfsPage } from '../pages/mfs/mfs';

import { YoutubePipe } from '../pipes/youtube/youtube';
import { NewhomePage } from '../pages/newhome/newhome';
import { MusicPage } from '../pages/music/music';
import { ContactPage } from '../pages/contact/contact';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ForgotPage } from '../pages/forgot/forgot';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { ProgramregisterPage } from '../pages/programregister/programregister';
import { TestimonialsPage } from '../pages/testimonials/testimonials';
import { TallstoriesPage } from '../pages/tallstories/tallstories';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    OtpPage,
    DailymessagesPage,
    UpcomingPage,
    CategoriesPage,
    ProgramlistPage,
    SingleprogramPage,
    VideoPage,
    YoutubePipe,
    LogoutPage,
    AboutPage,
    NewhomePage,
    MusicPage,
    ContactPage,
    MfsPage,
    ForgotPage,
    ChangepasswordPage,
    ProgramregisterPage,
    TestimonialsPage,
    TallstoriesPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    OtpPage,
    DailymessagesPage,
    UpcomingPage,
    CategoriesPage,
    ProgramlistPage,
    SingleprogramPage,
    VideoPage,
    LogoutPage,
    AboutPage,
    NewhomePage,
    MusicPage,
    ContactPage,
    MfsPage,
    ForgotPage,
    ChangepasswordPage,
    ProgramregisterPage,
    TestimonialsPage,
    TallstoriesPage
     
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    SocialSharing
  ]
})
export class AppModule {}
