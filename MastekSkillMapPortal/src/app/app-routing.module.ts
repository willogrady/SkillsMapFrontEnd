import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SfiaComponent } from './sfia/sfia.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sfia', component: SfiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
