import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

//-----------------------Code for deploy-------------------------
// ng deploy --base-href=https://CesarBaquiro.github.io/chips/
