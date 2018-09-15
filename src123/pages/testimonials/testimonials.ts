import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the TestimonialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testimonials',
  templateUrl: 'testimonials.html',
})
export class TestimonialsPage {

  testimonial:any;
  responseData:any;
  pageTitle:any = 'Testimonials';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authServiceProvider: AuthServiceProvider) {

      this.gettestimonials();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestimonialsPage');
  }
  gettestimonials(){
    let userData: any;
    
    //console.log(this.userDetails);
   userData = {
     status:1, 
     
    };  
      
    //API Document here
    this.authServiceProvider.postData(userData, "get_testimonial_content").then((result)=>{
      //console.log(result);
      this.responseData = result;
      this.testimonial = this.responseData.data;
      console.log(this.testimonial);
    
  }, (err)=>{
    //Connection failed or something like that
  })
  }

}
