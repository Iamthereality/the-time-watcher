import { Component, OnInit, OnDestroy } from '@angular/core';
import { DrawerService } from '../../../../core/services/drawer/drawer.service';
import { SubscriptionLike } from 'rxjs';
import { ResizeService } from '../../../../core/services/resize/resize.service';
import { IWindowDimensions } from '@core/interfaces/application/window-dimensions/window-dimensions.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public window: IWindowDimensions = {
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
      (windowSizes: IWindowDimensions) => (this.window = windowSizes)
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
