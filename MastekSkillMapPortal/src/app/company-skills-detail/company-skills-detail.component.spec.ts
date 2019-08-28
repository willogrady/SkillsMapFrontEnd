import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySkillsDetailComponent } from './company-skills-detail.component';

describe('CompanySkillsDetailComponent', () => {
  let component: CompanySkillsDetailComponent;
  let fixture: ComponentFixture<CompanySkillsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySkillsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySkillsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
