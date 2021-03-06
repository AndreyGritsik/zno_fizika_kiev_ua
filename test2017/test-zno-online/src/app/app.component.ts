import { Component, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Component({
  selector: 'zno-online-test',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testName : String;
  constructor(elm: ElementRef) {
    this.testName = elm.nativeElement.getAttribute('testName');
  }

}
