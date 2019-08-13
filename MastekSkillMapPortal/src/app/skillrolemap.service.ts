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
    this.rootURL = "http://localhost:9901/role_skill_map";
   }

   getSfiaSkillviaId(skillcode: string): Observable<SfiaSkill> {
     return this.httpsvc.get<SfiaSkill>(this.rootURL +
    "/sfia_skill?skillcode" + skillcode);
   }

   getRoleSkillMapviaSkillCode(skillcode: string): Observable<RoleSkillMap[]> {
     return this.httpsvc.get<RoleSkillMap[]>(this.rootURL +
    "/skillcode?skillcode=" + skillcode);
   }
}
