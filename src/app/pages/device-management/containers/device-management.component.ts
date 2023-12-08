import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RestApiService } from "../../../core/services/data.service";
import { Router } from "@angular/router";
import {environment} from "../../../../environments/environment";
import {Subscription} from "rxjs";

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
    public cdr: ChangeDetectorRef,
  ) {
    this.title.setTitle("Device Management");
  }
  options = {
    orderBy: 'Name',
    orderDir: 'ASC',
    page: 1,
    search: '',
    size: 20
  };
   devices: any
   deviceURL: string =""
   getDevicesSub: Subscription | undefined ;



  ngOnInit() {
    this.deviceURL= environment.LINKURL+"/explorer_device_detail.php?id="
    console.log(this.deviceURL)
    this.loadDevices() //load devices on init
  }
  ngOnDestroy(): void {
    // @ts-ignore
    this.getDevicesSub.unsubscribe();
  }

  loadDevices() {
    this.getDevicesSub= this.restApi.getDevices().subscribe((data: {}) => {
      this.devices = data;
      console.log(this.devices.data[0])
      this.cdr.detectChanges();     //to refresh the view
    });
  }
  search($event: any): void {
    const text = $event.target.value;
    this.options.search = text;
    this.options.page = 1;
   // this.getEmployees();
  }
  size(size: number) {
    this.options.size = size;
    this.options.page = 1;
    //this.getEmployees();
  }
  order(by: string) {
    if (this.options.orderBy === by) {
      this.options.orderDir = this.options.orderDir === 'ASC' ? 'DESC' : 'ASC';
    } else {
      this.options.orderBy = by;
    }
    //this.getEmployees();
  }

  by(order: string) {
    return this.options.orderBy === order;
  }

  get direction() {
    return this.options.orderDir === 'ASC' ? '?' : '?';
  }
  get numbers(): number[] {
    const limit = Math.ceil((this.devices.data) / this.options.size);
    return Array.from({ length: limit }, (_, i) => i + 1);
    return [0,0];
  }

  next() {
    this.options.page++;
    this.loadDevices();
  }

  prev() {
    this.options.page--;
   this.loadDevices();
  }
  to(page: number) {
    this.options.page = page;
    this.loadDevices();
  }


}
