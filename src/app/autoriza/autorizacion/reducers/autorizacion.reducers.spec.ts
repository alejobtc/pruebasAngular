import { autorizacionReducer, estadoInicialAutorizacion } from "./autorizacion.reducers";
import { CargarAutorizacion, CargarDataAutorizacion } from '../actions/autorizacion.actions';


describe('Estado inicial - Reducer Autorizacion', () => {

    it('Deberia retornar el estado inicial del reducer', () => {
        const action = {} as any;
        const result = autorizacionReducer(estadoInicialAutorizacion, action);
        expect(result).toBe(estadoInicialAutorizacion);
    });

    it('autorizacionActions tipo: CARGAR_AUTORIZACION', () => {
        const action = new CargarAutorizacion(true);
        const result = autorizacionReducer(estadoInicialAutorizacion, action);
        expect(result).toEqual(
            {
            ...estadoInicialAutorizacion,
            autorizacion: true,
            }        
        );
    });

    it('autorizacionActions tipo: CARGAR_DATA_AUTORIZACION', () => {
        const action = new CargarDataAutorizacion(true);
        const result = autorizacionReducer(estadoInicialAutorizacion, action);
        expect(result).toEqual(
            {
            ...estadoInicialAutorizacion,
            data: true,
            }        
        );
    });
});