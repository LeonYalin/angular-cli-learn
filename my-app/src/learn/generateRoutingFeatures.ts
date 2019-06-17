import { delimeterMsg, log } from './utils';

export default function generateRoutingFeatures() {
  delimeterMsg('GENERATE ROUTING FEATURES');

  log('Generate admin module with routing: ng g m admin --routing');
  log('Generate other module with routing and inject it to the app module: ng g c admin/emails');
  log('Generate other route guard: ng generate guard <name>, e.g. "ng g guard auth"');
}
