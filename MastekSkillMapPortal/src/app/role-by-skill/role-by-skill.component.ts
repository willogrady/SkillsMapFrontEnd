import { Component, OnInit } from '@angular/core';
import { RoleSkillMap } from '../role-skill-map';
import { SkillrolemapService } from '../skillrolemap.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-role-by-skill',
  templateUrl: './role-by-skill.component.html',
  styleUrls: ['./role-by-skill.component.css']
})
export class RoleBySkillComponent implements OnInit {
  // role_id: number;
  roleSkillMaps: RoleSkillMap[];

  constructor(private skill_role_map_Service: SkillrolemapService,
    private route: ActivatedRoute) {
    this.roleSkillMaps = [];
  }

  ngOnInit() {
    const role_id = this.route.snapshot.paramMap.get('role_id');
    this.skill_role_map_Service.getRoleSkillMapViaRole(role_id)
      .subscribe(response => {
        this.roleSkillMaps = response;
        console.log(response)
      })
  }

}
