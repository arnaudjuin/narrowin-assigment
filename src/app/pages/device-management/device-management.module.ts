import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DeviceManagementComponent } from "./containers/device-management.component";
import { RestApiService } from "../../core/services/data.service";
import { DeviceManagementRouting } from "./deviceManagement-routing";

@NgModule({
  imports: [
    DeviceManagementRouting,
    CommonModule,
  ],
  declarations: [DeviceManagementComponent],
  providers: [RestApiService],
  exports: [DeviceManagementComponent],
})
export class DeviceManagementModule {}
