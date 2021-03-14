import { Component, OnInit, OnDestroy } from '@angular/core';
import { SlideLeft, SlideRight } from '../../../../shared/animations/slide-animations';
import { WindowDimensions } from '../../../../core/interfaces/window-dimensions/window-dimensions';
import { SubscriptionLike } from 'rxjs';
import { ResizeService } from '../../../../core/services/resize/resize.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [SlideRight, SlideLeft]
})
export class LayoutComponent implements OnInit, OnDestroy {
  public window: WindowDimensions = {
    width: 0,
    height: 0
  };
  private resizeSub: SubscriptionLike;

  constructor(
    private resizeService: ResizeService
  ) { }

  ngOnInit(): void {
    this.resizeSub = this.resizeService.windowSizes
      .subscribe((windowSizes: WindowDimensions) => this.window = windowSizes);
  }

  ngOnDestroy() {
    if (this.resizeSub) {
      this.resizeSub.unsubscribe();
    }
  }
}
