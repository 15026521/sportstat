import { Controller } from '@nestjs/common';
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
}
