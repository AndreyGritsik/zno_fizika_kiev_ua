import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'zno-test',
  templateUrl: './zno-test.component.html',
  styleUrls: ['./zno-test.component.css']
})
export class ZnoTestComponent implements OnInit {
  @Input() testName: String;
  constructor() { }

  ngOnInit() {
  }

}
