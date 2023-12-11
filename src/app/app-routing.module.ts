import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {NotFoundPageComponent} from "./core/containers/not-found-page.component";

export const routes: Routes = [
  { path: "", redirectTo: "/device-management", pathMatch: "full" },
  {
    path: "device-management",
    loadChildren: () =>
      import("./pages/device-management/device-management.module").then((m) => m.DeviceManagementModule),
  },
  {path: '404', component: NotFoundPageComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
