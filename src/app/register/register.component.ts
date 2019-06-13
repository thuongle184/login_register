import { Component, OnInit } from '@angular/core';
import { usersAcc, user } from '../user';
import { FormGroup, FormControl } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _localStorageService: LocalStorageService) { 
    
  }

  ngOnInit() {
  }

  formGroupUserInput = new FormGroup({ //variables name: the same as in array
    id: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl('')
  });

  addNewUser() {
    usersAcc.push(
    this.formGroupUserInput.value
    );
    alert("Register successfully!");
    console.log(usersAcc);
  }

  
}
