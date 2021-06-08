import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBusinessComponent } from './components/add-business/add-business.component';
import { BusinessComponent } from './components/business/business.component';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBusinessComponent,
    BusinessComponent,
    BusinessDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
