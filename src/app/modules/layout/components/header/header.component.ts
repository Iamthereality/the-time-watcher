import { Component, OnInit, OnDestroy } from '@angular/core';
import { SideBarService } from '../../../../core/services/side-bar/side-bar.service';
import { SubscriptionLike } from 'rxjs';
import { ResizeService } from '../../../../core/services/resize/resize.service';
import { WindowDimensions } from '../../../../core/interfaces/window-dimensions/window-dimensions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public window: WindowDimensions = {
    width: 0,
    height: 0
  };
  private resizeSub: SubscriptionLike;

  constructor(
    private sideBarService: SideBarService,
    private resizeService: ResizeService
  ) {}

  ngOnInit() {
    this.resizeSub = this.resizeService.windowSizes
      .subscribe((windowSizes: WindowDimensions) => this.window = windowSizes);
  }

  public openSideBar() {
    this.sideBarService.toggleSideBarState(true);
  }

  ngOnDestroy() {
    if (this.resizeSub) {
      this.resizeSub.unsubscribe();
    }
  }
}
