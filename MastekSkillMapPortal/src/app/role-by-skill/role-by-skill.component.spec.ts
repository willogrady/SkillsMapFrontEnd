import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBySkillComponent } from './role-by-skill.component';

describe('RoleBySkillComponent', () => {
  let component: RoleBySkillComponent;
  let fixture: ComponentFixture<RoleBySkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleBySkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleBySkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
