import {prop, modelOptions,arrayProp,Ref} from '@typegoose/typegoose'
import {ApiProperty} from '@nestjs/swagger'
import {TeamRecord} from './teamrecord.model'

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})

export class Match{
    @ApiProperty({description:'运动类别',example:'足球'})
    @prop( )
    sporttype : string

    @ApiProperty({description:'比赛日期',example:'2019-12-12'})
    @prop( )
    date:string

    @ApiProperty({description:'主队名称',example:'巴萨罗纳'})
    @prop( )
    hometeam:string

    @ApiProperty({description:'客队名称',example:'皇家马德里'})
    @prop( )
    visitingteam:string

    @ApiProperty({description:'比赛结果',example:'主队胜'})
    @prop( )
    gameresult:string

    @ApiProperty({description:'数据统计结果'})
    @arrayProp({itemsRef:'TeamRecord'} )
    matchrecords:Ref<TeamRecord>[]
}