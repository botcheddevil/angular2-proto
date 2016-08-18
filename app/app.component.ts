import { Component } from '@angular/core';

import { LoginLayoutComponent } from './templates/layouts/login.layout.component';

@Component({
    selector: 'my-app',
    directives: [LoginLayoutComponent],
    templateUrl: ['app/app.component.html']
})
export class AppComponent {
}
