import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { RoleSkillMap } from './role-skill-map';

@Injectable({
  providedIn: 'root'
})
export class SkillrolemapService {

  rootURL: string;

  constructor(private httpsvc: HttpClient) {
    this.rootURL = "https://svccompanyroles.azurewebsites.net/role_skill_map";
   }
  
  getRoleSkillMapviaSkillCode(skillcode: string): Observable<RoleSkillMap[]> {
    return this.httpsvc.get<RoleSkillMap[]>(this.rootURL +
    "/skillcode?skillcode=" + skillcode);
  }

  getRoleSkillMapViaRole(role_id: string): Observable<RoleSkillMap[]> {
    return this.httpsvc.get<RoleSkillMap[]>(this.rootURL +
      "/role_id?role_id=" + role_id);
  }

  createRoleSkillMap(id: string, skillcode: string, level: number): Observable<RoleSkillMap> {

    let reqBody = new URLSearchParams();
    reqBody.set('role_id', id);
    reqBody.set('skillcode', skillcode);
    reqBody.set('level', level.toString());
    reqBody.set('version_id', '1');

    const httpOpts = {
      headers: new HttpHeaders(
        {'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8'
        })
      }

    return this.httpsvc.post<RoleSkillMap>(this.rootURL + '/create', reqBody.toString(), httpOpts);
  }

}
