import { Component, OnInit } from '@angular/core';
import { Competency } from '../competency';
import { CompetencyServiceService } from '../competency-service.service';

@Component({
  selector: 'app-create-competency',
  templateUrl: './create-competency.component.html',
  styleUrls: ['./create-competency.component.css']
})
export class CreateCompetencyComponent implements OnInit {

  competency : Competency[]

  constructor(private competencyService: CompetencyServiceService) { }

  createCompetency(competency_category: string, competency_description: string,
    level1: string, level2: string, level3: string, 
    level4: string, level5: string, level6: string, version_id: number){
      console.log("Creating Competency")
      this.competencyService.createRole(competency_category, competency_description,
        level1, level2, level3, level4, level5, level6, version_id).subscribe(
          res =>(this.competency = res)
        )
    }

  ngOnInit() {
    this.competencyService.getCompetencyList().subscribe(
      res =>{this.competency = res;}
    );

  }

}
