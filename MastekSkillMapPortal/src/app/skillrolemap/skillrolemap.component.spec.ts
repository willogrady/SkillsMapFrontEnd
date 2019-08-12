import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillrolemapComponent } from './skillrolemap.component';

describe('SkillrolemapComponent', () => {
  let component: SkillrolemapComponent;
  let fixture: ComponentFixture<SkillrolemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillrolemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillrolemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
