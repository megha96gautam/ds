import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { YoutubePipe } from '../../pipes/youtube/youtube';


/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  channelId:string = 'UCV-C9s6G1bMZoSoymqe8Vvg';
  maxRes:string = '15';
  googleToken:string = 'AIzaSyBeK4Q2puAT5RxW8NW7tigiTwJkE51b40U';
  search:string = 'DEEPAK';
  posts:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    let url="https://www.googleapis.com/youtube/v3/search?part=snippet%2C+id&channelId=UCV-C9s6G1bMZoSoymqe8Vvg&maxResults=5&key="+this.googleToken;
    //console.log(url);  
      
    this.http.get(url).map(res=>res.json()).subscribe(data=>{
      this.posts = this.posts.concat(data.items);
      console.log(this.posts);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

}
