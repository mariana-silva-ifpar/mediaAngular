import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  imports: [],
  templateUrl: './calcular-media.html',
  styleUrl: './calcular-media.css'
})
export class CalcularMedia {
media!: number;

  calcularMedia(n1: number, n2: number, n3: number, n4: number){
    this.media = (n1 + n2 + n3 + n4) / 4;
  }

}
