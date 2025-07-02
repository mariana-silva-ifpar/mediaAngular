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
aprovado = false;
media!: number;
mensagem!: string;
boletim!: Boletim;

constructor(){
  this.boletim = new Boletim(0,0,0,0);
}

}
