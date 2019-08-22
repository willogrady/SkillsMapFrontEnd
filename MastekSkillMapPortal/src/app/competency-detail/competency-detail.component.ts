import { Component, OnInit } from '@angular/core';
import { Competency } from '../competency';
import { CompetencyServiceService } from '../competency-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-competency-detail',
  templateUrl: './competency-detail.component.html',
  styleUrls: ['./competency-detail.component.css']
})
export class CompetencyDetailComponent implements OnInit {
  competency: Competency;

  constructor(private competencyService:CompetencyServiceService,
    private route: ActivatedRoute) {
      this.competency = null;
     }

  ngOnInit() {
    this.competencyService.getCompetency(this.route.snapshot.params.id).subscribe(
      res => {this.competency = res;}
    )
  }

}
