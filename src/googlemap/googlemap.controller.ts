import { Controller, Get, Param } from '@nestjs/common';
import { GooglemapService } from './googlemap.service';

@Controller('googlemap')
export class GooglemapController {

    constructor(private readonly googlemapService: GooglemapService){}

    @Get('autocomplete/:input')
    async autoComplete(@Param('input') input: string){
        return this.googlemapService.autoComplete(input);
    }

    

}
