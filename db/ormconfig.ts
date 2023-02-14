import { User } from 'src/user/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1',
  database: 'check_migration',
  //   synchronize: true,
  logging: false,
  // entities: [User],
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  //   subscribers: [],
};

const configOrm = new DataSource(config);
export default configOrm;
