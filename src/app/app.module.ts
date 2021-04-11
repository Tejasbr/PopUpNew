import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballComponent } from './football/football.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FootballComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    NgbModule,
    HttpClientModule,
    
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
