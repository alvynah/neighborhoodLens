import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { AddBusinessComponent } from './components//add-business/add-business.component';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';
const routes: Routes = [
  { path: '', redirectTo: 'business', pathMatch: 'full' },
  { path: 'business', component: BusinessComponent },
  { path: 'add', component: AddBusinessComponent },
  { path: 'business/:id', component: BusinessDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
