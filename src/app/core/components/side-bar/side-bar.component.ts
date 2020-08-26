import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import { SideBarService } from '../../services/side-bar.service/side-bar.service';
import { trigger, style, transition, animate } from '@angular/animations';
import { WindowDimensions } from '../../../shared/interfaces/window-dimensions.interface/window-dimensions';
import { SubscriptionLike } from 'rxjs';
import { ResizeService } from '../../../shared/services/resize.service/resize.service';
import { SlideLeft} from '../../../shared/animations/slide-animations';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [SlideLeft]
})
export class SideBarComponent implements OnInit, OnDestroy {
  public window: WindowDimensions = {
    width: 0,
    height: 0
  };

  public sideBarState: boolean;

  private resizeSub: SubscriptionLike;
  private sideBarStateSub: SubscriptionLike;

  constructor(
    private resizeService: ResizeService,
    private sideBarService: SideBarService
  ) {}

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
