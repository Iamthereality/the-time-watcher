import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  SlideLeft,
  SlideRight,
} from '../../../../shared/animations/slide-animations';
import { WindowDimensions } from '../../../../core/interfaces/window-dimensions/window-dimensions';
import { Subscription, SubscriptionLike } from 'rxjs';
import { ResizeService } from '../../../../core/services/resize/resize.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
  animations: [SlideRight, SlideLeft],
})
export class TimesheetComponent implements OnInit, OnDestroy {
  public window: WindowDimensions = {
    width: 0,
    height: 0,
  };

  private sub: Subscription;

  constructor(private resizeService: ResizeService) {
    this.sub = new Subscription();
  }

  ngOnInit(): void {
    const sub: SubscriptionLike = this.resizeService.windowSizes$.subscribe(
      (windowSizes: WindowDimensions) => (this.window = windowSizes)
    );
    this.sub.add(sub);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
