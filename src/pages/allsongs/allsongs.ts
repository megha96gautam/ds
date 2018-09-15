import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Media, MediaObject} from '@ionic-native/media';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the AllsongsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allsongs',
  templateUrl: 'allsongs.html',
})
export class AllsongsPage {

  private songMedia: MediaObject=null;
  private isMusicPaused=false;

  pageTitle: string = 'Music For Soul';
  responseData:any;
  music_master:any;
  music_master1:any;
  music_audio:any;
  url:any;
  albumname = "Barsa Rehem";


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sanitizer: DomSanitizer,
    public authServiceProvider: AuthServiceProvider,
    private media:Media) {
    this.getaudio();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllsongsPage');
  }
  getaudio(){
    let userData: any;
    
    //console.log(this.userDetails);
   userData = {
     status:1, 
     
    };
    //API Document here
    this.authServiceProvider.postData(userData, "get_music_audio_content").then((result)=>{
      //console.log(result);
      this.responseData = result;
      this.music_audio = this.responseData.data;
      console.log(this.music_audio);
    
  }, (err)=>{
    //Connection failed or something like that
  })
  }

  stopMusic(){
    if(this.songMedia !== null){
     
      this.songMedia.stop();
      this.songMedia.release();
      this.songMedia = null;
    }
  }
  playMusic(musicFile:any){
    this.url = "http://deepaktheinspiration.com/api/uploads/music_files/"+musicFile;
    if(this.songMedia === null){
      this.songMedia = this.media.create(this.url);
      this.songMedia.play();
    }else{
      if(this.isMusicPaused===true){
        this.songMedia.play();
        this.isMusicPaused = false;
      }

    }
    

  }
  pauseMusic(){
    if(this.songMedia !== null){
     
      this.songMedia.pause();
      this.isMusicPaused = true;
    }
  }

}
