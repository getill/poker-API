import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersController } from './players/players.controller';
import { TablesController } from './tables/tables.controller';
import { TablesService } from './tables/tables.service';
import { PlayersService } from './players/players.service';

@Module({
  imports: [],
  controllers: [AppController, PlayersController, TablesController],
  providers: [AppService, TablesService, PlayersService],
})
export class AppModule {}
