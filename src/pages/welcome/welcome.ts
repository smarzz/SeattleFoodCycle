import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
//import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Profile } from '../../models/profile';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

 

  constructor(private afAuth: AngularFireAuth,  private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data =>{
      if(data.email && data.uid){
        this.toast.create({
          message: 'Welcome back!',
          duration: 3000
        }).present();

      }
      else{
        this.toast.create({
          message: 'Could not find Auth details',
          duration: 3000
        }).present();
      }
    });
  }

}
