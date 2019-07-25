import { incremetar } from "./numeros";

describe('Puebas de numeros',()=>{


    it('Debe retornar 100 si el numero es mayor que 100',()=>{
        const res = incremetar(101);
        expect(res).toBe(100);
    })

    it('Debe retornar 100 si el numero es 100',()=>{
        const res = incremetar(100);
        expect(res).toBe(100);
    })

    it('Debe imcrementar si es menor a 100',()=>{
        const res = incremetar(50);
        expect(res).toBe(51);
    })

    it('Debe imcrementar si es menor a 100',()=>{
        const val = 23;
        const res = incremetar(val);
        expect(res).toBeGreaterThan(val);
    })
})