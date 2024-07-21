import { Component, OnInit } from '@angular/core';
import { IntroductionComponent } from '../introduction/introduction.component';

@Component({
  selector: 'app-opening',
  standalone: true,
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss'],
  imports: [IntroductionComponent]
})
export class OpeningComponent {}
