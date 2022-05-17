import {AdEntity} from "../types";
import {ValidationError} from "../utils/utils";
import {pool} from "../utils/connection";
import {FieldPacket} from "mysql2";

interface NewAdEntity extends Omit<AdEntity,'id'> {
    id?:string;
}

type OneRecordReturn = [NewAdEntity[],FieldPacket[]];

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

        if (!obj.description || obj.description.length>100) {
            throw new ValidationError("Ad description cannot has more than 100 chars");
        }

        if (obj.price<0 || obj.price > 9999999) {
            throw new ValidationError("Price cannot be less than 0 and higher than 9999999");
        }

        if (!obj.url || obj.url.length === 0) {
            throw new ValidationError("Link to ad cannot be empty or has move than 100 chars");
        }

        if(obj.lat<0||obj.lat>360 ||obj.lon<0||obj.lon>180||typeof obj.lat !== "number" ||typeof obj.lon !== "number"){
            throw new ValidationError("Cannot localize ad");
        }

        this.description=obj.description;
        this.id=obj.id;
        this.name=obj.name;
        this.lat=obj.lat;
        this.lon=obj.lon;
        this.url=obj.url;
        this.price=obj.price;
    }

    static async getOne(id: string) : Promise<AdRecord|null> {
        const [results] = await pool.execute("SELECT * from `ads` where `id` = :id",{
            id
        }) as OneRecordReturn;
        return results.length===0?null:new AdRecord(results[0]);
    }
}