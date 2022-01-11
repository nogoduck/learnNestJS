import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Board } from '../boards/board.entity';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  //eager: true를 주면 유저정보를 가져올떄 board의 정보도 같이 가져올 수 있다.
  @OneToMany((type) => Board, (board) => board.user, { eager: true })
  boards: Board[];
}
