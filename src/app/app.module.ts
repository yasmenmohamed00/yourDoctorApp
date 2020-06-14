import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Checkup1Component } from './checkup/checkup1/checkup1.component';
import { Checkup2Component } from './checkup/checkup2/checkup2.component';
import { Checkup3Component } from './checkup/checkup3/checkup3.component';
import { Checkup4Component } from './checkup/checkup4/checkup4.component';
import { Checkup5Component } from './checkup/checkup5/checkup5.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Checkup1Component,
    Checkup2Component,
    Checkup3Component,
    Checkup4Component,
    Checkup5Component,
    NavbarComponent,
    HomeComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
