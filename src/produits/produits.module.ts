import { Module } from '@nestjs/common';
import { ProduitsController } from './produits.controller';
import { ProduitsService } from './produits.service';
import { produit,prodSchema } from 'src/models/produits.models';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: produit.name, schema: prodSchema }])],
  controllers: [ProduitsController],
  providers: [ProduitsService]
})
export class ProduitsModule {}
