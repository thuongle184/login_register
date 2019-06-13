import { Component, OnInit, NgModule } from '@angular/core';
import {usersAcc, user} from '../user';
import { FormControl, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadData();
  }

  
  // index = 0;
 
  // selectedUser: user;
  // onSelect(userAccount: user): void {
  //   this.selectedUser = userAccount;
    
  // }

  // deleteItem(id:number, index:number) {
  //   usersAcc.splice(index, 1);
  // }

  // users = usersAcc;

  users: user[];

 loadData() {
  console.log('helllllllo');
  this.userService.getUsers().subscribe(users => this.users = users);

  }
}


