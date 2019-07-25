import { Action } from "@ngrx/store";
export const CARGAR_AUTORIZACION = '[Autorizacion] Cargar autorizacion';
export const CARGAR_DATA_AUTORIZACION = '[Autorizacion] Cargar data autorizacion';

export class CargarAutorizacion implements Action {
    readonly type = CARGAR_AUTORIZACION;
    constructor(public autorizacion: boolean){}
} 

export class CargarDataAutorizacion implements Action {
    readonly type = CARGAR_DATA_AUTORIZACION;
    constructor(public data){}
}

export type autorizacionAcciones = CargarAutorizacion |
                                   CargarDataAutorizacion;