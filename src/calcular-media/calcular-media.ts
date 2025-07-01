import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  imports: [CommonModule],
  templateUrl: './calcular-media.html',
  styleUrl: './calcular-media.css'
})
export class CalcularMedia {
media!: number;

  calcularMedia(n1: number, n2: number, n3: number, n4: number){
    this.media = (n1 *2 + n2 *2 + n3 *3 + n4 *3) / 10;
  }

}
