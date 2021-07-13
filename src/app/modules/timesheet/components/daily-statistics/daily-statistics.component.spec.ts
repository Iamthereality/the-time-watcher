import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DailyStatisticsComponent } from './daily-statistics.component';

describe('DailyStatisticsComponent', () => {
  let component: DailyStatisticsComponent;
  let fixture: ComponentFixture<DailyStatisticsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
