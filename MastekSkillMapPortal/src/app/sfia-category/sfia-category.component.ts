import { Component, OnInit } from '@angular/core';
import { SfiaService } from '../sfia.service';
import { SfiaSkill } from '../sfia-skill';

@Component({
  selector: 'app-sfia-category',
  templateUrl: './sfia-category.component.html',
  styleUrls: ['./sfia-category.component.css']
})
export class SfiaCategoryComponent implements OnInit {

  categories: string[];


  constructor(private sfiaService: SfiaService) {
    this.categories = [];
   }

  getSkillByCategory(category: string): SfiaSkill[] {
  this.sfiaService.getSkillByCategory(category).subscribe(
      );
      return ;
  }

  ngOnInit() {
    this.sfiaService.getCategories().subscribe(
      res => {this.categories = res; }
    );
    console.log('categories:' + this.categories[0]);
  }

}
