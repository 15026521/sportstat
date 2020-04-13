import {prop, modelOptions,arrayProp,Ref} from '@typegoose/typegoose'
import {ApiProperty} from '@nestjs/swagger'

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})

export class Player{
    @ApiProperty({ description: '运动者' })
    @prop()
    name: string;

    @ApiProperty({ description: '身份证号' })
    @prop()
    identification: string;

    @ApiProperty({ description: '出生年月' })
    @prop()
    birthday: Date;

    @ApiProperty({description:'性别',example:'男'})
    @prop( )
    gender : number;

}