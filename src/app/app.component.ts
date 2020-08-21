import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { ResizeService } from './shared/services/resize.service/resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public title = 'TimeWatcherGUI';

  constructor(
    private resizeService: ResizeService
  ) {
    this.onResize();
  }

  @HostListener('window:resize', ['$event']) private onResize() {
    this.resizeService.setWindowSizes({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
}
