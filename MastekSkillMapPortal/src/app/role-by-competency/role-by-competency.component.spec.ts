import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleByCompetencyComponent } from './role-by-competency.component';

describe('CompetencyRoleMapComponent', () => {
  let component: RoleByCompetencyComponent;
  let fixture: ComponentFixture<RoleByCompetencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleByCompetencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleByCompetencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
