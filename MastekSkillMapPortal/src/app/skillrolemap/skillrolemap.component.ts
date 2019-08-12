import { Component, OnInit } from '@angular/core';
import { RoleSkillMap } from '../role-skill-map';
import { SkillrolemapService } from '../skillrolemap.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skillrolemap',
  templateUrl: './skillrolemap.component.html',
  styleUrls: ['./skillrolemap.component.css']
})
export class SkillrolemapComponent implements OnInit {
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
    );
  }

}
