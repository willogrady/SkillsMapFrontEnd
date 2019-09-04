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

   updateCompanySkillDetails(company_skill_id:string, company_skill: string, version_id: string,
    company_skill_category:string, company_skill_sub_category: string, company_skill_description):Observable<Companyskills[]>{

    const params = new HttpParams()
    params.set('role_title', company_skill_id)
    params.set('role_grade', company_skill)
    params.set('version_id', version_id)
    params.set('company_skill_category', company_skill_category)
    params.set('company_skill_sub_category', company_skill_sub_category)
    params.set('company_skill_description', company_skill_description)
    
    const httpOpts = {
      headers: new HttpHeaders(
        {'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8'
        })
      }

     return this.httpsvc.put<Companyskills[]>(this.rootURL + '/edit/skilldetails', params, httpOpts);

   }

}
