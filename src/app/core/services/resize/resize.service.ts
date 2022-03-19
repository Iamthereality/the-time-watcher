import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWindowDimensions } from '../../interfaces/application/window-dimensions/window-dimensions.interface';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  public windowSizes$: BehaviorSubject<IWindowDimensions>;

  constructor() {
    this.windowSizes$ = new BehaviorSubject<IWindowDimensions>({
      width: 0,
      height: 0
    });
  }

  public setWindowSizes({ width, height }: IWindowDimensions) {
    this.windowSizes$.next({ width, height });
  }
}
