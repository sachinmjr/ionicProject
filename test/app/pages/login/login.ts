import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {RegPage} from '../register/register';

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  uname;
  pass;
  constructor(private _navController: NavController) {

      this.uname= "";
      this.pass= "";
  }

  pushPage(buttonColor: string) {
  //  this._navController.push(DetailPage, { color: buttonColor });
  }

  register(){
       console.log("rest");
       this._navController.push(RegPage);

  }

  doLogin(){

      console.log(this.uname + " " + this.pass);


  }
}
