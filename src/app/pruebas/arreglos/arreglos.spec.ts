import { obtenerRobots } from "./arreglos";

describe('pruebas de arreglos',()=>{
    it('Debe retornar 3 robots', () => {
        const res = obtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);

    });

    it('Debe existir Sofia y MEgaman', () => {
        const res = obtenerRobots();
        expect(res).toContain('Wall-e');
        expect(res).toContain('MEgaman');
        expect(res).toContain('Sofia');

    });
})