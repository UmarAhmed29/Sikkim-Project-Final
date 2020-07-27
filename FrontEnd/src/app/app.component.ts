import { Component } from '@angular/core';
import { initJsStore } from './provider/IndexedDb/idb.service';
// import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    // private translate: TranslateService
    constructor() {
        // translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa']);
        // translate.setDefaultLang('en');
        // const browserLang = translate.getBrowserLang();
        // translate.use(browserLang.match(/en|fr|ur|es|it|fa/) ? browserLang : 'en');
    }

    // function for creating IndexedDb database
    async ngOnInit() {
        try {
            await initJsStore();
        } catch (error) {
            alert(error.message);
        }
    }
}
