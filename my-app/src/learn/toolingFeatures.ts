import { delimeterMsg, log } from './utils';

export default function toolingFeatures() {
  delimeterMsg('TOOLING FEATURES');

  log('Updating Angular with ng update:');
  log('Available options are: --dryRun or -d, --all to update all packages in package.json, and --force to force updates');
  log('Visit https://update.angular.io/ to view the upgrade instructions');
  log('When updating the @angular/cli, be sure it updates the angular-cli.json(or angular.json) file.',
  'If not, run the ng update @angular/cli again.');

  log('Building specific project in multi-project workspace: ng build <project>. Other commands support it as well ng <command> <project>');

  log('Generating a new Angular library: ng generate library <name> [options]',
  'The available options are: --dry-run or -d, --entry-file to create a pulic API entry file',
  '--skip-package-json to not add dependencies to package.json', '--skip-ts-config to not update tsconfig.json for dev experience');
  log('We must build our library first, e.g. ng build my-lib. Then we can import it, e.g. import { logger } from "my-lib";');
  log('Keep building and updating public-api.ts file. To publish the library, build it with --prod and then npm publish');

  log('Generating a new library with "ng g library my-lib". Adding a logger service to it: "ng g s logger --project my-lib"');
  log('Using a newly created logger in an app.component. import the service in the constructor "constructor(logger: LoggerService)"',
    'then change the top import to be the lib folder because this is how it is going to be when publishing to npm:',
    '"import { LoggerService } from \'my-lib\';"', 'then build your library to make the import work');
}
