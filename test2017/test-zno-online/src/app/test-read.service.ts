import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {TestEntity} from "./test-entity";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class TestReadService {

  constructor( private http: Http) { }

  getTest(folderPath : String) : Observable<TestEntity[]> {
    let testUrl = "assets/testInfo/{{folderPath}}/testDetails.json";
    return this.http.get(testUrl)
        .map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
