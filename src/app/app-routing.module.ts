import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "/device-management", pathMatch: "full" },
  {
    path: "device-management",
    loadChildren: () =>
      import("./pages/device-management/device-management.module").then((m) => m.DeviceManagementModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
