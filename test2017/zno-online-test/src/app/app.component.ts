import { Component } from '@angular/core';
import {ElementRef} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testName : String;
  constructor(elm: ElementRef) {
    this.testName = elm.nativeElement.getAttribute('testName');
  }
}
