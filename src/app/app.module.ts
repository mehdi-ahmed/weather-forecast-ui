import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ForecastService} from './shared/services/forecast.service';

import {AppComponent} from './app.component';
import {UiModule} from './ui/ui.module';
import {ListLocationsTemperaturesComponent} from './components/list-locations-temperatures/list-locations-temperatures.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from "./shared/services/api-service";
import {LocationsComponent} from './components/locations/locations.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: ListLocationsTemperaturesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListLocationsTemperaturesComponent,
    LocationsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    UiModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ForecastService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
