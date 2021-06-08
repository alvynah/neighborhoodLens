import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBusinessComponent } from './components/add-business/add-business.component';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';
import { BusinessComponent } from './components/business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBusinessComponent,
    BusinessDetailsComponent,
    BusinessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
