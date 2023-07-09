import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigService } from './shared/services/app-config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appConfig,
      deps: [AppConfigService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function appConfig(portalConfigService: AppConfigService): any {
  return () => portalConfigService.loadConfig();
}
