import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyByRoleComponent } from './competency-by-role.component';

describe('CompetencyByRoleComponent', () => {
  let component: CompetencyByRoleComponent;
  let fixture: ComponentFixture<CompetencyByRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyByRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyByRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
