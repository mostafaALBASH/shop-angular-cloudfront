import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://f91orpk2aa.execute-api.us-east-1.amazonaws.com/dev',
    order: 'https://f91orpk2aa.execute-api.us-east-1.amazonaws.com/dev',
    import: 'https://f91orpk2aa.execute-api.us-east-1.amazonaws.com/dev',
    bff: 'https://f91orpk2aa.execute-api.us-east-1.amazonaws.com/dev',
    cart: 'https://f91orpk2aa.execute-api.us-east-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: false,
    bff: true,
    cart: false,
  },
};
