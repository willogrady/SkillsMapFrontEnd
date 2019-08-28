import { Component, OnInit } from '@angular/core';
import { CompanySkillsService } from '../company-skills.service';
import { Companyskills } from '../companyskills';

@Component({
  selector: 'app-company-skills',
  templateUrl: './company-skills.component.html',
  styleUrls: ['./company-skills.component.css']
})
export class CompanySkillsComponent implements OnInit {

  companySkills: Companyskills[];

  constructor(private compSvc: CompanySkillsService) {
    this.companySkills = [];
   }

  ngOnInit() {
    this.compSvc.getCompanySkills().subscribe(
      res => {this.companySkills = res}
    )

  }

}
