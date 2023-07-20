import { IsNotEmpty } from "class-validator";

export  class proddto{


    @IsNotEmpty()
    nom:string;

    
   
    @IsNotEmpty()
    prix:number;

    
    
    @IsNotEmpty()
    qt:number;



}