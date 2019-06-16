import { delimeterMsg, log } from './utils';

export default function generateBlueprints() {
  delimeterMsg('GENERATING A NEW APP');

  log('Using Blueprints: ng generate <component|service|class> <name>');
  log('Generate a component: ng generate component <name> <--flags>, e.g. "ng g c person -d" (-d means --dry-run)');
  log('Generate a directive: ng generate directive <name> <--flags>, e.g. "ng g d highlight"');
  log('Generate a directive within a folder: "ng g d highlight2 --flat false"');
  log('Generate a service: ng generate service <name> <--flags>, e.g. "ng g s person"');
  log('Generate a class: ng generate class <name> <--flags>, e.g. "ng g cl Student"');
  log('Generate a class within a folder: "ng g cl models/Student"');
  log('Generate an interface: ng generate interface <name> <--flags>, e.g. "ng g i person"');
  log('Generate an enum: ng generate enum <name> <--flags>, e.g. "ng g e cities"');
  log('Generate a pipe: ng generate pipe <name> <--flags>, e.g. "ng g p uppercase"');
  log('Generate a pipe and put into a particular module: "ng g p shared/uppercase -m app.module"');
  log('Generate a module: ng generate module <name> <--flags>, e.g. "ng g m login"');
  log('Generate a module and import it to the app.module: "ng g m login -m app.module -d"');
 }
