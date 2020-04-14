import { PassportStrategy} from '@nestjs/passport'
import { Strategy,StrategyOptions,ExtractJwt } from 'passport-jwt';
import { InjectModel} from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { User} from 'libs/db/src/models/user.model'



export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectModel(User) private userModel:ReturnModelType<typeof User>,
    ){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:process.env.SECRET
        }as StrategyOptions)
    }

    async validate(id){
        return await this.userModel.findById(id)
    }
}