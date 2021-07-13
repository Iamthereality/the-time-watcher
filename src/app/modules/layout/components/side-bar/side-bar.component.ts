import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { SideBarService } from '../../../../core/services/side-bar/side-bar.service';
import { WindowDimensions } from '../../../../core/interfaces/window-dimensions/window-dimensions';
import { SubscriptionLike } from 'rxjs';
import { ResizeService } from '../../../../core/services/resize/resize.service';
import { SlideLeft } from '../../../../shared/animations/slide-animations';
import { UserInterface } from '../../../../core/interfaces/user/user.interface';
import { ApiService } from '../../../../core/services/api/api.service';
import { UserResponse } from '../../../../core/interfaces/api/api.interface';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [SlideLeft]
})
export class SideBarComponent implements OnInit, OnDestroy {
  public user: UserInterface;
  public window: WindowDimensions;
  public sideBarState: boolean;

  private resizeSub: SubscriptionLike;
  private sideBarStateSub: SubscriptionLike;
  private userDataSub: SubscriptionLike;

  constructor(
    private resizeService: ResizeService,
    private sideBarService: SideBarService,
    private apiService: ApiService
  ) {
    this.window = null;
  }

  ngOnInit() {
    // this.user = {
    //   id: '1sii323d-s4df2pe3-7y33fyu6-0ire61mf',
    //   name: 'Nikolay Lysenko',
    //   imageUrl: 'https://sun9-72.userapi.com/c629420/v629420555/370cd/5M7baUnYOgM.jpg'
    // };

    this.userDataSub = this.apiService.getUser('1sii323d-s4df2pe3-7y33fyu6-0ire61mf')
      .subscribe((resp: UserResponse) => {
        if (resp.success) {
          this.user = resp.data;
        }
      })
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
    if (this.userDataSub) {
      this.userDataSub.unsubscribe();
    }
  }
}
