import { Controller, Get , Param, NotFoundException} from '@nestjs/common';
import { Table, TablesService } from './tables.service';

@Controller('tables')
export class TablesController {
    constructor(private readonly tablesService: TablesService) {}

    @Get()
    findAll(): Table[] {
        return this.tablesService.findAll();
    }

    @Get(':name')
    findOne(@Param('name') name: string): Table[] {
        const table = this.tablesService.findOne(name);
        if (!table) {
            throw new NotFoundException(`La table ${name} n'existe pas`);
        }
        return table;
    }
}
