import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTimeSheetsComponent } from './daily-time-sheets.component';

describe('DailyTimeSheetsComponent', () => {
  let component: DailyTimeSheetsComponent;
  let fixture: ComponentFixture<DailyTimeSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTimeSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTimeSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
