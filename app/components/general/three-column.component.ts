import { Component } from '@angular/core';

import { ThreeColumnLayoutComponent } from '../layouts/three-column.layout.component';

@Component({
    selector: 'my-three-column',
    directives: [ThreeColumnLayoutComponent],
    templateUrl: 'app/components/general/three-column.component.html'
})
export class ThreeColumnComponent {
}
