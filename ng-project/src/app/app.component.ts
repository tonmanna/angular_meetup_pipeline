import { Component } from '@angular/core';
import { SampleService } from './service/sample-service.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [SampleService]
})
export class AppComponent {
    title = 'app';
    constructor(private sampleService: SampleService) {
        const sampelDate = sampleService.getSampleData().subscribe(result => {
            this.title = result.Version;
        });

    }
}