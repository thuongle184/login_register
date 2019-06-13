import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LocalStorageModule } from 'angular-2-local-storage';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
 

//Import RouterModule vào import của app.module

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    LocalStorageModule.forRoot({
      prefix: 'login-register',
      storageType: 'localStorage'
    }),
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
