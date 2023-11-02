import {environment} from './environments/environment' 
const env ='development';

const config = {
    development: {
        api: environment.URL,
    },
    staging: {
        api: 'http://staging',
    },
    production: {
        api: 'http://production',
    }
};

export default config[env];