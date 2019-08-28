import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyDetailComponent } from './competency-detail.component';

describe('CompetencyDetailComponent', () => {
  let component: CompetencyDetailComponent;
  let fixture: ComponentFixture<CompetencyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
