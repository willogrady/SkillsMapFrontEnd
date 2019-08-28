import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import {FormsModule} from "@angular/forms"; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SfiaComponent } from './sfia/sfia.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { SfiaDetailComponent } from './sfia-detail/sfia-detail.component';
import { SfiaCategoryComponent } from './sfia-category/sfia-category.component';
import { RoleComponent } from './role/role.component';
import { SkillrolemapComponent } from './skillrolemap/skillrolemap.component';
import { RoleBySkillComponent } from './role-by-skill/role-by-skill.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { CompetenciesComponent } from './competencies/competencies.component';
import { CreateCompetencyComponent } from './create-competency/create-competency.component';
import { CompanySkillsComponent } from './company-skills/company-skills.component';
import { CompanySkillsDetailComponent } from './company-skills-detail/company-skills-detail.component';
import { MsAdalAngular6Module, AuthenticationGuard } from 'microsoft-adal-angular6';
import { InsertAuthTokenInterceptor } from './insert-auth-token-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SfiaComponent,
    HomeComponent,
    SfiaDetailComponent,
    SfiaCategoryComponent,
    RoleComponent,
    SkillrolemapComponent,
    RoleBySkillComponent,
    CreateRoleComponent,
    CompetenciesComponent,
    CreateCompetencyComponent,
    CompanySkillsComponent,
    CompanySkillsDetailComponent
  ],
  imports: [
    MsAdalAngular6Module.forRoot({
      tenant: 'add1c500-a6d7-4dbd-b890-7f8cb6f7d861',
      clientId: '2045569c-793f-489b-857b-03267d6dc112',
      redirectUri: window.location.origin,
      navigateToLoginRequestUrl: false,
      authority: 'https://login.microsoftonline.com/common/oauth2/authorize',
      endpoints: {
        "https://localhost/4200/": "xxx-bae6-4760-b434-xxx",
        "https://graph.microsoft.com": "00000003-0000-0000-c000-000000000000",
        "api": "2045569c-793f-489b-857b-03267d6dc112"

        //"https://skillsmapportal.azurewebsites.net": "xxx-bae6-4760-b434-xxx"
      },
      cacheLocation: 'localStorage',
      consentScopes: ["user.read"]
      }),
  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [
    AuthenticationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InsertAuthTokenInterceptor,
      multi: true
    }
    // AdalService,
    // AdalGuard,
    // { provide: HTTP_INTERCEPTORS, useClass: AdalInterceptor, multi: true }],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
