import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nini32';
  constructor(public service:ApiService){

  }
  public formInfo: FormGroup= new FormGroup({
    firstName:new FormControl(),
    lasttName:new FormControl(),
    age:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    address:new FormControl(),
    phone:new FormControl(),
    zipcode:new FormControl(),
    avatar:new FormControl(),
    gender:new FormControl(),

  })
  
  public loginforminfo:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  })

  register(){
    this.service.signUp(this.formInfo.value).subscribe((data:any)=>{
      console.log(data);
      
    })
  }
}
