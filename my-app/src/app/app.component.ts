import { LoggerService } from 'my-lib';
import { Component, OnInit } from '@angular/core';
import generateANewApp from 'src/learn/generateANewApp';
import generateBlueprints from 'src/learn/generateBlueprints';
import generateRoutingFeatures from 'src/learn/generateRoutingFeatures';
import buildingAndServing from 'src/learn/buildingAndServing';
import runningUnitAndE2eTests from 'src/learn/runningUnitAndE2eTests';
import toolingFeatures from 'src/learn/toolingFeatures';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  /**
   * Enabling this gives some strange error about our created library. Have no time for investigation.
   */
  // constructor(logger: LoggerService) {
  //   logger.log('hello from my-lib');
  // }
  constructor() {
  }

  ngOnInit(): void {
    generateANewApp();
    generateBlueprints();
    generateRoutingFeatures();
    buildingAndServing();
    runningUnitAndE2eTests();
    toolingFeatures();
  }
}
