import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit,} from "@angular/core";

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-lighter small py-2">
      <div class="container d-flex justify-content-between px-3 ">
        <div class="text-muted">lightweight network &amp; security services</div>
      </div>
    </div>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="/assets/images/narrowin-text.png" class="d-inline-block align-top" alt="">
      </a>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto  mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/explorer"><h2>Explorer</h2></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><h2>Device MGMT</h2></a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/system" tabindex="-1" aria-disabled="true"><h2>System</h2></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <router-outlet ></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor(
      public cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {}
}
