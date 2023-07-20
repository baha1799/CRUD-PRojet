import { Body, Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { proddto } from 'src/dto/produit.dto';
import { produit, produitdoc } from 'src/models/produits.models';

@Injectable()
export class ProduitsService {

    constructor(@InjectModel(produit.name) private prodmodel: Model<produitdoc>) {}
    Ajout(Body: proddto){
        return this.prodmodel.create(Body);
    }
   
    rechercheT(){
        return this.prodmodel.find();
    }
   
    rechercheS(id:string){
        return this.prodmodel.findOne({_id:id});
    }

    
    maj(id :string,Body :proddto){
        return this.prodmodel.findByIdAndUpdate({_id:id},{$set:Body},{new:true}
            );
    }

    
    DELETE(id :string){
        return this.prodmodel.deleteOne({ _id:id });
    }
    
    Search(key :string){
        const keyword =key ?{
            $or :[{ nom: { $regex: key, $options: 'i' } }] 
        }: {};
        return this.prodmodel.find(keyword);
    }




}
