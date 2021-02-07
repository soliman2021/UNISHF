import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHerosTableComponent } from './all-heros-table.component';

describe('AllHerosTableComponent', () => {
  let component: AllHerosTableComponent;
  let fixture: ComponentFixture<AllHerosTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllHerosTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHerosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
