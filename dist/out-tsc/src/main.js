import { AppBrowserModule } from '.././src/app/app.browser.module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppBrowserModule)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map