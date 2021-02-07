import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { StoreModule } from '@ngrx/store';
import { herosListReducer } from './store/heros.reducer';
import { AlertComponent } from './shared/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    StoreModule.forRoot({ herosList: herosListReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
