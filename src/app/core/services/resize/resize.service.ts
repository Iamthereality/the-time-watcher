import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WindowDimensions } from '../../interfaces/window-dimensions/window-dimensions';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  public windowSizes$: BehaviorSubject<WindowDimensions>;

  constructor() {
    this.windowSizes$ = new BehaviorSubject<WindowDimensions>({
      width: 0,
      height: 0
    });
  }

  public setWindowSizes({ width, height }: WindowDimensions) {
    this.windowSizes$.next({ width, height });
  }
}
