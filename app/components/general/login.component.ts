import { Component } from '@angular/core';

import { LoginLayoutComponent } from '../layouts/login.layout.component';

@Component({
    selector: 'my-login',
    directives: [LoginLayoutComponent],
    templateUrl: 'app/components/general/login.component.html'
})
export class LoginComponent {
}
