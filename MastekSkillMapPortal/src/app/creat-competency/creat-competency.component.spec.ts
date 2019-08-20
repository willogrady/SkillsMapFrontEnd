import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatCompetencyComponent } from './creat-competency.component';

describe('CreatCompetencyComponent', () => {
  let component: CreatCompetencyComponent;
  let fixture: ComponentFixture<CreatCompetencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatCompetencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatCompetencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
