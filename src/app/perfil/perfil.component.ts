import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";

@Component({
    selector: 'app-perfil',
    templateUrl: 'perfil.component.html',
    
})
export class PerfilComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }



    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    

}