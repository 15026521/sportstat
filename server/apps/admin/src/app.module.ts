import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule} from './users/users.module';
import { MatchesModule } from './matches/matches.module';
import { TeamrecordsModule } from './teamrecords/teamrecords.module';
// import { CommonModule } from '@app/common';

@Module({
  imports: [
    // CommonModule,
    DbModule,
    UsersModule,
    MatchesModule,
    TeamrecordsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
