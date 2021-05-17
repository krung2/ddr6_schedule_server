import { getConnection } from './connection';

const ORMLoad = async () => {

  await getConnection();

  console.log('[DB] Sync');
};

export default ORMLoad;