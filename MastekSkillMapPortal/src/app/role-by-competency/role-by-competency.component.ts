import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleCompetencyMap } from '../role-competency-map';
import { RoleCompetencyMapService } from '../role-competency-map.service';

@Component({
  selector: 'app-role-by-competency',
  templateUrl: './role-by-competency.component.html',
  styleUrls: ['./role-by-competency.component.css']
})
export class RoleByCompetencyComponent implements OnInit {
  roleCompetencyMaps: RoleCompetencyMap[];

  constructor(private role_competency_map_Service: RoleCompetencyMapService,
    private route: ActivatedRoute) {
    this.roleCompetencyMaps = [];
     }

  ngOnInit() {
    const competency_id = this.route.snapshot.paramMap.get('competency_id');
    this.role_competency_map_Service.getRoleSkillMapviaCompetency(competency_id)
      .subscribe(response => {
        this.roleCompetencyMaps = response;
        console.log(response);
      }
    )
  }

}
