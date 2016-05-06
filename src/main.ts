import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy} from 'angular2/router';

// I18N pomocí ng2-translate
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';


// Hlavní komponenta aplikace
import {AppComponent} from 'app/app.component';


// Firebase.INTERNAL.forceWebSockets();


bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  TRANSLATE_PROVIDERS,
  provide(LocationStrategy, {useClass: PathLocationStrategy})
]).catch(err => console.error(err));