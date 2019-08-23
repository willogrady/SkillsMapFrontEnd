import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import {FormsModule} from "@angular/forms"; 
import { MsAdalAngular6Module, AuthenticationGuard } from 'microsoft-adal-angular6';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SfiaComponent } from './sfia/sfia.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SfiaDetailComponent } from './sfia-detail/sfia-detail.component';
import { SfiaCategoryComponent } from './sfia-category/sfia-category.component';
import { RoleComponent } from './role/role.component';
import { RoleBySkillComponent } from './role-by-skill/role-by-skill.component';
import { SkillByRoleComponent } from './skill-by-role/skill-by-role.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { CompetenciesComponent } from './competencies/competencies.component';
import { CreateCompetencyComponent } from './create-competency/create-competency.component';
import { RoleByCompetencyComponent } from './role-by-competency/role-by-competency.component';
import { CompetencyDetailComponent } from './competency-detail/competency-detail.component';
import { CompetencyByRoleComponent } from './competency-by-role/competency-by-role.component';

@NgModule({
  declarations: [
    AppComponent,
    SfiaComponent,
    HomeComponent,
    SfiaDetailComponent,
    SfiaCategoryComponent,
    RoleComponent,
    RoleBySkillComponent,
    SkillByRoleComponent,
    CreateRoleComponent,
    CompetenciesComponent,
    CreateCompetencyComponent,
    RoleByCompetencyComponent,
    CompetencyDetailComponent,
    CompetencyByRoleComponent
  ],
  imports: [
      MsAdalAngular6Module.forRoot({
      tenant: 'add1c500-a6d7-4dbd-b890-7f8cb6f7d861',
      clientId: '2045569c-793f-489b-857b-03267d6dc112',
      redirectUri: window.location.origin,
      navigateToLoginRequestUrl: false,
      authority: 'https://login.microsoftonline.com/common/oauth2/authorize',
      endpoints: {
      "https://localhost/4200/": "xxx-bae6-4760-b434-xxx"
      //"https://skillsmapportal.azurewebsites.net": "xxx-bae6-4760-b434-xxx"
      },
      cacheLocation: 'localStorage'
      }),
  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
