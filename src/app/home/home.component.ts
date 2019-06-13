import { Component, OnInit } from '@angular/core';
import {user} from '../user';
import { UserService } from '../_services/user.service';
import { LoginService } from '../_services/login.service';
import { Router } from '@angular/router';

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
}


