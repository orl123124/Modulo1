import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { isIOS, isAndroid } from 'tns-core-modules/ui/page';



@Component({
    selector: 'App-usuario',
    templateUrl: 'usuario.component.html',
    styleUrls: ['usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

    plataforma_: string
     
    constructor(
        private usuarioServicio: UsuarioService
    ) { }

    ngOnInit(): void { 
        if(isAndroid){
            this.plataforma_= "Android!";
        }
        else{
            this.plataforma_= "IOS!";
        }
       

    }

    getPlataform(){
       

        return isAndroid;
    }

    getUsuario(){
 return this.usuarioServicio.getUsuario();

    }


    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}
