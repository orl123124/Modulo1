import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import { ItemComponent } from "./item.component";
import { BuscarComponent } from "./buscar.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SettingsRoutingModule,

        NativeScriptFormsModule   

    ],
    declarations: [
        SettingsComponent,
        ItemComponent,
        BuscarComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SettingsModule { }
