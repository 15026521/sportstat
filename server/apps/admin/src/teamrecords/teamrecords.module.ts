import { Module } from '@nestjs/common';
import { TeamrecordsController } from './teamrecords.controller';

@Module({
  controllers: [TeamrecordsController]
})
export class TeamrecordsModule {}
