import * as fromAutorizacion from "../actions/autorizacion.actions";



export interface AutorizacionState {
    autorizacion: boolean;
    data: any;
    
}

export const estadoInicialAutorizacion: AutorizacionState = {
    autorizacion: false,
    data: null
}


export function autorizacionReducer( state = estadoInicialAutorizacion, actions: fromAutorizacion.autorizacionAcciones): AutorizacionState{
    switch (actions.type) {
        
        case fromAutorizacion.CARGAR_AUTORIZACION:
            return {
                ...state,                
                autorizacion: actions.autorizacion
            }
        case fromAutorizacion.CARGAR_DATA_AUTORIZACION:
            return {
                ...state,                
                data: actions.data
            }        
    
        default:
            return state;
    }
}