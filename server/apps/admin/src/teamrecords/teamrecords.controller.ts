import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger';
import { TeamRecord } from '@libs/db/models/teamrecord.model';

@Crud({
    model:TeamRecord
})
@Controller('teamrecords')
@ApiTags('单队统计')
export class TeamrecordsController {
    constructor(
        @InjectModel(TeamRecord) private readonly model: ReturnModelType<typeof TeamRecord>
    ){}
}
