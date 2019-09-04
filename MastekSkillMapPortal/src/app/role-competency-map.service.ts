import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoleCompetencyMap } from './role-competency-map';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleCompetencyMapService {

  rootURL: string;

  constructor(private httpsvc: HttpClient) {
    this.rootURL = "https://svccompanyroles.azurewebsites.net/role_competency_skill_map";
  }
  
  getRoleSkillMapviaCompetency(competency_id: string): Observable<RoleCompetencyMap[]> {
    return this.httpsvc.get<RoleCompetencyMap[]>(this.rootURL +
      "/competency?competency_id=" + competency_id);
  }

  getRoleSkillMapViaRole(role_id: string): Observable<RoleCompetencyMap[]> {
    return this.httpsvc.get<RoleCompetencyMap[]>(this.rootURL +
      "/role_id?role_id=" + role_id);  
  }

}