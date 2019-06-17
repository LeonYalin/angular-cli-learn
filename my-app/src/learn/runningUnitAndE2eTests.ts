import { delimeterMsg, log } from './utils';

export default function runningUnitAndE2eTests() {
  delimeterMsg('RUNNING UNIT AND E2E TESTS');

  log('Running all .spec.ts test files with "ng test"');
  log('Running tests with coverage: "ng test --code-coverage, toggle progress with --progress, sourcemaps: --sourcemaps, watch: --watch"');
  log('Test coverage can be viewed inside generated "coverage" folder by running the index.html');
  log('Running e2e tests with "ng e2e"');
}
