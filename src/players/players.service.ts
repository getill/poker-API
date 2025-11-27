import { Injectable } from '@nestjs/common';

export type Player = any

@Injectable()
export class PlayersService {
    private readonly players = [
        {
            playerId: 1,
            playername: 'john',
            password: 'changeme',
        },
        {
            playerId: 2,
            playername: 'maria',
            password: 'guess',
        },
    ];

    findOne(playername: string): Player | undefined {
        return this.players.find((player) => player.playername === playername);
    }
}



