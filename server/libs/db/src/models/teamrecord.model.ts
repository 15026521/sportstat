import {prop, modelOptions} from '@typegoose/typegoose'
import {ApiProperty} from '@nestjs/swagger'

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class TeamRecord{
    @prop()
    name: string

    @prop()
    file: string
    
    @ApiProperty({description:'球队名称',example:'巴萨罗纳'})
    @prop( )
    teamname:string

    @ApiProperty({description:'进球数',example:'8'})
    @prop( )
    scores:string

}