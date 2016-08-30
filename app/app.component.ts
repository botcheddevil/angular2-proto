import { Component } from '@angular/core';

import { LoginComponent } from './components/general/login.component';
import { ThreeColumnComponent } from './components/general/three-column.component';
import { FixedHeaderFooterComponent } from './components/general/fixed-header-footer.component';

@Component({
    selector: 'my-app',
    directives: [FixedHeaderFooterComponent],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
}
