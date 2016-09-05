import { Component } from '@angular/core';

import { FixedHeaderFooterLayoutComponent } from '../layouts/fixed-header-footer.layout.component';
import { CHART_DIRECTIVES } from 'angular2-highcharts';

@Component({
    selector: 'my-fixed-header-footer',
    directives: [FixedHeaderFooterLayoutComponent, CHART_DIRECTIVES],
    templateUrl: 'app/components/general/fixed-header-footer.component.html'
})
export class FixedHeaderFooterComponent {
    constructor() {
        this.options = {
           title : { text : 'simple chart' },
           series: [{
               data: [29.9, 71.5, 106.4, 129.2],
           }]
       };
   }
   options: HighchartsOptions;
}
