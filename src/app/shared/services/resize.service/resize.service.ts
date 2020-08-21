import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WindowDimensions } from '../../interfaces/window-sizes.interface/window-dimensions';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  public windowSizes = new BehaviorSubject<WindowDimensions>({
    width: 0,
    height: 0
  });

  constructor() {}

  public setWindowSizes({width, height}: WindowDimensions) {
    this.windowSizes.next({width, height});
  }
}
