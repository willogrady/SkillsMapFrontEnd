import { Component, OnInit } from '@angular/core';
import { SfiaSkill } from '../sfia-skill'
import { SfiaService } from '../sfia.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sfia-detail',
  templateUrl: './sfia-detail.component.html',
  styleUrls: ['./sfia-detail.component.css']
})
export class SfiaDetailComponent implements OnInit {
  sfiaSkill: SfiaSkill;

  constructor(private sfiaService:SfiaService,
    private route: ActivatedRoute) {
    this.sfiaSkill = null;
  }

  ngOnInit() {
    this.sfiaService.getSkill(this.route.snapshot.params.id).subscribe(
      res => {this.sfiaSkill = res; }
    );
  }

}
