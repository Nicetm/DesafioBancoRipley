// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  authUrl: 'http://localhost:3000/api/login',
  bancosURL: 'http://localhost:3000/api/banco',
  tipoCuentasURL: 'http://localhost:3000/api/tipocuenta',
  destinatariosURL: 'http://localhost:3000/api/destinatario',
  transaUrl: 'http://localhost:3000/api/transa',
  usuariosUrl: 'http://localhost:3000/api/usuarios',
  transaccionUrl: 'http://localhost:3000/api/transaccion',
  historialUrl: 'http://localhost:3000/api/historial',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
