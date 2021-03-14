import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { SideBarService } from '../../../../core/services/side-bar/side-bar.service';
import { WindowDimensions } from '../../../../core/interfaces/window-dimensions/window-dimensions';
import { SubscriptionLike } from 'rxjs';
import { ResizeService } from '../../../../core/services/resize/resize.service';
import { SlideLeft } from '../../../../shared/animations/slide-animations';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [SlideLeft]
})
export class SideBarComponent implements OnInit, OnDestroy {
  public window: WindowDimensions;

  public sideBarState: boolean;

  private resizeSub: SubscriptionLike;
  private sideBarStateSub: SubscriptionLike;

  constructor(
    private resizeService: ResizeService,
    private sideBarService: SideBarService
  ) {
    this.window = null;
  }

  ngOnInit() {
    this.resizeSub = this.resizeService.windowSizes
      .subscribe((window: WindowDimensions) => this.window = window);
    this.sideBarStateSub = this.sideBarService.sideBarState
      .subscribe((sidebarState: boolean) => this.sideBarState = sidebarState);
  }

  public closeSideBar() {
    this.sideBarService.toggleSideBarState(false);
  }

  @HostListener('click', ['$event']) private closeSideBarByMenuLinkOpening(event) {
    if (event.target.nodeName === 'A') {
      this.closeSideBar();
    }
  }

  ngOnDestroy() {
    if (this.resizeSub) {
      this.resizeSub.unsubscribe();
    }
    if (this.sideBarStateSub) {
      this.sideBarStateSub.unsubscribe();
    }
  }
}
