import {prop, modelOptions,arrayProp,Ref} from '@typegoose/typegoose'
import {ApiProperty} from '@nestjs/swagger'
import {Player} from './player.model'

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})

export class Team{
    @ApiProperty({ description: '队伍名称' })
    @prop()
    name: string;

    @ApiProperty({ description: '队徽' })
    @prop()
    logo: string;

    @ApiProperty({ description: '报告文件' })
    @prop()
    report: string;

    @ApiProperty({description:'运动类别',example:'足球'})
    @prop( )
    sportType : string

    @ApiProperty({description:'成立日期',example:'2019-12-12'})
    @prop( )
    date:string

    @ApiProperty({description:'现役球员列表'})
    @arrayProp({itemsRef:'Player'} )
    currentPlayers:Ref<Player>[]
}