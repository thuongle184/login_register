import { Component, OnInit } from '@angular/core';
import {user} from '../user';
import { UserService } from '../_services/user.service';
import { LoginService } from '../_services/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private logAnyService: LoginService) { 
  }

  userName: string;
  
  ngOnInit() {
    this.loadData(); 
    this.userName = this.logAnyService.user_name;
  }

  users: user[];

  loadData() {
    console.log('helllllllo');
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  logOut(){
    this.logAnyService.logout();
    this.router.navigate(['/login']);
  }

  deleteUserItem(userIdItemDelete:number){
    this.userService.deleteUer(userIdItemDelete);  
  }

  formGroupUserUpdate = new FormGroup({ //variables name: the same as in array
    username: new FormControl(''),
    password: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl('')
  });
  
  selectedUser: user;
  onSelect(userAccount: user): void {
    this.selectedUser = userAccount;
    
  }

  tempUser: user;
  public value: string = 'Update';
  updateUserItem(modifieduser: user){    
    if (this.value=="Save") {
      this.value = "Update";
      this.tempUser = modifieduser;
      this.userService.updateUser(this.selectedUser.id, this.tempUser);
      console.log(modifieduser);
    } 
    else this.value = "Save"; 
  }
  
}


