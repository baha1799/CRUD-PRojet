import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type produitdoc =produit & Document;

@Schema()
export class produit{
    @Prop({ required: true })
    nom:string;

    @Prop({ required: true })
    prix:number;
    @Prop({ required: true })
    qt:number;

}
export const prodSchema = SchemaFactory.createForClass(produit);