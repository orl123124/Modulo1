import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';



@Component({
    selector: 'app-detail',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css']
})
export class ItemComponent implements OnInit {

     txtUsu: string ='';
    constructor(
        private router: RouterExtensions,
        private route: ActivatedRoute,
        private usuarioService: UsuarioService,
    ) { }

    ngOnInit(): void {

        const id = +this.route.snapshot.params.id;

        console.log('------>'+id);
        const listasUsu =  this.usuarioService.getUsuario();
       this.txtUsu = listasUsu[id];

     }


     goBack() {
        this.router.backToPreviousPage();
    }



}
