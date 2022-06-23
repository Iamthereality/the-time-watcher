import { Component } from '@angular/core';
import { SlideLeft, SlideRight } from '@shared/animations/slide-animations';
import { IWindowDimensions } from '@core/interfaces/application/window-dimensions/window-dimensions.interface';
import { Observable } from 'rxjs';
import { ResizeService } from '@core/services/resize/resize.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
  animations: [SlideRight, SlideLeft]
})
export class TimesheetComponent {
  public readonly windowDimensions$: Observable<IWindowDimensions>;

  constructor(private readonly resizeService: ResizeService) {
    this.windowDimensions$ = this.resizeService.windowDimensions$;
  }
}
