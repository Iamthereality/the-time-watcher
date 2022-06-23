import { Component } from '@angular/core';
import { DrawerService } from '@core/services/drawer/drawer.service';
import { Observable } from 'rxjs';
import { ResizeService } from '@core/services/resize/resize.service';
import { IWindowDimensions } from '@core/interfaces/application/window-dimensions/window-dimensions.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly windowDimensions$: Observable<IWindowDimensions>;
  public readonly logo: string;

  constructor(private readonly drawerService: DrawerService, private readonly resizeService: ResizeService) {
    this.windowDimensions$ = this.resizeService.windowDimensions$;
    this.logo = 'The Time Watcher';
  }

  public openDrawer() {
    this.drawerService.toggleDrawerState();
  }
}
