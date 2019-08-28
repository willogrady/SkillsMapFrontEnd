import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SfiaComponent } from './sfia/sfia.component';
import { SfiaDetailComponent } from './sfia-detail/sfia-detail.component';
import { SfiaCategoryComponent } from './sfia-category/sfia-category.component';
import { RoleComponent } from './role/role.component';
import { RoleBySkillComponent } from './role-by-skill/role-by-skill.component';
import { SkillByRoleComponent } from './skill-by-role/skill-by-role.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { AppComponent } from './app.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';
import { CompetenciesComponent } from './competencies/competencies.component';
import { CreateCompetencyComponent } from './create-competency/create-competency.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { CompanySkillsComponent } from './company-skills/company-skills.component';
import { CompanySkillsDetailComponent } from './company-skills-detail/company-skills-detail.component';



const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthenticationGuard] },
  //{ path: 'home', component: HomeComponent},
  { path: 'sfia', component: SfiaComponent},
  { path: 'role-by-skill/:skillcode', component: RoleBySkillComponent },
  { path: 'sfia-categories', component: SfiaCategoryComponent},
  { path: 'sfia-skill/:id', component: SfiaDetailComponent},
  { path: 'role', component: RoleComponent},
  { path: 'role-detail/:id', component: RoleDetailComponent},
  { path: 'role-by-skill', component: RoleBySkillComponent },
  { path: 'role-by-skill/:role_id', component: RoleBySkillComponent },
  { path: 'skill-by-role', component: SkillByRoleComponent },
  { path: 'skill-by-role/:role_id', component: SkillByRoleComponent },
  { path: 'create-role', component: CreateRoleComponent},
  { path: 'competencies',component:CompetenciesComponent},
  { path: 'create-competency', component: CreateCompetencyComponent},
  { path: 'company-skills', component: CompanySkillsComponent},
  { path: 'company-skills/:id', component: CompanySkillsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
