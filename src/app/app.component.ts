import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ResizeService } from './core/services/resize/resize.service';
import { WindowDimensions } from './core/interfaces/window-dimensions/window-dimensions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public title = 'The Time Watcher';

  private windowSizes: WindowDimensions = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  @ViewChild('canvas', { static: true }) private canvas: ElementRef<HTMLCanvasElement>;
  private context: CanvasRenderingContext2D;

  constructor(private resizeService: ResizeService) {}

  ngOnInit(): void {
    this.onResize();
    this.context = this.canvas.nativeElement.getContext('2d');
    this.animate();
  }

  private animate() {
    const col = (x, y, r, g, b) => {
      this.context.fillStyle = `rgb(${r}, ${g}, ${b})`;
      this.context.fillRect(x, y, 1,1);
    }

    const R = function(x, y, t) {
      return( Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t)));
    }

    const G = function(x, y, t) {
      return( Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)));
    }

    const B = function(x, y, t) {
      return( Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
    }

    let t = 0;

    const run = function() {
      for(let x = 0; x <= 35; x++) {
        for(let y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t += 0.0120;
      window.requestAnimationFrame(run);
    }

    run();
  }

  @HostListener('window:resize', ['$event']) private onResize() {
    this.windowSizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.resizeService.setWindowSizes(this.windowSizes);
  }
}
