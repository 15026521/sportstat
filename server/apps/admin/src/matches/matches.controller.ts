import { Controller,Get } from '@nestjs/common';
import { Match } from '@libs/db/models/match.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model:Match
})

@Controller('matches')
@ApiTags('比赛统计')
export class MatchesController {
    constructor(
        @InjectModel(Match) private readonly model: ReturnModelType<typeof Match>
    ){}

    @Get('option')
    option(){
    return {
        title: "比赛管理",
        showIndex: true,
        selection:true,
        menuType:'icon',
        align:'center',
        dateBtn:true,
        dateDefault:true,
        menuAlign:'center',
        column: [
            { prop: "date", label: "比赛日期", sortable: true,  regex: true, span: 24, row: true },
            { prop: "name", label: "比赛名称", sortable: true,  regex: true, width: 120,  row: true },
            // { prop: "cover", label: "比赛封面图",  width: 120, listType: 'picture-img', row: true, action: 'upload' },
            { prop: "hometeam",label:"主队名称", width: 120,  row: true, action: 'upload'},
            { prop: "visitingteam",label:"客队名称", width: 120,  row: true, action: 'upload'},
            { prop: "gameresult",label:"比赛结果", width: 120,  row: true, action: 'upload'},
            ]
        }
    }
}
