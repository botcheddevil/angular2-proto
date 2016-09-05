import { Component } from '@angular/core';

import { LoginComponent } from './components/example/login.component';
import { ThreeColumnComponent } from './components/example/three-column.component';
import { FixedHeaderFooterComponent } from './components/example/fixed-header-footer.component';

@Component({
    selector: 'my-app',
    directives: [LoginComponent, FixedHeaderFooterComponent],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
}
