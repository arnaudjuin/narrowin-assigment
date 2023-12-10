import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit,} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {RestApiService} from "../../../core/services/data.service";
import {Router} from "@angular/router";
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
  options = {
    orderBy: 'Name',
    orderDir: 'ASC',
    page: 1,
    size: 5,
    totalSize:0
  };
  devices: any
  deviceURL: string = ""
  getDevicesSub: Subscription | undefined;
  list: boolean = true;

  constructor(
    private router: Router,
    private title: Title,
    public restApi: RestApiService,
    public cdr: ChangeDetectorRef,
  ) {
    this.title.setTitle("Device Management");
  }

  get direction() {
    return this.options.orderDir === 'ASC' ? '⬆' : '⬇';
  }

  get numbers(): number[] {
    const limit = Math.ceil((this.options.totalSize) / this.options.size);
    return Array.from({length: limit}, (_, i) => i + 1);
  }

  ngOnInit() {
    this.deviceURL = environment.LINKURL + "/explorer_device_detail.php?id="
    console.log(this.deviceURL)
    this.loadDevices() //load devices on init
  }

  ngOnDestroy(): void {
    // @ts-ignore
    this.getDevicesSub.unsubscribe();
  }

  toggleList(_list: boolean) {
    this.list = !_list;
    this.cdr.detectChanges();     //to refresh the view
  }

  loadDevices() {
    this.cdr.detectChanges();     //to refresh the view
    this.getDevicesSub = this.restApi.getDevices().subscribe((response: {}) => {
      // @ts-ignore
      this.options.totalSize= response?.data.length;
      // @ts-ignore
      this.devices = response?.data.slice(this.options.size * (this.options.page - 1), this.options.size * this.options.page);
      this.cdr.detectChanges();     //to refresh the view
    });
  }

  searchDevices(text: string) {
    this.devices = null
    this.cdr.detectChanges();     //to refresh the view
    this.getDevicesSub = this.restApi.search(text).subscribe((response: {}) => {
      // @ts-ignore
      console.log(response.data)
      // @ts-ignore
      this.options.totalSize= response?.data.length;
      // @ts-ignore
      this.devices = response?.data.slice(this.options.size * (this.options.page - 1), this.options.size * this.options.page);
      this.cdr.detectChanges();     //to refresh the view
    });
  }

  search($event: any): void {
    this.devices = null
    this.cdr.detectChanges();     //to refresh the view
    console.log("load")
    const text = $event.target.value;
    this.options.page = 1;
    this.searchDevices(text);
  }

  size(size: number) {
    this.options.size = size;
    this.options.page = 1;
    this.loadDevices();
  }

  order(by: string) {
    if (this.options.orderBy === by) {
      this.options.orderDir = this.options.orderDir === 'ASC' ? 'DESC' : 'ASC';
    } else {
      this.options.orderBy = by;
    }
    this.loadDevices();
  }

  by(order: string) {
    return this.options.orderBy === order;
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

  copy(text: string) {
    navigator.clipboard.writeText(text).then(function () {
      console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
      console.error('Async: Could not copy text: ', err);
    });
  }
}
