import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';

@NgModule({
    declarations: [ PerfilComponent ],
    imports: [ 
        NativeScriptCommonModule, 
        PerfilRoutingModule 
    ],
    exports: [],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PerfilModule {}