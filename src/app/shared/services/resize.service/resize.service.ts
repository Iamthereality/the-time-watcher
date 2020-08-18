import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { WindowSizes } from "../../interfaces/window-sizes.interface/window-sizes";

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  public windowSizes = new BehaviorSubject<WindowSizes>({
    width: 0,
    height: 0
  });

  constructor() {}

  public setWindowSizes({width, height}: WindowSizes) {
    this.windowSizes.next({width, height});
  }
}
