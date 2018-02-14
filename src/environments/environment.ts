// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAWZJm6aqnOVcYNJTJBfECE9ZBmHVNrvxI',
    authDomain: 'awesome-conf.firebaseapp.com',
    databaseURL: 'https://awesome-conf.firebaseio.com',
    projectId: 'awesome-conf',
    storageBucket: 'awesome-conf.appspot.com',
    messagingSenderId: '994064671021'
  },
};
