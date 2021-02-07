import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHerosHeaderComponent } from './all-heros-header.component';

describe('AllHerosHeaderComponent', () => {
  let component: AllHerosHeaderComponent;
  let fixture: ComponentFixture<AllHerosHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllHerosHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHerosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
