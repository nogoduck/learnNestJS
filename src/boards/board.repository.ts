import { Entity, Repository } from 'typeorm';
import { Board } from './board.entitiy';

@Entity()
export class BoardRepository extends Repository<Board> {}
