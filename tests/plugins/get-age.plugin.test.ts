import { getAge } from "../../src/plugins";

describe('plugins/get-age.plugin.ts', ()=> {
    test('get age should return the age of the person',()=>{
        const result = getAge('01-01-1990');

        expect(typeof result).toBe('number');
    })
    
    test('get age should return current age',()=>{
        
        const birthdate = '1990-01-01'
        const age = getAge(birthdate);

        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toBe(calculatedAge);
    })
    
    test('get age should return 0 years',()=>{
        
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

        const birthdate = '1990-01-01'
        const age = getAge(birthdate);

        expect(age).toBe(0);
        expect(spy).toHaveBeenCalledWith();

    })
    
})