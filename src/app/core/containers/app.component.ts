import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
      <router-outlet ></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor(
      public cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {}
}
