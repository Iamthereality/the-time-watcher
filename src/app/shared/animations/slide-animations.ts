import { animate, style, transition, trigger } from '@angular/animations';

export const SlideRight = trigger('slideRight', [
  transition(':enter', [
    style({
      transformOrigin: '0 0',
      transform: 'translate(-100%, 0)'
    }),
    animate(
      '300ms cubic-bezier(0.77, 0.2, 0.05, 1.0)',
      style({
        transformOrigin: '0 0',
        transform: 'translate(0, 0)'
      })
    )
  ]),
  transition(':leave', [
    animate(
      '300ms cubic-bezier(0.77, 0.2, 0.05, 1.0)',
      style({
        transformOrigin: '-100% 0',
        transform: 'translate(-100%, 0)'
      })
    )
  ])
]);

export const SlideLeft = trigger('slideLeft', [
  transition(':enter', [
    style({
      transformOrigin: '0 0',
      transform: 'translate(100%, 0)'
    }),
    animate(
      '300ms cubic-bezier(0.77, 0.2, 0.05, 1.0)',
      style({
        transformOrigin: '0 0',
        transform: 'translate(0, 0)'
      })
    )
  ]),
  transition(':leave', [
    animate(
      '300ms cubic-bezier(0.77, 0.2, 0.05, 1.0)',
      style({
        transformOrigin: '100% 0',
        transform: 'translate(100%, 0)'
      })
    )
  ])
]);
