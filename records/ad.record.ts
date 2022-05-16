import {AdEntity} from "../types";
import {ValidationError} from "../utils/utils";

interface NewAdEntity extends Omit<AdEntity,'id'> {
    id?:string;
}

export class AdRecord implements AdEntity{

    id:string;
    name:string;
    description:string;
    price:number;
    url:string;
    lat:number;
    lon:number;

    constructor(obj:NewAdEntity) {
        if (!obj.name || obj.name.length>100) {
            throw new ValidationError("Lack of name or name too long");
        }

        if (obj.description.length>1000) {
            throw new ValidationError("Ad description cannot has more than 1000 chars");
        }

        if (obj.price<0 || obj.price > 9999999) {
            throw new ValidationError("Price cannot be less than 0 and higher than 9999999");
        }

        if (!obj.url || obj.url.length > 0) {
            throw new ValidationError("Link to ad cannot be empty or has move than 100 chars");
        }

        if(obj.lat ||obj.lon){
            throw new ValidationError("Cannot localize ad");
        }
    }

}