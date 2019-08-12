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

  getSkillByCategory(category: string[]): SfiaSkill[] {
    console.log("making a request")
    this.sfiaService.getSkillByCategory(category).subscribe(
     res =>{this.sfiaSkills = res; }
      );
    console.log("categories:" + this.category[4])
    return;
  }

  getSkillTesting(){
    this.sfiaService.getSkillChangeTransformation().subscribe(
      res => {this.sfiaSkills = res; }
      );
  }


  ngOnInit() {
    this.sfiaService.getCategories().subscribe(
      res => {this.category = res; }
    );
    console.log('categories:' + this.category);

    //display only strategy 
    this.sfiaService.getSkillStrategy().subscribe(
      res => {this.sfiaSkills = res; }
      );
      console.log(this.sfiaSkills[0].toString())

      this.sfiaService.getSkillChangeTransformation().subscribe(
        res => {this.sfiaSkills = res; }
        );
        console.log(this.sfiaSkills[0].toString())


  

  }

}
