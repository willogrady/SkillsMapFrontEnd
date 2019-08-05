import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfiaDetailComponent } from './sfia-detail.component';

describe('SfiaDetailComponent', () => {
  let component: SfiaDetailComponent;
  let fixture: ComponentFixture<SfiaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfiaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfiaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
