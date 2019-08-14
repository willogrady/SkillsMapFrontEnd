import { Component, OnInit } from '@angular/core';
import { SfiaSkill } from '../sfia-skill'
import { SfiaService } from '../sfia.service'

@Component({
  selector: 'app-sfia',
  templateUrl: './sfia.component.html',
  styleUrls: ['./sfia.component.css']
})

export class SfiaComponent implements OnInit {
  SfiaSkills: SfiaSkill[];


  constructor(private sfiaService:SfiaService) { 
    this.SfiaSkills = [];

  }


  ngOnInit() {
    
    this.sfiaService.getSkills().subscribe(
      res => {this.SfiaSkills = res; }
      );
      console.log(this.SfiaSkills);
  }

}
