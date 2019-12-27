import { Test, TestingModule } from '@nestjs/testing';
import { TeamrecordsController } from './teamrecords.controller';

describe('Teamrecords Controller', () => {
  let controller: TeamrecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamrecordsController],
    }).compile();

    controller = module.get<TeamrecordsController>(TeamrecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
