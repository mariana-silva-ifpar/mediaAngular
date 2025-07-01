import { Component } from '@angular/core';
import { CalcularMedia } from "../calcular-media/calcular-media";

@Component({
  selector: 'app-root',
  imports: [ CalcularMedia],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'mediaAngular';
}
