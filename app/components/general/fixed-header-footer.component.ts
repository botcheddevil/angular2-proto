import { Component } from '@angular/core';

import { FixedHeaderFooterLayoutComponent } from '../layouts/fixed-header-footer.layout.component';

@Component({
    selector: 'my-fixed-header-footer',
    directives: [FixedHeaderFooterLayoutComponent],
    templateUrl: 'app/components/general/fixed-header-footer.component.html'
})
export class FixedHeaderFooterComponent {
}
