import {AdRecord} from "../records/ad.record";
import {AdEntity} from "../types";



test('AdRecord return data from database for one entry',async()=>{
    const ad = await AdRecord.getOne('3dc7853a-d5ba-11ec-ab9a-040e3cdd5b1a');
    expect(ad).toBeDefined();
    expect(ad.id).toBe('3dc7853a-d5ba-11ec-ab9a-040e3cdd5b1a');
})

test('AdRecord return null for unexisting entry',async()=>{
    const ad =await  AdRecord.getOne('---');
    expect(ad).toBe(null);
})

test('AdRecord return data from database for all entries', async()=>{
    const ads = await AdRecord.getAll();

    expect(typeof ads).toBe('object'); //typeof array = object

    expect(Array.isArray(ads)).toBe(true);

    if (ads.length>0) {
        expect(ads[0]).toBeDefined();
        expect(ads[0].lon).toBeDefined();
        expect(ads[0].lat).toBeDefined();
        expect(ads[0].url).toBeDefined();
        expect(ads[0].id).toBeDefined();
        expect(ads[0].name).toBeDefined();
        expect(ads[0].description).toBeDefined();
    }
})



test('Inserted record exist in database',async () => {
    const test2 = {
        url:"test2",
        lon:0,
        lat:0,
        description:"test2",
        price:0,
        name:"test2"
    }

    const ad = new AdRecord(test2);

    const id = await ad.insert();

    const adFromDB = await AdRecord.getOne(id);

    expect(adFromDB.id).toBeDefined();
    expect(adFromDB.url).toBe(test2.url);
    expect(adFromDB.lat).toBe(test2.lat);
    expect(adFromDB.lon).toBe(test2.lon);
    expect(adFromDB.name).toBe(test2.name);
    expect(adFromDB.description).toBe(test2.description);
    expect(adFromDB.price).toBe(test2.price);
});

test("get a shortcut of records",async()=>{
    const data = await AdRecord.findAll("");
    expect((data[0] as AdRecord).description).toBeUndefined();
})