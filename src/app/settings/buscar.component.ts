import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as Toast from 'nativescript-toast';

@Component({
    selector: 'app-buscador',
    templateUrl: 'buscar.component.html'
    // styleUrls: ['./name.component.scss']
})
export class BuscarComponent implements OnInit {

    textFieldValue: string ='';
    @Output() search: EventEmitter<string> = new EventEmitter();
    @Input() valueIni: string;
    isLoading = false;

    constructor() { }

    ngOnInit(): void { 

       console.log('---- ini en ----'+ this.valueIni );
        this.textFieldValue = this.valueIni;
    }


    onButtonTap(){
        this.isLoading = true;

        console.log('test');
        if(this.textFieldValue.length > 2){
            console.log(this.textFieldValue);
           
            setTimeout(() => {
                this.search.emit(this.textFieldValue);
                this.isLoading = false;
            }, 2000);
        }
    }


    longPress(){
        var toast = Toast.makeText("Long press event....!");
        
       setTimeout(() => {
        toast.show();
       }, 3000);
    }





}
