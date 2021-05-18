import { Connection } from 'typeorm';
import { getConnection } from './connection';

const ORMLoad = async () => {

  try {

    await getConnection();
    console.log('[DB] Sync');
  } catch (err) {

    console.log(err);
    throw new Error(`[DB] Connect Error`);
  }

};

export default ORMLoad;