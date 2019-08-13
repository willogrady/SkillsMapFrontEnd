import { Component, OnInit } from '@angular/core';
import { Role } from '../role';
import { RoleService } from '../role.service';
import { SkillrolemapService } from '../skillrolemap.service';
import { RoleSkillMap } from '../role-skill-map';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roles: Role[];
  roleSkillMap: RoleSkillMap[];

  constructor(private roleService: RoleService, private skillRoleMapService: SkillrolemapService) {
    this.roles = [];
   }


   //getSkillMap
   getSkillByRole(role_id: number){
    this.skillRoleMapService.getSkillByRole(role_id).subscribe(
      res => {this.roleSkillMap = res}
    )
   }
  
  getRoleArchitecture() {
    this.roleService.getRoleArchitecture().subscribe(
      res => {this.roles = res }
    )
  }

  getBusinessAnalysis() {
    this.roleService.getRoleBusinessAnalysis().subscribe(
      res => {this.roles = res }
    )
  }

  getConsulting() {
    this.roleService.getConsulting().subscribe(
      res => {this.roles = res }
    )
  }

  getDeliveryManagement() {
    this.roleService.getDeliveryManagement().subscribe(
      res => {this.roles = res }
    )
  }

  getEngineering() {
    this.roleService.getEngineering().subscribe(
      res => {this.roles = res }
    )
  }

  getFinance() {
    this.roleService.getFinance().subscribe(
      res => {this.roles = res }
    )
  }

  getHumanResources() {
    this.roleService.getHumanResources().subscribe(
      res => {this.roles = res }
    )
  }

  ngOnInit() {
    }
  }


