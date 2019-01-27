import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TemperatureService} from './shared/services/temperature.service';

import {AppComponent} from './app.component';
import {UiModule} from './ui/ui.module';
import {ListLocationsTemperaturesComponent} from './components/list-locations-temperatures/list-locations-temperatures.component';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
    ListLocationsTemperaturesComponent
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
  providers: [TemperatureService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
