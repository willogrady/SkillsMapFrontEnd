import { Injectable } from '@angular/core'
import { SfiaSkill } from './sfia-skill'
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable, Scheduler } from 'rxjs';
import { MappingsContext } from 'source-list-map';


@Injectable({
  providedIn: 'root'
})
export class SfiaService {

  rootURL: string;
  category: String[];
  category1: string;

  constructor(private httpsvc: HttpClient) {
  this.rootURL = 'https://svcsfiaskill.azurewebsites.net/sfia'; 
  this.category1 = "Strategy and architecture";
  this.category = ["Strategy and architecture", "Change and transformation", 
  "Development and implementation", "Delivery and operation", "Skills and quality",
  "Relationships and engagement"]
  }

  getSkills(): Observable<SfiaSkill[]> {
    return this.httpsvc.get<SfiaSkill[]>(this.rootURL + '/list');
  }

  getSkill(skillcode: string): Observable<SfiaSkill> {
    return this.httpsvc.get<SfiaSkill>(this.rootURL + '/skillcode/' + skillcode);
  }

  getCategories(): Observable<string[]> {
    return this.httpsvc.get<string[]>(this.rootURL + '/listcategory');
  }

  getSkillByCategory(category: string[]): Observable<SfiaSkill[]> {
    return this.httpsvc.get<SfiaSkill[]>(this.rootURL + '/category/' + this.category);
  }

  getSkillStrategy(): Observable<SfiaSkill[]> {
    return this.httpsvc.get<SfiaSkill[]>(this.rootURL + '/category/' + this.category[0]);
  }

  getSkillChangeTransformation(): Observable<SfiaSkill[]> {
    return this.httpsvc.get<SfiaSkill[]>(this.rootURL + '/category/' + this.category[1]);
  }

  getSkillDevelopment(): Observable<SfiaSkill[]> {
    return this.httpsvc.get<SfiaSkill[]>(this.rootURL + '/category/' + this.category[2]);
  }

  getSkillDelivery(): Observable<SfiaSkill[]> {
    return this.httpsvc.get<SfiaSkill[]>(this.rootURL + '/category/' + this.category[3]);
  }

  getSkillQuality(): Observable<SfiaSkill[]> {
    return this.httpsvc.get<SfiaSkill[]>(this.rootURL + '/category/' + this.category[4]);
  }

  getSkillRelationShip(): Observable<SfiaSkill[]> {
    return this.httpsvc.get<SfiaSkill[]>(this.rootURL + '/category/' + this.category[5]);
  }

  
}
