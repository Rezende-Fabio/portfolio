import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css'
})
export class CardProjectComponent {
  @Input() name: string = "";
  @Input() image: string = "";
  @Input() stacks: { name: string; image: string }[] = [];
  @Input() mobile: boolean = false;
}
