import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RestApiService } from "../../../core/services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "device-management",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["device-management.style.css"],
  providers: [],
  templateUrl: `./device-management.template.html`,
})
export class DeviceManagementComponent implements OnInit {
  constructor(
    private router: Router,
    private title: Title,
    public restApi: RestApiService,
    public cdr: ChangeDetectorRef
  ) {
    this.title.setTitle("Device Management");
  }

  ngOnInit() {
    console.log("here")
    this.loadDevices()
  }

  loadDevices() {
    return this.restApi.getDevices().subscribe((data: {}) => {
      console.log(data);
      this.cdr.detectChanges();
    });
  }
}
