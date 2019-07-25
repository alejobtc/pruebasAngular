import { Jugador } from "./clases";

describe('Prueba de clases', () => {

    let jugador : Jugador;

    beforeEach(function() {
        jugador = new Jugador();
    });
    
    it('Inicializa con 100',()=>{
        const resp = jugador.recibeDano(110);
        expect(resp).toBe(0);
    })

    it('Inicializa con 100',()=>{
        const resp = jugador.vida;
        expect(resp).toBe(100);
    })

    it('Debe retornar 80 de vidam si recibe 20', () => {
        const resp = jugador.recibeDano(20);
        expect(resp).toBe(80)
    });

    it('Debe retornar 50 de vidam si recibe 50', () => {
        const resp = jugador.recibeDano(50);
        expect(resp).toBe(50)
    });
});