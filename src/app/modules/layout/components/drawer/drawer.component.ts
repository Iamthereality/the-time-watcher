import { Component, HostListener } from '@angular/core';
import { DrawerService } from '@core/services/drawer/drawer.service';
import { ResizeService } from '@core/services/resize/resize.service';
import { SlideLeft } from '@shared/animations/slide-animations';
import { UserService } from '@core/services/user/user.service';
import { Observable } from 'rxjs';
import { IWindowDimensions } from '@core/interfaces/application/window-dimensions/window-dimensions.interface';
import { IUser } from '@core/interfaces/domain/user/user.interface';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [SlideLeft]
})
export class DrawerComponent {
  public readonly windowDimensions$: Observable<IWindowDimensions>;
  public readonly user$: Observable<IUser>;
  public readonly drawerState$: Observable<boolean>;

  constructor(
    private readonly resizeService: ResizeService,
    private readonly drawerService: DrawerService,
    public readonly userService: UserService
  ) {
    this.windowDimensions$ = this.resizeService.windowDimensions$;
    this.drawerState$ = this.drawerService.drawerState$;
    this.user$ = this.userService.user$;
    this.userService.getUser('1sii323d-s4df2pe3-7y33fyu6-0ire61mf');
  }

  @HostListener('click', ['$event']) private closeDrawerByMenuLinkOpening(event: { target: HTMLDivElement }): void {
    if (event.target.nodeName === 'A') {
      this.drawerService.toggleDrawerState();
    }
  }

  public toggleDrawerState(): void {
    this.drawerService.toggleDrawerState();
  }
}
