import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entitiy';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  // private boards: Board[] = [];
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }

  // 데이터 흐름을 안정적으로 해주기 위해 타입체크를 반드시 해준다.
  // async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
  //   const { title, description } = createBoardDto;
  //   const board = this.boardRepository.create({
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   });
  //
  //   await this.boardRepository.save(board);
  //   return board;
  // }
  //
  // async getBoardById(id: number): Promise<Board> {
  //   const found = await this.boardRepository.findOne(id);
  //   if (!found) {
  //     throw new NotFoundException(`Can't find Board with id ${id}`);
  //   }
  //   return found;
  // }

  // deleteBoard(id: string): void {
  //   this.boards = this.boards.filter((board) => id !== board.id);
  // }
  //
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
