import { Component } from '@angular/core';

import { ThreeColumnLayoutComponent } from './templates/layouts/three-column.layout.component';

@Component({
    selector: 'my-app',
    directives: [ThreeColumnLayoutComponent],
    template: '<niit-layout-three-column><h3 brand>LOGO</h3></niit-layout-three-column>'
})
export class AppComponent {
}
