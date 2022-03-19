import { Component, HostListener } from '@angular/core';
import { DrawerService } from "@core/services/drawer/drawer.service";
import { ResizeService } from "@core/services/resize/resize.service";
import { SlideLeft } from "@shared/animations/slide-animations";
import { UserService } from "@core/services/user/user.service";

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [SlideLeft],
})
export class DrawerComponent  {
  constructor(
    public readonly resizeService: ResizeService,
    public readonly drawerService: DrawerService,
    public readonly userService: UserService
  ) {
    this.userService.getUser('1sii323d-s4df2pe3-7y33fyu6-0ire61mf');
  }

  @HostListener('click', ['$event']) private closeDrawerByMenuLinkOpening(event: { target: HTMLDivElement; }): void {
    if (event.target.nodeName === 'A') {
      this.drawerService.toggleDrawerState();
    }
  }
}
