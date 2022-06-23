import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, Observable, startWith } from 'rxjs';
import { IWindowDimensions } from '@core/interfaces/application/window-dimensions/window-dimensions.interface';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  public windowDimensions$: Observable<IWindowDimensions>;

  private _windowDimensions$: BehaviorSubject<IWindowDimensions>;

  constructor() {
    this._windowDimensions$ = new BehaviorSubject<IWindowDimensions>({
      width: 0,
      height: 0
    });
    this.windowDimensions$ = this._windowDimensions$.asObservable();

    this.subscriptionsEmitter();
  }

  private windowDimensionsSubscription(): void {
    fromEvent<Event>(window, 'resize')
      .pipe(startWith(null), debounceTime(10))
      .subscribe(() => this._windowDimensions$.next({ width: window.innerWidth, height: window.innerHeight }));
  }

  private subscriptionsEmitter(): void {
    this.windowDimensionsSubscription();
  }
}
