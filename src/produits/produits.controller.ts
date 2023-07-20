import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { get } from 'http';
import { proddto } from 'src/dto/produit.dto';

@Controller('produits')
export class ProduitsController {

    constructor(private readonly service: ProduitsService){};
    @Post()
    Ajout(@Body() Body:proddto){
        return this.service.Ajout(Body);
    }
    @Get()
    rechercheT(){
        return this.service.rechercheT();
    }
    @Get('/:id')
    rechercheS(@Param('id') id:string){
        return this.service.rechercheS(id);
    }

    @Put('/:id')
    maj(@Param('id') id :string, @Body() Body:proddto){
        return this.service.maj(id,Body);
    }

    @Delete('/:id')
    DELETE(@Param('id') id :string){
        return this.service.DELETE(id);
    }
    @Post('/search')
    Search(@Query('key') key){
        return this.service.Search(key);
    }
}
