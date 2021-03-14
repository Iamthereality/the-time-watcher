import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { SideBarService } from '../../../../core/services/side-bar/side-bar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy{
  public sideBarState: boolean;

  private sideBarStateSub: SubscriptionLike;

  constructor(
    private sideBarService: SideBarService
  ) {}

  ngOnInit() {
    this.sideBarStateSub = this.sideBarService.sideBarState
      .subscribe((sidebarState: boolean) => this.sideBarState = sidebarState);
  }

  ngOnDestroy() {
    this.sideBarStateSub.unsubscribe();
  }
}
