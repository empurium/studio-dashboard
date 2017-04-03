// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

import { Environment } from '@freescan/skeleton';

export const environment: Environment = {
    production: false,
    staging: false,

    // API URL's
    api: {
        passport: 'http://passport.freescan.local',
        cashier:  'http://cashier.freescan.local',
        files:    'http://files.freescan.local',
    },

    passport: {
        login:       'http://passport.freescan.local/authorize',
        clientId:    '1',
        redirectURI: 'http://freescan.local:5000',
        scope:       '',
    },
};