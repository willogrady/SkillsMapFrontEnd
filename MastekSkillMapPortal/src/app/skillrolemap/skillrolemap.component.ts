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
  RoleSkillMap: string[];

  constructor(private skill_role_map_Service:SkillrolemapService,
    private route: ActivatedRoute) {
    this.RoleSkillMap = null;
   }

  ngOnInit() {
    this.skill_role_map_Service.getRoleviaSkill(this.route.snapshot.params.skillcode).subscribe(
      res => {this.RoleSkillMap = res; }
    );
    console.log(this.RoleSkillMap[0].toString())
  }

}
