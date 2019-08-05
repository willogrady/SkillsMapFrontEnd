import { Injectable } from '@angular/core';
import { SfiaSkill } from './sfia-skill'
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable, Scheduler } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SfiaService {

  rootURL: string;


  constructor(private httpsvc: HttpClient) {
  this.rootURL = 'http://localhost:9900/sfia';
  }

  getSkills(): Observable<SfiaSkill[]> {
    return this.httpsvc.get<SfiaSkill[]>(this.rootURL + '/list');
  }

  getSkill(id: number): Observable<SfiaSkill> {
    return this.httpsvc.get<SfiaSkill>(this.rootURL + '/id/' + id);
  }

  getCategories(): Observable<string[]> {
    return this.httpsvc.get<string[]>(this.rootURL + '/listcategory');
  }

  getSkillByCategory(category: string): Observable<SfiaSkill[]> {
    return this.httpsvc.get<SfiaSkill[]>(this.rootURL+ '/category/' + category);
  }
}
