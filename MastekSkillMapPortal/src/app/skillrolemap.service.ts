import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { RoleSkillMap } from './role-skill-map';

@Injectable({
  providedIn: 'root'
})
export class SkillrolemapService {

  rootURL: string;

  constructor(private httpsvc: HttpClient) {
    this.rootURL = "http://localhost:9901/role_skill_map";
   }

   getSkillviaSkillId(): Observable<RoleSkillMap> {
     return this.httpsvc.get<RoleSkillMap>(this.rootURL + "/sfia_skill")
   }

   getRoleviaSkill(skillcode: string): Observable<string[]> {
     return this.httpsvc.get<string[]>(this.rootURL +
       "/role_by_skill?skillcode=" + skillcode);
   }
}
