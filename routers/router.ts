import Router, {Request, Response} from 'express';
import {AdRecord} from "../records/ad.record";

export const adRouter = Router();

adRouter
    .get('/search',async (req:Request,res:Response)=> {
        const ads = await AdRecord.findAll('');
        res.json(ads);
    })
    .get('/search/:name?',async (req:Request,res:Response)=> {
        const ads = await AdRecord.findAll(req.params.name);
        res.json(ads);
    })
    .get('/:id',async(req:Request,res:Response)=> {
        const ad = await AdRecord.getOne(req.params.id);
        res.json(ad);
    })
    .post('/',async (req:Request, res:Response) => {
        const newRecordObjectJSON = req.body;
        const newRecord = new AdRecord(newRecordObjectJSON);
        await newRecord.insert();
        res.json(newRecord);
    })