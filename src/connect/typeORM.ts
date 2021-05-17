import { Connection } from 'typeorm';
import { getConnection } from './connection';

const ORMLoad = async (): Promise<Connection> => {

  const connection: Connection = await getConnection();

  console.log('[DB] Sync');

  return connection;
};

export default ORMLoad;