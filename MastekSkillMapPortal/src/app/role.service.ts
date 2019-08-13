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

  constructor(private httpsvc: HttpClient) {
    this.rootURL = 'http://localhost:9901/role';
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
}
