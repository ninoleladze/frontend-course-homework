import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToolsService } from '../tools.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(public service: ToolsService, public cookie: CookieService) {}
  @Output() public closeTruck: EventEmitter<boolean> = new EventEmitter()

  public inputEmail: string = ""
  public inputPassword: string = ""

  login() {
    let loginInfo = {
      "email": this.inputEmail,
      "password": this.inputPassword
    }

    console.log();
    this.service.signIn(loginInfo).subscribe( (data:any) => {
      console.log(data);
      this.cookie.set("user", data.access_token)
    } )
  }

  close() {
    this.closeTruck.emit(false)
  }

  closeArea(e: any) {
    if (e.target.className == "allArea") {
      this.closeTruck.emit(false)
    };

  }
}
