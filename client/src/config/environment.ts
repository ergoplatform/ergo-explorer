import { environmentDefault } from './environment.default';
import { environmentProd } from './environment.prod';

export interface IEnvironment {
  apiUrl?: string;
  blockchain?: any;
  alternativeLogo?: boolean;
  environments?: any[];
  defaultLocale?: string;
  isLoggerEnabled: boolean;
}

let environment: IEnvironment;

if (process.env.NODE_ENV === 'production') {
  environment = {
    ...environmentDefault,
    ...environmentProd,
  };
} else {
  environment = {
    ...environmentDefault,
  };
}

function getAppConfig(): any {
  let appConfig: any = {
    apiUrl: environment.apiUrl,
  };

  if (window.__APP_CONFIG__) {
    appConfig = window.__APP_CONFIG__;
  }

  return { ...environment, ...appConfig };
}

const appConfig = getAppConfig();

environment = {
  ...appConfig,
  get environments(): any[] {
    return appConfig.environments;
  },

  get apiUrl(): string | undefined {
    return appConfig.apiUrl;
  },
};

export default environment;
