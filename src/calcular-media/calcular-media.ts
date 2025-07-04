import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Boletim } from './boletim';

@Component({
  selector: 'app-calcular-media',
  imports: [CommonModule],
  templateUrl: './calcular-media.html',
  styleUrl: './calcular-media.css'
})
export class CalcularMedia {

boletim = new Boletim();
exibirProvaFinal = false;

constructor(){
}

   calcularMedia(n1: number,n2: number,n3: number,n4: number){
     this.boletim.calcularMedia(n1,n2,n3,n4);
     this.exibirProvaFinal = this.boletim.precisaProvaFinal;
   }

   calcularMediaFinal(n1: number,n2: number,n3: number,n4: number, provaFinal: number){
    this.boletim.calcularMediaFinal(n1,n2,n3,n4,provaFinal);
    this.exibirProvaFinal = false;
   }

}
