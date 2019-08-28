import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Companyskills } from './companyskills';
@Injectable({
  providedIn: 'root'
})
export class CompanySkillsService {

  rootURL: string;

  constructor(private httpsvc: HttpClient) {
    this.rootURL = "http://localhost:9903/company_skills"
   }

   getCompanySkills(): Observable<Companyskills[]> {
     return this.httpsvc.get<Companyskills[]>(this.rootURL + '/list')
   }

   getCompanySkillId(id: number): Observable<Companyskills> {
     return this.httpsvc.get<Companyskills>(this.rootURL + '/id/' + id)
   }

   getCompanySkillCategory(category: string): Observable<Companyskills[]> {
     return this.httpsvc.get<Companyskills[]>(this.rootURL + '/category/' + category)
   }

}
