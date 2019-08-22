import { Component, OnInit } from '@angular/core';
import { RoleSkillMap } from '../role-skill-map';
import { SkillrolemapService } from '../skillrolemap.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-competency-role-map',
  templateUrl: './competency-role-map.component.html',
  styleUrls: ['./competency-role-map.component.css']
})
export class CompetencyRoleMapComponent implements OnInit {
  roleSkillMaps: RoleSkillMap[];

  constructor(private skill_role_map_Service: SkillrolemapService,
    private route: ActivatedRoute) {
    this.roleSkillMaps = [];
     }

  ngOnInit() {
    const competency_id = this.route.snapshot.paramMap.get('competency_id');
    this.skill_role_map_Service.getRoleSkillMapviaCompetency(competency_id)
      .subscribe(response => {
        this.roleSkillMaps = response;
        console.log(response);
      }
    )
  }

}
