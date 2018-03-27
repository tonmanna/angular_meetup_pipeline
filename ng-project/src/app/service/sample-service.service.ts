import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';

export class SampleModel {
    public FullNaame: string;
    public Name: string;
    public Version: string;
}

@Injectable()
export class SampleService {

    constructor(private http: HttpClient) {}
    public getSampleData() {
        return this.http.get<SampleModel>(environment.API_URL + 'sample');
    }
}