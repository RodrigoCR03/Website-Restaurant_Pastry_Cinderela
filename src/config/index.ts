interface Config {
  apiUrl: string;
  environment: string;
  googleMapsApiKey?: string;
  emailServiceKey?: string;
}

const getEnvVar = (key: string): string => {
  const value = import.meta.env[key];
  if (value === undefined) {
    console.warn(`Environment variable ${key} is not defined`);
    return '';
  }
  return value;
};

export const config: Config = {
  apiUrl: getEnvVar('VITE_API_URL'),
  environment: getEnvVar('VITE_NODE_ENV'),
  googleMapsApiKey: getEnvVar('VITE_GOOGLE_MAPS_API_KEY'),
  emailServiceKey: getEnvVar('VITE_EMAIL_SERVICE_KEY'),
};

// Função para verificar se estamos em ambiente de produção
export const isProduction = (): boolean => config.environment === 'production';

// Função para verificar se estamos em ambiente de desenvolvimento
export const isDevelopment = (): boolean => config.environment === 'development';

// Função para log seguro que não expõe informações sensíveis em produção
export const safeLog = (message: string, data?: any): void => {
  if (isDevelopment()) {
    console.log(message, data);
  } else {
    // Em produção, logamos apenas mensagens sem dados sensíveis
    console.log(message);
  }
}; 