import { Component, OnInit } from '@angular/core';
import { Role } from '../role';
import { RoleService } from '../role.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roles: Role[];
  role_group_id: number

  constructor(private roleService: RoleService,
    private route: ActivatedRoute) {
    this.roles = [];
    this.role_group_id = 0
 
   }
  
  getRoleArchitecture() {
    this.roleService.getRoleArchitecture().subscribe(
      res => {this.roles = res }
    )
  }

  ngOnInit() {
    }
  }


