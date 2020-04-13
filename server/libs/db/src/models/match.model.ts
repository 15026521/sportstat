import {prop, modelOptions,arrayProp,Ref} from '@typegoose/typegoose'
import {ApiProperty} from '@nestjs/swagger'

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})

export class Match{
    
    @ApiProperty({ description: '赛事id' })
    @prop()
    matchId: number;

    @ApiProperty({ description: '赛事名称',example:'中超联赛' })
    @prop()
    matchName: string;

    @ApiProperty({description:'运动类别',example:'足球'})
    @prop( )
    sportType : string

    @ApiProperty({description:'赛事级别',example:'超级'})
    @prop( )
    matchLevel:string

    @ApiProperty({description:'国家',example:'中国'})
    @prop( )
    country:string

    @ApiProperty({description:'比赛数量',example:'5'})
    @prop( )
    gameNum:number

    
}