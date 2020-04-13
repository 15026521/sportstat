import {prop, modelOptions,arrayProp,Ref} from '@typegoose/typegoose'
import {ApiProperty} from '@nestjs/swagger'
import {TeamRecord} from './teamrecord.model'

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})

export class Game{
    @ApiProperty({ description: '比赛名称' })
    @prop()
    name: string;

    @ApiProperty({ description: '封面图' })
    @prop()
    cover: string;

    @ApiProperty({ description: '报告文件' })
    @prop()
    report: string;

    @ApiProperty({description:'运动类别',example:'足球'})
    @prop( )
    sportType : string

    @ApiProperty({description:'比赛日期',example:'2019-12-12'})
    @prop( )
    date:string

    @ApiProperty({description:'主队名称',example:'巴萨罗纳'})
    @prop( )
    homeTeam:string

    @ApiProperty({description:'客队名称',example:'皇家马德里'})
    @prop( )
    visitingTeam:string

    @ApiProperty({description:'比赛结果',example:'主队胜'})
    @prop( )
    gameResult:string

    @ApiProperty({description:'报告说明',example:'两队完整数据对比'})
    @prop( )
    description:string

    @ApiProperty({description:'数据统计结果'})
    @arrayProp({itemsRef:'TeamRecord'} )
    gameRecords:Ref<TeamRecord>[]
}