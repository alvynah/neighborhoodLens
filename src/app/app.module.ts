import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBusinessComponent } from './components/add-business/add-business.component';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';
import { BusinessComponent } from './components/business/business.component';
import { NeighborhoodComponent } from './components/neighborhood/neighborhood.component';
import { NeighborhoodAddComponent } from './components/neighborhood-add/neighborhood-add.component';
import { NeighborhoodDetailsComponent } from './components/neighborhood-details/neighborhood-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostAddComponent } from './components/post-add/post-add.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBusinessComponent,
    BusinessDetailsComponent,
    BusinessComponent,
    NeighborhoodComponent,
    NeighborhoodAddComponent,
    NeighborhoodDetailsComponent,
    NavbarComponent,
    PostsComponent,
    PostAddComponent,
    PostDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
