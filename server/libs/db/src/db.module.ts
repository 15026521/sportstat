import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import {User} from './models/user.model';
import { TeamRecord } from './models/teamrecord.model';
import { Match } from './models/match.model';

const  models = TypegooseModule.forFeature([
  User,
  Match,
  TeamRecord
])

@Global()
@Module({
  imports:[
    TypegooseModule.forRoot('mongodb://localhost/sportstat', {
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify:false,
    }),
    models ,
  ],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}
