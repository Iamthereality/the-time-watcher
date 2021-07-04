import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { ResizeService } from './core/services/resize/resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public title;

  constructor(private resizeService: ResizeService) {
    this.title = 'The Time Watcher';
    this.onResize();
  }

  @HostListener('window:resize', ['$event']) private onResize() {
    this.resizeService.setWindowSizes({
      width: window.innerWidth,
      height: window.innerHeight
    });
    console.log(this.resizeService.windowSizes$.value);
  }
}
