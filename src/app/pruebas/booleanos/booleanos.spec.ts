import { usuariosIngresado } from "./booleanos";

describe('Pruebas de booleanos',()=>{
    it('DEbe retornar true',()=>{
        const resp = usuariosIngresado(false);
        expect(resp).toBeTruthy();
    })
})