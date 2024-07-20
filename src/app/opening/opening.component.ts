import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss']
})
export class OpeningComponent implements OnInit {
  words: string[] = ['WELCOME', 'TO', 'PORTFOLIO', 'OF', 'AURELIEN', 'DESHAYES'];

  constructor() { }

  ngOnInit(): void {
    // Logic to add animation delay can be handled in the HTML using ngStyle

  }

  getStyle(index: number) {
    const angle = (index / this.words.length) * 360;
    return {
      'transform': `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`,
      'animation-delay': `${index * 0.5}s`
    };}
}
