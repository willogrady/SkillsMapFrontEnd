import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillByRoleComponent } from './skill-by-role.component';

describe('SkillByRoleComponent', () => {
  let component: SkillByRoleComponent;
  let fixture: ComponentFixture<SkillByRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillByRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillByRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
