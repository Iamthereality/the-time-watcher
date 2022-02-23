import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { DrawerService } from '../../../../core/services/drawer/drawer.service';
import { WindowDimensions } from '../../../../core/interfaces/window-dimensions/window-dimensions';
import { Subscription, SubscriptionLike } from 'rxjs';
import { ResizeService } from '../../../../core/services/resize/resize.service';
import { SlideLeft } from '../../../../shared/animations/slide-animations';
import {UserInterface} from "../../../../core/interfaces/user.interface";

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [SlideLeft],
})
export class DrawerComponent implements OnInit, OnDestroy {
  public user: UserInterface;

  private sub: Subscription;

  constructor(
    public resizeService: ResizeService,
    public drawerService: DrawerService
  ) {
    this.sub = new Subscription();
  }

  ngOnInit(): void {
    // const sub: SubscriptionLike
  }

  @HostListener('click', ['$event']) private closeDrawerByMenuLinkOpening(event: { target: HTMLDivElement; }): void {
    if (event.target.nodeName === 'A') {
      this.drawerService.toggleDrawerState();
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
