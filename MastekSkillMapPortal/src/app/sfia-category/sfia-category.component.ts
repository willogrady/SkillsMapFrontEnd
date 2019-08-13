import { Component, OnInit } from '@angular/core';
import { SfiaService } from '../sfia.service';
import { SfiaSkill } from '../sfia-skill';

@Component({
  selector: 'app-sfia-category',
  templateUrl: './sfia-category.component.html',
  styleUrls: ['./sfia-category.component.css']
})
export class SfiaCategoryComponent implements OnInit {

  category: String[];
  sfiaSkills: SfiaSkill[];


  constructor(private sfiaService: SfiaService) {

   }

  getSkillChange(){
    this.sfiaService.getSkillChangeTransformation().subscribe(
      res => {this.sfiaSkills = res }
      )
  }
  
  getSkillStrategy() {
     //display only strategy 
     this.sfiaService.getSkillStrategy().subscribe(
      res => {this.sfiaSkills = res; }
      );
  }

  ngOnInit() {
    this.sfiaService.getCategories().subscribe(
      res => {this.category = res; }
    )
    // //display only strategy 
    // this.sfiaService.getSkillStrategy().subscribe(
    //   res => {this.sfiaSkills = res; }
    //   );
    //   console.log(this.sfiaSkills.toString())

  

  }

}
