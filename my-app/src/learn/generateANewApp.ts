import { delimeterMsg, log } from './utils';

export default function generateANewApp() {
  delimeterMsg('GENERATING A NEW APP');

  log('Install the VSCode "Angular Essentials" extension.');
  log('Create a new app using: ng new <app-name> [--flags], e.g. "ng new my-app --dry-run --routing --skip-install --flat"');
}
