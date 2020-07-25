import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { UsuarioComponent } from "./usuario.component";
import { UsuarioRoutingModule } from "./usuario-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        UsuarioRoutingModule,
    ],
    declarations: [
        UsuarioComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class UsuarioModule { }
