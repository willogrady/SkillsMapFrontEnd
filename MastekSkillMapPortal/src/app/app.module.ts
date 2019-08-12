import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SfiaComponent } from './sfia/sfia.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SfiaDetailComponent } from './sfia-detail/sfia-detail.component';
import { SfiaCategoryComponent } from './sfia-category/sfia-category.component';
import { RoleComponent } from './role/role.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { SkillrolemapComponent } from './skillrolemap/skillrolemap.component';

@NgModule({
  declarations: [
    AppComponent,
    SfiaComponent,
    HomeComponent,
    SfiaDetailComponent,
    SfiaCategoryComponent,
    RoleComponent,
    RoleDetailComponent,
    SkillrolemapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
