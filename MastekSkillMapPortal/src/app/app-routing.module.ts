import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SfiaComponent } from './sfia/sfia.component';
import { SfiaDetailComponent } from './sfia-detail/sfia-detail.component';
import { SfiaCategoryComponent } from './sfia-category/sfia-category.component';
import { RoleComponent } from './role/role.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { SkillrolemapComponent } from './skillrolemap/skillrolemap.component';
import { RoleGroupComponent } from './role-group/role-group.component';
import { RoleBySkillComponent } from './role-by-skill/role-by-skill.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sfia', component: SfiaComponent},
  { path: 'role-skill-map/:skillcode', component: SkillrolemapComponent},
  { path: 'sfia-categories', component: SfiaCategoryComponent},
  { path: 'sfia-skill/:id', component: SfiaDetailComponent},
  { path: 'role-group', component: RoleGroupComponent},
  { path: 'role', component: RoleComponent},
  { path: 'role-detail/:id', component: RoleDetailComponent },
  { path: 'role-by-skill', component: RoleBySkillComponent },
  { path: 'role-by-skill/:role_id', component: RoleBySkillComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
