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
  selector: 'page-mfs',
  templateUrl: 'mfs.html',
})
export class MfsPage { 

  mid:any;
  code:any;
  responseData:any;
  music_master:any;
  id:any;
  content:any;

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
    
    let userData: any;
    this.mid = navParams.get('param1');
    
    //console.log(this.mid);
   userData = {
     id:this.mid, 
     
    };
    //console.log(this.mid);
    //API Document here
    this.authServiceProvider.postData(userData, "get_music_by_id").then((result)=>{
      console.log(result);
      this.responseData = result;
      this.music_master = this.responseData.data;
      console.log(this.music_master[0].music_link);
      this.code = this.music_master[0].music_link;
      this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url+this.code);
      this.content = this.music_master[0].content;
  }, (err)=>{
    //Connection failed or something like that
  })

        
   
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
