import { Injectable } from '@nestjs/common';

export type Table = any

@Injectable()
export class TablesService {
    private readonly tables = [
        {
            tableId: 1,
            tablename: 'Noobs',
            smallblind: 10,
            bigblind: 20,
        },
        {
            tableId: 2,
            tablename: 'Rookies',
            smallblind: 20,
            bigblind: 40,
        },
        {
            tableId: 3,
            tablename: 'Masters',
            smallblind: 100,
            bigblind: 200,
        },

    ];

    findAll(): Table {
        return this.tables;
    }
    findOne(tablename: string): Table | undefined {
        return this.tables.find((table) => table.tablename === tablename);
    }
}
