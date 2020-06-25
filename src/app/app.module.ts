import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import {CommonModule} from '@angular/common'
const route = [
  {path :'',  redirectTo: 'home' , pathMatch :'full' },
  {path :'home',  component : HomeComponent },
  {path :'timeline',  component :TimeLineComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TimeLineComponent,
    HeaderComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(route), 
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
