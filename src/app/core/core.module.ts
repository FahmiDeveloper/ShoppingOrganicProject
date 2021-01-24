import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  exports: [
    BsNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ]
})
export class CoreModule { }
