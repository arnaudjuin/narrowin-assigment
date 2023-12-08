import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DeviceManagementComponent } from "./containers/device-management.component";

export const routes: Routes = [
  { path: "", component: DeviceManagementComponent, canActivate: [] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceManagementRouting {}
