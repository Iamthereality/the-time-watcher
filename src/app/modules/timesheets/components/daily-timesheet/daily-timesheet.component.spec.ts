import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTimesheetComponent } from './daily-timesheet.component';

describe('DailyTimeSheetsComponent', () => {
  let component: DailyTimesheetComponent;
  let fixture: ComponentFixture<DailyTimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
