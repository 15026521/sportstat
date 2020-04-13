import { Controller,Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger';
import { TeamRecord } from '@libs/db/models/teamrecord.model';
import { Game } from '@libs/db/models/game.model';

@Crud({
    model:TeamRecord
})
@Controller('teamrecords')
@ApiTags('单队统计')
export class TeamrecordsController {
    constructor(
        @InjectModel(TeamRecord) private readonly model: ReturnModelType<typeof TeamRecord>,
        @InjectModel(Game) private readonly matchesModel: ReturnModelType<typeof Game>
    ){}

    @Get('option')
    async option(){
    const matches = (await this.matchesModel.find()).map(v => ({
      label: v.name,
      value: v._id
    }))
    return {
      title: "比赛统计管理",
      translate: false,
      column: [
        { prop: "teamname", label: "球队名称", type: 'select', dicData: matches,  row: true },
        { prop: "name", label: "课时名称", span: 24 },
        { prop: "file", label: "视频文件", span: 24, width: '120px', listType: 'picture-img', type: 'upload', action: '/upload' },
      ]
    }
  }
}
