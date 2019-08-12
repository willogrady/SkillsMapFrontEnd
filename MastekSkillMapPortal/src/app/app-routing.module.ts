import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SfiaComponent } from './sfia/sfia.component';
import { SfiaDetailComponent } from './sfia-detail/sfia-detail.component';
import { SfiaCategoryComponent } from './sfia-category/sfia-category.component';
import { RoleComponent } from './role/role.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { SkillrolemapComponent } from './skillrolemap/skillrolemap.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sfia', component: SfiaComponent},
  { path: 'role-skill-map/:skillcode', component: SkillrolemapComponent},
  { path: 'sfia-categories', component: SfiaCategoryComponent},
  { path: 'sfia-skill/:id', component: SfiaDetailComponent},
  { path: 'role', component: RoleComponent},
  { path: 'role-detail/:id', component: RoleDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
