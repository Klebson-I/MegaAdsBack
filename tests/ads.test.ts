import {AdRecord} from "../records/ad.record";


test('AdRecord return data from database for one entry',async()=>{
    const ad = await AdRecord.getOne('3dc7853a-d5ba-11ec-ab9a-040e3cdd5b1a');
    expect(ad).toBeDefined();
    expect(ad.id).toBe('3dc7853a-d5ba-11ec-ab9a-040e3cdd5b1a');
})

test('AdRecord return null for unexisting entry',async()=>{
    const ad =await  AdRecord.getOne('---');
    expect(ad).toBe(null);
})