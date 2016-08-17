import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  
  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');
    // this.loginData = {
    //   userName : "",
    //   pass : ""      
    // };
  }
}

