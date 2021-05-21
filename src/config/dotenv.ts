import 'dotenv/config';

const getValue = (key: string): string => {

  const value: string | undefined = process.env[key];

  if (value === undefined) {

    console.log(value);
    throw new Error(`${key}가 정의되지 않았습니다`);
  }

  return value;
}

export const PORT = getValue('PORT');

export const MYSQL = {
  USERNAME: getValue('MYSQL_USERNAME'),
  PASSWORD: getValue('MYSQL_PASSWORD'),
  DATABASE: getValue('MYSQL_DATABASE'),
  HOST: getValue('MYSQL_HOST'),
  PORT: parseInt(getValue('MYSQL_PORT'), 10),
  SYNC: false,
};

export const API_KEY = getValue('API_KEY');

export const WEB_HOOK = getValue('WEB_HOOK');