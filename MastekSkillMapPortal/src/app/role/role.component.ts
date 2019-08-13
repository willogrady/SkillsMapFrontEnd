import { Component, OnInit } from '@angular/core';
import { Role } from '../role';
import { RoleService } from '../role.service';
import { SfiaSkill } from '../sfia-skill';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roles: Role[];

  constructor(private roleService: RoleService) {
    this.roles = [];
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


