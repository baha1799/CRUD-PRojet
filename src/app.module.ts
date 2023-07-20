import { Module } from '@nestjs/common';
import{MongooseModule} from'@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ProduitsModule } from './produits/produits.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://baha8b6:baha8b6ez@cluster0.dhtynb9.mongodb.net/?retryWrites=true&w=majority"), ConfigModule.forRoot(),ProduitsModule],

})
export class AppModule {}
