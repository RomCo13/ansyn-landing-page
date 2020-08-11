import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,MatIconModule } from'@angular/material'


const appRoutes:Routes=[
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home' , component:HomepageComponent},
  {path:'presention' , component:ImagesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
