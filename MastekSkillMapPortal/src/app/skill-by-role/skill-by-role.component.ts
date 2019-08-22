import { Component, OnInit } from '@angular/core';
import { RoleSkillMap } from '../role-skill-map';
import { SkillrolemapService } from '../skillrolemap.service';
import { ActivatedRoute } from '@angular/router';
import { SfiaSkill } from '../sfia-skill';
import { SfiaService } from '../sfia.service';
@Component({
  selector: 'app-skill-by-role',
  templateUrl: './skill-by-role.component.html',
  styleUrls: ['./skill-by-role.component.css']
})
export class SkillByRoleComponent implements OnInit {
  roleSkillMaps: RoleSkillMap[];
  sfiaSkill: SfiaSkill;
  skillcode: string;
  // THIS IS SKILLS TO ROLES THROUGH ROLE HTML
  constructor(private skill_role_map_Service: SkillrolemapService,
    private sfia_skill_Service: SfiaService,
    private route: ActivatedRoute) {
    this.roleSkillMaps = [];
    this.sfiaSkill = null;
    this.skillcode = ""
  }
  getSkill() {
    this.sfia_skill_Service.getSkill(this.skillcode).subscribe(
      res => {this.sfiaSkill = res }
    )
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