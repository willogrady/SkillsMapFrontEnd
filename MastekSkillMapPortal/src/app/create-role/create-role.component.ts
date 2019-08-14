import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';
import { Role } from '../role';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  role: Role[];

  constructor(private roleService: RoleService) { }

  createRole(role_title: string, role_grade: string,
    role_summary: string, role_group_id: string) {
    console.log("posting role")
    this.roleService.createRole(role_title, role_grade, role_summary, role_group_id).subscribe(
      res =>(this.role = res)
    )
    
  }

  ngOnInit() {
  }

}
