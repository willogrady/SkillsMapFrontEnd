import { Component, OnInit } from '@angular/core';
import { RoleGroupService } from '../role-group.service';
import { Role } from '../role';

@Component({
  selector: 'app-role-group',
  templateUrl: './role-group.component.html',
  styleUrls: ['./role-group.component.css']
})
export class RoleGroupComponent implements OnInit {

  roles: Role[]

  constructor(private roleGroupService: RoleGroupService) {
   }

  ngOnInit() {
  }

}
