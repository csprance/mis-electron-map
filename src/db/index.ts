import { ConnectionOptions, createConnection, getConnection } from 'typeorm';

import Marker from './entities/Marker';

export default async () => {
  const opts: ConnectionOptions = {
    type: 'sqlite',
    database: 'mismap.db',
    entities: [Marker],
    synchronize: true,
    logging: false
  };
  try {
    await createConnection(opts);
  } catch (e) {
    const connection = getConnection();
    await connection.close();
    await createConnection(opts);
  }
};
