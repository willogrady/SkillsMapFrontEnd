import { Component, OnInit } from '@angular/core';
import { RoleSkillMap } from '../role-skill-map';
import { SkillrolemapService } from '../skillrolemap.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skill-by-role',
  templateUrl: './skill-by-role.component.html',
  styleUrls: ['./skill-by-role.component.css']
})
export class SkillByRoleComponent implements OnInit {
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