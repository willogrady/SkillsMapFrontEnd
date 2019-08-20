import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompetencyComponent } from './create-competency.component';

describe('CreateCompetencyComponent', () => {
  let component: CreateCompetencyComponent;
  let fixture: ComponentFixture<CreateCompetencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCompetencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompetencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
