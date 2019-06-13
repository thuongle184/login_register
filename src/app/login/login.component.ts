import { Component, OnInit } from '@angular/core';
import {usersAcc, user} from '../user';
import { FormControl, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router){

  }

  ngOnInit() {
  }

  formGroupUserInput = new FormGroup({ //variables name: the same as in array
    username: new FormControl('' , Validators.required),
    password: new FormControl('', Validators.required)
  });

  message: string = "";
  onSubmit(): string {
    //this.formGroupDitectInfor.value;
    console.log(this.formGroupUserInput.value); 
    for (let user of usersAcc ) {
      if (this.formGroupUserInput.value.username == user.username && this.formGroupUserInput.value.password == user.password) {

        alert("Login successfully! Go to home page ");
        // console.log(user.username, user.password);
        return this.message = "logged";
        this.router.navigate(['/home']);
        
      }      
    }     
    if (this.message != "logged") {  
        alert("This account doesn't exist. ");      
    }

  }
}
