import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from "@sentry/angular";
import { BrowserTracing } from "@sentry/tracing";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


Sentry.init({
  dsn: "https://dddf644366bd42148bffb05ff8bb3f45@o424912.ingest.sentry.io/6219639",
  integrations: [
    new BrowserTracing({
      tracingOrigins: ["localhost", "https://pdvnet.azurewebsites.net"],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  tracesSampleRate: 1.0,
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
