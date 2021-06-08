import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { AddBusinessComponent } from './components//add-business/add-business.component';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';
import { NeighborhoodComponent } from './components/neighborhood/neighborhood.component';
import { NeighborhoodAddComponent } from './components/neighborhood-add/neighborhood-add.component';
import { NeighborhoodDetailsComponent } from './components/neighborhood-details/neighborhood-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostAddComponent } from './components/post-add/post-add.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'business', pathMatch: 'full' },
  { path: 'business', component: BusinessComponent },
  { path: 'add', component: AddBusinessComponent },
  { path: 'business/:id', component: BusinessDetailsComponent },
  { path: 'neighborhood', component: NeighborhoodComponent },
  { path: 'addneighborhood', component: NeighborhoodAddComponent },
  { path: 'neighborhood/:id', component: NeighborhoodDetailsComponent },
  { path: 'post', component: PostsComponent },
  { path: 'addPost', component: PostAddComponent },
  { path: 'post/:id', component: PostDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
