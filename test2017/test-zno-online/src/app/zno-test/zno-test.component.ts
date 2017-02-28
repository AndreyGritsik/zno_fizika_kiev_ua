import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {TestEntity} from "../test-entity";
import {TestReadService} from "../test-read.service";

@Component({
  selector: 'zno-test',
  templateUrl: './zno-test.component.html',
  styleUrls: ['./zno-test.component.css']
})
export class ZnoTestComponent implements OnInit {
  @Input() testName: String;
  errorMessage: string;
  test : TestEntity;
  mode = 'Observable';
  constructor(private testReadService : TestReadService) { }

  ngOnInit() {
    this.loadTest(this.testName);
  }

  loadTest(filePath : String)  {
    this.testReadService.getTest(filePath)
      .subscribe(
        test => this.test = test[0],
        error => this.errorMessage = <any> error);
  }
}
