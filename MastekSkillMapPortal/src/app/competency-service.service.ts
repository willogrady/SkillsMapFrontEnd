import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, from } from 'rxjs';
import { Competency } from './competency';
import { HttpXsrfTokenExtractor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetencyServiceService {
  rootURL : string;
  private competency:Competency;

  constructor(private httpsvc: HttpClient) {
    this.rootURL = 'http://localhost:9902/competency'

   }
  createRole(competency_category: string, competency_description: string,
    level1: string, level2: string, level3: string, 
    level4: string, level5: string, level6: string, version_id): Observable<Competency[]> {
      let reqBody = new URLSearchParams();
    reqBody.set('competency_category', competency_category)
    reqBody.set('competency_description', competency_description)
    reqBody.set('version_id', '1')
    reqBody.set('level1', level1)
    reqBody.set('level2', level2)
    reqBody.set('level3', level3)
    reqBody.set('level4', level4)
    reqBody.set('level5', level5)
    reqBody.set('level6', level6),
    reqBody.set('version_id', version_id)

    const httpOpts = {
      headers: new HttpHeaders(
        {'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8'
        })
      }

    return this.httpsvc.post<Competency[]>(this.rootURL + '/create',  reqBody.toString(), httpOpts);
    }

    
  getCompetencyList() : Observable<Competency[]>{
     return this.httpsvc.get<Competency[]>(this.rootURL + '/list');
   }
   
  

  getCompetency(competency_id: string): Observable<Competency> {
    return this.httpsvc.get<Competency>(this.rootURL + '/id/' + competency_id);


}

updateCompetency(competency_category: string, competency_id: string, version_id:string): Observable<Competency>{

  let reqBody = new URLSearchParams();
  
  reqBody.set('competency_category', competency_category)
  reqBody.set('competency_id', competency_id)
  reqBody.set('version_id', version_id)

  
    
    const httpOpts = {
      headers: new HttpHeaders(
        {'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8'
        })
      }

  return this.httpsvc.put<Competency>(this.rootURL + '/edit/category/',reqBody.toString(), httpOpts);
}


setter(competency:Competency){
  this.competency = competency;
}

getter(){
  return this.competency;
}

}