import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/register/register.html'
})
export class RegPage {
  constructor(private _navController: NavController) {

  }



  doRegister(){

       //this._navController.push(RegPage);

  }
}
