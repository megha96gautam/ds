import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams,Loading, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


/**
 * Generated class for the DailymessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dailymessages',
  templateUrl: 'dailymessages.html',
})
export class DailymessagesPage {

  code:any;  
  pageTitle: string = 'Transformation';
  pageContent: string;
  responseData:any;
  music_master:any;

  video: any = {
    url: 'https://www.youtube.com/embed/',
    title: 'Awesome video'
};
    trustedVideoUrl: SafeResourceUrl;
    loading: Loading;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private domSanitizer: DomSanitizer,
    public navParams: NavParams,
    public authServiceProvider: AuthServiceProvider
  ) {
    this.code = navParams.get('param1');    
    console.log(this.code);
    
   
  }

  ionViewWillEnter(): void {

    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url+this.code);

    this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });

    this.loading.present();
}

handleIFrameLoadEvent(): void {
    this.loading.dismiss();
}

}
