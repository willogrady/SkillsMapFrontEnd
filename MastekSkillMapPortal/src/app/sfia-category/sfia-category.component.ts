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
      )}
  
  getSkillStrategy() {
     this.sfiaService.getSkillStrategy().subscribe(
      res => {this.sfiaSkills = res }
      )}

   getSkillDevelopment() {
     this.sfiaService.getSkillDevelopment().subscribe(
      res => {this.sfiaSkills = res }
      )}

   getSkillDelivery() {
     this.sfiaService.getSkillDelivery().subscribe(
      res => {this.sfiaSkills = res }
      )}

   getSkillQuality() {
      this.sfiaService.getSkillQuality().subscribe(
      res => {this.sfiaSkills = res }
     )}

  getSkillRelationship() {
    this.sfiaService.getSkillRelationShip().subscribe(
      res => {this.sfiaSkills = res}
    )}


  ngOnInit() {
    //load in distinct categories on start ups
    this.sfiaService.getCategories().subscribe(
      res => {this.category = res; }
    )
  }

}
