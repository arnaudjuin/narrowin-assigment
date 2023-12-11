import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
        <h1 class="pt-5 text-white">Hey! It looks like this page doesn't exist yet.</h1>
  `,
  styles: [
    `
      :host {
        text-align: center;
      }
    `,
  ],
})
export class NotFoundPageComponent {}
