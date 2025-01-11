import { Controller, Get, Param } from '@nestjs/common';
import { GooglemapService } from './googlemap.service';

@Controller('googlemap')
export class GooglemapController {

    constructor(private readonly googlemapService: GooglemapService){}

    @Get('autocomplete/:input')
    async autoComplete(@Param('input') input: string){
        return this.googlemapService.autoComplete(input);
    }

    @Get('placesearch/:query')
    async getUserInfo(@Param('query') query: string ){
        return this.googlemapService.textSearch(query);
    }

}
