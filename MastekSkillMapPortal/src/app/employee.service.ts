import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  graphURL: string;
  reportingManager: string;
  constructor(private httpsvc: HttpClient, private userSvc: MsAdalAngular6Service) {
    this.graphURL = "https://graph.microsoft.com/v1.0/me";
    this.reportingManager = "https://graph.microsoft.com/v1.0/me/manager"
   }


   callGraphAPI() {
     return this.httpsvc.get(this.graphURL); 
   }

   getManagerDetails(){
     return this.httpsvc.get(this.reportingManager);
   }


}
