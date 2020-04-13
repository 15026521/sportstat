import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule} from './users/users.module';
import { GamesModule } from './games/games.module';
import { TeamrecordsModule } from './teamrecords/teamrecords.module';
// import { CommonModule } from '@app/common';

import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    // CommonModule,
    MulterModule.register({
      dest:'uploads'
    }),
    DbModule,
    UsersModule,
    GamesModule,
    TeamrecordsModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
