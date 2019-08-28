import { Injectable } from '@angular/core';
import { Role } from './role';
import { RoleGroup } from './role-group'
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable, Scheduler } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  rootURL: string;
  groupURL: string;

  constructor(private httpsvc: HttpClient) {
    this.rootURL = 'https://svccompanyroles.azurewebsites.net/role';
   }


  createRole(role_title: string, role_grade: string,
             role_summary: string, role_group_id: string): Observable<Role[]> {

    let reqBody = new URLSearchParams();
    reqBody.set('role_title', role_title)
    reqBody.set('role_grade', role_grade)
    reqBody.set('version_id', '1')
    reqBody.set('role_summary', role_summary)
    reqBody.set('role_group_id', role_group_id)

    const httpOpts = {
      headers: new HttpHeaders(
        {'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8'
        })
      }
    return this.httpsvc.post<Role[]>(this.rootURL + '/create',  reqBody.toString(), httpOpts);
  }

  getRoleGroup(): Observable<RoleGroup[]>{
    return this.httpsvc.get<RoleGroup[]>(this.groupURL + '/list')
  }

  getRoles(): Observable<Role[]> {
     return this.httpsvc.get<Role[]>(this.rootURL + '/list');
   }

  getRoleById(id: number): Observable<Role> {
     return this.httpsvc.get<Role>(this.rootURL + '/id/' + id);
   }

  getRoleArchitecture(): Observable<Role[]> {
    return this.httpsvc.get<Role[]>(this.rootURL +'/role_group/1')
  }

  getRoleBusinessAnalysis(): Observable<Role[]> {
    return this.httpsvc.get<Role[]>(this.rootURL +'/role_group/2')
  }

  getConsulting(): Observable<Role[]> {
    return this.httpsvc.get<Role[]>(this.rootURL +'/role_group/3')
  }

  getDeliveryManagement(): Observable<Role[]> {
    return this.httpsvc.get<Role[]>(this.rootURL +'/role_group/4')
  }

  getEngineering(): Observable<Role[]> {
    return this.httpsvc.get<Role[]>(this.rootURL +'/role_group/5')
  }

  getFinance(): Observable<Role[]> {
    return this.httpsvc.get<Role[]>(this.rootURL +'/role_group/6')
  }

  getHumanResources(): Observable<Role[]> {
    return this.httpsvc.get<Role[]>(this.rootURL +'/role_group/7')
  }

}
