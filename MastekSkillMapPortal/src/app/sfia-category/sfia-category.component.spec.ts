import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfiaCategoryComponent } from './sfia-category.component';

describe('SfiaCategoryComponent', () => {
  let component: SfiaCategoryComponent;
  let fixture: ComponentFixture<SfiaCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfiaCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfiaCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
