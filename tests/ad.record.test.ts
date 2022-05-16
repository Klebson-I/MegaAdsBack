import {AdRecord} from "../records/ad.record";

const defaultObj = {
    name:"Test name",
    description:"...",
    lat:10,
    lon:10,
    url:"https://hello.pl",
    price:0,
};

const longString = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

test("Can build AdRecord",()=>{
    const ad = new AdRecord(defaultObj);

    expect(ad.name).toBe('Test name');
    expect(ad.description).toBe('...');
    expect(ad.lat).toBe(10);
    expect(ad.lon).toBe(10);
    expect(ad.url).toBe("https://hello.pl");
    expect(ad.price).toBe(0);
})

test("validates invalid price",()=> {
    expect(()=>{
        new AdRecord({
            ...defaultObj,
            price:1000000000
        });
    }).toThrowError();

    expect(()=>{
        new AdRecord({
            ...defaultObj,
            price:-55
        });
    }).toThrowError();
})

test("validates invalid lat and lon",()=> {
    expect(()=>{
        new AdRecord({
            ...defaultObj,
            lat:null
        });
    }).toThrowError();

    expect(()=>{
        new AdRecord({
            ...defaultObj,
            lon:null
        });
    }).toThrowError();
})

test("validates invalid name",()=> {
    expect(()=>{
        new AdRecord({
            ...defaultObj,
            name:""
        });
    }).toThrowError();

    expect(()=>{
        new AdRecord({
            ...defaultObj,
            name:longString
        });
    }).toThrowError();
})

test("validates invalid url",()=> {
    expect(()=>{
        new AdRecord({
            ...defaultObj,
            url:null,
        });
    }).toThrowError();

    expect(()=>{
        new AdRecord({
            ...defaultObj,
            url:"",
        });
    }).toThrowError();
})

test("validates invalid description",()=> {
    expect(()=>{
        new AdRecord({
            ...defaultObj,
            description:null,
        });
    }).toThrowError();

    expect(()=>{
        new AdRecord({
            ...defaultObj,
            description:longString,
        });
    }).toThrowError();
})