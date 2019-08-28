import { Component, OnInit } from '@angular/core';
import { RoleCompetencyMap } from '../role-competency-map';
import { RoleCompetencyMapService } from '../role-competency-map.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-competency-by-role',
  templateUrl: './competency-by-role.component.html',
  styleUrls: ['./competency-by-role.component.css']
})
export class CompetencyByRoleComponent implements OnInit {
  roleCompetencyMaps: RoleCompetencyMap[];

  constructor(private competency_role_map_Service: RoleCompetencyMapService,
    private route: ActivatedRoute) {
      this.roleCompetencyMaps = [];
     }

  ngOnInit() {
    const role_id = this.route.snapshot.paramMap.get('role_id');
    this.competency_role_map_Service.getRoleSkillMapViaRole(role_id)
      .subscribe(response => {
        this.roleCompetencyMaps = response;
        console.log(response);
      })
  }

}
