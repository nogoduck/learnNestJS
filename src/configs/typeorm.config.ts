import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeORMConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  port: process.env.RDS_PORT || dbConfig.port,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  database: process.env.RDS_DATABASE || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  //synchronize: true를 주면 애플리에키션을 다시 실행할 때 엔티티안에 수정된 컬럼의 길이 타입 변경값등을 해당 테이블을 Drop 후 다시 생성
  synchronize: dbConfig.synchronize,
};
