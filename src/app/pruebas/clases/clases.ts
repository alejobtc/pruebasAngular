export class Jugador {

    vida:number
    constructor() {
        this.vida = 100;
    }

    recibeDano(dano:number){
        if(dano>=this.vida){
            return this.vida = 0;
        }else{
            return this.vida -= dano;
        }
    }
}