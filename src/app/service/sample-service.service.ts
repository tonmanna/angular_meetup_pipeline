import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/observable/throw';

export class SampleModel {
    public fullName: string;
    public name: string;
    public version: string;
}

@Injectable()
export class SampleService {

    constructor(private http: HttpClient) {}
    public getSampleData() {
        return this.http.get < SampleModel > (environment.API_URL + 'sample')
        .timeout(60000)
            .catch((err: HttpErrorResponse) => {
                if (err) {
                    console.log('ERROR', err.status);
                    if (err.status !== 200) {
                        return Observable.throw(err.statusText);
                    }
                }
            });

    }
}
