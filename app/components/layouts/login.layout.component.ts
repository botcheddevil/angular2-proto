import {
    Component
} from "@angular/core";

@Component({
    inputs: ['usernamePlaceholder', 'passwordPlaceholder', 'buttonSignIn'],
    selector: 'niit-layout-login',
    templateUrl: 'app/components/layouts/login.layout.component.html',
    styleUrls: ['app/components/layouts/login.layout.component.css']
})
export class LoginLayoutComponent {
    constructor() {}
}
