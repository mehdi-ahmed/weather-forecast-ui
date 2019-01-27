import { RouterModule, Routes } from '@angular/router';
import {ModuleWithProviders, NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import {ListLocationsTemperaturesComponent} from "./components/list-locations-temperatures/list-locations-temperatures.component";

const routes: Routes = [

  { path: "", redirectTo: "/home", pathMatch: "full" },

  {
    path: "home",
    component: ListLocationsTemperaturesComponent,
    children: [
    ]
  }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
