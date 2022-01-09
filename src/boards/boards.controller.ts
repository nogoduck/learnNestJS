import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  // @Get('/')
  // getAllBoard(): Board[] {
  //   return this.boardsService.getAllBoards();
  // }
  //
  // @Post('/create')
  // createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //   console.log('body >> ', createBoardDto);
  //   return this.boardsService.createBoard(createBoardDto);
  // }
  //
  // //@Param에 아무 인자도 적지 않으면 모든 파라미터를 가져올 수 있다.
  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   const found = this.boardsService.getBoardById(id);
  //   if (!found) throw new NotFoundException(`Can't find Board width id ${id}`);
  //   return found;
  // }
  //
  // @Delete('/')
  // deleteBoard(@Param('id') id: string): void {
  //   const found = this.getBoardById(id);
  //   return this.boardsService.deleteBoard(found.id);
  // }
  //
  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ): Board {
  //   // console.log(id, status);
  //   return this.boardsService.updateBoardStatus(id, status);
  // }
}
