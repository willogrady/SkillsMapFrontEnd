import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { RoleSkillMap } from './role-skill-map';

@Injectable({
  providedIn: 'root'
})
export class SkillrolemapService {

  rootURL: string;

  constructor(private httpsvc: HttpClient) {
    this.rootURL = "http://localhost:9901/role_skill_map";
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
