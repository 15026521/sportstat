//定义数据模型，对应数据库表结构
//User模型包括用户名密码基本信息，后续根据需要进一步扩充
import {prop, modelOptions,DocumentType} from '@typegoose/typegoose'
import {ApiProperty} from '@nestjs/swagger'
import { hashSync } from 'bcryptjs'

export type UserDocument = DocumentType<User>;

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})

export class User{
    //通过装饰器ApiProperty为Api文档做说明，有助于文档阅读
    @ApiProperty({description:'用户名',example:'user1'})
    @prop( )
    username : {
        type:string,
        unique:true,
    }

    @ApiProperty({description:'密码',example:'123456'})
    @prop({
        select:false,//密码不显示
        get(val){
            return val
        },
        set(val){
            return val ? hashSync(val):val
        }
    })
    password:string
}