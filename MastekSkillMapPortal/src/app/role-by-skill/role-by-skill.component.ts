import { Component, OnInit } from '@angular/core';
import { RoleSkillMap } from '../role-skill-map';
import { SkillrolemapService } from '../skillrolemap.service';
import { ActivatedRoute } from '@angular/router';

// THIS IS ROLES TO SKILL FROM SFIA HTML

@Component({
  selector: 'app-role-by-skill',
  templateUrl: './role-by-skill.component.html',
  styleUrls: ['./role-by-skill.component.css']
})
export class RoleBySkillComponent implements OnInit {
  roleSkillMaps: RoleSkillMap[];  

  constructor(private skill_role_map_Service:SkillrolemapService,
    private route: ActivatedRoute) {
    this.roleSkillMaps = [];
   }


  ngOnInit() {
    const skillcode = this.route.snapshot.paramMap.get('skillcode');
    this.skill_role_map_Service.getRoleSkillMapviaSkillCode(skillcode)
    .subscribe(response => {
      this.roleSkillMaps = response;
      console.log(response);
      }
    )
  }

}
