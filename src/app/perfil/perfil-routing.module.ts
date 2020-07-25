
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PerfilComponent } from './perfil.component';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

 

const routes: Routes = [
    { path: '', component: PerfilComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PerfilRoutingModule {}


