import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTES } from './app/routes';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(RouterModule.forRoot(ADMIN_ROUTES))
//   ]
// });

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
