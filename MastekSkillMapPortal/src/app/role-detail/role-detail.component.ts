import { Component, OnInit } from '@angular/core';
import { Role } from '../role';
import { RoleService } from '../role.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {
  role: Role;

  constructor(private roleService: RoleService, private route: ActivatedRoute) {
    this.role = null;
   }

  ngOnInit() {
    this.roleService.getRoleById(this.route.snapshot.params.id).subscribe(
      res => { this.role = res; }
    );
    console.log(this.role.role_id.toString());
  }

}
