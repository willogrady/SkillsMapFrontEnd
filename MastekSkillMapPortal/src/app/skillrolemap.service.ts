import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable} from '../../node_modules/rxjs';
import { RoleSkillMap } from './role-skill-map';
import { SfiaSkill } from './sfia-skill';

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
  
}
