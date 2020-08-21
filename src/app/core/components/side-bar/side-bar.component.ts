import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import { SideBarService } from '../../services/side-bar.service/side-bar.service';
import { trigger, style, transition, animate } from '@angular/animations';
import { WindowDimensions } from '../../../shared/interfaces/window-sizes.interface/window-dimensions';
import { SubscriptionLike } from 'rxjs';
import { ResizeService } from '../../../shared/services/resize.service/resize.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({
          transformOrigin: '0 0',
          transform: 'translate(100%, 0)',
        }),
        animate('300ms cubic-bezier(0.77, 0.2, 0.05, 1.0)', style({
          transformOrigin: '0 0',
          transform: 'translate(0, 0)',
        }))
      ]),
      transition(':leave', [
        animate('300ms cubic-bezier(0.77, 0.2, 0.05, 1.0)', style({
          transformOrigin: '100% 0',
          transform: 'translate(100%, 0)'
        }))
      ])
    ])
  ]
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
    this.resizeSub.unsubscribe();
    this.sideBarStateSub.unsubscribe();
  }
}
