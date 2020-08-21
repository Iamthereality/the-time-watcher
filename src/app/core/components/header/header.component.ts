import { Component, OnInit, OnDestroy } from '@angular/core';
import { SideBarService } from '../../services/side-bar.service/side-bar.service';
import { SubscriptionLike } from 'rxjs';
import { ResizeService } from '../../../shared/services/resize.service/resize.service';
import { WindowDimensions } from '../../../shared/interfaces/window-sizes.interface/window-dimensions';

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
  private windowSizesSubscription: SubscriptionLike;

  constructor(
    private sideBarService: SideBarService,
    private resizeService: ResizeService
  ) {}

  ngOnInit() {
    this.windowSizesSubscription = this.resizeService.windowSizes
      .subscribe((windowSizes: WindowDimensions) => this.window = windowSizes);
  }

  public openSideBar() {
    this.sideBarService.toggleSideBarState(true);
  }

  ngOnDestroy() {
    this.windowSizesSubscription.unsubscribe();
  }
}
