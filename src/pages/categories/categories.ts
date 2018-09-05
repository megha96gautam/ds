import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ProgramlistPage } from '../programlist/programlist';


@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  responseData: any;
  program_master:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public authServiceProvider: AuthServiceProvider
  ) {
    this.getMasterList();
  }

  getMasterList(){

    let userData: any;
    
    //console.log(this.userDetails);
   userData = {
     status:1, 
     
    };
    
   
      
    //API Document here
    this.authServiceProvider.postData(userData, "select_master_program").then((result)=>{
      //console.log(result);
      this.responseData = result;
      this.program_master = this.responseData.data;
      //console.log(this.responseData.data);
    
  }, (err)=>{
    //Connection failed or something like that
  })

  }
  programlist(id:any){
    this.navCtrl.push(ProgramlistPage, {pid: id});
  }

}
