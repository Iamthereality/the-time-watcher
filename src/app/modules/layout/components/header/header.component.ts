import { Component, OnInit, OnDestroy } from '@angular/core';
import { DrawerService } from '../../../../core/services/drawer/drawer.service';
import { SubscriptionLike } from 'rxjs';
import { ResizeService } from '../../../../core/services/resize/resize.service';
import { WindowDimensions } from '../../../../core/interfaces/window-dimensions/window-dimensions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public window: WindowDimensions = {
    width: 0,
    height: 0,
  };

  private resizeSub: SubscriptionLike;

  constructor(
    private drawerService: DrawerService,
    private resizeService: ResizeService
  ) {}

  ngOnInit() {
    this.resizeSub = this.resizeService.windowSizes$.subscribe(
      (windowSizes: WindowDimensions) => (this.window = windowSizes)
    );
  }

  public openDrawer() {
    this.drawerService.toggleDrawerState();
  }

  ngOnDestroy() {
    if (this.resizeSub) {
      this.resizeSub.unsubscribe();
    }
  }
}
