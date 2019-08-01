import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfiaComponent } from './sfia.component';

describe('SfiaComponent', () => {
  let component: SfiaComponent;
  let fixture: ComponentFixture<SfiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
