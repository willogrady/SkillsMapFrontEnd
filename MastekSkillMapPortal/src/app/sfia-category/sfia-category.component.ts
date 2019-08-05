import { Component, OnInit } from '@angular/core';
import { SfiaService } from '../sfia.service';
import { SfiaSkill } from '../sfia-skill';

@Component({
  selector: 'app-sfia-category',
  templateUrl: './sfia-category.component.html',
  styleUrls: ['./sfia-category.component.css']
})
export class SfiaCategoryComponent implements OnInit {

  categories: string[]
  sfiaSkills: SfiaSkill[]

  constructor(private sfiaService: SfiaService) {
    this.categories = [];
    this.sfiaSkills = [];
   }

  getSkillByCategory(category: string) {
    this.sfiaService.getSkillByCategory(category).subscribe(
      res => {this.sfiaSkills = res; }
    );
  }

  ngOnInit() {
    this.sfiaService.getCategories().subscribe(
      res => {this.categories = res; }
    );
    console.log(this.sfiaSkills)
  }

}
