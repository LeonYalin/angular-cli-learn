import { delimeterMsg, log } from './utils';

export default function buildingAndServing() {
  delimeterMsg('BUILDING AND SERVING');

  log('Building the app with ng build <options>');
  log('Building with the --stats-json options to be able to explore the bundle contents afterwards with "Webpack-bundle-analyzer"');
  log('Building with the --source-map option to get the source maps, --aot option to get the aot compilation');
  log('Building with the --watch options to watch and rebuild, --prod option to build a prod bundle');

  log('Serving the app with ng serve <options>');
  log('Serving with the --open or -o options open the browser, --port option to open the app on different port');
  log('Serving with the --live-reload option to turn live reload on/off, --ssl to serve using HTTPS,--proxy-config to add proxy config');

  log('Adding new packages and functionality using ng add <options>');
  log('Adding angular material: ng add @angular/material');
  log('Generate new components using custom schematics: ng g @angular/material:material-nav');
  log('Add a material dashboard: ng g @angular/material:material-dashboard --name dashboard');
  log('Add a material list: ng g @angular/material:material-table --name customer-list');

  log('Adding scripts, styles and assets to the project. In angularj.json populate assets[], styles[], scripts[]');
}
