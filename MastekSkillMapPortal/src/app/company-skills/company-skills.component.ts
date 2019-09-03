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
  isEditable: boolean;

  constructor(private compSvc: CompanySkillsService) {
    this.isEditable = false;
   }


   pressedEdit() {
    this.isEditable = !this.isEditable;
   }


   updateSkills(company_skill_id: string, company_skill: string, version_id: string,
    company_skill_description: string, company_skill_category: string, company_skill_sub_category: string) {
     this.compSvc.updateCompanySkillDetails(company_skill_id, company_skill, version_id, company_skill_description, company_skill_category, company_skill_sub_category).subscribe(
       res =>(this.companySkills = res)
     )
   }


  ngOnInit() {
    this.compSvc.getCompanySkills().subscribe(
      res => {this.companySkills = res}
    )

  }

}
