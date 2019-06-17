import { Component, OnInit } from '@angular/core';
import generateANewApp from 'src/learn/generateANewApp';
import generateBlueprints from 'src/learn/generateBlueprints';
import generateRoutingFeatures from 'src/learn/generateRoutingFeatures';
import buildingAndServing from 'src/learn/buildingAndServing';
import runningUnitAndE2eTetst from 'src/learn/runningUnitAndE2eTests';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  ngOnInit(): void {
    generateANewApp();
    generateBlueprints();
    generateRoutingFeatures();
    buildingAndServing();
    runningUnitAndE2eTetst();
  }
}
