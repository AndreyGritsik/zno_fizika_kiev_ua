import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Response} from "@angular/http";
import {TestEntity} from "../entity/test-entity";

@Injectable()
export class TestReadService {

  constructor(private http: Http) { }
  getTest(folderPath : String) : Observable<TestEntity[]> {
    let testUrl = "app/testInfo/{{folderPath}}/testDetails.json";
    console.info('testUrl={{testUrl}}');
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
