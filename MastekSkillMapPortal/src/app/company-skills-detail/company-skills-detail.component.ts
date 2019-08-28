import { Component, OnInit } from '@angular/core';
import { Companyskills } from '../companyskills';
import { CompanySkillsService } from '../company-skills.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-skills-detail',
  templateUrl: './company-skills-detail.component.html',
  styleUrls: ['./company-skills-detail.component.css']
})
export class CompanySkillsDetailComponent implements OnInit {
  companySkills: Companyskills;

  constructor(private compSvc: CompanySkillsService,
    private route: ActivatedRoute) { 
      this.companySkills = null;

  }

  ngOnInit() {
    this.compSvc.getCompanySkillId(this.route.snapshot.params.id).subscribe(
      res => {this.companySkills = res}
    );
  }

}
