import { Component, OnInit } from '@angular/core';
import { CompetencyServiceService } from '../competency-service.service';
import { Competency } from '../competency';
import {Router} from '@angular/router'

@Component({
  selector: 'app-competencies',
  templateUrl: './competencies.component.html',
  styleUrls: ['./competencies.component.css']
})
export class CompetenciesComponent implements OnInit {

  competencies:  Competency[];
  constructor(private compSvc: CompetencyServiceService, private router: Router) { }

  ngOnInit() {
    this.compSvc.getCompetencyList().subscribe(
      res => {this.competencies = res }
    );
    
  }
  updateCompetency(competencies){
    this.compSvc.setter(competencies);
    this.router.navigate(['/update-competency'])

  }

}
