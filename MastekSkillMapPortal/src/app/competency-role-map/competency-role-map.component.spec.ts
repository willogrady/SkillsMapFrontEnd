import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyRoleMapComponent } from './competency-role-map.component';

describe('CompetencyRoleMapComponent', () => {
  let component: CompetencyRoleMapComponent;
  let fixture: ComponentFixture<CompetencyRoleMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyRoleMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyRoleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
