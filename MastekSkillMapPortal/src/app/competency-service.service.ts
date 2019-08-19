import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Competency } from './competency';
import { HttpXsrfTokenExtractor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetencyServiceService {
  rootURL : string;

  constructor(private httpsvc: HttpClient) {
    this.rootURL = 'http://localhost:9902/competency'

   }
   getCompetencyList() : Observable<Competency[]>{
     return this.httpsvc.get<Competency[]>(this.rootURL + '/list');
   }
   


}
