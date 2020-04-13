import { PassportStrategy} from '@nestjs/passport'
import { Strategy, IStrategyOptions } from 'passport-local';
import { InjectModel} from 'nestjs-typegoose';
import { BadRequestException } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { User} from 'libs/db/src/models/user.model'
import { compareSync } from 'bcryptjs';

export class LocalStrategy extends PassportStrategy(Strategy,'local'){
    constructor(
        @InjectModel(User) private userModel:ReturnModelType<typeof User>,
    ){
        super({
            usernameField:'username',
            passwordField:'password',
        }as IStrategyOptions)
    }

    async validate(username: string,password:string){
        const user = await this.userModel.findOne({username}).select('+password');
        if(!user){
            throw new BadRequestException('用户名不对');
        }
        if(!compareSync(password,user.password)){
            throw new BadRequestException('密码不对');
        }
        return user;
    }
}