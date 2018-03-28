import { PLATFORM_ID, Component, OnInit, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SampleService } from './service/sample-service.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [SampleService]
})
export class AppComponent implements OnInit {
    title = 'app';
    constructor(private sampleService: SampleService, @Inject(PLATFORM_ID) platformId: string) {
        if (isPlatformBrowser(platformId)) {
            const sampelDate = this.sampleService.getSampleData().subscribe(result => this.title = result.version);
        }
    }
    ngOnInit() {

    }
}