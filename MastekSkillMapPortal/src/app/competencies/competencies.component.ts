import { Component, OnInit } from '@angular/core';
import { CompetencyServiceService } from '../competency-service.service';
import { Competency } from '../competency';

@Component({
  selector: 'app-competencies',
  templateUrl: './competencies.component.html',
  styleUrls: ['./competencies.component.css']
})
export class CompetenciesComponent implements OnInit {

  competencies:  Competency[];
  constructor(private compSvc: CompetencyServiceService) { }

  ngOnInit() {
    this.compSvc.getCompetencyList().subscribe(
      res => {this.competencies = res }
    );
    
  }

}
