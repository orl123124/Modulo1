import { Component, OnInit, RootRenderer, ViewChild, ElementRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { UsuarioService } from "../usuario.service";
import { RouterExtensions } from "nativescript-angular/router";
import { Router } from "@angular/router";
import * as dialogs from 'tns-core-modules/ui/dialogs';

import * as Toast from 'nativescript-toast';
import { View, Color } from "tns-core-modules/ui/core/view";



@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {



    resultados: Array<string> = [];
    @ViewChild('layout',{ static: false }) layout: ElementRef;



    constructor(
        private usuarioServicio: UsuarioService,
        private router: RouterExtensions,
        private r: Router,
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.usuarioServicio.agregar('Elemento 1');
        this.usuarioServicio.agregar('Elemento 2');
        this.usuarioServicio.agregar('Elemento 3');


        //action---
      
        this.doLate(
            ()=>{
                dialogs.action("mensaje","cancelar.",["opcion1","opcion2"]).then(
                    result =>{
                                console.log('selecciono...'+result);
                                if (result === "opcion1") {
                                        this.doLate(
                                            ()=> dialogs.alert({
                                                title:'titulo 1',
                                                message:'mensaje 1',
                                                okButtonText:'btn1'
                                            }).then(() =>{
                                                console.log('alert ---');
                                            })
                                        );
                                }
                                else if(result === "opcion2") {
                                    this.doLate(
                                        ()=> dialogs.alert({
                                            title:'titulo 2',
                                            message:'mensaje 2',
                                            okButtonText:'btn2'
                                        }).then(() =>{
                                            console.log('alert ---');
                                        })
                                    );
                                }

                    }
                );


            }
        );

 /*
        var toast = Toast.makeText("Hello World");
        
        this.doLate(()=>{
            toast.show();
        });

        */
   

    }

    listadoUsuarios(){
        console.log('------listadoUsuarios--------' );
        return this.usuarioServicio.getUsuario();
    }

    onLoaded(x: any){
        console.dir(x);
    }
    onItemLoading(x: any){
        console.dir(x);
    }
    onItemTap(x){

        const vIndice: string = x.index;
        console.log('indice='+ vIndice);
        console.dir(x);
        this.router.navigate(['/settings/item',vIndice]);
       //  this.router.navigate(['/item',vIndice]);
       /*
       pendiente
       pantalla de detalle
       y (Pull to Refresh) 
       */
    }

 

    onPull(e: any){
        console.log(e);
        const pullRefresh = e.object;

        setTimeout(
            ()=> {
                this.usuarioServicio.agregar('Nuevo item from pull to refresh');
                pullRefresh.refreshing = false;
            }
            ,2000);

    }


    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }



    //alertas

    doLate(fn){ 
        setTimeout(fn,1000)
    }

    BuscarAhora(value: string){

        this.resultados = this.usuarioServicio.getUsuario().filter(x => x.indexOf(value) >= 0);
        console.log('sin filtro'+this.usuarioServicio.getUsuario());
        console.dir('opcion busvar =>'+this.resultados);

        const layout = <View>this.layout.nativeElement;
        layout.animate({
            backgroundColor: new Color('purple'),
            duration:3000,
            delay:1500

        }).then(
            ()=>
            layout.animate({
                backgroundColor: new Color('white'),
                duration:3000,
                delay:1500
    
            })
        );

    }

}
