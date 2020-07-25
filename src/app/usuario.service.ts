import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService  {

    listUsuario: string []= ['ana','pedro','maria'];
   

    getUsuario(){
        return this.listUsuario;
    }
}