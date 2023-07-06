import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { SingupComponent } from './views/singup/singup.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentNavbarComponent } from './components/component-navbar/component-navbar.component';
import { HomeComponent } from './views/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    DashboardComponent,
    ComponentNavbarComponent,
    HomeComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '**', redirectTo: 'home'},
      { path : "login", component: LoginComponent},
      { path : "singup", component: SingupComponent},
      {path : "home", component: HomeComponent},
      { path : "dashboard", component: DashboardComponent},
    ]),
    
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
