import { Component, OnInit } from '@angular/core';
import { Role } from '../role';
import { RoleService } from '../role.service';
import { ActivatedRoute } from '@angular/router';
import { RoleSkillMap } from '../role-skill-map';
import { SkillrolemapService } from '../skillrolemap.service';
import { SfiaService } from '../sfia.service';
import { SfiaSkill } from '../sfia-skill';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {

  role: Role;
  roleSkillMaps: RoleSkillMap[];
  skillcode: string;
  skills: SfiaSkill[];

  constructor(private roleService: RoleService, private skill_role_map_Service: SkillrolemapService,
              private route: ActivatedRoute, private sfiaService: SfiaService) {
      this.roleSkillMaps = [];
      this.skillcode = '';
      this.role = null;
      this.skills = null;
   }

  createRoleSkillMap(skillcode: string, level: number) {
    const roleID = this.route.snapshot.paramMap.get('id');
    this.skill_role_map_Service.createRoleSkillMap(roleID, skillcode, level).subscribe()
    console.log('Submitted role-skill-map, Skillcode: '  + skillcode + ' Skill Level: ' + level);
    
  }

  ngOnInit() {
    this.roleService.getRoleById(this.route.snapshot.params.id).subscribe(
      res => {this.role = res; }
      );
    //console.log(this.role.role_title);

    const roleID = this.route.snapshot.paramMap.get('id');
    this.skill_role_map_Service.getRoleSkillMapViaRole(roleID)
      .subscribe(response => {
        this.roleSkillMaps = response;
        //console.log(this.roleSkillMaps);
      });



    this.sfiaService.getSkills().subscribe(
      res => {this.skills = res; }
        );
    //console.log('Skills:' + this.skills);
  }

}
