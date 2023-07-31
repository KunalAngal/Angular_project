import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment1';
  login: FormGroup;

  constructor(private fb : FormBuilder){

  }
  ngOnInit() {
    this.login = this.fb.group({
      Username : ["" , [Validators.required , Validators.minLength(3)]],
      Password : ["", [Validators.required, Validators.minLength(5)]],
    })

  }
  onSubmitClick(){
    // console.log(this.login.value);
    let Uname=this.login.get('Username').value;
    console.log("Username is:"+Uname);

    let pwd=this.login.get('Password').value;
    console.log("password is:"+pwd);



  }
  onClearClick()
  {
    this.login.reset();
  }
}
