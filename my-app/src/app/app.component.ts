import { Component, OnInit } from '@angular/core';
import generateANewApp from 'src/learn/generateANewApp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  ngOnInit(): void {
    generateANewApp();
  }
}
