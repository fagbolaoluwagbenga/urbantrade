import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { usercreds } from '../../models/interfaces/usercreds';
import { AuthProvider } from '../../providers/auth/auth';
//import { AuthMethod,  } from 'angularfire2'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

splash = true;

credentials = {} as usercreds;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthProvider) {
  }

  ionViewDidLoad() {
    setTimeout(()=>{
      this.splash = false
    }, 4000);
    console.log('ionViewDidLoad LoginPage');
  }
/*
signin(){
this.authservice.login(this.credentials).then((res:any)=>{
  if(!res.code)
this.navCtrl.setRoot('TabsPage');
  else
  alert(res);
})
}
*/
signin(){
  this.navCtrl.setRoot('TabsPage');
}
signup(){
  this.navCtrl.setRoot('SignupPage')
}


}
