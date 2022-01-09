import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1114',
  database: 'board-app',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, //true를 주면 애플리에키션을 다시 실행할 때 엔티티안에 수정된 컬럼의 길이 타입 변경값등을 해당 테이블을 Drop 후 다시 생성
};
