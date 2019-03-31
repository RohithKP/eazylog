import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
console.log('aASASASASASAS ASASA ASAS ASASASASSASASASASASSASASAS')
if (environment.production) {
  console.log('prod MOD ENABLED')
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
