import { CargarAutorizacion, CARGAR_AUTORIZACION, CargarDataAutorizacion, CARGAR_DATA_AUTORIZACION } from "./autorizacion.actions";

describe('Deberia ejecutar la acción de CargarAutorizacion' ,() => {
    it('CARGAR_AUTORIZACION', () => {
        const accion = new CargarAutorizacion(true);
        expect(accion.type).toEqual(CARGAR_AUTORIZACION)
    });
});

describe('Deberia ejecutar la acción de CargarDataAutorizacion' ,() => {
    it('CARGAR_DATA_AUTORIZACION', () => {
        const accion = new CargarDataAutorizacion(true);
        expect(accion.type).toEqual(CARGAR_DATA_AUTORIZACION)
    });

    
});

