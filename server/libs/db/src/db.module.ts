import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import {User} from './models/user.model';
import { TeamRecord } from './models/teamrecord.model';
import { Game } from './models/game.model';

//数据库中User,Match,TeamRecord三个表作为模型导入
const  models = TypegooseModule.forFeature([User,Game,TeamRecord])

@Global()
@Module({
  imports:[
    // TypegooseModule.forRootAsync({
    //   useFactory() {
    //     return {
    //       uri: process.env.DB,
    //       useNewUrlParser: true,
    //       useUnifiedTopology: true,
    //       useCreateIndex: true,
    //       useFindAndModify: false,
    //     };
    //   },
    // }),
    //引入数据库，路径为mongodb://localhost/sportstat
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
