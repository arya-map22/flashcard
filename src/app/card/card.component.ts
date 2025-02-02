import { Component } from '@angular/core';
import { ProgressbarComponent } from '../progressbar/progressbar.component';

@Component({
  selector: 'app-card',
  imports: [ProgressbarComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {}
