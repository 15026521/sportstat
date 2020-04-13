import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Game } from '@libs/db/models/game.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Game
})
@Controller('games')
@ApiTags('比赛')
export class GamesController {
  constructor(
    @InjectModel(Game) private readonly model: ReturnModelType<typeof Game>
  ) { }

  @Get('option')
  option(){
    return {
      title: "比赛管理",
      column: [
        { prop: "date", label: "比赛日期", sortable: true,  regex: true,  width: 80,span: 24, row: true },
            { prop: "name", label: "比赛名称", sortable: true,  regex: true, width: 120,  row: true },
            //{ prop: "cover", label: "报告封面图",  width: 120, listType: 'file', row: true, type: 'upload',action: 'upload' },
            { prop: "cover", label: "报告封面图",  width: 120, listType: 'picture-img', row: true, type: 'upload',action: 'upload' },
            //{ prop: "report", label: "报告文件",  width: 120, listType: 'file', row: true, type: 'upload', action: 'upload'},
            { prop: "homeTeam",label:"主队名称", width: 120,  row: true, action: 'upload'},
            { prop: "visitingTeam",label:"客队名称", width: 120,  row: true, action: 'upload'},
            { prop: "gameResult",label:"比赛结果", width: 120,  row: true, action: 'upload'},
            { prop: "description",label:"报告说明", width: 120,  row: true, action: 'upload'},
      ]
    }
  }
}
