import { Component, OnInit } from '@angular/core';
import { Competency } from '../competency';
import {Router} from '@angular/router';
import { CompetencyServiceService } from '../competency-service.service';


@Component({
  selector: 'app-competency-form',
  templateUrl: './competency-form.component.html',
  styleUrls: ['./competency-form.component.css']
})
export class CompetencyFormComponent implements OnInit {
  private competency:Competency;

  constructor(private compSvc:CompetencyServiceService, private router:Router) { 
    
   }

  ngOnInit() {
    this.competency=this.compSvc.getter()
  }

  processForm(competency_category: string, competency_id: string, version_id: string){
    this.compSvc.updateCompetency(competency_category,competency_id, version_id).subscribe(
      res => {this.competency = res;}
    )
  }


}
